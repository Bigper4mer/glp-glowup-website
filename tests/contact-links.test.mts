import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { extname } from "node:path";
import test from "node:test";

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

test("all inquiry helpers use the opaque Short Fit endpoint without answers in the URL", async () => {
  const linksSource = await readFile(new URL("../src/lib/site-links.ts", import.meta.url), "utf8");

  assert.match(linksSource, new RegExp(`https://shortfit\\.glpglowups\\.com/?["']`));
  assert.match(linksSource, /getFitFormHref[\s\S]*?return\s+(?:shortFitUrl|inquiryEndpoint)/);
  assert.match(linksSource, /createContactInquiryMailto[\s\S]*?return\s+(?:shortFitUrl|inquiryEndpoint)/);
  assert.match(linksSource, /general:\s*(?:shortFitUrl|inquiryEndpoint)/);
  assert.doesNotMatch(linksSource, /URLSearchParams|[?&](?:source|tier|name|email|phone|question)=/i);
});

test("marketing source no longer ships a legacy contact collection flow", async () => {
  const source = (await readSourceFiles(new URL("../src/", import.meta.url))).join("\n");
  const staticForms = await readFile(
    new URL("../public/__forms.html", import.meta.url),
    "utf8"
  );
  const marketing = `${source}\n${staticForms}`;

  assert.doesNotMatch(marketing, /mailto:/i);
  assert.doesNotMatch(marketing, /\bfit-form\b/i);
  assert.doesNotMatch(marketing, /\bcontact-form\b/i);
  assert.doesNotMatch(marketing, /\b(?:glp1|medication)_status\b/i);
  assert.doesNotMatch(marketing, /<(?:input|textarea)[^>]*\bname=["']question["']/i);
});
