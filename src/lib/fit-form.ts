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
  "cta_source",
  "page_path",
] as const;

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

export function normalizeTier(value: string | null): string {
  if (value === "foundation" || value === "performance" || value === "concierge") {
    return value;
  }

  return "not-sure";
}

export function normalizeSource(value: string | null): string {
  if (!value) {
    return "direct";
  }

  return value.trim() || "direct";
}
