import type { Metadata } from "next";
import { contactEmail, siteUrl } from "@/lib/site-content";
import { shortFitUrl } from "@/lib/site-links";

export const siteName = "GLP GlowUp";
export const defaultOgImagePath = "/og-image.jpg";
export const founderName = "Rocco Gervasi, DPT, CSCS, VRC";
export const serviceAreas = [
  "Philadelphia, PA",
  "Cherry Hill, NJ",
  "Moorestown, NJ",
  "Haddonfield, NJ",
  "South Jersey",
];

type PageMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  robots?: Metadata["robots"];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  robots,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url: canonical,
      siteName,
      type: "website",
      locale: "en_US",
      images: [defaultOgImagePath],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [defaultOgImagePath],
    },
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#professional-service"),
    name: siteName,
    url: siteUrl,
    image: absoluteUrl(defaultOgImagePath),
    description:
      "GLP-1 body composition coaching for Philadelphia and South Jersey clients who want fat loss support, lean muscle protection, strength training guidance, and sustainable accountability.",
    email: contactEmail,
    areaServed: serviceAreas,
    serviceType: [
      "GLP-1 body composition coaching",
      "GLP-1 weight loss coaching",
      "Remote body recomposition coaching",
      "In-person GLP-1 coaching",
    ],
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceUrl: shortFitUrl,
        availableLanguage: ["English"],
      },
    ],
    founder: {
      "@type": "Person",
      name: founderName,
    },
  };
}

export function buildFaqSchema(
  items: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
