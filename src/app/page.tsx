import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildProfessionalServiceSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "GLP-1 Body Composition Coaching in Philadelphia & South Jersey",
  description:
    "GLP GlowUp provides premium GLP-1 body composition coaching for Philadelphia and South Jersey clients who want fat loss support, lean muscle protection, strength training, and accountable remote or in-person guidance.",
  canonical: "/",
});

const professionalServiceSchema = buildProfessionalServiceSchema();

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <HomePage />
    </>
  );
}
