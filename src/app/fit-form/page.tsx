import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { FitFormPage } from "@/components/fit-form-page";
import { getFitFormInitialValues } from "@/lib/fit-form";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Apply for GLP-1 Coaching",
  description:
    "Complete the GLP GlowUp fit form to apply for GLP-1 body composition coaching, share your goals, confirm Philadelphia or South Jersey service-area fit, and request remote or in-person support.",
  canonical: "/fit-form",
});

type FitFormRouteProps = {
  searchParams: Promise<{
    source?: string | string[];
    tier?: string | string[];
  }>;
};

export default async function FitFormRoute({ searchParams }: FitFormRouteProps) {
  const query = await searchParams;
  const initialValues = getFitFormInitialValues(query);
  const pageParams = new URLSearchParams({ source: initialValues.source });

  if (initialValues.tier !== "not-sure") {
    pageParams.set("tier", initialValues.tier);
  }

  return (
    <>
      <Navigation />
      <main className="bg-brand-light pt-20">
        <FitFormPage
          initialSource={initialValues.source}
          initialTier={initialValues.tier}
          initialPagePath={`/fit-form?${pageParams.toString()}`}
        />
      </main>
      <SiteFooter />
    </>
  );
}
