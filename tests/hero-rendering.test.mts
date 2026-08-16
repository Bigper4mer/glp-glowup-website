import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("desktop hero preserves the complete artwork", async () => {
  const componentSource = await readFile(
    new URL("../src/components/home-page.tsx", import.meta.url),
    "utf8"
  );

  assert.match(componentSource, /<picture className="block h-full w-full">/);
  assert.match(componentSource, /lg:object-contain/);
  assert.match(componentSource, /lg:object-center/);
  assert.doesNotMatch(componentSource, /lg:object-\[62%_center\]/);
});
