import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the browser icon uses the GLP GlowUp G mark", async () => {
  const icon = await readFile(new URL("../src/app/icon.svg", import.meta.url), "utf8");

  assert.match(icon, /fill="#9f574e"/);
  assert.match(icon, />G<\/text>/);
});
