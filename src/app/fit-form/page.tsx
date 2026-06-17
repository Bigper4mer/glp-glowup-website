import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { FitFormPage } from "@/components/fit-form-page";
import { fitFormFieldNames, fitFormName } from "@/lib/fit-form";

export const metadata: Metadata = {
  title: "Apply for Coaching",
  description:
    "Complete the GLP GlowUp Short Fit Form to help us review your goals, GLP-1 status, service-area fit, and preferred coaching tier.",
  alternates: {
    canonical: "/fit-form",
  },
};

export default function FitFormRoute() {
  return (
    <>
      <Navigation />
      <main className="flex-grow bg-brand-light pt-28">
        <form name={fitFormName} data-netlify="true" netlify-honeypot="bot-field" hidden>
          {fitFormFieldNames.map((fieldName) => (
            <input
              key={fieldName}
              name={fieldName}
              type="text"
              value={fieldName === "form-name" ? fitFormName : ""}
              readOnly
            />
          ))}
        </form>
        <FitFormPage />
      </main>
      <SiteFooter />
    </>
  );
}
