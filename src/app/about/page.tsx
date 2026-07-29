import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Monitor } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { shortFitUrl } from "@/lib/site-links";
import { primaryCtaLabel } from "@/lib/site-links";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Rocco Gervasi, DPT, CSCS, VRC",
  description:
    "Learn how GLP GlowUp approaches GLP-1 body composition coaching in Philadelphia and South Jersey through strength training, movement analysis, nutrition guidance, and long-term accountability.",
  canonical: "/about",
});

const coachingStandards = [
  "Understand your goals, body, history, and real-life challenges before building your plan.",
  "Prioritize strength, confident movement, and strategies you can realistically follow.",
  "Provide honest feedback, clear expectations, and steady encouragement - without hype or judgment.",
  "Keep medication decisions with you and your prescribing clinician while supporting the habits and training within our coaching scope.",
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1} className="bg-brand-paper pt-20">
        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
            <div>
              <p className="editorial-label">Why GLP GlowUp Exists</p>
              <h1 className="text-balance mt-5 font-serif text-[clamp(2.8rem,7vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.05em] text-brand-dark">
                A more complete kind of support for your GLP journey.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-brand-muted">
                GLP GlowUp was created after seeing a growing gap in GLP care: people were losing weight, but many had
                no clear plan to protect their muscle, rebuild strength, or sustain their progress. This program brings
                those missing pieces together through personalized coaching and genuine support.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={shortFitUrl} size="lg">
                  {primaryCtaLabel}
                </ButtonLink>
                <ButtonLink href="/#programs" size="lg" variant="secondary">
                  Explore Programs
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
              <p className="editorial-label">Meet Your Coach</p>
              <h2 className="text-balance mt-5 font-serif text-4xl font-medium tracking-[-0.04em] text-brand-dark md:text-5xl">
                Rocco Gervasi, DPT, CSCS, VRC
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-brand-muted">
              <p>
                Rocco combines doctorate-level expertise in physical therapy with more than 30 years of strength and
                conditioning, movement analysis, and real-world coaching to deliver a private, highly personalized
                body composition experience - designed to help you lose fat, preserve lean muscle, move better, and
                build results that last.
              </p>
              <p>
                As GLP medications became more common, Rocco noticed that many people were receiving support for
                medication and weight loss but very little guidance for strength training, protein, movement,
                recovery, or long-term independence.
              </p>
              <p>
                That gap became the reason for GLP GlowUp. The purpose is not simply to help you weigh less, but to
                help you become stronger, healthier, more capable, and better prepared to maintain the life you are
                working hard to create. Medication decisions remain with you and your prescribing clinician; GLP
                GlowUp focuses on training, nutrition habits, movement, recovery, and accountability within the
                coaching scope.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 border-b border-brand-line pb-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="editorial-label">How Rocco Coaches</p>
                <h2 className="text-balance mt-5 font-serif text-4xl font-medium tracking-[-0.04em] text-brand-dark md:text-6xl">
                  High standards, personalized to the person in front of me.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-brand-muted lg:justify-self-end">
                You deserve a plan that gives you clear direction while still making room for your body, schedule,
                responsibilities, and real life.
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
                <h2 className="font-serif text-3xl font-semibold">
                  In-Person Coaching in Philadelphia & South Jersey
                </h2>
                <p className="mt-3 leading-relaxed text-white/65">
                  In-person and hybrid coaching is available throughout the local service area, generally within a
                  30-mile radius of Philadelphia, Cherry Hill, Moorestown, and Haddonfield.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:pl-10">
              <Monitor aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-brand-accent-soft" />
              <div>
                <h2 className="font-serif text-3xl font-semibold">Remote Coaching</h2>
                <p className="mt-3 leading-relaxed text-white/65">
                  Foundation gives you the same personalized strategy, weekly guidance, and ongoing support from
                  outside the local area without requiring in-person appointments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-accent px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">Start With a Conversation</p>
              <h2 className="text-balance mt-4 max-w-3xl font-serif text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Tell us where you are and what kind of support would help most.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
                Share your goals, your current challenges, and what you hope to feel or accomplish. We will help you
                identify the most appropriate next step.
              </p>
            </div>
            <ButtonLink
              href={shortFitUrl}
              size="lg"
              className="shrink-0 border-white bg-white text-brand-dark shadow-none hover:bg-brand-light"
            >
              {primaryCtaLabel}
            </ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
