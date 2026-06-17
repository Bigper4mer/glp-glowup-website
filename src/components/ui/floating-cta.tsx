"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getFitFormHref } from "@/lib/site-links";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/fit-form")) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
        >
          <Link
            href={getFitFormHref("floating-cta")}
            className="w-full py-4 px-6 rounded-2xl text-white font-semibold text-base shadow-2xl flex items-center justify-center gap-2 animate-pulse-glow"
            style={{
              background: "linear-gradient(135deg, #D49A8E 0%, #c4836f 100%)",
              boxShadow: "0 8px 32px rgba(212,154,142,0.45)",
            }}
          >
            <span>✨</span>
            Apply for Coaching
            <span>→</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
