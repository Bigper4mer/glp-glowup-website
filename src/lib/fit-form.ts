export const fitFormName = "fit-form";

export const fitFormFieldNames = [
  "form-name",
  "bot-field",
  "full_name",
  "email",
  "phone",
  "preferred_contact_method",
  "service_area_fit",
  "location",
  "heard_about",
  "glp1_status",
  "primary_goal",
  "biggest_challenge",
  "coaching_openness",
  "readiness_level",
  "checkin_tolerance",
  "activity_level",
  "pain_limitations",
  "limitation_details",
  "preferred_tier",
  "anything_else",
  "coaching_scope_consent",
  "cta_source",
  "page_path",
] as const;

export type FitFormFieldName = (typeof fitFormFieldNames)[number];
export type FitFormTierValue = (typeof fitFormTierOptions)[number]["value"];

export const fitFormStepFields: Record<1 | 2, FitFormFieldName[]> = {
  1: [
    "full_name",
    "email",
    "phone",
    "preferred_contact_method",
    "service_area_fit",
    "location",
    "glp1_status",
    "primary_goal",
    "preferred_tier",
  ],
  2: [
    "biggest_challenge",
    "coaching_openness",
    "readiness_level",
    "checkin_tolerance",
    "activity_level",
    "pain_limitations",
    "limitation_details",
    "heard_about",
    "anything_else",
    "coaching_scope_consent",
  ],
};

export const fitFormTierOptions = [
  { value: "foundation", label: "Foundation" },
  { value: "performance", label: "Performance" },
  { value: "concierge", label: "Concierge" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const fitFormStatusOptions = [
  "Currently using a GLP-1 medication",
  "Considering a GLP-1 medication",
  "Not using a GLP-1 but want structured body composition coaching",
  "Prefer not to say",
] as const;

export const fitFormGoalOptions = [
  "Lose fat while protecting lean muscle",
  "Build strength and confidence during weight loss",
  "Improve consistency with training and nutrition",
  "Avoid regain and build a sustainable system",
  "Feel healthier, leaner, and more in control",
] as const;

export const fitFormChallengeOptions = [
  "I need more accountability and follow-through",
  "I fall off when life gets busy",
  "I am worried about losing muscle or strength",
  "I have pain, injury history, or movement limitations",
  "I am unsure how to eat or train while using GLP-1 medication",
] as const;

export const fitFormActivityOptions = [
  "I am not training consistently right now",
  "I walk or do light activity a few days per week",
  "I do some strength training but need structure",
  "I already train regularly and want better strategy",
] as const;

export const fitFormPainOptions = [
  "No major pain or limitations",
  "Minor pain or past injuries to work around",
  "Active pain, injury, or significant limitations",
] as const;

function getSingleValue(value: unknown): string | null {
  if (Array.isArray(value)) {
    return typeof value[0] === "string" ? value[0] : null;
  }

  return typeof value === "string" ? value : null;
}

export function normalizeTier(value: unknown): FitFormTierValue {
  const normalizedValue = getSingleValue(value);

  if (
    normalizedValue === "foundation" ||
    normalizedValue === "performance" ||
    normalizedValue === "concierge"
  ) {
    return normalizedValue;
  }

  return "not-sure";
}

export function normalizeSource(value: unknown): string {
  const normalizedValue = getSingleValue(value);

  if (!normalizedValue) {
    return "direct";
  }

  return normalizedValue.trim() || "direct";
}

export function getFitFormInitialValues({
  source,
  tier,
}: {
  source?: unknown;
  tier?: unknown;
}) {
  return {
    source: normalizeSource(source),
    tier: normalizeTier(tier),
  };
}

export function getFitFormTierLabel(value: FitFormTierValue): string {
  return fitFormTierOptions.find((option) => option.value === value)?.label ?? "Not sure yet";
}
