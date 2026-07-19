import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function readOptional(path: URL): Promise<string> {
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return "";
    throw error;
  }
}

test("the retired marketing intake exposes no answer-bearing field template", async () => {
  const legacyTemplates = [
    await readOptional(new URL("../src/lib/fit-form.ts", import.meta.url)),
    await readOptional(new URL("../public/__forms.html", import.meta.url)),
  ].join("\n");

  assert.doesNotMatch(
    legacyTemplates,
    /\b(?:full_name|email|phone|glp1_status|primary_goal|support_style|biggest_challenge|coaching_scope_consent|question)\b/i,
  );
});
