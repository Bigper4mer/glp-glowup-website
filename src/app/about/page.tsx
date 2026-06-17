import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { getFitFormHref } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about GLP GlowUp, a premium GLP-1 body recomposition coaching experience led by Rocco Gervasi, DPT, CSCS, VRC.",
  alternates: {
    canonical: "/about",
  },
};

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
                Built for more than weight loss.
              </h1>
              <div className="space-y-5 text-lg leading-relaxed text-brand-muted">
                <p>
                  GLP GlowUp was created for people who want more than a lower number on the scale. The program treats
                  GLP-1 weight loss as a full body recomposition process: lose fat, protect lean muscle, build strength,
                  and leave with systems you can keep using.
                </p>
                <p>
                  The experience combines strategic strength training, personalized nutrition guidance, movement quality,
                  and ongoing accountability so clients are not left guessing while their body changes.
                </p>
                <p>
                  It is designed for busy people who want a premium, guided path that supports confidence, performance,
                  and long-term sustainability.
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
                strength and conditioning, and practical coaching systems.
              </p>
              <p>
                GLP GlowUp exists to help clients move through GLP-1 weight loss with structure, accountability, and a
                clear strategy for protecting the muscle and habits that support lasting results.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
