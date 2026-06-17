import { Button } from "@/components/ui/button";
import { FitFormQuerySync } from "@/components/fit-form-query-sync";
import {
  fitFormActivityOptions,
  fitFormChallengeOptions,
  fitFormGoalOptions,
  fitFormPainOptions,
  fitFormStatusOptions,
  fitFormTierOptions,
  fitFormName,
} from "@/lib/fit-form";

const inputClassName =
  "w-full rounded-2xl border border-brand-muted/20 bg-white px-4 py-3 text-base text-brand-dark outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15";

const labelClassName = "mb-2 block text-sm font-semibold text-brand-dark";

const scaleOptions = Array.from({ length: 11 }, (_, index) => index.toString());

export function FitFormPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <FitFormQuerySync />
      <section className="lg:sticky lg:top-32 lg:self-start">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">Short Fit Form</p>
        <h1 className="mb-5 font-serif text-4xl font-bold leading-tight text-brand-dark md:text-6xl">
          GLP-1 Body Composition Coaching
        </h1>
        <p className="mb-4 text-lg leading-relaxed text-brand-muted">Let&apos;s make sure this is the right fit.</p>
        <p className="mb-6 max-w-xl text-base leading-relaxed text-brand-muted">
          Share a few details about your goals, current season, and the type of support you want. We review every
          application manually before recommending the next best step.
        </p>
        <div className="rounded-2xl border border-brand-accent/20 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-brand-dark">Application context</p>
          <dl className="mt-3 space-y-3 text-sm text-brand-muted">
            <div className="flex items-start justify-between gap-4">
              <dt>Preferred tier</dt>
              <dd id="fit-form-tier-label" className="font-medium text-brand-dark">Not sure yet</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt>CTA source</dt>
              <dd id="fit-form-source-label" className="font-medium text-brand-dark">direct</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="rounded-[28px] border border-brand-muted/10 bg-white p-6 shadow-sm md:p-8">
        <form
          id="fit-form-intake"
          name={fitFormName}
          method="POST"
          action="/fit-form/thank-you"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-8"
        >
          <input type="hidden" name="form-name" value={fitFormName} />
          <input type="hidden" name="cta_source" value="direct" />
          <input type="hidden" name="page_path" value="/fit-form" />

          <div className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
          </div>

          <fieldset className="grid gap-5 md:grid-cols-2">
            <legend className="mb-1 text-lg font-semibold text-brand-dark">Contact</legend>
            <div className="md:col-span-2">
              <label htmlFor="full_name" className={labelClassName}>
                Name
              </label>
              <input id="full_name" name="full_name" autoComplete="name" required className={inputClassName} />
            </div>
            <div>
              <label htmlFor="email" className={labelClassName}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputClassName}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClassName}>
                Phone
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClassName} />
            </div>
            <div className="md:col-span-2">
              <span className={labelClassName}>Preferred contact method</span>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Email", "Text", "Call"].map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-brand-muted/15 px-4 py-3 text-sm text-brand-dark transition hover:border-brand-accent/40"
                  >
                    <input
                      type="radio"
                      name="preferred_contact_method"
                      value={option}
                      required
                      className="h-4 w-4 accent-brand-accent"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </fieldset>

          <fieldset className="grid gap-5 md:grid-cols-2">
            <legend className="mb-1 text-lg font-semibold text-brand-dark">Geography</legend>
            <div className="md:col-span-2">
              <label htmlFor="service_area_fit" className={labelClassName}>
                Are you local to the Philadelphia and South Jersey service area?
              </label>
              <select
                id="service_area_fit"
                name="service_area_fit"
                defaultValue=""
                required
                className={inputClassName}
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>I am local to the Philadelphia or South Jersey service area</option>
                <option>I am outside the area but open to remote coaching</option>
                <option>I am not sure and want guidance on the best fit</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="location" className={labelClassName}>
                City or area
              </label>
              <input id="location" name="location" autoComplete="address-level2" className={inputClassName} />
            </div>
          </fieldset>

          <fieldset className="grid gap-5">
            <legend className="mb-1 text-lg font-semibold text-brand-dark">Coaching fit</legend>
            <div>
              <label htmlFor="heard_about" className={labelClassName}>
                Where did you find our services?
              </label>
              <input
                id="heard_about"
                name="heard_about"
                placeholder="Referral, Instagram, Google, physician, friend, other"
                className={inputClassName}
              />
            </div>
            <div>
              <label htmlFor="glp1_status" className={labelClassName}>
                GLP-1 status
              </label>
              <select id="glp1_status" name="glp1_status" defaultValue="" required className={inputClassName}>
                <option value="" disabled>
                  Select one
                </option>
                {fitFormStatusOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="primary_goal" className={labelClassName}>
                Primary goal
              </label>
              <select id="primary_goal" name="primary_goal" defaultValue="" required className={inputClassName}>
                <option value="" disabled>
                  Select one
                </option>
                {fitFormGoalOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="biggest_challenge" className={labelClassName}>
                Biggest challenge right now
              </label>
              <select
                id="biggest_challenge"
                name="biggest_challenge"
                defaultValue=""
                required
                className={inputClassName}
              >
                <option value="" disabled>
                  Select one
                </option>
                {fitFormChallengeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </fieldset>

          <fieldset className="grid gap-5 md:grid-cols-2">
            <legend className="mb-1 text-lg font-semibold text-brand-dark">Readiness</legend>
            <div>
              <label htmlFor="coaching_openness" className={labelClassName}>
                How open are you to coaching, correction, and feedback?
              </label>
              <p className="mb-3 text-sm text-brand-muted">0 = I prefer doing things my way. 10 = I want structure and feedback.</p>
              <select
                id="coaching_openness"
                name="coaching_openness"
                defaultValue=""
                required
                className={inputClassName}
              >
                <option value="" disabled>
                  Select 0-10
                </option>
                {scaleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="readiness_level" className={labelClassName}>
                How ready are you to follow through on a plan right now?
              </label>
              <p className="mb-3 text-sm text-brand-muted">0 = not ready. 10 = ready to take ownership and be consistent.</p>
              <select id="readiness_level" name="readiness_level" defaultValue="" required className={inputClassName}>
                <option value="" disabled>
                  Select 0-10
                </option>
                {scaleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="checkin_tolerance" className={labelClassName}>
                What sounds most true about check-ins and process?
              </label>
              <select
                id="checkin_tolerance"
                name="checkin_tolerance"
                defaultValue=""
                required
                className={inputClassName}
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Weekly check-ins and accountability would help me</option>
                <option>I can handle light structure but do not want a rigid process</option>
                <option>I tend to resist check-ins and accountability</option>
              </select>
            </div>
          </fieldset>

          <fieldset className="grid gap-5 md:grid-cols-2">
            <legend className="mb-1 text-lg font-semibold text-brand-dark">Training and limitations</legend>
            <div>
              <label htmlFor="activity_level" className={labelClassName}>
                Current training or activity level
              </label>
              <select id="activity_level" name="activity_level" defaultValue="" required className={inputClassName}>
                <option value="" disabled>
                  Select one
                </option>
                {fitFormActivityOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pain_limitations" className={labelClassName}>
                Pain, injury, or limitations
              </label>
              <select id="pain_limitations" name="pain_limitations" defaultValue="" required className={inputClassName}>
                <option value="" disabled>
                  Select one
                </option>
                {fitFormPainOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="limitation_details" className={labelClassName}>
                Anything we should know about pain, injury, movement, or exercise history?
              </label>
              <textarea
                id="limitation_details"
                name="limitation_details"
                rows={4}
                className={`${inputClassName} resize-y`}
              />
            </div>
          </fieldset>

          <fieldset className="grid gap-5">
            <legend className="mb-1 text-lg font-semibold text-brand-dark">Program preference</legend>
            <div>
              <label htmlFor="preferred_tier" className={labelClassName}>
                Preferred program tier
              </label>
              <select
                id="preferred_tier"
                name="preferred_tier"
                defaultValue="not-sure"
                className={inputClassName}
              >
                {fitFormTierOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="anything_else" className={labelClassName}>
                Anything else we should know?
              </label>
              <textarea
                id="anything_else"
                name="anything_else"
                rows={5}
                className={`${inputClassName} resize-y`}
              />
            </div>
          </fieldset>

          <div className="border-t border-brand-muted/10 pt-6">
            <p className="mb-5 text-sm leading-relaxed text-brand-muted">
              Thank you for taking the first step toward a more structured, supported, and sustainable approach to
              body composition.
            </p>
            <Button type="submit" size="lg" className="w-full whitespace-normal px-6 text-center leading-snug md:w-auto">
              Apply for Coaching
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
