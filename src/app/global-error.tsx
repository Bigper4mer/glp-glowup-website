"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center bg-brand-light px-4 font-sans text-brand-dark">
        <main className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
            Something interrupted the page
          </p>
          <h1 className="mt-5 font-serif text-5xl font-medium tracking-[-0.05em]">
            Let&apos;s try that again.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-muted">
            The page could not finish loading. Retry now, or return to GLP GlowUp from your browser navigation.
          </p>
          <Button type="button" size="lg" onClick={reset} className="mt-8">
            Retry
          </Button>
        </main>
      </body>
    </html>
  );
}
