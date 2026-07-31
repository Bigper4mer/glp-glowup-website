# GLP GlowUp Final Legal and Completion Experience Design

## Status

Approved in conversation on July 30, 2026. This specification covers Rocco Gervasi's final-review feedback after the first production release. It authorizes preview implementation only. It does not authorize a production deployment.

## Objectives

1. Add Rocco's approved emergency-services language to the marketing Policies page without changing the existing site structure or visual identity.
2. Replace the sterile form receipt with a high-touch, premium completion experience.
3. Use Rocco's prospective-client message on Short Fit and contextual messages on the three enrolled forms.
4. Preserve every form name, field name, stored option value, validation rule, privacy boundary, submission destination, and existing record.
5. Keep the current production website and forms unchanged until Rocco approves the exact new previews.

## Repositories and Release Lines

The work spans two repositories and three release lines:

- Marketing: start from the current production marketing commit on `main`.
- Short Fit: start from the current v2 Short Fit production lineage.
- Baseline, Weekly, and Monthly: start from the stabilized grandfathered v1 production lineage.

The staged enrolled-v2 forms should receive the reusable completion component and contextual copy so the design is not lost in the future. They remain preview-only behind Gate A and must not be promoted by this release.

Each release line must use an isolated `codex/` branch and worktree. Existing dirty or production worktrees must not be edited in place.

## Marketing Legal Copy

The Policies page already contains a section titled `Scope of Services & Safety`. Preserve its three approved statements:

> GLP GlowUp provides educational coaching for strength training, movement, body-composition habits, nutrition behaviors, accountability, and performance support.
>
> We do not prescribe medications, diagnose or treat medical conditions, or manage medication side effects.
>
> New, worsening, or concerning symptoms should be directed to your prescribing clinician or another appropriate medical provider.

Directly beneath those statements, add two titled callouts within the same section.

### No Emergency Services

> Our services are educational, coaching, and supportive in nature and are not a substitute for emergency medical care, emergency mental health services, diagnosis, or treatment. We do not monitor communications continuously and cannot guarantee an immediate response.

### Medical Emergencies

> If you believe you are experiencing a medical emergency, call 911 (or your local emergency services) immediately or go to the nearest emergency department. If you are unable to call, ask someone nearby to contact emergency services for you. This service does not provide emergency medical care or crisis intervention.

The titles must be actual headings beneath the `Scope of Services & Safety` heading. The callouts may use the existing paper, line, dark-text, and accent tokens, but they must remain visually subordinate to the section heading. The wording above is exact except for typographic apostrophe normalization.

## Completion Experience Architecture

Use one shared completion component driven by form-specific presentation content. Do not create four separate page components and do not put the entire completion layout into the form definitions.

The presentation model should support:

- eyebrow
- heading
- introductory paragraph
- review paragraph
- promise label
- promise statement
- closing sentence
- signature
- CTA label and destination
- receipt note

Submission logic continues to set the existing submitted state only after a successful Netlify response. Error handling remains unchanged. No completion screen may imply that a Client ID was authenticated, recognized, or matched.

## Shared Visual System

Every completion screen uses:

- a sage checkmark treatment based on the existing success icon;
- eyebrow: `BODY • MIND • METABOLISM`;
- one prominent serif heading;
- generous vertical space and a centered premium card;
- a sage `OUR PROMISE` label as the emotional center;
- the existing warm paper, dark ink, accent, border, and shadow tokens;
- CTA label: `Return to GLP GlowUp`;
- CTA destination: `https://glpglowups.com`;
- no imagery, logo, favicon, watermark, or testimonial changes.

Typography targets:

- completion heading: responsive 40–48 px, reaching 42–48 px where space allows;
- main body copy: 18–20 px;
- promise label: 16 px, uppercase or small caps, sage;
- promise statement: 17–18 px;
- signature: 15 px;
- receipt note: 14 px.

The sage text must meet WCAG AA contrast against the paper background. Prefer the existing dark sage used by the checkmark rather than a low-contrast pastel.

The card must remain airy without causing clipping or horizontal overflow at 320, 390, 768, or 1440 pixels. Interactive controls must remain at least 44 px high. Reduced-motion preferences must be honored; no new animation is required.

When the completion screen replaces the form, keyboard focus must move to the completion heading or main region. The screen must retain one `h1`, readable source order, visible focus, and a descriptive link label.

## Approved Completion Copy

### Short Fit

**Heading**

> You're One Step Closer

**Introduction**

> Thank you for completing your assessment. We're honored you've trusted us with this first step.

**Review**

> We'll personally review your information and contact you within 1–2 business days to discuss your goals and determine whether the GLP GlowUp Premium Transformation Experience is the right fit for you.

**Promise label**

> Our Promise

**Promise**

> We're here to help you build lasting strength, confidence, and the knowledge to maintain your results for years to come.

**Closing**

> We look forward to meeting you.

**Signature**

> — Rocco Gervasi, DPT, CSCS, VRC

**Receipt note**

> Your information has been successfully received and will be reviewed with care.

### Baseline Signal Scan

**Heading**

> Your Success Map Starts Here

**Introduction**

> Thank you for completing your Baseline Signal Scan. Your starting signals have been successfully received and will be reviewed with care.

**Review**

> We'll use your responses to shape a more personalized Success Map around your goals, patterns, schedule, and support needs.

**Promise label**

> Our Promise

**Promise**

> We're here to turn useful signals into clear next steps—helping you build lasting strength, confidence, and a rhythm you can maintain.

**Closing**

> We look forward to building the next phase with you.

**Signature**

> — Rocco Gervasi, DPT, CSCS, VRC

**Receipt note**

> Your response has been successfully received and will be reviewed with care.

### Weekly Success Map

**Heading**

> Your Next Adjustment Starts Here

**Introduction**

> Thank you for completing your Weekly Success Map. Your check-in has been successfully received and will be reviewed with care.

**Review**

> We'll use the signals you shared to understand what worked, where friction showed up, and what may help you keep moving forward.

**Promise label**

> Our Promise

**Promise**

> Every week is feedback, not failure. We're here to help you return to rhythm with clear, confident support.

**Closing**

> We look forward to helping you build on this week.

**Signature**

> — Rocco Gervasi, DPT, CSCS, VRC

**Receipt note**

> Your response has been successfully received and will be reviewed with care.

### Monthly Progression Reflection

**Heading**

> Your Progress Is Taking Shape

**Introduction**

> Thank you for completing your Monthly Progression Reflection. Your reflection has been successfully received and will be reviewed with care.

**Review**

> We'll use the patterns you shared to recognize what is improving, identify where support may help, and inform the next phase of your plan.

**Promise label**

> Our Promise

**Promise**

> You are not starting over. We're here to help you carry forward what you've learned and turn progress into standards you can repeat.

**Closing**

> We look forward to building the next phase with you.

**Signature**

> — Rocco Gervasi, DPT, CSCS, VRC

**Receipt note**

> Your response has been successfully received and will be reviewed with care.

## Privacy and Data Contracts

- Do not inspect, export, edit, migrate, join, or delete any form submission or offline identity-ledger record.
- Do not add any new submitted field, tracking parameter, query string, browser-storage key, webhook, notification, or email integration.
- Preserve all existing form names and `form_version` values for the applicable release line.
- Preserve Short Fit contact sanitization and every stored option value.
- Preserve the enrolled Client ID format rule, note limits, correction workflow, and non-disclosure behavior.
- The same enrolled completion message must appear for every syntactically valid submitted Client ID. It must not vary based on recognition or identity state.
- V2 Baseline, Weekly, and Monthly remain blocked from production until Gate A is independently complete.
- The v1 browser-storage behavior remains unchanged in the grandfathered v1 release; v2 must continue to use no browser storage.

## Testing and Review Gates

Implementation follows test-first development.

Automated tests must prove:

- exact emergency headings and copy are rendered in the Policies section;
- the two emergency callouts preserve correct heading order;
- each form maps to its approved completion content;
- Short Fit alone contains the 1–2-business-day and program-fit language;
- enrolled receipts contain no Client ID recognition or authentication language;
- CTA text and destination are exact;
- form names, fields, stored values, validation rules, and static Netlify detection markup are unchanged;
- v2 browser-storage prohibitions and v1 preservation contracts still pass;
- successful submission clears in-memory or session state according to the existing release-line contract;
- submission errors do not show the completion screen.

Verification must include:

- marketing tests, lint, production build, runtime checks, metadata/schema/sitemap/robots checks, and true `/fit-form` 404;
- forms tests, typecheck, lint, all relevant builds, and static detection parity;
- browser review at 320, 390, 768, and 1440 pixels;
- keyboard focus transfer to the completion screen;
- no horizontal overflow or clipping;
- no serious or critical accessibility findings;
- security-header parity on every immutable preview;
- no production deployment, notification change, form submission, or record access during preview QA.

## Preview and Approval Flow

Create immutable previews for:

1. Marketing Policies.
2. Short Fit v2 completion.
3. Baseline v1 completion.
4. Weekly v1 completion.
5. Monthly v1 completion.

The staged enrolled-v2 screens may also be previewed for design continuity, but they are not part of the production approval request.

Send Rocco a concise re-review email containing the five applicable immutable previews, exact commit SHAs, what changed, what to test, and a statement that production remains unchanged. Production requires Rocco's explicit approval of the exact preview commits.

## Rollback

Because this stage is preview-only, rollback is branch deletion or abandonment. The existing production deploy IDs and source commits remain the release rollback anchors and must not be changed during this work.
