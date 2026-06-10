"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  extendedDescription?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  extendedDescription,
  imageSrc,
  imageAlt,
  className,
}: FeatureCardProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
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
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <h3 className="font-serif text-2xl font-semibold mb-3 text-brand-dark">
            {title}
          </h3>
          <p className="text-brand-muted text-base leading-relaxed flex-grow">
            {description}
          </p>
          {extendedDescription && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-6 inline-flex items-center text-sm font-medium text-brand-accent hover:text-[#E8A29A] transition-colors self-start"
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && extendedDescription && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <div className="relative h-56 w-full">
                <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <h3 className="absolute bottom-6 left-8 right-8 font-serif text-3xl font-semibold text-white leading-tight">
                  {title}
                </h3>
              </div>
              <div className="p-8">
                <p className="text-brand-dark/80 text-lg leading-relaxed">
                  {extendedDescription}
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-8 w-full py-3 bg-brand-light text-brand-dark rounded-full font-medium hover:bg-brand-accent/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
