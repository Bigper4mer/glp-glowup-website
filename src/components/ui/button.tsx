"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-gradient-to-r from-brand-accent to-[#E8A29A] text-white shadow-md hover:shadow-lg hover:shadow-brand-accent/20 animate-pulse-glow",
      secondary:
        "bg-transparent border-2 border-brand-accent text-brand-dark hover:bg-brand-accent/10",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

interface ButtonLinkProps extends HTMLMotionProps<"a"> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const MOBILE_USER_AGENT_PATTERN = /Mobi|Android|iPhone|iPad|iPod/i;

function isDesktopBrowser(): boolean {
  return (
    typeof window !== "undefined" &&
    !MOBILE_USER_AGENT_PATTERN.test(window.navigator.userAgent)
  );
}

function getGmailComposeHref(mailtoHref: string): string | null {
  try {
    const mailtoUrl = new URL(mailtoHref);
    if (mailtoUrl.protocol !== "mailto:") {
      return null;
    }

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", decodeURIComponent(mailtoUrl.pathname));
    gmailUrl.searchParams.set("su", mailtoUrl.searchParams.get("subject") || "");
    gmailUrl.searchParams.set("body", mailtoUrl.searchParams.get("body") || "");

    return gmailUrl.toString();
  } catch {
    return null;
  }
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", href, onClick, target, rel, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-gradient-to-r from-brand-accent to-[#E8A29A] text-white shadow-md hover:shadow-lg hover:shadow-brand-accent/20",
      secondary:
        "bg-transparent border-2 border-brand-accent text-brand-dark hover:bg-brand-accent/10",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    const [resolvedHref, setResolvedHref] = React.useState(href);

    React.useEffect(() => {
      if (typeof href !== "string" || !href.startsWith("mailto:") || !isDesktopBrowser()) {
        setResolvedHref(href);
        return;
      }

      setResolvedHref(getGmailComposeHref(href) || href);
    }, [href]);

    const opensGmail = typeof resolvedHref === "string" && resolvedHref.startsWith("https://mail.google.com/");
    const resolvedTarget = opensGmail ? target || "_blank" : target;
    const resolvedRel = opensGmail
      ? Array.from(new Set(["noopener", "noreferrer", rel].filter(Boolean))).join(" ")
      : rel;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof href === "string" && href.startsWith("mailto:") && isDesktopBrowser()) {
        const gmailHref = getGmailComposeHref(href);
        if (gmailHref && resolvedHref !== gmailHref) {
          e.preventDefault();
          window.location.assign(gmailHref);
        }
      }
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <motion.a
        ref={ref}
        href={resolvedHref}
        target={resolvedTarget}
        rel={resolvedRel}
        onClick={handleClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";
