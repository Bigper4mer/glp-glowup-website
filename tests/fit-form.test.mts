import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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

test("legacy internal intake routes, components, and helpers are removed", async () => {
  const retiredPaths = [
    "../src/app/fit-form/page.tsx",
    "../src/app/fit-form/thank-you/page.tsx",
    "../src/components/fit-form-page.tsx",
    "../src/components/contact-inquiry-form.tsx",
    "../src/lib/fit-form.ts",
    "../src/lib/contact-inquiry.ts",
    "../public/__forms.html",
  ];

  for (const path of retiredPaths) {
    await assert.rejects(access(new URL(path, import.meta.url)), { code: "ENOENT" }, path);
  }
});
