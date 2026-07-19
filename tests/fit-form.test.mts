import assert from "node:assert/strict";
import test from "node:test";
import {
  fitFormFieldNames,
  fitFormStepFields,
  getFitFormInitialValues,
} from "../src/lib/fit-form.ts";

test("the Netlify payload includes coaching scope consent", () => {
  assert.equal(fitFormFieldNames.includes("coaching_scope_consent"), true);
});

test("query values are normalized before rendering the form", () => {
  assert.deepEqual(
    getFitFormInitialValues({
      source: " policies ",
      tier: "performance",
    }),
    {
      source: "policies",
      tier: "performance",
    }
  );

  assert.deepEqual(
    getFitFormInitialValues({
      source: undefined,
      tier: "invalid",
    }),
    {
      source: "direct",
      tier: "not-sure",
    }
  );
});

test("the two application steps cover every visible form field once", () => {
  const visibleFields = fitFormFieldNames.filter(
    (field) =>
      !["form-name", "bot-field", "cta_source", "page_path"].includes(field)
  );
  const stepFields = [...fitFormStepFields[1], ...fitFormStepFields[2]];

  assert.deepEqual(new Set(stepFields), new Set(visibleFields));
  assert.equal(stepFields.length, new Set(stepFields).size);
});

test("the retired marketing intake exposes no answer-bearing field template", () => {
  const allowedTransportFields = new Set([
    "form-name",
    "bot-field",
    "cta_source",
    "page_path",
  ]);

  assert.deepEqual(
    fitFormFieldNames.filter((field) => !allowedTransportFields.has(field)),
    []
  );
});
