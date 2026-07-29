import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function read(path: string) {
  return readFile(new URL(path, import.meta.url), "utf8");
}

test("the approved conversation-first copy contract is present across every marketing route", async () => {
  const content = await read("../src/lib/site-content.ts");
  const home = await read("../src/components/home-page.tsx");
  const about = await read("../src/app/about/page.tsx");
  const faq = await read("../src/app/faq/page.tsx");
  const policies = await read("../src/app/policies/page.tsx");
  const footer = await read("../src/components/site-footer.tsx");
  const visitorCopy = [content, home, about, faq, policies, footer].join("\n");

  for (const approvedText of [
    "GLP medications can be a powerful starting point, but they are not the full plan.",
    "Protect the Strength That Supports Your Future",
    "A plan that changes with you.",
    "Choose the support that feels right for you.",
    "Weekly Scorecard Check-In & Strategy Review",
    "Two Personal Strategy Check-Ins During Non-Session Weeks",
    "Fully Guided Coaching",
    "Expert guidance, delivered with genuine care.",
    "A more complete kind of support for your GLP journey.",
    "Answers to help you feel confident about your next step.",
    "Clear expectations so you always know what to expect.",
    "Ready to Begin?",
    "Review our scope, policies, and privacy information.",
  ]) {
    assert.match(visitorCopy, new RegExp(approvedText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), approvedText);
  }

  assert.doesNotMatch(visitorCopy, /\bApply for Coaching\b|\bStart Short Fit\b|\basynchronous\b/i);
});

test("all actionable CTAs share one approved label and the package inquiries use approved labels", async () => {
  const links = await read("../src/lib/site-links.ts");
  const ctaSurfaces = [
    await read("../src/components/home-page.tsx"),
    await read("../src/components/navigation.tsx"),
    await read("../src/components/site-footer.tsx"),
    await read("../src/components/ui/floating-cta.tsx"),
    await read("../src/app/about/page.tsx"),
    await read("../src/app/faq/page.tsx"),
    await read("../src/app/policies/page.tsx"),
  ].join("\n");

  assert.match(links, /primaryCtaLabel\s*=\s*["']Tell Us About Your Goals["']/);
  assert.match(ctaSurfaces, /\{primaryCtaLabel\}/);
  assert.match(ctaSurfaces, /Ask About \{tier\.title\}/);
});

test("security headers and the exact production-host redirect are configured without affecting previews", async () => {
  const config = await read("../next.config.ts");
  const layout = await read("../src/app/layout.tsx");

  assert.match(config, /Content-Security-Policy/);
  assert.match(config, /form-action 'none'/);
  assert.match(config, /frame-ancestors 'none'/);
  assert.match(config, /X-Frame-Options[\s\S]*DENY/);
  assert.match(config, /X-Content-Type-Options[\s\S]*nosniff/);
  assert.match(config, /Referrer-Policy[\s\S]*strict-origin-when-cross-origin/);
  assert.match(config, /Permissions-Policy/);
  assert.match(config, /Strict-Transport-Security/);
  assert.doesNotMatch(config, /preload/i);
  assert.match(config, /process\.env\.CONTEXT\s*===\s*["']deploy-preview["']/);
  assert.match(config, /X-Robots-Tag[\s\S]*noindex,\s*nofollow/);
  assert.match(layout, /process\.env\.CONTEXT\s*===\s*["']deploy-preview["']/);
  assert.match(layout, /index:\s*!isDeployPreview/);
  assert.match(layout, /follow:\s*!isDeployPreview/);
  assert.match(config, /type:\s*["']host["'][\s\S]*glp-glowup-website\.netlify\.app/);
  assert.match(config, /https:\/\/glpglowups\.com\/:path\*/);
  assert.doesNotMatch(config, /deploy-preview-\d+--|netlify\.app\.\*/i);
});

test("standalone desktop and footer navigation links provide 44px minimum targets", async () => {
  const navigation = await read("../src/components/navigation.tsx");
  const footer = await read("../src/components/site-footer.tsx");

  assert.match(navigation, /min-h-11[^"']*items-center/);
  assert.match(footer, /min-h-11[^"']*items-center/);
});

test("structured data escapes less-than signs and policy section numbering never renders 010", async () => {
  const home = await read("../src/app/page.tsx");
  const faq = await read("../src/app/faq/page.tsx");
  const policies = await read("../src/app/policies/page.tsx");

  assert.match(home, /\.replace\(\/<\/g,\s*["']\\\\u003c["']\)/);
  assert.match(faq, /\.replace\(\/<\/g,\s*["']\\\\u003c["']\)/);
  assert.match(policies, /String\(index \+ 1\)\.padStart\(2,\s*["']0["']\)/);
  assert.doesNotMatch(policies, />0\{index \+ 1\}</);
});

test("the shared shell exposes a skip link and the mobile menu restores focus after Escape", async () => {
  const layout = await read("../src/app/layout.tsx");
  const navigation = await read("../src/components/navigation.tsx");
  const css = await read("../src/app/globals.css");
  const pageMains = [
    await read("../src/components/home-page.tsx"),
    await read("../src/app/about/page.tsx"),
    await read("../src/app/faq/page.tsx"),
    await read("../src/app/policies/page.tsx"),
  ].join("\n");

  assert.match(layout, /href=["']#main-content["']/);
  assert.match(layout, /className=["'][^"']*skip-link/);
  assert.match(navigation, /menuButtonRef/);
  assert.match(navigation, /menuButtonRef\.current\?\.focus\(\)/);
  assert.match(pageMains, /id=["']main-content["']/);
  assert.match(css, /\.skip-link/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
