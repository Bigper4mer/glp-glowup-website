import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the footer routes conversation actions to Short Fit", async () => {
  const footerSource = await readFile(
    new URL("../src/components/site-footer.tsx", import.meta.url),
    "utf8"
  );

  assert.match(footerSource, /import \{ shortFitUrl \} from ["']@\/lib\/site-links["']/);
  assert.match(footerSource, /href=\{shortFitUrl\}/);
  assert.doesNotMatch(footerSource, /ContactInquiryForm|contactLinks|mailto:/i);
});

test("the footer keeps the administrative email visible but non-clickable", async () => {
  const footerSource = await readFile(new URL("../src/components/site-footer.tsx", import.meta.url), "utf8");

  assert.match(footerSource, />\s*\{contactEmail\}\s*</);
  assert.doesNotMatch(footerSource, /<a[^>]+(?:mailto:|contactEmail)/i);
});
