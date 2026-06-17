"use client";

import { useEffect } from "react";
import { fitFormTierOptions, normalizeSource, normalizeTier } from "@/lib/fit-form";

function getTierLabel(value: string): string {
  return fitFormTierOptions.find((option) => option.value === value)?.label ?? "Not sure yet";
}

export function FitFormQuerySync() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preferredTier = normalizeTier(params.get("tier"));
    const ctaSource = normalizeSource(params.get("source"));
    const form = document.getElementById("fit-form-intake");

    if (!form || !(form instanceof HTMLFormElement)) {
      return;
    }

    const ctaSourceInput = form.elements.namedItem("cta_source");
    if (ctaSourceInput instanceof HTMLInputElement) {
      ctaSourceInput.value = ctaSource;
    }

    const pagePathInput = form.elements.namedItem("page_path");
    if (pagePathInput instanceof HTMLInputElement) {
      pagePathInput.value = `${window.location.pathname}${window.location.search}`;
    }

    const preferredTierSelect = form.elements.namedItem("preferred_tier");
    if (preferredTierSelect instanceof HTMLSelectElement) {
      preferredTierSelect.value = preferredTier;
    }

    const tierLabel = document.getElementById("fit-form-tier-label");
    if (tierLabel) {
      tierLabel.textContent = getTierLabel(preferredTier);
    }

    const sourceLabel = document.getElementById("fit-form-source-label");
    if (sourceLabel) {
      sourceLabel.textContent = ctaSource;
    }
  }, []);

  return null;
}
