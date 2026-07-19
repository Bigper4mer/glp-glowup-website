import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { extname } from "node:path";
import test from "node:test";
import ts from "typescript";

const shortFitEndpoint = "https://shortfit.glpglowups.com";
const fitFormSources = ["hero", "nav-consult", "floating-cta", "package", "about", "faq", "policies", "direct"] as const;
const fitFormTiers = ["foundation", "performance", "concierge"] as const;

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
  contactLinks?: { general?: string };
  getFitFormHref?: (source: string, tier?: string) => string;
  createContactInquiryMailto?: (values?: Record<string, string>) => string;
};

function evaluateSiteLinks(source: string): SiteLinks {
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const module = { exports: {} as SiteLinks };
  const requireStub = (specifier: string): Record<string, unknown> => {
    if (specifier === "./contact-inquiry") {
      return { createContactInquiryMailtoHref: () => "stubbed-mailto-helper" };
    }
    if (specifier === "./site-content") return { contactEmail: "synthetic@example.test" };
    throw new Error(`Unexpected site-links dependency: ${specifier}`);
  };

  Function("require", "module", "exports", output)(requireStub, module, module.exports);
  return module.exports;
}

test("all inquiry helpers use the opaque Short Fit endpoint without answers in the URL", async () => {
  const linksSource = await readFile(new URL("../src/lib/site-links.ts", import.meta.url), "utf8");
  const links = evaluateSiteLinks(linksSource);

  assert.equal(links.shortFitUrl, shortFitEndpoint);
  assert.equal(links.contactLinks?.general, links.shortFitUrl);
  assert.ok(links.getFitFormHref);
  for (const source of fitFormSources) {
    assert.equal(links.getFitFormHref(source), links.shortFitUrl);
    for (const tier of fitFormTiers) {
      assert.equal(links.getFitFormHref(source, tier), links.shortFitUrl);
    }
  }
  if (links.createContactInquiryMailto) {
    assert.equal(
      links.createContactInquiryMailto({
        fullName: "Synthetic Person",
        bestContact: "synthetic@example.test",
        heardAbout: "Synthetic source",
        question: "Synthetic question",
      }),
      links.shortFitUrl,
    );
  }
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
