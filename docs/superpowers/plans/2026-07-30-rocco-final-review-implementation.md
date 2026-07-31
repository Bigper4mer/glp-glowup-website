# GLP GlowUp Final Legal and Completion Experience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the approved emergency copy and premium, form-specific completion screens to immutable review previews without changing production.

**Architecture:** Marketing extends the existing policy content model with optional titled callouts rendered inside the existing section. Both form lineages use one shared `CompletionContent` model and one shared receipt component, while each form definition supplies contextual copy. Short Fit is implemented on the v2 production lineage; enrolled v1 is implemented on its production lineage; enrolled v2 receives the same reusable presentation but remains preview-only behind Gate A.

**Tech Stack:** Next.js 16.2.12, React 19, TypeScript, Tailwind CSS 4, Vite 7, Vitest, Testing Library, Node test runner, Netlify CLI.

## Global Constraints

- Production is unchanged until Rocco explicitly approves the exact immutable preview commits.
- Do not inspect, export, edit, migrate, join, submit, or delete any form submission or offline identity-ledger record.
- Do not change form names, `form_version`, fields, stored values, validation, correction workflows, static detection markup, or notification settings.
- Short Fit alone may promise contact within 1–2 business days or discuss program fit.
- Enrolled receipts must not imply Client ID authentication, recognition, or matching.
- V2 Baseline, Weekly, and Monthly remain preview-only behind Gate A.
- No imagery, logo, favicon, watermark, testimonial, crop, or image-file changes.
- CTA text is `Return to GLP GlowUp`; destination is exactly `https://glpglowups.com`.

---

### Task 1: Marketing emergency callouts

**Files:**
- Modify: `src/lib/site-content.ts`
- Modify: `src/app/policies/page.tsx`
- Modify: `tests/marketing-upgrade.test.mts`

**Interfaces:**
- Consumes: the existing `policySections` array.
- Produces: optional `callouts: readonly { title: string; body: string }[]` on policy sections and semantic rendering beneath the existing list.

- [ ] **Step 1: Write the failing marketing contract test**

Add a test that reads `site-content.ts` and `policies/page.tsx`, then asserts exact emergency titles/copy and semantic `h3` rendering:

```ts
test("the safety policy includes the approved emergency callouts", async () => {
  const content = await read("../src/lib/site-content.ts");
  const policies = await read("../src/app/policies/page.tsx");

  for (const approvedText of [
    "No Emergency Services",
    "Our services are educational, coaching, and supportive in nature and are not a substitute for emergency medical care, emergency mental health services, diagnosis, or treatment. We do not monitor communications continuously and cannot guarantee an immediate response.",
    "Medical Emergencies",
    "If you believe you are experiencing a medical emergency, call 911 (or your local emergency services) immediately or go to the nearest emergency department. If you are unable to call, ask someone nearby to contact emergency services for you. This service does not provide emergency medical care or crisis intervention.",
  ]) {
    assert.match(content, new RegExp(approvedText.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")));
  }
  assert.match(policies, /<h3[^>]*>\\{callout\\.title\\}<\\/h3>/);
});
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm test -- --test-name-pattern="approved emergency callouts"`

Expected: FAIL because the callout titles and renderer do not exist.

- [ ] **Step 3: Add callout data**

Extend the `Scope of Services & Safety` object:

```ts
callouts: [
  {
    title: "No Emergency Services",
    body: "Our services are educational, coaching, and supportive in nature and are not a substitute for emergency medical care, emergency mental health services, diagnosis, or treatment. We do not monitor communications continuously and cannot guarantee an immediate response.",
  },
  {
    title: "Medical Emergencies",
    body: "If you believe you are experiencing a medical emergency, call 911 (or your local emergency services) immediately or go to the nearest emergency department. If you are unable to call, ask someone nearby to contact emergency services for you. This service does not provide emergency medical care or crisis intervention.",
  },
],
```

- [ ] **Step 4: Render semantic callouts**

After the existing section list, render:

```tsx
{section.callouts?.length ? (
  <div className="mt-8 grid gap-4">
    {section.callouts.map((callout) => (
      <article key={callout.title} className="border border-brand-line bg-brand-light p-6 sm:p-7">
        <h3 className="font-serif text-2xl font-semibold tracking-[-0.025em] text-brand-dark">
          {callout.title}
        </h3>
        <p className="mt-3 leading-relaxed text-brand-muted">{callout.body}</p>
      </article>
    ))}
  </div>
) : null}
```

- [ ] **Step 5: Verify GREEN**

Run: `npm test && npm run lint && npm run build && npm run test:runtime -- production`

Expected: 20 tests pass; lint, build, and runtime checks pass.

- [ ] **Step 6: Commit**

```bash
git add src/lib/site-content.ts src/app/policies/page.tsx tests/marketing-upgrade.test.mts
git commit -m "feat: add emergency safety callouts"
```

### Task 2: V2 completion-content model and component

**Files:**
- Modify: `packages/form-system/src/types.ts`
- Modify: `packages/form-system/src/definitions.ts`
- Create: `packages/form-system/src/CompletionScreen.tsx`
- Modify: `packages/form-system/src/FormApp.tsx`
- Modify: `packages/form-system/src/styles.css`
- Modify: `packages/form-system/tests/form-app.test.tsx`
- Modify: `packages/form-system/tests/editorial-contract.test.tsx`

**Interfaces:**
- Produces:

```ts
export interface CompletionContent {
  heading: string;
  introduction: string;
  review: string;
  promise: string;
  closing: string;
  signature: string;
  receiptNote: string;
}
```

- Extends `FormDefinition` with `completion: CompletionContent`.
- Produces `CompletionScreen({ content, headingRef })`.

- [ ] **Step 1: Write failing v2 receipt tests**

Add tests that submit each zero-section definition through a resolved synthetic submitter and assert its heading, promise, CTA, and generic receipt note. Assert only Short Fit includes `1–2 business days` and `right fit`.

- [ ] **Step 2: Verify RED**

Run: `npm test -w @glp/form-system -- form-app.test.tsx editorial-contract.test.tsx`

Expected: FAIL because `completion` and the new headings do not exist.

- [ ] **Step 3: Add the typed content contract**

Add `CompletionContent` to `types.ts` and `completion: CompletionContent` to `FormDefinition`.

- [ ] **Step 4: Add exact approved content**

Populate the four definitions with the copy in `docs/superpowers/specs/2026-07-30-rocco-final-review-design.md`. Preserve the existing `thankYou` property until all legacy tests and inventory consumers are migrated; do not alter submission fields or stored values.

- [ ] **Step 5: Create the shared screen**

Implement:

```tsx
import { Check } from "lucide-react";
import type { CompletionContent } from "./types";

export function CompletionScreen({
  content,
  headingRef,
}: {
  content: CompletionContent;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  return (
    <main id="completion-content" tabIndex={-1} className="success-shell">
      <section className="success-card" aria-labelledby="completion-heading">
        <div className="success-icon" aria-hidden="true"><Check /></div>
        <p className="eyebrow">BODY • MIND • METABOLISM</p>
        <h1 id="completion-heading" ref={headingRef} tabIndex={-1}>{content.heading}</h1>
        <p className="success-introduction">{content.introduction}</p>
        <p className="success-review">{content.review}</p>
        <div className="promise-block">
          <p className="promise-label">Our Promise</p>
          <p className="promise-statement">{content.promise}</p>
        </div>
        <p className="success-closing">{content.closing}</p>
        <p className="success-signature">{content.signature}</p>
        <a className="home-link" href="https://glpglowups.com">Return to GLP GlowUp</a>
        <p className="success-note">{content.receiptNote}</p>
      </section>
    </main>
  );
}
```

- [ ] **Step 6: Integrate focus management**

Create `completionHeadingRef`; add an effect that calls `.focus()` when `submitted` becomes true; replace the inline receipt with `CompletionScreen`.

- [ ] **Step 7: Implement the approved hierarchy**

Use the existing tokens and these bounded targets:

```css
.success-card h1{font-size:clamp(2.5rem,7vw,3rem)}
.success-introduction,.success-review{font-size:clamp(1.125rem,2vw,1.25rem)}
.promise-label{font-size:1rem;text-transform:uppercase;letter-spacing:.16em;color:#4d6a3c}
.promise-statement{font-size:clamp(1.0625rem,2vw,1.125rem)}
.success-signature{font-size:.9375rem}
.success-note{font-size:.875rem}
```

Retain a minimum 44 px CTA and visible focus. Do not add animation.

- [ ] **Step 8: Verify GREEN and compatibility**

Run: `npm test && npm run typecheck && npm run lint && npm run build`

Expected: all v2 tests, typecheck, lint, and four builds pass. Static detection and stored-value tests remain byte-for-byte green.

- [ ] **Step 9: Commit**

```bash
git add packages/form-system/src packages/form-system/tests
git commit -m "feat(forms): add premium contextual receipts"
```

### Task 3: Grandfathered v1 enrolled completion screens

**Files:**
- Modify: `packages/form-system/src/types.ts`
- Modify: `packages/form-system/src/definitions.ts`
- Create: `packages/form-system/src/CompletionScreen.tsx`
- Modify: `packages/form-system/src/FormApp.tsx`
- Modify: `packages/form-system/src/styles.css`
- Modify: `packages/form-system/tests/form-app.test.tsx`
- Modify: `packages/form-system/tests/v1-stabilization.test.ts`

**Interfaces:**
- Uses the same `CompletionContent` and `CompletionScreen` signatures as Task 2.
- Produces production-lineage previews for Baseline, Weekly, and Monthly only.

- [ ] **Step 1: Add failing v1 completion tests**

Submit zero-section Baseline, Weekly, and Monthly definitions with a resolved synthetic submitter. Assert exact contextual headings, generic receipt note, `Return to GLP GlowUp`, and focus on the new `h1`. Assert the source still contains the original form names and `FORM_VERSION`.

- [ ] **Step 2: Verify RED**

Run: `npm test -w @glp/form-system -- form-app.test.tsx v1-stabilization.test.ts`

Expected: FAIL on the old `Form received` heading and old CTA.

- [ ] **Step 3: Implement the shared v1 content model and screen**

Use the exact interface and component structure from Task 2. Populate Baseline, Weekly, and Monthly with the approved contextual copy. Do not change draft storage, clear behavior, fields, definitions, form names, or static HTML.

- [ ] **Step 4: Integrate success focus without changing draft behavior**

After a successful response, preserve the existing `clearDraft(definition)` call and focus the completion `h1`. A failed response must leave the form visible and draft intact.

- [ ] **Step 5: Verify GREEN**

Run: `npm test && npm run typecheck && npm run lint && npm run build`

Expected: all 33+ tests, typecheck, lint, and all builds pass; form detection parity and v1 stabilization tests remain green.

- [ ] **Step 6: Commit**

```bash
git add packages/form-system/src packages/form-system/tests
git commit -m "feat(forms): elevate enrolled completion screens"
```

### Task 4: Immutable previews and browser QA

**Files:**
- No production source changes.
- Create local evidence report: `/tmp/glp-rocco-final-review-qa.md`

- [ ] **Step 1: Deploy marketing preview**

Run a draft Netlify deploy from the marketing review branch and record the immutable URL and commit SHA.

- [ ] **Step 2: Deploy Short Fit v2 preview**

Build and deploy only `apps/short-fit` from the v2 review branch.

- [ ] **Step 3: Deploy enrolled v1 previews**

Build and deploy Baseline, Weekly, and Monthly from their exact app directories and correct Netlify project IDs. Never reuse one app directory for another project.

- [ ] **Step 4: Verify headers and indexing**

Marketing previews must be `noindex` and retain marketing CSP. Form previews must return CSP with `form-action 'self'`, `X-Robots-Tag: noindex`, and `Cache-Control: no-store, private`.

- [ ] **Step 5: Verify browser presentation**

At 320, 390, 768, and 1440 pixels, check:

- no horizontal overflow or clipping;
- exact heading/copy/CTA;
- sage promise label contrast;
- founder and existing imagery unchanged;
- keyboard focus moves to completion `h1`;
- no console errors;
- no form is submitted during preview QA.

Use component-level synthetic submitters or a local query/test harness to reveal completion states. Do not create Netlify submissions.

- [ ] **Step 6: Record evidence**

Write commit SHAs, immutable URLs, tests, builds, headers, responsive checks, and rollback anchors to `/tmp/glp-rocco-final-review-qa.md`.

### Task 5: Rocco review email

**Files:**
- No repository changes.

- [ ] **Step 1: Prepare the review email**

Include:

- marketing Policies preview;
- Short Fit preview;
- Baseline preview;
- Weekly preview;
- Monthly preview;
- exact commit SHAs;
- concise change summary;
- what to test;
- explicit statement that production is unchanged;
- request for exact-preview approval.

- [ ] **Step 2: Send from the connected Gmail account**

Send to `drroccogervasi@gmail.com` only. Do not configure form-submission notifications, webhooks, or automated emails.

- [ ] **Step 3: Confirm delivery**

Record the Gmail sent-message ID in the final handoff.
