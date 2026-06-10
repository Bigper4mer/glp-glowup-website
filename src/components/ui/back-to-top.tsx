"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          className="fixed bottom-6 right-4 z-50 hidden md:flex w-12 h-12 rounded-full items-center justify-center shadow-xl border border-brand-accent/30 transition-transform hover:scale-110 group"
          style={{
            background: "linear-gradient(135deg, #2C2A29 0%, #3d3a38 100%)",
            boxShadow: "0 4px 20px rgba(212,154,142,0.25)",
          }}
        >
          <ArrowUp className="h-5 w-5 text-brand-accent group-hover:text-white transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
