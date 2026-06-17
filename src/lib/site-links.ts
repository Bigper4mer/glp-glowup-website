import { contactEmail } from "@/lib/site-content";

export const fitFormPath = "/fit-form";

type FitFormSource =
  | "hero"
  | "nav-consult"
  | "floating-cta"
  | "package"
  | "about"
  | "faq"
  | "policies"
  | "direct";

type FitFormTier = "foundation" | "performance" | "concierge";

export function getFitFormHref(source: FitFormSource, tier?: FitFormTier): string {
  const params = new URLSearchParams({ source });

  if (tier) {
    params.set("tier", tier);
  }

  return `${fitFormPath}?${params.toString()}`;
}

function createMailto(email: string, subject: string, body: string): string {
  const formattedBody = body.trim().replace(/\n/g, "\r\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;
}

export const contactLinks = {
  general: createMailto(
    contactEmail,
    "GLP GlowUp Inquiry",
    `Hi GLP GlowUp,

I have a question about your services.

Here are my details:

- Name:

- Best email or phone:

- Where I found GLP GlowUp:

- My question:

Thank you.`
  ),
};
