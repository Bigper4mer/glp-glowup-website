"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { contactEmail } from "@/lib/site-content";
import { contactLinks } from "@/lib/site-links";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-bold tracking-tight mb-6 block">
              GLP GlowUp
            </Link>
            <p className="text-white/60 max-w-sm">
              Premium GLP-1 body composition coaching for Philadelphia and South Jersey clients who want strength,
              structure, and accountability.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-6 text-base">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#programs" className="text-white/60 hover:text-white transition-colors">
                  Program Options
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-white/60 hover:text-white transition-colors">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/60 hover:text-white transition-colors">
                  More FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-6 text-base">Contact</h2>
            <a href={`mailto:${contactEmail}`} className="text-white/60 hover:text-white transition-colors break-all">
              {contactEmail}
            </a>
            <ButtonLink
              href={contactLinks.general}
              size="sm"
              className="mt-4 bg-white/10 hover:bg-white/20 text-white border-none"
            >
              Reach Out
            </ButtonLink>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-6 text-sm text-white/70">
          <div className="text-xs leading-relaxed">
            <strong className="text-white/60">Medical Disclaimer:</strong> The content provided by GLP GlowUp,
            including but not limited to exercise routines, nutritional guidance, and coaching, is for educational and
            informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis,
            or treatment. We do not prescribe or manage medications, including GLP-1 receptor agonists. Always seek the
            advice of your physician or other qualified healthcare provider with any questions you may have regarding a
            medical condition, new diet, or fitness program. Never disregard professional medical advice or delay in
            seeking it because of something you have read or heard through our services.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} GLP GlowUp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
