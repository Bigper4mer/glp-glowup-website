import type { Metadata } from "next";
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

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main className="flex-grow bg-brand-light pt-28">
        <section className="px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">More FAQ</p>
              <h1 className="mb-5 font-serif text-4xl font-bold text-brand-dark md:text-6xl">
                Questions About GLP-1 Coaching Before You Start
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-muted">
                Clear answers about GLP-1 body composition coaching, lean muscle protection, remote support, and
                in-person coaching options in Philadelphia and South Jersey.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-muted/10 bg-white p-6 shadow-sm md:p-10">
              <Accordion items={fullFaqItems} />
            </div>

            <div className="mt-12 rounded-2xl bg-brand-dark p-8 text-center text-white">
              <h2 className="mb-3 font-serif text-3xl font-bold">Still have questions?</h2>
              <p className="mx-auto mb-6 max-w-2xl text-white/70">
                Tell us about your goals, current GLP-1 status, and whether you want local in-person support or remote
                coaching.
              </p>
              <ButtonLink href={getFitFormHref("faq")} className="whitespace-normal px-6 text-center leading-snug">
                Apply for Coaching
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
