import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { FitFormPage } from "@/components/fit-form-page";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Apply for GLP-1 Coaching",
  description:
    "Complete the GLP GlowUp fit form to apply for GLP-1 body composition coaching, share your goals, confirm Philadelphia or South Jersey service-area fit, and request remote or in-person support.",
  canonical: "/fit-form",
});

export default function FitFormRoute() {
  return (
    <>
      <Navigation />
      <main className="flex-grow bg-brand-light pt-28">
        <FitFormPage />
      </main>
      <SiteFooter />
    </>
  );
}
