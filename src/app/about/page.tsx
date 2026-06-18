import type { Metadata } from "next";
import Image from "next/image";
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

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow bg-white pt-28">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">About</p>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-brand-dark md:text-6xl">
                GLP-1 coaching built for strength, structure, and long-term follow-through.
              </h1>
              <div className="space-y-5 text-lg leading-relaxed text-brand-muted">
                <p>
                  GLP GlowUp was created for people who want more than a lower number on the scale. We treat GLP-1
                  weight loss like a body composition project: support fat loss, protect lean muscle, build strength,
                  and leave you with systems you can keep using after the initial phase.
                </p>
                <p>
                  For clients in Philadelphia and South Jersey, that means a premium coaching experience built around
                  strategic strength training, personalized nutrition guidance, movement quality, and ongoing
                  accountability so you are not left guessing while your body changes.
                </p>
                <p>
                  The goal is not hype or fast promises. It is a clinically informed, coaching-first system for busy
                  people who want clearer structure, safer progress, and more confidence in how they train during GLP-1
                  weight loss.
                </p>
              </div>
              <ButtonLink
                href={getFitFormHref("about")}
                className="mt-8 whitespace-normal px-6 text-center leading-snug"
              >
                Apply for Coaching
              </ButtonLink>
            </div>

            <div className="relative mx-auto aspect-[3/4] w-full max-w-[440px] overflow-hidden rounded-2xl shadow-2xl md:ml-auto">
              <Image
                src="/images/rocco-gervasi-headshot.webp"
                alt="Rocco Gervasi"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) calc(100vw - 2rem), 440px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-brand-light px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
              Led by Rocco Gervasi, DPT, CSCS, VRC
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-brand-muted">
              <p>
                Rocco brings a clinical and performance-minded lens to body transformation, combining physical therapy,
                strength and conditioning, and practical coaching systems for clients who want more than generic GLP-1
                weight loss advice.
              </p>
              <p>
                GLP GlowUp exists to help clients move through GLP-1 weight loss with local or remote support,
                structure, accountability, and a clear strategy for protecting the muscle and habits that support
                lasting results.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
