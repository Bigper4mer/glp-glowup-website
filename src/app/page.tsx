import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Premium GLP-1 Transformation & Coaching",
  description:
    "GLP GlowUp helps clients using GLP-1 medications lose fat, protect lean muscle, build confidence, and sustain results.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
