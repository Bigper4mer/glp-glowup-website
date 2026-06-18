"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fitFormActivityOptions,
  fitFormChallengeOptions,
  fitFormGoalOptions,
  fitFormPainOptions,
  fitFormStatusOptions,
  fitFormStepFields,
  fitFormTierOptions,
  fitFormName,
  getFitFormTierLabel,
  type FitFormTierValue,
} from "@/lib/fit-form";

const inputClassName =
  "w-full min-h-12 rounded-xl border border-brand-line bg-white px-4 py-3 text-base text-brand-dark outline-none transition placeholder:text-brand-muted/55 hover:border-brand-muted/45 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10";

const labelClassName = "mb-2 block text-sm font-semibold text-brand-dark";
const scaleOptions = Array.from({ length: 11 }, (_, index) => index.toString());

type FitFormPageProps = {
  initialSource: string;
  initialTier: FitFormTierValue;
  initialPagePath: string;
};

function isFormControl(
  element: Element
): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  );
}

export function FitFormPage({
  initialSource,
  initialTier,
  initialPagePath,
}: FitFormPageProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedTier, setSelectedTier] = useState<FitFormTierValue>(initialTier);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  function validateStep(targetStep: 1 | 2) {
    const form = formRef.current;

    if (!form) {
      return false;
    }

    const fieldNames = new Set(fitFormStepFields[targetStep]);
    const controls = Array.from(form.elements).filter(
      (element): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement =>
        isFormControl(element) && fieldNames.has(element.name as never)
    );
    const firstInvalid = controls.find((control) => !control.checkValidity());

    if (!firstInvalid) {
      return true;
    }

    if (step !== targetStep) {
      setStep(targetStep);
    }

    window.requestAnimationFrame(() => {
      firstInvalid.focus();
      firstInvalid.reportValidity();
    });
    return false;
  }

  function continueToStepTwo() {
    setSubmissionError("");

    if (!validateStep(1)) {
      return;
    }

    setStep(2);
    window.requestAnimationFrame(() => {
      document.getElementById("application-progress")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!validateStep(1)) {
      return;
    }

    if (!validateStep(2)) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      encodedData.append(key, typeof value === "string" ? value : value.name);
    }

    setSubmissionError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      router.push("/fit-form/thank-you");
    } catch (error) {
      console.error(error);
      setSubmissionError(
        "We could not send your application. Please check your connection and try again. If the issue continues, email hello@glpglowups.com."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-12 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:pt-16">
      <section className="lg:sticky lg:top-28 lg:self-start">
        <p className="editorial-label">Private coaching application</p>
        <h1 className="text-balance mt-5 font-serif text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-brand-dark md:text-6xl">
          Let&apos;s determine the right level of support.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-brand-muted">
          Share your goals, location, and current coaching needs. Rocco reviews each form personally before
          recommending the next step.
        </p>

        <div className="mt-9 border-y border-brand-line py-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-accent">
            Program you&apos;re exploring
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-brand-dark">
            {getFitFormTierLabel(selectedTier)}
          </p>
        </div>

        <div className="mt-8 hidden space-y-4 lg:block">
          {[
            "A focused two-step application, usually completed in a few minutes.",
            "A personal review rather than an automated booking decision.",
            "A Fit Call invitation only when the coaching fit looks aligned.",
          ].map((item) => (
            <div key={item} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
              <Check aria-hidden="true" className="mt-1 h-4 w-4 flex-none text-brand-accent" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-paper px-5 py-7 shadow-[var(--shadow-soft)] sm:px-8 sm:py-9 md:px-10">
        <div id="application-progress" className="scroll-mt-28 border-b border-brand-line pb-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-brand-dark">Step {step} of 2</p>
            <p className="text-sm text-brand-muted">
              {step === 1 ? "Your goals & fit" : "Coaching readiness"}
            </p>
          </div>
          <div
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={2}
            aria-valuenow={step}
            aria-label={`Application step ${step} of 2`}
            className="mt-4 h-1.5 overflow-hidden rounded-full bg-brand-line"
          >
            <div
              className="h-full rounded-full bg-brand-accent transition-[width] duration-300"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>
        </div>

        <form
          ref={formRef}
          id="fit-form-intake"
          name={fitFormName}
          method="POST"
          action="/__forms.html"
          noValidate
          onSubmit={handleSubmit}
          className="mt-8"
        >
          <input type="hidden" name="form-name" value={fitFormName} />
          <input type="hidden" name="cta_source" value={initialSource} />
          <input type="hidden" name="page_path" value={initialPagePath} />

          <div className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
          </div>

          <div className={step === 1 ? "space-y-9" : "hidden"} aria-hidden={step !== 1}>
            <fieldset className="grid gap-5 md:grid-cols-2">
              <legend className="mb-5 font-serif text-2xl font-semibold text-brand-dark">
                Contact details
              </legend>
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
                  Phone <span className="font-normal text-brand-muted">(optional)</span>
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClassName} />
              </div>
              <div className="md:col-span-2">
                <span className={labelClassName}>Preferred contact method</span>
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Email", "Text", "Call"].map((option) => (
                    <label
                      key={option}
                      className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-brand-line px-4 py-3 text-sm font-medium text-brand-dark transition hover:border-brand-accent"
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
              <legend className="mb-5 font-serif text-2xl font-semibold text-brand-dark">
                Location & coaching fit
              </legend>
              <div className="md:col-span-2">
                <label htmlFor="service_area_fit" className={labelClassName}>
                  Which service option best describes you?
                </label>
                <select id="service_area_fit" name="service_area_fit" defaultValue="" required className={inputClassName}>
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
                <input
                  id="location"
                  name="location"
                  autoComplete="address-level2"
                  required
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
              <div className="md:col-span-2">
                <label htmlFor="preferred_tier" className={labelClassName}>
                  Program you&apos;re most interested in
                </label>
                <select
                  id="preferred_tier"
                  name="preferred_tier"
                  defaultValue={initialTier}
                  onChange={(event) => setSelectedTier(event.target.value as FitFormTierValue)}
                  className={inputClassName}
                >
                  {fitFormTierOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>

            <div className="flex justify-end border-t border-brand-line pt-7">
              <Button type="button" size="lg" onClick={continueToStepTwo} className="w-full gap-2 sm:w-auto">
                Continue
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className={step === 2 ? "space-y-9" : "hidden"} aria-hidden={step !== 2}>
            <fieldset className="grid gap-5">
              <legend className="mb-5 font-serif text-2xl font-semibold text-brand-dark">
                What support would help most?
              </legend>
              <div>
                <label htmlFor="biggest_challenge" className={labelClassName}>
                  Biggest challenge right now
                </label>
                <select id="biggest_challenge" name="biggest_challenge" defaultValue="" required className={inputClassName}>
                  <option value="" disabled>
                    Select one
                  </option>
                  {fitFormChallengeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="coaching_openness" className={labelClassName}>
                    How valuable would coaching feedback and structure be right now?
                  </label>
                  <p className="mb-3 text-sm leading-relaxed text-brand-muted">
                    0 = I prefer a mostly independent plan. 10 = I want close feedback and structure.
                  </p>
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
                    How ready are you to follow through on a plan now?
                  </label>
                  <p className="mb-3 text-sm leading-relaxed text-brand-muted">
                    0 = I am exploring. 10 = I am ready to begin and be consistent.
                  </p>
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
              </div>
              <div>
                <label htmlFor="checkin_tolerance" className={labelClassName}>
                  What level of accountability sounds most useful?
                </label>
                <select id="checkin_tolerance" name="checkin_tolerance" defaultValue="" required className={inputClassName}>
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Weekly check-ins and clear accountability</option>
                  <option>Light structure with room for independence</option>
                  <option>I am still deciding what level of accountability I need</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="grid gap-5 md:grid-cols-2">
              <legend className="mb-5 font-serif text-2xl font-semibold text-brand-dark">
                Training & limitations
              </legend>
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
                  Relevant movement, pain, or exercise context{" "}
                  <span className="font-normal text-brand-muted">(optional)</span>
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
              <legend className="mb-5 font-serif text-2xl font-semibold text-brand-dark">
                Final details
              </legend>
              <div>
                <label htmlFor="heard_about" className={labelClassName}>
                  How did you hear about GLP GlowUp?{" "}
                  <span className="font-normal text-brand-muted">(optional)</span>
                </label>
                <input
                  id="heard_about"
                  name="heard_about"
                  placeholder="Referral, Google, physician, social media, other"
                  className={inputClassName}
                />
              </div>
              <div>
                <label htmlFor="anything_else" className={labelClassName}>
                  Anything else you would like us to know?{" "}
                  <span className="font-normal text-brand-muted">(optional)</span>
                </label>
                <textarea id="anything_else" name="anything_else" rows={5} className={`${inputClassName} resize-y`} />
              </div>
              <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-brand-line bg-brand-light/65 p-4 text-sm leading-relaxed text-brand-muted">
                <input
                  type="checkbox"
                  name="coaching_scope_consent"
                  value="I understand the coaching scope and application data use."
                  required
                  className="mt-1 h-4 w-4 flex-none accent-brand-accent"
                />
                <span>
                  I understand that GLP GlowUp provides coaching and does not prescribe or manage medication. I consent
                  to the use of my application information to review fit and respond to my inquiry, as described in the{" "}
                  <Link
                    href="/policies#scope-and-privacy"
                    className="font-semibold text-brand-dark underline decoration-brand-accent/50 underline-offset-4"
                  >
                    scope and privacy policies
                  </Link>
                  .
                </span>
              </label>
            </fieldset>

            {submissionError ? (
              <div role="alert" className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm leading-relaxed text-red-900">
                {submissionError}
              </div>
            ) : null}

            <div className="flex flex-col-reverse gap-3 border-t border-brand-line pt-7 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="button"
                size="lg"
                variant="secondary"
                onClick={() => {
                  setSubmissionError("");
                  setStep(1);
                }}
                className="gap-2"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Back
              </Button>
              <Button type="submit" size="lg" disabled={isSubmitting} className="gap-2">
                {isSubmitting ? "Sending Application..." : "Submit Application"}
                {!isSubmitting ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
              </Button>
            </div>

            <p className="flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-brand-muted">
              <LockKeyhole aria-hidden="true" className="h-3.5 w-3.5" />
              Your answers are used to review coaching fit and prepare for the next conversation.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
