import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { contactLinks } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Confirmation that your GLP GlowUp fit form was received and is under manual review before the next step.",
  alternates: {
    canonical: "/fit-form/thank-you",
  },
};

export default function FitFormThankYouPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow bg-brand-light pt-28">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-[28px] border border-brand-muted/10 bg-white p-8 text-center shadow-sm md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">Thank you</p>
            <h1 className="mb-5 font-serif text-4xl font-bold text-brand-dark md:text-5xl">
              Thank you - we received your form.
            </h1>
            <p className="mx-auto mb-5 max-w-2xl text-lg leading-relaxed text-brand-muted">
              You took the first step toward a more structured, supported, and sustainable approach to body
              composition.
            </p>
            <p className="mx-auto mb-5 max-w-2xl text-lg leading-relaxed text-brand-muted">
              We&apos;ll review your answers and follow up with the next best step. If it looks like a good fit,
              we&apos;ll invite you to schedule a short Fit Call so we can clarify your goals, answer questions, and
              recommend the best program level.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-brand-muted">
              In the meantime, remember: this process is not about perfection. It is about building the right system
              - one that helps you lose fat, protect strength, and keep moving forward with confidence.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/" className="whitespace-normal px-6 text-center leading-snug">
                Return Home
              </ButtonLink>
              <ButtonLink
                href={contactLinks.general}
                variant="secondary"
                className="whitespace-normal px-6 text-center leading-snug"
              >
                Contact GLP GlowUp
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-brand-muted">
              General questions can also be sent through the contact link while your application is under review.
            </p>
            <p className="mt-2 text-sm text-brand-muted">
              <Link href="/policies" className="font-medium text-brand-dark underline decoration-brand-accent/50 underline-offset-4">
                Review program policies
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
