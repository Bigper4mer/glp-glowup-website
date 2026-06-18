"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { Accordion } from "@/components/ui/accordion";
import { StatsCounter } from "@/components/ui/stats-counter";
import { cn } from "@/lib/utils";
import { getFitFormHref } from "@/lib/site-links";
import {
  hiddenChallengeParagraphs,
  homeFaqItems,
  packageTiers,
  solutionCards,
} from "@/lib/site-content";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
  },
};

function PackageCard({ tier }: { tier: (typeof packageTiers)[number] }) {
  const href = getFitFormHref("package", tier.id as "foundation" | "performance" | "concierge");

  return (
    <article
      data-tier={tier.id}
      className={cn(
        "relative flex flex-col rounded-2xl border p-6 md:p-8 shadow-sm transition-shadow",
        tier.featured
          ? "border-brand-accent bg-white shadow-xl lg:-translate-y-4"
          : "border-brand-muted/10 bg-brand-light"
      )}
    >
      {tier.featured && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F4C43] px-4 py-1 text-sm font-semibold text-white">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8F4C43]">
          {tier.subtitle}
        </p>
        <h3 className="mb-3 font-serif text-3xl font-bold text-brand-dark">{tier.title}</h3>
        <div className="mb-5 text-4xl font-bold text-brand-dark">
          {tier.price}
          <span className="text-lg font-normal text-brand-muted">/month</span>
        </div>
        <p className="rounded-xl bg-white/70 p-4 text-sm leading-relaxed text-brand-dark">
          <span className="font-semibold">Best for: </span>
          {tier.bestFor}
        </p>
      </div>

      <ul className="mb-6 flex-grow space-y-3">
        {tier.summary.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
            <span className="text-sm leading-relaxed text-brand-dark md:text-base">{feature}</span>
          </li>
        ))}
      </ul>

      <details className="group mb-5">
        <summary className="flex w-full cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-brand-accent/50 px-5 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-accent/10 [&::-webkit-details-marker]:hidden">
          Learn More
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
        </summary>

        <div className="mt-5 space-y-4 rounded-2xl border border-brand-muted/10 bg-white/80 p-5">
          {tier.details.map((detail) => (
            <div key={detail.heading}>
              <h4 className="mb-1 text-sm font-semibold text-brand-dark">{detail.heading}</h4>
              <p className="text-sm leading-relaxed text-brand-muted">{detail.body}</p>
            </div>
          ))}
          {tier.recoveryOptions && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-brand-dark">Recovery Credit Options</h4>
              <ul className="space-y-2 text-sm leading-relaxed text-brand-muted">
                {tier.recoveryOptions.map((option) => (
                  <li key={option}>- {option}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-brand-muted">{tier.recoveryNote}</p>
            </div>
          )}
        </div>
      </details>

      <ButtonLink
        href={href}
        className="mt-auto w-full whitespace-normal px-5 text-center leading-snug"
        variant={tier.featured ? "primary" : "secondary"}
      >
        Apply for Coaching
      </ButtonLink>
    </article>
  );
}

export function HomePage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        <section
          className="relative overflow-hidden bg-brand-dark"
          style={{ backgroundColor: "#2C2A29" }}
        >
          <div className="relative min-h-[52svh] sm:min-h-[58svh] md:min-h-[78svh] lg:min-h-[84svh]">
            <Image
              src="/images/hero-mobile.webp"
              alt="GLP GlowUp transformation"
              fill
              className="object-cover object-[center_28%] md:hidden"
              sizes="(max-width: 767px) 100vw, 0px"
              priority
            />
            <Image
              src="/images/AU6V7.webp"
              alt="GLP GlowUp transformation"
              fill
              className="hidden object-cover object-[62%_center] md:block"
              sizes="(min-width: 768px) 100vw, 0px"
              priority
            />

            <div className="absolute inset-0 pointer-events-none overflow-hidden motion-reduce:hidden">
              <span className="sparkle-dot" style={{ top: "15%", left: "12%", animation: "var(--animate-sparkle-1)" }} />
              <span className="sparkle-dot" style={{ top: "25%", left: "72%", animation: "var(--animate-sparkle-2)" }} />
              <span className="sparkle-dot" style={{ top: "55%", left: "85%", animation: "var(--animate-sparkle-3)" }} />
              <span className="sparkle-dot" style={{ top: "40%", left: "8%", animation: "var(--animate-sparkle-4)" }} />
              <span className="sparkle-dot" style={{ top: "70%", left: "60%", animation: "var(--animate-sparkle-5)" }} />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-brand-dark/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_72%,rgba(44,42,41,0.18),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(253,248,245,0.08),transparent_18%)]" />
          </div>
        </section>

        <section className="relative z-20 bg-brand-light px-4 pb-18 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mx-auto -mt-10 max-w-6xl rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(253,248,245,0.9))] p-8 shadow-[0_30px_80px_rgba(44,42,41,0.12)] backdrop-blur md:-mt-14 md:p-12"
          >
            <div className="grid gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-start">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  Philadelphia & South Jersey GLP-1 Coaching
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {[
                    "Strength-first coaching",
                    "Remote and in-person options",
                    "Lean muscle protection",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-brand-accent/12 bg-brand-light px-3 py-1.5 text-xs font-medium text-brand-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <h1 className="mb-6 max-w-[12ch] font-serif text-4xl font-medium leading-[0.96] text-brand-dark md:text-[4.35rem]">
                  GLP-1 Body Composition Coaching
                  <span className="mt-3 block text-[0.48em] font-medium leading-[1.08] text-brand-accent">
                    for Philadelphia & South Jersey
                  </span>
                </h1>
                <div className="space-y-4 text-lg leading-relaxed text-brand-muted md:text-xl">
                  <p>
                    GLP GlowUp is designed for people who want more than a lower number on the scale. It is a premium
                    coaching system built to support fat loss while protecting lean muscle, strength, consistency, and
                    confidence.
                  </p>
                  <p>
                    You get a clear strategy for training, protein, recovery, and accountability instead of trying to
                    piece together results from medication-only advice.
                  </p>
                </div>
                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href={getFitFormHref("hero")}
                    size="lg"
                    className="whitespace-normal px-6 text-center leading-snug"
                  >
                    Apply for Coaching
                  </ButtonLink>
                  <ButtonLink
                    href="#programs"
                    size="lg"
                    variant="secondary"
                    className="whitespace-normal px-6 text-center leading-snug"
                    onClick={() => toast("Scrolling to programs", { duration: 1500 })}
                  >
                    Explore the Program
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title: "Protect lean muscle",
                    body: "Strength-preserving training and protein-first guidance help keep body composition front and center.",
                  },
                  {
                    title: "Support that fits real life",
                    body: "Choose remote coaching or higher-touch in-person support across Philadelphia and South Jersey.",
                  },
                  {
                    title: "Stay accountable",
                    body: "Weekly adjustments keep the plan practical, measurable, and easier to sustain.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-brand-accent/12 bg-white/72 p-5 shadow-sm"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted md:text-base">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <StatsCounter />

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                <motion.p variants={fadeInUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  The Hidden Challenge with GLP-1 Weight Loss
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mb-6 font-serif text-4xl font-bold text-brand-dark">
                  {hiddenChallengeParagraphs[0]}
                </motion.h2>
                <motion.div variants={fadeInUp} className="space-y-5 text-lg text-brand-muted">
                  {hiddenChallengeParagraphs.slice(1).map((paragraph) => (
                    <p
                      key={paragraph}
                      className={cn(
                        paragraph === "We do not." && "text-xl font-semibold text-brand-dark",
                        paragraph.startsWith("Because real transformation") && "font-medium text-brand-dark"
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[520px] overflow-hidden rounded-2xl shadow-2xl md:h-[640px]"
              >
                <Image
                  src="/images/woman_exercising.webp"
                  alt="Transformation strategy"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-brand-light py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-brand-dark">GLP GlowUp Solution</h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-brand-muted">
                A guided GLP-1 body composition coaching strategy built to support fat loss, protect lean muscle, build
                confidence, and help you sustain your results for life.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {solutionCards.map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-4xl text-center text-lg font-medium leading-relaxed text-brand-dark">
              No guesswork. Just a clear weekly rhythm built on strength training during GLP-1 weight loss,
              protein-first guidance, accountability, and step-by-step adjustments so you always know what to do next.
            </p>
          </div>
        </section>

        <section className="bg-brand-dark py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-white">Who GLP GlowUp is For</h2>
              <p className="text-xl text-white/70">
                This program is designed for people who want more structure than a medication-only approach can offer.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {[
                "Using GLP-1s and want coaching that prioritizes lean muscle protection, strength, and sustainable habits.",
                "Based in Philadelphia or South Jersey and looking for remote coaching, hybrid support, or in-person guidance.",
                "Busy professionals who need clear structure, practical accountability, and a plan they can actually follow.",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <CheckCircle2 className="mb-6 h-10 w-10 text-brand-accent" />
                  <p className="text-lg leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-brand-dark">Program Options</h2>
              <p className="mx-auto max-w-2xl text-xl leading-relaxed text-brand-muted">
                Choose the level of structure, accountability, and remote or in-person support that matches your goals.
              </p>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-3">
              {packageTiers.map((tier) => (
                <PackageCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-brand-light py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-brand-dark">Frequently Asked Questions</h2>
              <p className="text-lg text-brand-muted">
                The most common questions about GLP-1 body composition coaching before starting.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-muted/10 bg-white p-8 shadow-sm md:p-12">
              <Accordion items={homeFaqItems} />
            </div>

            <div className="mt-8 text-center">
              <Link href="/faq" className="font-semibold text-brand-dark underline decoration-brand-accent/50 underline-offset-4 transition-colors hover:text-brand-muted">
                View More FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
