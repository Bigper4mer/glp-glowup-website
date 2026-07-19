import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { contactEmail } from "@/lib/site-content";
import { shortFitUrl } from "@/lib/site-links";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark pb-10 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 md:grid-cols-[1.35fr_0.65fr_0.8fr]">
          <div>
            <Link href="/" className="mb-6 block font-serif text-3xl font-bold tracking-[-0.035em]">
              GLP GlowUp
            </Link>
            <p className="max-w-md text-base leading-relaxed text-white/65">
              Private GLP-1 body composition coaching for people who want to lose fat while protecting strength, lean
              muscle, and long-term confidence.
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent-soft">
              Philadelphia · South Jersey · Remote
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-white">Explore</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/#programs" className="text-white/60 hover:text-white transition-colors">
                  Program Options
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/60 hover:text-white transition-colors">
                  More FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-white">Start a Conversation</h2>
            <p className="break-all text-white/65">{contactEmail}</p>
            <ButtonLink
              href={shortFitUrl}
              size="sm"
              className="mt-5 border-white/25 bg-white/8 text-white hover:border-white/40 hover:bg-white/12"
            >
              Start Short Fit
            </ButtonLink>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            Coaching is educational and does not replace medical care or medication management.{" "}
            <Link href="/policies#scope-and-privacy" className="font-semibold text-white/80 underline underline-offset-4">
              Review scope and privacy.
            </Link>
          </p>
          <p className="shrink-0">&copy; {new Date().getFullYear()} GLP GlowUp.</p>
        </div>
      </div>
    </footer>
  );
}
