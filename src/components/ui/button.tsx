import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex min-h-11 items-center justify-center rounded-full border font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "border-brand-accent bg-brand-accent text-white shadow-[0_12px_28px_rgba(159,87,78,0.22)] hover:-translate-y-0.5 hover:bg-[#8f4c43] hover:shadow-[0_16px_34px_rgba(159,87,78,0.28)]",
      secondary:
        "border-brand-dark/25 bg-transparent text-brand-dark hover:border-brand-accent hover:bg-brand-accent/7",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-7 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const baseStyles =
      "inline-flex min-h-11 items-center justify-center rounded-full border font-semibold transition duration-200";

    const variants = {
      primary:
        "border-brand-accent bg-brand-accent text-white shadow-[0_12px_28px_rgba(159,87,78,0.22)] hover:-translate-y-0.5 hover:bg-[#8f4c43] hover:shadow-[0_16px_34px_rgba(159,87,78,0.28)]",
      secondary:
        "border-brand-dark/25 bg-transparent text-brand-dark hover:border-brand-accent hover:bg-brand-accent/7",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-7 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link
          ref={ref}
          href={href}
          className={classes}
          {...props}
        />
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";
