import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { Accordion } from "@/components/ui/accordion";
import { ButtonLink } from "@/components/ui/button";
import { emailLinks } from "@/lib/email-templates";
import { fullFaqItems } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about GLP GlowUp coaching, GLP-1 body recomposition, remote coaching, in-person sessions, and reimbursement policies.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow bg-brand-light pt-28">
        <section className="px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">More FAQ</p>
              <h1 className="mb-5 font-serif text-4xl font-bold text-brand-dark md:text-6xl">
                Questions Before You Start
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-muted">
                Clear answers about how GLP GlowUp supports fat loss, lean muscle protection, accountability, and
                in-person coaching options.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-muted/10 bg-white p-6 shadow-sm md:p-10">
              <Accordion items={fullFaqItems} />
            </div>

            <div className="mt-12 rounded-2xl bg-brand-dark p-8 text-center text-white">
              <h2 className="mb-3 font-serif text-3xl font-bold">Still have questions?</h2>
              <p className="mx-auto mb-6 max-w-2xl text-white/70">
                Send a quick note with your medication status, goals, and best times to connect.
              </p>
              <ButtonLink href={emailLinks.consultation} className="whitespace-normal px-6 text-center leading-snug">
                Book a Consult
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
