# GLP GlowUp Pseudonymized Forms Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current health-detail-heavy intake paths with a minimized public Short Fit form and pseudonymized enrolled-client forms, while preserving the four existing Netlify projects, domains, and v1 records.

**Architecture:** Keep `/Users/hollywood/Downloads/glp-glowup-website` as the marketing repository and `/Users/hollywood/Downloads/glp-glowup-form-sites` as a separate private four-app Vite monorepo. The form monorepo owns canonical typed definitions, validation, in-memory UI state, generated Netlify detection markup, form-site security headers, and operations documentation; the marketing repository only routes inquiry CTAs to `https://shortfit.glpglowups.com` and removes its own Netlify intake schemas.

**Tech Stack:** Next.js 16.2.9, React 19.2.4, Vite 7, TypeScript 5, Vitest, Node test runner, Netlify Forms, Netlify CLI, GitHub CLI.

## Global Constraints

- Treat enrolled-client records as pseudonymized, not anonymous.
- Never create, photograph, email, sync, upload, back up, log, or commit the identity-to-client-ID ledger.
- `GLP-4827-KM` is a correlation code, not authentication or proof of identity.
- Client IDs accept case-insensitive input, normalize to uppercase, and must match `^GLP-[0-9]{4}-[A-Z]{2}$`; collision and non-sequential assignment checks remain an offline ledger procedure.
- Do not inspect, export, mutate, or delete existing v1 Netlify records during implementation or deployment.
- Baseline's one-time rule is operational, not server-enforced; Weekly and Monthly allow corrected later submissions.
- Do not send answers through query strings, URL fragments, analytics, replay, console output, browser storage, or error telemetry.
- Keep Netlify form-submission email/webhook/Slack notifications disabled for v2 until the service agreement, access, retention, and, if notifications are requested, managed-mailbox approval gates are documented as passed.
- Do not claim HIPAA compliance. Pseudonymization and technical hardening do not replace a coverage analysis, risk analysis, applicable BAA, or approved operational controls.
- Use synthetic, non-health test values only.
- Preserve the existing four Netlify project IDs, linked `.netlify/state.json` files, custom domains, and rollback points.
- Keep the production v1 Baseline, Weekly, and Monthly forms live and accepting submissions during implementation; do not modify their schemas or integrations as part of v2 work.
- Use independent Netlify production branches: v1 remains on `main`, v2 is developed on `codex/pseudonymized-forms-hardening`, and only Short Fit may move to a reviewed v2 release branch before the enrolled approval gate.
- Preserve all pre-existing uncommitted work in the marketing repository; isolate hardening changes in path-specific commits without resetting or overwriting unrelated edits.

---

## Verified Repository Boundary and Corrections

- The four-form source exists at `/Users/hollywood/Downloads/glp-glowup-form-sites`, builds four Vite apps from `packages/form-system`, and is not currently a Git repository.
- Its current definitions still request names, dates, medication status, pain/medical context, and broad free text; all four current Netlify names are v1 names.
- Its shared engine currently saves drafts in `sessionStorage` and documents form email notifications. Those behaviors must be removed, not adapted.
- Its generated hidden forms come from the same definitions, which is the correct parity architecture to retain.
- The marketing repository currently has uncommitted work, a full `fit-form` Netlify schema, a `contact-form` schema, mailto generation, and health-detail-heavy fields. The migration must remove both form schemas and route every inquiry path to Short Fit.
- `Cache-Control: no-store, private` applies to enrolled form HTML/document responses, not hashed Vite assets; immutable hashed assets should retain normal long-lived caching.
- The attached counts (1 Short Fit, 1 Baseline, 2 Weekly, 1 Monthly) are an operator-provided snapshot, not a value to verify by reading submissions. Record them as `AUDIT REQUIRED` until Rocco classifies them in the dashboard.

### Task 0: Establish the private v1 source-control baseline before editing

**Files:**
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/.gitignore`
- Preserve: `/Users/hollywood/Downloads/glp-glowup-form-sites/apps/*/.netlify/state.json`

**Interfaces:**
- Produces: private `Bigper4mer/glp-glowup-form-sites`, a synchronized v1 `main` baseline, and `codex/pseudonymized-forms-hardening` for all later form changes.

- [ ] **Step 1: Audit exclusions before `git init`**

Ensure `.gitignore` excludes `node_modules`, `dist`, `.playwright-cli`, browser output, environment files, logs, and `.netlify` build caches. Commit only the four `.netlify/state.json` files from `.netlify` because their existing project IDs are required for continuity.

- [ ] **Step 2: Scan the candidate tree for sensitive material**

Run filename and content scans for tokens, real recipient values, `.env*`, submission exports, synthetic response payloads, and identity-ledger material. Stop if any real response or identity mapping is found.

- [ ] **Step 3: Verify the synchronized v1 source**

Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`. Expected: all commands pass and rebuilt assets match the synchronized baseline. Record the observed test count rather than assuming it remains 24.

- [ ] **Step 4: Initialize and commit v1 on `main`**

Run `git init`, set the initial branch to `main`, stage only reviewed source/config/docs/tests and the four state files, inspect `git diff --cached`, and commit with `chore: preserve verified v1 form baseline`.

- [ ] **Step 5: Create and push the private GitHub repository**

After authenticated network approval, run:

```bash
gh repo create Bigper4mer/glp-glowup-form-sites --private --source=. --remote=origin --push
```

Expected: repository visibility is private and `origin/main` matches the reviewed v1 baseline.

- [ ] **Step 6: Connect projects without changing production behavior**

Connect each existing Netlify project ID to `origin/main` using its existing workspace build command and publish directory. Confirm the custom domains and record current production deploy IDs without opening the Forms/submissions views. A baseline rebuild must remain v1-equivalent.

- [ ] **Step 7: Create the hardening branch**

Create and push `codex/pseudonymized-forms-hardening`. Configure deploy previews for that branch while all four production projects remain on v1 `main`.

- [ ] **Step 8: Commit checkpoint**

Confirm no implementation edits exist on `main`; all following form tasks execute on `codex/pseudonymized-forms-hardening`.

### Task 1: Freeze the two-repository baseline and add failing privacy-contract tests

**Files:**
- Create: `/Users/hollywood/Downloads/glp-glowup-form-sites/docs/pseudonymized-data-contract.md`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/tests/form-system.test.ts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/tests/form-app.test.tsx`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/tests/static-detection.test.ts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-website/tests/contact-links.test.mts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-website/tests/fit-form.test.mts`

**Interfaces:**
- Consumes: current canonical `definitions`, `getStaticFieldNames`, and marketing link helpers.
- Produces: executable privacy/schema contracts that every later task must satisfy.

- [ ] **Step 1: Capture the clean form-monorepo baseline**

Run from `/Users/hollywood/Downloads/glp-glowup-form-sites`:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Expected: all four commands pass and Vitest reports the existing 24 tests passing. If the count has drifted, record the observed count instead of forcing 24.

- [ ] **Step 2: Capture the marketing repository state without modifying it**

Run from `/Users/hollywood/Downloads/glp-glowup-website`:

```bash
git status --short
npm run lint
npm test
npm run build
```

Expected: preserve the exact dirty-file list; verification passes or any pre-existing failure is recorded before hardening work starts.

- [ ] **Step 3: Write failing form-schema tests**

Add a forbidden-field contract using normalized field names and label/help/notice text:

```ts
const forbiddenEnrolledTerms = /(^|_)(name|email|phone|date|dob|medication|dose|diagnosis|provider|location|address|upload|file)($|_)/i;
for (const definition of [definitions.baseline, definitions.weekly, definitions.monthly]) {
  const fields = definition.sections.flatMap((section) => section.fields);
  expect(fields.some((field) => forbiddenEnrolledTerms.test(field.name))).toBe(false);
  expect(fields.filter((field) => field.name === "client_id")).toHaveLength(1);
  expect(fields.filter((field) => field.name === "coaching_note")).toHaveLength(1);
}
expect(Object.values(definitions).map((definition) => definition.formName)).toEqual([
  "glp-short-fit-v2",
  "glp-baseline-signal-scan-v2",
  "glp-weekly-success-map-v2",
  "glp-monthly-progression-reflection-v2",
]);
```

- [ ] **Step 4: Write failing storage, messaging, and static-parity tests**

Assert that source files contain no `sessionStorage` or `localStorage`, that Baseline contains “complete once,” that Weekly and Monthly mention corrected submissions, that the privacy warning remains visible on every enrolled step/review, and that generated hidden input names exactly equal visible canonical field names plus approved metadata.

- [ ] **Step 5: Write failing marketing migration tests**

Assert that `src` and `public/__forms.html` contain no `mailto:`, `fit-form`, `contact-form`, medication-status template, or unrestricted question field, and that all inquiry helpers resolve to `https://shortfit.glpglowups.com` without answer-bearing query parameters.

- [ ] **Step 6: Run tests and confirm contract failures**

Run `npm test` in both repositories. Expected: failures identify current v1 names, forbidden fields, browser storage, legacy forms, and mailto paths.

### Task 2: Implement shared pseudonymous validation and in-memory form behavior

**Files:**
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/src/types.ts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/src/core.ts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/src/FormApp.tsx`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/src/styles.css`
- Test: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/tests/form-system.test.ts`
- Test: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/tests/form-app.test.tsx`

**Interfaces:**
- Produces: `normalizeClientId(value: string): string`, `validateClientId(value: string): boolean`, field metadata `pattern`, `maxLength`, `inputMode`, `autoComplete`, and the shared `COACHING_NOTE_WARNING`.

- [ ] **Step 1: Extend `FormField` metadata**

Add:

```ts
pattern?: string;
maxLength?: number;
inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
autoComplete?: string;
```

Use a framework-neutral string union instead of the React type if importing React types into `types.ts` creates an unnecessary dependency.

- [ ] **Step 2: Add normalization and validation tests**

Cover lowercase normalization, surrounding spaces, valid `GLP-4827-KM`, and invalid missing prefix, wrong digit/letter counts, separators, Unicode letters, and sequential-looking examples. The validator enforces format only; document that uniqueness and issuance rules are offline controls.

- [ ] **Step 3: Implement the helpers and field-level bounds**

Use:

```ts
export const CLIENT_ID_PATTERN = "^GLP-[0-9]{4}-[A-Z]{2}$";
export const COACHING_NOTE_MAX_LENGTH = 300;
export const COACHING_NOTE_WARNING =
  "Do not enter names, contact details, locations, providers, diagnoses, medications or doses, or urgent concerns.";

export function normalizeClientId(value: string): string {
  return value.trim().toUpperCase();
}

export function validateClientId(value: string): boolean {
  return /^GLP-[0-9]{4}-[A-Z]{2}$/.test(normalizeClientId(value));
}
```

Update `validateSection` to normalize client IDs, enforce `pattern`, `maxLength`, and numeric `min`/`max`, and return generic field errors without checking whether an ID exists.

- [ ] **Step 4: Remove the draft API and effects**

Delete `FormDraft`, `draftKey`, `saveDraft`, `loadDraft`, and `clearDraft`. Keep answers only in component state, call `setValues({})` after a successful response, and rely on tab closure/navigation to discard memory.

- [ ] **Step 5: Render native metadata and persistent guidance**

Pass `pattern`, `maxLength`, `inputMode`, and `autoComplete` to controls. Render the enrolled privacy warning outside the step-switched section so it remains visible throughout entry and review. Normalize `client_id` on blur and before encoding.

- [ ] **Step 6: Remove answer logging and sensitive error detail**

Do not call `console.*` with submission errors or values. Display a generic retry message and keep the current values in memory after a failed request so the user can retry.

- [ ] **Step 7: Run focused tests and commit**

Run `npm test -- packages/form-system/tests/form-system.test.ts packages/form-system/tests/form-app.test.tsx`, then commit only shared-engine files with `feat: harden pseudonymous form engine`.

### Task 3: Replace all four canonical definitions with minimized v2 schemas

**Files:**
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/src/definitions.ts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/src/core.ts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/docs/form-inventory.md`
- Test: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/tests/form-system.test.ts`

**Interfaces:**
- Consumes: shared field metadata and validation from Task 2.
- Produces: the exact four v2 definitions consumed by the UI and hidden-form generator.

- [ ] **Step 1: Define Short Fit v2**

Use only `name`, `preferred_contact_method`, conditional `email` or `phone`, `program_interest`, `broad_availability`, and `contact_consent`. Do not ask medication status, goals with medical framing, pain/injury details, location, or an unrestricted question.

- [ ] **Step 2: Define Baseline v2**

Use `client_id`, structured goal choices, training experience, movement-limitation level without diagnosis/free-text detail, nutrition consistency, availability, support preferences, program tier, readiness, and optional `coaching_note` capped at 300. Copy must say “Complete this once after enrollment”; do not imply server enforcement.

- [ ] **Step 3: Define Weekly v2**

Use `client_id`, bounded `week_number`, coaching/body-signal scales, bounded training/protein/movement counts, structured friction themes, requested support, readiness, and optional `coaching_note`. State that a corrected submission may be sent later.

- [ ] **Step 4: Define Monthly v2**

Use `client_id`, bounded `month_number`, structured improvement areas, patterns, consistency, strategy, requested support, confidence, and optional `coaching_note`. State that a corrected submission may be sent later.

- [ ] **Step 5: Version names and metadata**

Set the four names exactly as listed in Task 1 and update `FORM_VERSION` to an explicit v2 release value such as `2026-07-19-v2`. Keep generic success text that never confirms whether a client ID is recognized.

- [ ] **Step 6: Regenerate inventory and pass schema tests**

Run the existing inventory script, then `npm test -- packages/form-system/tests/form-system.test.ts`. Expected: forbidden-field, bounds, naming, correction-copy, and note-policy tests pass.

- [ ] **Step 7: Commit**

Commit definition, inventory, and tests with `feat: minimize GLP GlowUp v2 schemas`.

### Task 4: Generate exact v2 Netlify detection forms and harden response headers

**Files:**
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/scripts/render-app-shell.ts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/apps/short-fit/netlify.toml`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/apps/baseline-signal-scan/netlify.toml`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/apps/weekly-success-map/netlify.toml`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/apps/monthly-progression-reflection/netlify.toml`
- Generated: all four `/Users/hollywood/Downloads/glp-glowup-form-sites/apps/*/index.html`
- Test: `/Users/hollywood/Downloads/glp-glowup-form-sites/packages/form-system/tests/static-detection.test.ts`

**Interfaces:**
- Consumes: v2 canonical definitions.
- Produces: one hidden v2 Netlify form per app and deploy-time security headers.

- [ ] **Step 1: Make parity exact, not containment-only**

Update the static test to parse the hidden form and compare its non-metadata field-name set exactly with `getStaticFieldNames(definition)`, including conditional `_other` fields only when defined. Reject extra v1 fields.

- [ ] **Step 2: Remove notification subject plumbing until approval**

Remove the hidden `subject` field from the generator, visible form, and encoder. This does not configure notifications by itself, but it prevents documentation/code from suggesting that full-response emails are ready before the gate.

- [ ] **Step 3: Add common headers to all four apps**

Set `Content-Security-Policy`, `Permissions-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: no-referrer`, and `X-Robots-Tag: noindex, nofollow`. Start CSP in deploy previews and browser tests with only the origins Vite/Netlify actually require; do not add broad wildcards.

- [ ] **Step 4: Add enrolled-site document caching rules**

For Baseline, Weekly, and Monthly HTML/document paths, set `Cache-Control: no-store, private`. Do not apply this rule to hashed `/assets/*` resources. Short Fit remains noindexed but does not require the enrolled-site private cache rule.

- [ ] **Step 5: Build and inspect generated output**

Run `npm run build` and `npm test -- packages/form-system/tests/static-detection.test.ts`. Expected: one `data-netlify="true"` form per app, exact v2 field parity, no v1 form names, and no forbidden field names.

- [ ] **Step 6: Commit**

Commit generator, app HTML, configs, and tests with `feat: publish hardened Netlify v2 forms`.

### Task 5: Migrate the marketing site to Short Fit without overwriting current work

**Files:**
- Modify: `/Users/hollywood/Downloads/glp-glowup-website/src/lib/site-links.ts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-website/src/components/home-page.tsx`
- Modify: `/Users/hollywood/Downloads/glp-glowup-website/src/components/site-footer.tsx`
- Modify: `/Users/hollywood/Downloads/glp-glowup-website/src/components/navigation.tsx`
- Modify: `/Users/hollywood/Downloads/glp-glowup-website/src/components/ui/floating-cta.tsx`
- Modify or remove after call-site audit: `/Users/hollywood/Downloads/glp-glowup-website/src/lib/contact-inquiry.ts`
- Modify or remove after call-site audit: `/Users/hollywood/Downloads/glp-glowup-website/src/components/contact-inquiry-form.tsx`
- Remove: `/Users/hollywood/Downloads/glp-glowup-website/src/app/fit-form/page.tsx`
- Remove: `/Users/hollywood/Downloads/glp-glowup-website/src/app/fit-form/thank-you/page.tsx`
- Remove: `/Users/hollywood/Downloads/glp-glowup-website/src/components/fit-form-page.tsx`
- Remove: `/Users/hollywood/Downloads/glp-glowup-website/src/lib/fit-form.ts`
- Modify: `/Users/hollywood/Downloads/glp-glowup-website/public/__forms.html`
- Test: `/Users/hollywood/Downloads/glp-glowup-website/tests/contact-links.test.mts`
- Test: `/Users/hollywood/Downloads/glp-glowup-website/tests/fit-form.test.mts`
- Test: `/Users/hollywood/Downloads/glp-glowup-website/tests/site-footer.test.mts`

**Interfaces:**
- Produces: one canonical `shortFitUrl = "https://shortfit.glpglowups.com"` used by every consultation/contact CTA.

- [ ] **Step 1: Re-read the repository diff before editing**

Use `git diff --` for every listed dirty file. Incorporate current user changes deliberately; do not restore files to HEAD.

- [ ] **Step 2: Replace inquiry destinations**

Route header, hero, tier, floating, footer, thank-you, about, and question/contact CTAs to the canonical Short Fit URL. Do not append current answers, health details, or contact values as query parameters.

- [ ] **Step 3: Remove legacy collection surfaces**

Delete the internal fit-form route/components/helpers and the mailto-building contact template after confirming no callers remain. Remove both `fit-form` and `contact-form` detection markup from `public/__forms.html`; if the file becomes empty infrastructure, delete it and remove related assumptions/tests.

- [ ] **Step 4: Preserve a non-clickable administrative address**

Keep `hello@glpglowups.com` visible as plain text in the appropriate footer or policy context, but render no `mailto:` link and no prefilled email template. Application, inquiry, and question actions must all route to Short Fit.

- [ ] **Step 5: Update sitemap, structured data, and robots**

Remove `/fit-form` from the sitemap, service URLs, canonical metadata, robots exceptions, and route-specific UI logic. Keep the main marketing site indexable; all four form sites remain noindexed.

- [ ] **Step 6: Verify and commit only the migration paths**

Run `npm run lint`, `npm test`, and `npm run build`. Stage only migration-related paths and commit with `feat: route marketing inquiries to Short Fit`.

### Task 6: Replace notification instructions with an operations approval gate

**Files:**
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/README-NETLIFY-FORMS.md`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/docs/privacy-launch-checklist.md`
- Modify: `/Users/hollywood/Downloads/glp-glowup-form-sites/docs/form-testing-checklist.md`
- Create: `/Users/hollywood/Downloads/glp-glowup-form-sites/docs/retention-and-access-runbook.md`
- Create: `/Users/hollywood/Downloads/glp-glowup-form-sites/docs/v1-classification-checklist.md`

**Interfaces:**
- Produces: operator checklists for access, retention, v1 handling, notification approval, and recurring review.

- [ ] **Step 1: Document the enrolled production and notification gates separately**

Require written confirmation of the applicable Netlify service/BAA or other documented approval, covered-entity/PHI determination, risk analysis, MFA, least-privilege access, and retention controls before enrolled v2 may enter production. Require an approved managed mailbox, MFA, controlled forwarding, access review, and compatible retention only if full-response form email is later requested. Until both relevant gates pass, enrolled v2 remains preview-only and all v2 email/webhook/Slack notifications remain disabled.

- [ ] **Step 2: Document access and retention**

Require MFA, least-privilege dashboard membership, approved viewers/exporters, active-coaching-plus-12-month retention, a named review owner, review cadence, deletion log, and incident escalation. Mark these as operator controls; do not imply the frontend enforces them.

- [ ] **Step 3: Isolate v1 handling**

List the supplied counts as an unverified snapshot. State that the owner directed production v1 enrolled forms to stay live and accept submissions during the transition. Rocco classifies v1 records without the implementation agent opening or exporting them. Previously detected marketing-site form objects and records also remain untouched. Any export or permanent deletion is a separate, specifically approved procedure because Netlify form/submission deletion is destructive.

- [ ] **Step 4: Correct the testing guide**

Remove directions to confirm notification delivery. Add synthetic-data rules, correction-submission cases, refresh/tab-close clearing, no URL/storage/console leakage checks, exact v2 dashboard form detection, and generic unknown-ID behavior.

- [ ] **Step 5: Commit**

Commit operations documentation with `docs: add pseudonymous forms operating controls`.

### Task 7: Review, preview, and controlled rollout

**Files:**
- Update: `/Users/hollywood/Downloads/glp-glowup-form-sites/docs/form-testing-checklist.md`
- Update: `/Users/hollywood/Downloads/glp-glowup-form-sites/docs/privacy-launch-checklist.md`

**Interfaces:**
- Consumes: completed Tasks 0–6 and explicit deployment authorization.
- Produces: verified previews, then sequential production releases with rollback evidence.

- [ ] **Step 1: Run task-level specification and quality gates**

After each implementation task, use separate specification-compliance and code-quality reviews. Resolve all blocking findings before starting the next task.

- [ ] **Step 2: Run final local gates**

Form repo: `npm run lint && npm run typecheck && npm test && npm run build`.

Marketing repo: `npm run lint && npm test && npm run build`.

Expected: all commands pass, no forbidden schemas/storage/mailto remain, and generated forms match definitions exactly.

- [ ] **Step 3: Run a final cross-repository privacy/security review**

Inspect source and built artifacts for forbidden fields, v1 names, browser storage, answer-bearing URLs, console calls, analytics/replay, permissive CSP, form subjects/notifications, and accidental identity-ledger material.

- [ ] **Step 4: Create deploy previews with synthetic data**

Test mobile and desktop validation, review/edit, failed-request retry, successful submission, refresh/tab-close clearing, Baseline once-copy, Weekly/Monthly corrected submissions, headers, no URL leakage, no email notifications, and one v2 form detected per site.

- [ ] **Step 5: Obtain explicit Short Fit production approval**

Provide all preview URLs, local results, detected v2 names, unchanged project IDs/domains, notification-disabled evidence, and rollback deploy IDs. Request approval only for the Short Fit v2 release; do not imply that enrolled v2 production is included.

- [ ] **Step 6: Promote and verify Short Fit v2**

Point only the Short Fit project at the reviewed v2 release branch. Verify `https://shortfit.glpglowups.com`, headers, the exact `glp-short-fit-v2` detection name, dashboard receipt of one synthetic submission, disabled notifications, and the saved rollback deploy ID.

- [ ] **Step 7: Deploy the marketing CTA migration**

After Short Fit production passes, deploy the marketing commit. Verify every actionable contact path routes to Short Fit, `hello@glpglowups.com` is visible but non-clickable, the main site exposes no form UI or submission code, and removed `/fit-form` routes are absent from metadata and navigation behavior. Do not delete previously detected marketing form objects or records as part of deployment.

- [ ] **Step 8: Hold enrolled v2 at the production gate**

Keep Baseline, Weekly, and Monthly production projects on v1 `main`. Leave their v2 builds as previews until the service agreement, access, retention, risk-analysis, and operator-control evidence is approved. Their existing v1 forms continue accepting submissions as directed.

- [ ] **Step 9: Promote enrolled v2 only after separate approval**

After the enrolled gate passes and production promotion is explicitly approved, move Baseline, Weekly, and Monthly to the reviewed v2 release branch one at a time. After each, verify its custom domain, headers, exact v2 form name, one synthetic dashboard receipt, notification state, and rollback point before proceeding.

- [ ] **Step 10: Preserve v1 and close out**

Confirm v1 forms/submissions remain isolated and untouched. Hand Rocco the classification checklist and schedule the recurring retention review; do not perform cleanup without a separate explicit approval.

## Self-Review Results

- Spec coverage: all attached requirements are assigned to code, operations, source-control, review, or rollout tasks.
- Corrected assumptions: existing form-source repository is not initialized; marketing worktree is dirty; submitted counts are not independently verified; Short Fit noindex and enrolled cache rules are separated; legal/BAA decisions remain external gates.
- Placeholder scan: operational approvals intentionally remain gates, but implementation steps contain exact files, commands, schema names, helpers, and expected behaviors.
- Type consistency: `client_id`, `coaching_note`, four v2 form names, `normalizeClientId`, and `validateClientId` are consistent across engine, definitions, generated forms, tests, and rollout.
