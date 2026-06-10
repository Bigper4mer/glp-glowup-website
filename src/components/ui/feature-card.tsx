"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover="hover"
      className={cn(
        "bg-brand-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <motion.div
          variants={{
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold mb-3 text-brand-dark">
          {title}
        </h3>
        <p className="text-brand-muted text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
