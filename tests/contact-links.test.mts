import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { extname } from "node:path";
import test from "node:test";
import ts from "typescript";

const shortFitEndpoint = "https://shortfit.glpglowups.com";

async function readSourceFiles(directory: URL): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = new URL(entry.name, directory);
    if (entry.isDirectory()) return readSourceFiles(new URL(`${entry.name}/`, directory));
    if (!entry.isFile() || ![".ts", ".tsx"].includes(extname(entry.name))) return [];
    return [await readFile(path, "utf8")];
  }));
  return files.flat();
}

async function readOptional(path: URL): Promise<string> {
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return "";
    throw error;
  }
}

type SiteLinks = {
  shortFitUrl?: string;
};

function evaluateSiteLinks(source: string): SiteLinks {
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const evaluatedModule = { exports: {} as SiteLinks };
  const requireStub = (specifier: string): Record<string, unknown> => {
    if (specifier === "./contact-inquiry") {
      return { createContactInquiryMailtoHref: () => "legacy-mailto" };
    }
    if (specifier === "./site-content") return { contactEmail: "synthetic@example.test" };
    throw new Error(`Unexpected site-links dependency: ${specifier}`);
  };
  Function("require", "module", "exports", output)(requireStub, evaluatedModule, evaluatedModule.exports);
  return evaluatedModule.exports;
}

test("site links exports one opaque Short Fit endpoint without query parameters", async () => {
  const linksSource = await readFile(new URL("../src/lib/site-links.ts", import.meta.url), "utf8");
  const links = evaluateSiteLinks(linksSource);

  assert.equal(links.shortFitUrl, shortFitEndpoint);
  assert.equal(new URL(links.shortFitUrl).search, "");
  assert.doesNotMatch(linksSource, /URLSearchParams|contactLinks|createContactInquiry|getFitFormHref/);
});

test("every marketing inquiry CTA imports the canonical Short Fit URL", async () => {
  const ctaFiles = [
    "../src/components/home-page.tsx",
    "../src/components/navigation.tsx",
    "../src/components/site-footer.tsx",
    "../src/components/ui/floating-cta.tsx",
    "../src/app/about/page.tsx",
    "../src/app/faq/page.tsx",
    "../src/app/policies/page.tsx",
  ];

  for (const path of ctaFiles) {
    const source = await readFile(new URL(path, import.meta.url), "utf8");
    assert.match(source, /import \{ shortFitUrl \} from ["']@\/lib\/site-links["']/, path);
    assert.match(source, /href=\{shortFitUrl\}/, path);
    assert.doesNotMatch(source, /href=\{[^}]+\?(?:[^}]*)\}/, path);
  }
});

test("SEO surfaces keep marketing indexable and omit the retired internal route", async () => {
  const sitemap = await readFile(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
  const robots = await readFile(new URL("../src/app/robots.ts", import.meta.url), "utf8");
  const layout = await readFile(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
  const seo = await readFile(new URL("../src/lib/seo.ts", import.meta.url), "utf8");

  assert.doesNotMatch(`${sitemap}\n${robots}\n${seo}`, /\/fit-form/);
  assert.match(robots, /allow:\s*["']\/["']/);
  assert.doesNotMatch(robots, /disallow:/);
  assert.match(layout, /index:\s*true/);
  assert.match(layout, /follow:\s*true/);
  assert.match(seo, /serviceUrl:\s*shortFitUrl/);
});

test("marketing source no longer ships a legacy contact collection flow", async () => {
  const source = (await readSourceFiles(new URL("../src/", import.meta.url))).join("\n");
  const staticForms = await readOptional(new URL("../public/__forms.html", import.meta.url));
  const marketing = `${source}\n${staticForms}`;

  assert.doesNotMatch(marketing, /mailto:/i);
  assert.doesNotMatch(marketing, /\bfit-form\b/i);
  assert.doesNotMatch(marketing, /\bcontact-form\b/i);
  assert.doesNotMatch(marketing, /\b(?:glp1|medication)_status\b/i);
  assert.doesNotMatch(marketing, /<(?:input|textarea)[^>]*\bname=["']question["']/i);
});
