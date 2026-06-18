import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-[70vh] items-center bg-brand-light px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Page not found</p>
          <h1 className="text-balance mt-5 font-serif text-5xl font-medium tracking-[-0.05em] text-brand-dark md:text-7xl">
            This page is no longer part of the coaching path.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-brand-muted">
            Return to the homepage, review the coaching programs, or read the FAQ before deciding on your next step.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Return Home</ButtonLink>
            <ButtonLink href="/#programs" variant="secondary">
              View Programs
            </ButtonLink>
          </div>
          <Link
            href="/faq"
            className="mt-7 inline-flex min-h-11 items-center font-semibold text-brand-dark underline decoration-brand-accent/50 underline-offset-6"
          >
            Read the FAQ
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
