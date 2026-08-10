import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Foundation is the only package configured with the most popular badge", async () => {
  const contentSource = await readFile(
    new URL("../src/lib/site-content.ts", import.meta.url),
    "utf8"
  );
  const foundationTier = contentSource.match(
    /id:\s*["']foundation["'][\s\S]*?\n\s*},\n\s*{\n\s*id:\s*["']performance["']/
  )?.[0];

  assert.ok(foundationTier, "Foundation tier block should be present");
  assert.match(foundationTier, /popularityLabel:\s*["']MOST POPULAR["']/);
  assert.equal(
    (contentSource.match(/popularityLabel:\s*["']MOST POPULAR["']/g) ?? []).length,
    1
  );
});

test("the badge preserves the existing pricing layout and package CTA copy", async () => {
  const componentSource = await readFile(
    new URL("../src/components/home-page.tsx", import.meta.url),
    "utf8"
  );

  assert.match(componentSource, /tier\.popularityLabel\s*\?/);
  assert.match(componentSource, /\{tier\.popularityLabel\}/);
  assert.match(
    componentSource,
    /mt-3 flex items-end justify-between gap-2 border-b border-brand-line pb-6 sm:gap-4/
  );
  assert.match(
    componentSource,
    /shrink-0 text-right text-2xl font-semibold tracking-\[-0\.04em\] text-brand-dark sm:text-3xl/
  );
  assert.match(componentSource, /Ask About \{tier\.title\}/);
  assert.doesNotMatch(componentSource, /Apply for \{tier\.title\}/);
});
