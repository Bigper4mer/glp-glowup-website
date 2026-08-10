import { getImageProps } from "next/image";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { shortFitUrl } from "@/lib/site-links";
import { primaryCtaLabel } from "@/lib/site-links";
import {
  coachingMethod,
  hiddenChallengeParagraphs,
  homeFaqItems,
  packageTiers,
} from "@/lib/site-content";

const imageCommon = {
  alt: "GLP GlowUp body composition coaching artwork",
  sizes: "100vw",
};

const {
  props: { srcSet: desktopHeroSrcSet },
} = getImageProps({
  ...imageCommon,
  src: "/images/AU6V7.webp",
  width: 1168,
  height: 784,
  quality: 85,
});

const {
  props: { srcSet: mobileHeroSrcSet, ...mobileHeroProps },
} = getImageProps({
  ...imageCommon,
  src: "/images/hero-mobile.webp",
  width: 1080,
  height: 1920,
  quality: 82,
});

function PackageCard({ tier }: { tier: (typeof packageTiers)[number] }) {
  return (
    <article
      data-tier={tier.id}
      className={`relative flex h-full min-w-0 flex-col border-t px-1 py-8 lg:px-7 ${
        tier.featured
          ? "border-brand-accent lg:-mt-5 lg:border lg:bg-brand-paper lg:px-8 lg:py-12 lg:shadow-[var(--shadow-soft)]"
          : "border-brand-line"
      }`}
    >
      <div className="mb-8">
        <p className="editorial-label">{tier.subtitle}</p>
        <div className="mt-3 flex items-end justify-between gap-2 border-b border-brand-line pb-6 sm:gap-4">
          <h3 className="min-w-0 font-serif text-3xl font-semibold tracking-[-0.035em] text-brand-dark sm:text-4xl">
            {tier.title}
          </h3>
          <p className="shrink-0 text-right text-2xl font-semibold tracking-[-0.04em] text-brand-dark sm:text-3xl">
            {tier.popularityLabel ? (
              <span className="mb-1.5 block rounded-full bg-brand-accent px-1.5 py-0.5 text-[0.5rem] font-bold tracking-[0.06em] text-white">
                {tier.popularityLabel}
              </span>
            ) : null}
            {tier.price}
            <span className="block text-xs font-medium tracking-normal text-brand-muted">
              per month
            </span>
          </p>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-brand-muted">
          <span className="font-semibold text-brand-dark">Best for you if: </span>
          {tier.bestFor}
        </p>
      </div>

      <ul className="mb-8 flex-grow space-y-3.5">
        {tier.summary.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-brand-dark">
            <Check aria-hidden="true" className="mt-1 h-4 w-4 flex-none text-brand-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <details className="group mb-6 border-y border-brand-line py-4">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-md font-semibold text-brand-dark [&::-webkit-details-marker]:hidden">
          View Complete Program Details
          <ChevronDown
            aria-hidden="true"
            className="h-4 w-4 text-brand-accent transition-transform group-open:rotate-180"
          />
        </summary>
        <div className="space-y-5 pb-2 pt-5">
          {tier.details.map((detail) => (
            <div key={detail.heading}>
              <h4 className="text-sm font-semibold text-brand-dark">{detail.heading}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{detail.body}</p>
            </div>
          ))}
          {tier.recoveryOptions ? (
            <div>
              <h4 className="text-sm font-semibold text-brand-dark">Recovery & Performance Credit Options</h4>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-brand-muted">
                {tier.recoveryOptions.map((option) => (
                  <li key={option}>• {option}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-brand-muted">{tier.recoveryNote}</p>
            </div>
          ) : null}
        </div>
      </details>

      <ButtonLink href={shortFitUrl} className="mt-auto w-full">
        Ask About {tier.title}
      </ButtonLink>
    </article>
  );
}

export function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <section aria-label="GLP GlowUp introduction" className="relative overflow-hidden bg-brand-dark">
          <div className="relative mt-0 h-[300px] w-full sm:h-[500px] md:h-[560px] lg:h-[min(100svh,980px)]">
            <picture>
              <source media="(min-width: 1024px)" srcSet={desktopHeroSrcSet} />
              <source media="(max-width: 1023px)" srcSet={mobileHeroSrcSet} />
              <img
                {...mobileHeroProps}
                alt="GLP GlowUp body composition coaching artwork"
                fetchPriority="high"
                className="h-full w-full object-cover object-[center_28%] lg:object-[62%_center]"
              />
            </picture>
          </div>
        </section>

        <section className="relative bg-brand-light px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="relative z-10 mx-auto -mt-8 grid max-w-6xl gap-10 border border-white/80 bg-brand-paper px-6 py-9 shadow-[var(--shadow-lifted)] sm:px-9 md:-mt-14 md:px-12 md:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="editorial-label">Philadelphia, South Jersey & Remote Coaching</p>
              <h1 className="text-balance mt-5 max-w-[17ch] font-serif text-[clamp(2.55rem,6.6vw,5.35rem)] font-medium leading-[0.96] tracking-[-0.052em] text-brand-dark">
                GLP medications can be a powerful starting point, but they are not the full plan.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted md:text-xl">
                GLP GlowUp gives you personalized strength training, protein-focused nutrition guidance, and
                consistent support to help you lose fat, protect lean muscle, and build confidence in the body you are
                creating.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={shortFitUrl} size="lg">
                  {primaryCtaLabel}
                </ButtonLink>
                <ButtonLink href="#programs" size="lg" variant="secondary">
                  Explore Programs
                </ButtonLink>
              </div>
            </div>

            <div className="border-t border-brand-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
              {[
                [
                  "Protect the Strength That Supports Your Future",
                  "Personalized strength training helps you protect lean muscle, move with confidence, and stay capable as your body changes.",
                ],
                [
                  "A Plan Built Around Your Life",
                  "Choose remote, hybrid, or in-person support designed around your schedule, experience, and current needs.",
                ],
                [
                  "Guidance From a Real Coach",
                  "Your progress is reviewed personally by Rocco, with clear guidance and thoughtful adjustments - not a generic app sequence.",
                ],
              ].map(([title, description]) => (
                <div key={title} className="border-b border-brand-line py-5 first:pt-0 last:border-0">
                  <p className="font-serif text-xl font-semibold text-brand-dark">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-brand-line bg-brand-paper">
          <div className="mx-auto grid max-w-7xl divide-y divide-brand-line px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
            <div className="flex gap-4 py-7 md:px-7">
              <ShieldCheck aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-brand-accent" />
              <div>
                <p className="font-semibold text-brand-dark">Personally Led by Rocco Gervasi</p>
                <p className="mt-1 text-sm text-brand-muted">DPT, CSCS, VRC</p>
              </div>
            </div>
            <div className="flex gap-4 py-7 md:px-7">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-brand-accent" />
              <div>
                <p className="font-semibold text-brand-dark">In-Person Support Close to Home</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                  Available throughout Philadelphia, Cherry Hill, Moorestown, Haddonfield, and the surrounding South
                  Jersey area.
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-7 md:px-7">
              <Monitor aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-brand-accent" />
              <div>
                <p className="font-semibold text-brand-dark">Personalized Remote Coaching</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                  Receive the same clear strategy and personal support from wherever you live.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-24">
            <div className="relative aspect-[4/5] overflow-hidden lg:order-2">
              <Image
                src="/images/woman_exercising.webp"
                alt="Woman strength training"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 55vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/28 to-transparent" />
            </div>
            <div>
              <p className="editorial-label">The Part Most Programs Overlook</p>
              <h2 className="text-balance mt-5 font-serif text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-brand-dark md:text-6xl">
                {hiddenChallengeParagraphs[0]}
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-brand-muted">
                {hiddenChallengeParagraphs.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="method" className="scroll-mt-24 bg-brand-dark px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="editorial-label !text-brand-accent-soft">How GLP GlowUp Supports You</p>
                <h2 className="text-balance mt-5 font-serif text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
                  A plan that changes with you.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-white/65 lg:justify-self-end">
                Your appetite, energy, schedule, and needs may shift throughout the process. Your coaching should
                adjust with them - not force you into a rigid template that no longer fits.
              </p>
            </div>

            <div className="grid md:grid-cols-2">
              {coachingMethod.map((step) => (
                <article
                  key={step.number}
                  className="grid grid-cols-[3rem_1fr] gap-5 border-b border-white/15 py-9 md:odd:border-r md:odd:pr-10 md:even:pl-10"
                >
                  <p className="font-serif text-2xl text-brand-accent-soft">{step.number}</p>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/65">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="scroll-mt-24 bg-brand-light px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="editorial-label">Program Options</p>
              <h2 className="text-balance mt-5 font-serif text-4xl font-medium tracking-[-0.04em] text-brand-dark md:text-6xl">
                Choose the support that feels right for you.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-brand-muted">
                Every program gives you a personalized plan and regular guidance. The difference is how much in-person
                coaching and ongoing access you want.
              </p>
            </div>
            <div className="grid items-stretch gap-8 lg:grid-cols-3 lg:gap-0">
              {packageTiers.map((tier) => (
                <PackageCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-paper px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
            <div className="relative mx-auto aspect-[509/767] w-full max-w-[430px] overflow-hidden shadow-[var(--shadow-soft)]">
              <Image
                src="/images/rocco-gervasi-headshot-full.jpg"
                alt="Rocco Gervasi, founder of GLP GlowUp"
                fill
                className="object-contain"
                sizes="(max-width: 1023px) 430px, 34vw"
              />
            </div>
            <div>
              <p className="editorial-label">Meet Your Coach</p>
              <h2 className="text-balance mt-5 font-serif text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-brand-dark md:text-6xl">
                Expert guidance, delivered with genuine care.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-brand-muted">
                <p>
                  Rocco Gervasi, DPT, CSCS, VRC combines physical therapy, strength and conditioning, movement
                  analysis, and more than 30 years of coaching experience to help each client feel understood,
                  supported, and confident in the plan.
                </p>
                <p>
                  The goal is not to hand you a generic program and hope it works. It is to understand your body, your
                  challenges, and your life - then integrate proven and successful programs, built on a clear plan,
                  weekly accountability, and step-by-step guidance - so you always know exactly what to do next.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-brand-dark underline decoration-brand-accent/55 underline-offset-8 hover:text-brand-accent"
              >
                Meet Rocco & Learn Why He Created GLP GlowUp
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="editorial-label">Questions Are Welcome</p>
              <h2 className="text-balance mt-5 font-serif text-4xl font-medium tracking-[-0.04em] text-brand-dark md:text-5xl">
                Clear answers, so you can move forward with confidence.
              </h2>
              <Link
                href="/faq"
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-brand-dark underline decoration-brand-accent/55 underline-offset-8 hover:text-brand-accent"
              >
                View All Frequently Asked Questions
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <Accordion items={homeFaqItems} className="border-t border-brand-line" />
          </div>
        </section>

        <section className="bg-brand-accent px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">Start With a Conversation</p>
              <h2 className="text-balance mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
                You have already started the journey. Let us make it stronger.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
                Tell us where you are, what you are working toward, and what has been hardest to navigate. We will help
                you determine the level of support that fits your needs.
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
