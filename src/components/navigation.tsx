"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "./ui/button";
import { cn } from "@/lib/utils";
import { emailLinks } from "@/lib/email-templates";

const links = [
  { name: "Home", href: "/" },
  { name: "Program Options", href: "/#programs" },
  { name: "FAQ", href: "/faq" },
];

export function Navigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isHome = pathname === "/";
  const showSolid = isScrolled || !isHome || isMobileMenuOpen;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        showSolid
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-muted/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={cn(
              "font-serif text-2xl font-bold tracking-tight transition-colors duration-300",
              showSolid ? "text-brand-dark" : "text-white"
            )}>
              GLP GlowUp
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-accent",
                  showSolid ? "text-brand-dark" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <ButtonLink href={emailLinks.consultation} size="sm">Book a Consult</ButtonLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 focus:outline-none transition-colors duration-300",
                showSolid ? "text-brand-dark" : "text-white"
              )}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-brand-muted/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-brand-dark hover:text-brand-accent"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <ButtonLink href={emailLinks.consultation} className="w-full">Book a Consult</ButtonLink>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
