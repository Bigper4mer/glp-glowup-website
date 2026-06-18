import type { Metadata } from "next";
import Link from "next/link";
import { Check, Mail } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { contactLinks } from "@/lib/site-links";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Thank You",
  description:
    "Confirmation that your GLP GlowUp fit form was received and is under manual review before the next step.",
  canonical: "/fit-form/thank-you",
  robots: {
    index: false,
    follow: false,
  },
});

const nextSteps = [
  "Rocco reviews your answers personally.",
  "If the fit looks aligned, you will receive an invitation for a short Fit Call.",
  "The call clarifies your goals and the most appropriate program level.",
];

export default function FitFormThankYouPage() {
  return (
    <>
      <Navigation />
      <main className="bg-brand-light pt-20">
        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl overflow-hidden bg-brand-paper shadow-[var(--shadow-soft)] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
              <p className="editorial-label">Application received</p>
              <h1 className="text-balance mt-5 font-serif text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-brand-dark md:text-6xl">
                Thank you for sharing where you are and what you need.
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-brand-muted">
                Your form is now in the personal review queue. This is not an automated booking funnel; the next step
                is based on fit, service area, and the type of support that would be most useful.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/">Return Home</ButtonLink>
                <ButtonLink href={contactLinks.general} variant="secondary">
                  Contact GLP GlowUp
                </ButtonLink>
              </div>
            </div>

            <aside className="bg-brand-dark px-7 py-12 text-white sm:px-12 lg:px-14 lg:py-16">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent-soft">What happens next</p>
              <ol className="mt-8 space-y-7">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-serif text-2xl text-brand-accent-soft">0{index + 1}</span>
                    <p className="leading-relaxed text-white/75">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-10 border-t border-white/15 pt-7">
                <div className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-brand-accent-soft" />
                  <p className="text-sm leading-relaxed text-white/65">
                    Watch the email address you provided for the follow-up. General questions can be sent through the
                    contact link while the form is under review.
                  </p>
                </div>
                <Link
                  href="/policies"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-white underline decoration-brand-accent-soft/60 underline-offset-6"
                >
                  <Check aria-hidden="true" className="h-4 w-4" />
                  Review program policies
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
