"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { shortFitUrl } from "@/lib/site-links";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
      <Link
        href={shortFitUrl}
        className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-4 text-base font-semibold text-white shadow-[0_18px_44px_rgba(40,36,33,0.28)]"
      >
        Apply for Coaching
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
  );
}
