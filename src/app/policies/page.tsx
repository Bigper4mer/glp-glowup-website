import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { emailLinks } from "@/lib/email-templates";
import { policySections } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "GLP GlowUp program details, scheduling guidelines, service area, cancellation rules, billing terms, and cash-pay policies.",
  alternates: {
    canonical: "/policies",
  },
};

export default function PoliciesPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow bg-white pt-28">
        <section className="bg-brand-light px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">Policies</p>
            <h1 className="mb-5 font-serif text-4xl font-bold text-brand-dark md:text-6xl">
              Program Details & Guidelines
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-muted">
              A clear reference for scheduling, service area, communication, payments, and scope of coaching services.
            </p>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-6">
            {policySections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-brand-muted/10 bg-brand-light p-6 md:p-8">
                <h2 className="mb-5 font-serif text-2xl font-bold text-brand-dark">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-brand-muted">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-brand-dark p-8 text-center text-white">
            <h2 className="mb-3 font-serif text-3xl font-bold">Need to confirm fit or location?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-white/70">
              Reach out before enrolling if you have questions about in-person availability, travel, or program tier fit.
            </p>
            <ButtonLink href={emailLinks.consultation} className="whitespace-normal px-6 text-center leading-snug">
              Reach Out
            </ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
