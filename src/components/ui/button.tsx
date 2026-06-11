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

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", href, onClick, ...props }, ref) => {
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

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href && href.startsWith("mailto:")) {
        const isDesktop = typeof window !== "undefined" && !/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
        if (isDesktop) {
          e.preventDefault();
          const mailtoMatch = href.match(/^mailto:([^?]+)(?:\?(.*))?$/);
          if (mailtoMatch) {
            const email = mailtoMatch[1];
            const query = mailtoMatch[2] || "";
            const params = new URLSearchParams(query);
            const subject = params.get("subject") || "";
            const body = params.get("body") || "";
            
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(gmailUrl, "_blank");
          }
        }
      }
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <motion.a
        ref={ref}
        href={href}
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
