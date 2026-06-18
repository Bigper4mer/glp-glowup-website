import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Monitor } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { getFitFormHref } from "@/lib/site-links";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Rocco Gervasi, DPT, CSCS, VRC",
  description:
    "Learn how GLP GlowUp approaches GLP-1 body composition coaching in Philadelphia and South Jersey through strength training, movement analysis, nutrition guidance, and long-term accountability.",
  canonical: "/about",
});

const coachingStandards = [
  "Understand the person before building a coaching strategy.",
  "Prioritize strength, movement quality, and practical execution.",
  "Use clear expectations and consistent feedback instead of hype.",
  "Keep medication decisions with the client and prescribing clinician.",
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-brand-paper pt-20">
        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
            <div>
              <p className="editorial-label">About GLP GlowUp</p>
              <h1 className="text-balance mt-5 font-serif text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-brand-dark md:text-7xl">
                Coaching built at the intersection of clinical insight and real-world performance.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-brand-muted">
                GLP GlowUp was created for people who want more than a lower number on the scale. The work centers on
                strength, body composition, movement quality, and the systems that make progress easier to sustain.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={getFitFormHref("about")} size="lg">
                  Apply for Coaching
                </ButtonLink>
                <ButtonLink href="/#programs" size="lg" variant="secondary">
                  View Programs
                </ButtonLink>
              </div>
            </div>

            <div className="relative mx-auto aspect-[3/4] w-full max-w-[470px] overflow-hidden shadow-[var(--shadow-lifted)] lg:ml-auto">
              <Image
                src="/images/rocco-gervasi-headshot.webp"
                alt="Rocco Gervasi, DPT, CSCS, VRC"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 470px, 38vw"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-brand-line bg-brand-light px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="editorial-label">Founder credentials</p>
              <h2 className="text-balance mt-5 font-serif text-4xl font-medium tracking-[-0.04em] text-brand-dark md:text-5xl">
                Rocco Gervasi, DPT, CSCS, VRC
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-brand-muted">
              <p>
                Rocco brings a physical therapy and strength-and-conditioning perspective to body transformation. His
                coaching lens considers how a person moves, trains, recovers, and follows through, not only what the
                scale reports.
              </p>
              <p>
                That perspective is especially relevant during GLP-1-supported weight loss, when changes in appetite,
                energy, schedule, and confidence can make a generic fitness plan difficult to apply.
              </p>
              <p>
                GLP GlowUp is coaching, not medication management. Rocco works alongside the decisions clients make
                with their qualified healthcare professionals and focuses on the training, nutrition habits, movement,
                and accountability within the coaching scope.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 border-b border-brand-line pb-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="editorial-label">The coaching philosophy</p>
                <h2 className="text-balance mt-5 font-serif text-4xl font-medium tracking-[-0.04em] text-brand-dark md:text-6xl">
                  High standards without a one-size-fits-all system.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-brand-muted lg:justify-self-end">
                The plan should be specific enough to create direction and flexible enough to survive an actual week.
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              {coachingStandards.map((standard, index) => (
                <article
                  key={standard}
                  className="flex gap-5 border-b border-brand-line py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10"
                >
                  <span className="font-serif text-2xl text-brand-accent">0{index + 1}</span>
                  <p className="text-lg leading-relaxed text-brand-dark">{standard}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-dark px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div className="flex gap-5 border-b border-white/15 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">
              <MapPin aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-brand-accent-soft" />
              <div>
                <h2 className="font-serif text-3xl font-semibold">Philadelphia & South Jersey</h2>
                <p className="mt-3 leading-relaxed text-white/65">
                  In-person and hybrid coaching is available across the stated local service area, generally within a
                  30-mile radius of Philadelphia, Cherry Hill, Moorestown, and Haddonfield.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:pl-10">
              <Monitor aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-brand-accent-soft" />
              <div>
                <h2 className="font-serif text-3xl font-semibold">Remote coaching</h2>
                <p className="mt-3 leading-relaxed text-white/65">
                  Foundation provides the same strategic coaching framework for clients outside the local area without
                  requiring in-person appointments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-accent px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">A selective next step</p>
              <h2 className="text-balance mt-4 max-w-3xl font-serif text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                If the philosophy fits, tell us what support would make the biggest difference.
              </h2>
            </div>
            <ButtonLink
              href={getFitFormHref("about")}
              size="lg"
              className="shrink-0 border-white bg-white text-brand-dark shadow-none hover:bg-brand-light"
            >
              Apply for Coaching
            </ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
