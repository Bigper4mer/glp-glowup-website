"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "./ui/button";
import { cn } from "@/lib/utils";
import { getFitFormHref } from "@/lib/site-links";

const links = [
  { name: "How It Works", href: "/#method" },
  { name: "Program Options", href: "/#programs" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isHome = pathname === "/";
  const showSolid = isScrolled || !isHome || isMobileMenuOpen;

  React.useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  React.useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        showSolid
          ? "border-brand-line/70 bg-brand-paper/94 text-brand-dark shadow-[0_8px_30px_rgba(40,36,33,0.07)] backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-black/35 to-transparent text-white"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "font-serif text-2xl font-bold tracking-[-0.035em] transition-colors",
            showSolid ? "text-brand-dark" : "text-white"
          )}
        >
          GLP GlowUp
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors",
                showSolid ? "text-brand-dark hover:text-brand-accent" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ButtonLink href={getFitFormHref("nav-consult")} size="sm">
            Apply for Coaching
          </ButtonLink>
        </nav>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden",
            showSolid ? "text-brand-dark hover:bg-brand-accent/8" : "text-white hover:bg-white/10"
          )}
        >
          {isMobileMenuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-brand-line bg-brand-paper px-4 pb-7 pt-5 text-brand-dark shadow-xl md:hidden"
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-brand-dark hover:bg-brand-light hover:text-brand-accent"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <ButtonLink href={getFitFormHref("nav-consult")} className="w-full">
                Apply for Coaching
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
