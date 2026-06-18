import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { Accordion } from "@/components/ui/accordion";
import { ButtonLink } from "@/components/ui/button";
import { getFitFormHref } from "@/lib/site-links";
import { fullFaqItems } from "@/lib/site-content";
import { buildFaqSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "GLP-1 Coaching FAQ",
  description:
    "Read answers about GLP-1 body composition coaching, remote and in-person support, Philadelphia and South Jersey service-area fit, billing, and how GLP GlowUp protects lean muscle during weight loss.",
  canonical: "/faq",
});

const faqSchema = buildFaqSchema(fullFaqItems);

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting started",
    description: "What the coaching is, who it is for, and how it differs.",
    items: fullFaqItems.slice(0, 6),
  },
  {
    id: "coaching-experience",
    title: "The coaching experience",
    description: "Training, check-ins, hybrid support, and working around limitations.",
    items: fullFaqItems.slice(6, 11),
  },
  {
    id: "location-and-billing",
    title: "Location, access & billing",
    description: "Remote eligibility, in-person service area, insurance, and practical details.",
    items: fullFaqItems.slice(11),
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main className="bg-brand-light pt-20">
        <section className="border-b border-brand-line px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="editorial-label">Frequently asked questions</p>
              <h1 className="text-balance mt-5 max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-brand-dark md:text-7xl">
                Clear answers before you choose a coaching program.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-brand-muted lg:justify-self-end">
              Learn how the coaching works, where in-person support is available, and what stays within your medical
              provider’s scope.
            </p>
          </div>
        </section>

        <nav aria-label="FAQ categories" className="border-b border-brand-line bg-brand-paper">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-2 px-4 py-5 sm:px-6 lg:px-8">
            {faqCategories.map((category) => (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-dark underline decoration-brand-accent/40 underline-offset-6 hover:text-brand-accent"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl space-y-24">
            {faqCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-28 grid gap-10 border-t border-brand-line pt-10 lg:grid-cols-[0.65fr_1.35fr]"
              >
                <div>
                  <h2 className="font-serif text-3xl font-semibold tracking-[-0.035em] text-brand-dark md:text-4xl">
                    {category.title}
                  </h2>
                  <p className="mt-4 max-w-sm leading-relaxed text-brand-muted">{category.description}</p>
                </div>
                <Accordion items={category.items} idPrefix={`faq-${category.id}`} />
              </section>
            ))}
          </div>
        </div>

        <section className="bg-brand-dark px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent-soft">Still deciding?</p>
              <h2 className="text-balance mt-4 max-w-3xl font-serif text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Share your goals and we will recommend the most appropriate next step.
              </h2>
              <Link
                href="/policies"
                className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-white/75 underline decoration-brand-accent-soft/60 underline-offset-6 hover:text-white"
              >
                Review service area and policies
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <ButtonLink href={getFitFormHref("faq")} size="lg" className="shrink-0">
              Apply for Coaching
            </ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
