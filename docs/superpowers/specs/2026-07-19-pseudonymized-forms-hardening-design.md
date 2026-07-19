# GLP GlowUp Pseudonymized Forms Hardening Design

## Purpose

Harden the GLP GlowUp intake ecosystem by replacing the marketing website's health-detail-heavy collection paths with one minimized public Short Fit form and preparing pseudonymized v2 Baseline, Weekly, and Monthly forms. Preserve all four existing Netlify projects, custom domains, rollback history, and isolated v1 submissions.

This design intentionally permits the three existing v1 enrolled forms to remain live and continue accepting submissions during the transition, as directed by the owner. That grandfathered state does not approve the new enrolled v2 collection model and does not establish HIPAA compliance.

## Confirmed Infrastructure

The system uses two independent source repositories:

| Repository | Responsibility |
|---|---|
| `/Users/hollywood/Downloads/glp-glowup-website` | Public marketing content and routing. After migration, it does not collect consultation or contact-form responses. |
| `/Users/hollywood/Downloads/glp-glowup-form-sites` | Four Vite form applications, canonical schemas, validation, rendering, generated Netlify detection markup, security headers, and operations documentation. |

The existing Netlify project/domain mappings must not change:

| Form | Project | Custom domain | Project ID |
|---|---|---|---|
| Short Fit | `glp-glowup-short-fit` | `https://shortfit.glpglowups.com` | `d15b50e1-da78-46c9-b23a-1faf82ba4ed3` |
| Baseline | `glp-glowup-baseline-scan` | `https://baseline.glpglowups.com` | `df93ba1f-11f1-46b7-aa27-72e45fb4c2f9` |
| Weekly | `glp-glowup-weekly-map` | `https://weekly.glpglowups.com` | `293da501-bf61-4b6d-af8a-05ee8fff6b47` |
| Monthly | `glp-glowup-monthly-reflection` | `https://monthly.glpglowups.com` | `e9df758e-ac30-471c-a935-9e4a0295cdaa` |

## Source-Control and Release Architecture

The verified form workspace becomes a private Git repository before form code changes begin. The synchronized v1 source is committed on `main` and pushed to a private `Bigper4mer/glp-glowup-form-sites` GitHub repository. Build artifacts, dependencies, browser traces, local environment files, submission exports, tokens, and identity-ledger material are excluded.

Hardening work occurs on `codex/pseudonymized-forms-hardening`. Netlify production branch settings remain independent per project:

- All four projects initially continue using `main`, which contains the verified v1 baseline.
- Deploy previews for the hardening branch exercise the v2 builds without changing production.
- Short Fit may promote a reviewed v2 release branch independently.
- Baseline, Weekly, and Monthly remain on the v1 production branch until the enrolled-form approval gate passes.
- After the gate passes, enrolled projects move sequentially to the approved v2 release branch. Once all four are stable, v2 becomes the common `main` baseline.

This branch isolation prevents connecting the monorepo from accidentally promoting all four v2 forms at once. Each production change records the previous deploy ID as a rollback point.

## Release Strategy

The approved strategy is a controlled strangler migration:

1. Commit and push the verified v1 form-source baseline.
2. Build and review all four v2 applications on the hardening branch.
3. Produce deploy previews with synthetic, non-health data.
4. Promote Short Fit v2 to its existing project and custom domain.
5. Verify Short Fit production before modifying marketing routes.
6. Update the marketing site so every actionable inquiry/application path routes to Short Fit.
7. Keep the current v1 Baseline, Weekly, and Monthly production forms live.
8. Hold enrolled v2 production promotion until the service and operating-control gate passes.
9. After approval, promote Baseline, Weekly, and Monthly v2 one at a time.

The exact v2 Netlify names are:

- `glp-short-fit-v2`
- `glp-baseline-signal-scan-v2`
- `glp-weekly-success-map-v2`
- `glp-monthly-progression-reflection-v2`

New names isolate v2 records from historical v1 records inside the same projects. Implementation and deployment do not inspect, export, mutate, or delete v1 records. The supplied v1 counts are treated as an unverified operator snapshot until Rocco classifies them separately.

## Marketing-Site Boundary

The marketing repository stops exposing or submitting forms. The internal `/fit-form` flow, contact form, Netlify detection markup, and mailto-template generator are removed after a complete call-site audit. Previously detected Netlify form objects or historical marketing-form records are not automatically deleted; they remain isolated until a separately approved retention and cleanup decision.

Every clickable consultation, application, question, and contact CTA routes to:

```text
https://shortfit.glpglowups.com
```

The site does not append answers, health information, source-page text, or contact data to that URL. If campaign attribution is retained, it must use a fixed allowlisted code with no user data; the minimal launch omits query parameters entirely.

`hello@glpglowups.com` remains visible as non-clickable administrative contact text. It is not a `mailto:` link and does not generate a prefilled template. The marketing site remains indexable. Removed form routes are deleted from the sitemap, structured data, robots rules, navigation exceptions, and canonical metadata.

## Data Classification and Identity Boundary

Short Fit responses contain direct contact information and are confidential consultation records. Enrolled records are pseudonymized, not anonymous. The client ID allows Rocco to reconnect a response to a person using the separate physical ledger.

The physical ledger is the only identity mapping. It is never photographed, emailed, messaged, synced, uploaded, digitally backed up with the website, entered into GitHub or Netlify, copied into support tickets, or exposed to implementation agents.

Client IDs follow `GLP-4827-KM`:

- Input is case-insensitive and normalized to uppercase.
- The application validates `^GLP-[0-9]{4}-[A-Z]{2}$`.
- The application does not check whether an ID exists.
- The application does not authenticate identity.
- Collision checking, random assignment, and the prohibitions against sequential and phone-derived values are offline ledger procedures.
- Success and failure responses never reveal whether an ID is recognized.

## Canonical v2 Schemas

### Short Fit

Short Fit collects only:

- `name`
- `preferred_contact_method`
- Conditional `email` or `phone`
- `program_interest`
- `broad_availability`
- `contact_consent`

Choosing email requires email. Choosing call or text requires phone. Program interest and availability use structured choices. Short Fit does not ask about medication status, health history, diagnosis, pain, providers, location, goals framed as medical treatment, client-entered dates, unrestricted health concerns, or uploads.

### Baseline

Baseline collects:

- `client_id`
- Structured goals
- Training experience
- Movement-limitation level without diagnosis or explanatory health text
- Nutrition consistency
- Availability
- Support preferences
- Program tier
- Readiness
- Optional `coaching_note`

The form says “Complete this once after enrollment.” This is an operational instruction, not server enforcement.

### Weekly

Weekly collects:

- `client_id`
- Bounded `week_number`
- Coaching and body-signal scales
- Bounded training, protein, and movement counts
- Structured friction themes
- Requested support
- Readiness
- Optional `coaching_note`

The form states that clients may submit a corrected response later.

### Monthly

Monthly collects:

- `client_id`
- Bounded `month_number`
- Structured improvement areas
- Patterns
- Consistency
- Strategy
- Requested support
- Confidence
- Optional `coaching_note`

The form states that clients may submit a corrected response later. Any displayed monthly theme is derived from the month number and is not submitted as an additional response field.

### Coaching Note Policy

Each enrolled form has exactly one optional `coaching_note`, limited to 300 characters. A persistent notice remains visible throughout entry and review:

> Do not enter names, contact details, locations, providers, diagnoses, medications or doses, or urgent concerns.

There are no other unrestricted enrolled-form textareas.

## Shared Form Engine

One canonical typed definition drives both the visible React form and the hidden static form Netlify scans. The field contract supports:

- `pattern`
- `maxLength`
- `inputMode`
- `autoComplete`
- Numeric `min` and `max`

Native HTML constraints provide immediate usability feedback. Shared validation normalizes client IDs and enforces required fields, patterns, lengths, and numeric bounds before submission. Client-side validation is a data-quality layer, not a security boundary.

All canonical fields remain mounted in one form while only the current section is visible. Next validates the current section. Back preserves state. The final review is generated from the same definition and links back to each section.

Answers live only in React component memory. The system contains no draft-storage API and calls neither `sessionStorage` nor `localStorage`. Refresh, navigation, or tab closure discards answers. A successful submission explicitly clears state. A failed submission preserves in-memory answers for retry.

## Submission and Error Flow

Submissions are same-origin URL-encoded `POST` requests. Approved metadata is limited to:

- `form-name`
- `form_version`
- `bot-field`

The honeypot remains active. The visible form and hidden Netlify detection form use exactly the same response-field names. Tests reject both missing and extra detection fields, preventing obsolete v1 fields from remaining silently active.

No answer is placed in a query string, URL fragment, analytics event, replay tool, console message, browser-storage entry, or error-telemetry payload. V2 removes notification-subject fields and email-oriented instructions.

On submission:

1. The form prevents duplicate attempts while one request is pending.
2. A failed request displays a generic connection/retry message without logging values or raw errors.
3. A successful request clears memory and displays a generic receipt.
4. No response confirms that a client ID is valid, enrolled, duplicated, or previously used.

## Browser and HTTP Security

All four sites remain `noindex,nofollow` in HTML and through `X-Robots-Tag`.

Every site receives:

- A restrictive `Content-Security-Policy`
- `Permissions-Policy`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY` plus CSP `frame-ancestors 'none'`
- `Referrer-Policy: no-referrer`

The CSP permits only the exact resources needed by the built sites, uses same-origin `form-action`, blocks object/plugin content, blocks framing, and avoids broad wildcards. Preview testing establishes the final directives before production.

Baseline, Weekly, and Monthly HTML/document responses receive `Cache-Control: no-store, private`. This rule does not apply to hashed Vite assets, which contain no answers and retain long-lived immutable caching. Short Fit remains noindexed but uses ordinary caching for its non-personalized public document.

## Operations and Approval Gate

The enrolled v2 production gate requires documented confirmation of:

- The practice's covered-entity and data-classification determination.
- The applicable Netlify service tier, services, and BAA or other written approval for the intended data flow.
- A completed risk analysis and assigned control owners.
- Netlify dashboard MFA and least-privilege membership.
- A named list of approved staff who may view or export submissions.
- Active-coaching-plus-12-month retention, a recurring review schedule, and a deletion log.
- An incident-escalation procedure.
- If notifications will be enabled, an approved managed mailbox with MFA, controlled forwarding, access review, and compatible retention.

Until this gate passes, enrolled v2 remains preview-only and form-submission email, webhook, and Slack notifications stay disabled. Dashboard-only storage does not substitute for cloud-service approval.

The owner directed that existing v1 enrolled forms stay live during this period. They receive no schema expansion, new integrations, automatic exports, or automatic cleanup as part of this work. Their continued operation is recorded as a grandfathered business decision, not as approval of v2 or a compliance representation.

After the gate passes, enabling full-response form notifications is a separate reviewed operational change. The system never claims HIPAA compliance merely because the code is hardened or a BAA exists.

## V1 Record Handling

V1 records remain isolated under their original form names. Implementation agents do not open them. Rocco performs classification in the Netlify dashboard using a separate checklist.

Any export or deletion requires separate explicit approval after retention and handoff decisions. Netlify form/submission deletion is permanent and is never bundled into deployment. The identity ledger is not used during technical classification.

## Testing Strategy

### Automated contracts

Tests prove:

- Enrolled definitions contain no name, email, phone, date, medication, dose, diagnosis, provider, location, address, or upload fields.
- Labels, help text, notices, and options contain no prohibited requests disguised under safe field names.
- Each enrolled form contains one `client_id` and one optional 300-character `coaching_note`.
- Client IDs normalize and validate correctly.
- Required, pattern, length, and numeric-bound validation behaves consistently.
- No source or built artifact calls `sessionStorage` or `localStorage`.
- Baseline says “complete once,” while Weekly and Monthly permit corrected submissions.
- Hidden Netlify schemas exactly equal visible canonical schemas plus approved metadata.
- V2 names are exact and v1 field names are absent from v2 output.
- Marketing source and built output contain no legacy forms, `mailto:`, or health-data templates.
- Every actionable marketing CTA resolves to Short Fit without user-data parameters.

### Browser and preview testing

Desktop and mobile testing covers:

- Conditional Short Fit contact validation.
- Client-ID normalization and format errors.
- Note length and persistent privacy guidance.
- Step navigation and review/edit.
- Failed-request retry without losing in-memory answers.
- Successful submission and state clearing.
- Refresh and tab-close clearing.
- Weekly and Monthly correction submissions.
- Generic response behavior for syntactically valid IDs.
- One detected v2 form per preview.
- Dashboard receipt using synthetic, non-health data.
- No answer leakage in URLs, storage, console output, analytics, or telemetry.
- Exact HTTP headers and CSP behavior.
- No form-submission notifications before approval.

### Review gates

Each implementation task receives a specification-compliance review and a code-quality review. A final cross-repository privacy/security review examines source, generated HTML, built JavaScript, configuration, marketing routing, and operations documentation before any production promotion.

## Sequential Rollout and Rollback

Short Fit v2 deploys first. Production verification confirms the custom domain, v2 detection name, successful synthetic receipt, headers, no notifications, and previous deploy ID. The marketing migration deploys only after Short Fit passes.

After the enrolled gate passes, Baseline, Weekly, and Monthly deploy one at a time. Each must pass domain, headers, detection, synthetic receipt, notification state, and rollback checks before the next site proceeds.

Rollback restores the previous production deploy for the affected project. Because v1 and v2 use different form names, rollback does not merge or delete record sets. Marketing rollback restores the prior CTA deployment, but it must not point users to a Short Fit release known to be unavailable.

## Success Criteria

The design is complete when:

- The private form repository preserves a verified v1 baseline and reviewed v2 history.
- Short Fit v2 is minimized and production-verified on its existing domain.
- The marketing site exposes no form UI or submission code and uses no mailto templates; any previously detected Netlify form objects remain untouched pending separate cleanup approval.
- The administrative email remains visible but non-clickable.
- Enrolled v2 previews pass privacy, schema, browser, and security tests.
- Enrolled v1 remains live as directed and untouched by automated record operations.
- Enrolled v2 production remains technically and procedurally blocked until approval.
- All four existing Netlify project IDs, custom domains, and rollback paths are preserved.
- No implementation artifact contains identity-ledger material or real client responses.
