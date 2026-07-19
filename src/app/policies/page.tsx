import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { shortFitUrl } from "@/lib/site-links";
import { policySections } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Service Area, Policies & Billing",
  description:
    "Review GLP GlowUp coaching policies, Philadelphia and South Jersey service-area details, scheduling, billing, cancellation terms, and the scope of remote and in-person GLP-1 coaching support.",
  canonical: "/policies",
});

function getPolicyId(title: string) {
  if (title === "Scope of Services & Safety") {
    return "scope-and-privacy";
  }

  if (title === "Application Data & Privacy") {
    return "application-data";
  }

  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function PoliciesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-brand-paper pt-20">
        <section className="border-b border-brand-line bg-brand-light px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="editorial-label">Policies & service standards</p>
              <h1 className="text-balance mt-5 max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-brand-dark md:text-7xl">
                Clear expectations for coaching, scheduling, billing, and privacy.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-brand-muted lg:justify-self-end">
              Review these standards before applying so the service area, commitment, communication, and coaching scope
              are easy to understand.
            </p>
          </div>
        </section>

        <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.34fr_0.66fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="editorial-label">On this page</p>
              <nav aria-label="Policy sections" className="mt-5 border-t border-brand-line">
                {policySections.map((section) => (
                  <Link
                    key={section.title}
                    href={`#${getPolicyId(section.title)}`}
                    className="block border-b border-brand-line py-3 text-sm font-semibold leading-snug text-brand-dark hover:text-brand-accent"
                  >
                    {section.title}
                  </Link>
                ))}
              </nav>
            </aside>

            <div className="space-y-16">
              {policySections.map((section, index) => (
                <section
                  key={section.title}
                  id={getPolicyId(section.title)}
                  className="scroll-mt-28 border-t border-brand-line pt-8"
                >
                  <p className="font-serif text-xl text-brand-accent">0{index + 1}</p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.035em] text-brand-dark md:text-4xl">
                    {section.title}
                  </h2>
                  <ul className="mt-7 space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-4 text-brand-muted">
                        <Check aria-hidden="true" className="mt-1 h-4 w-4 flex-none text-brand-accent" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-brand-dark px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent-soft">Confirm your fit</p>
              <h2 className="text-balance mt-4 max-w-3xl font-serif text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Tell us your location, goals, and preferred level of support.
              </h2>
            </div>
            <ButtonLink href={shortFitUrl} size="lg" className="shrink-0">
              Apply for Coaching
            </ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
