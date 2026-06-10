"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Clients Transformed", prefix: "" },
  { value: 94, suffix: "%", label: "Muscle Mass Retained", prefix: "" },
  { value: 12, suffix: "", label: "Week Average Program", prefix: "" },
  { value: 100, suffix: "%", label: "Personalized Plans", prefix: "" },
];

function AnimatedNumber({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      });
      return controls.stop;
    }
  }, [inView, motionValue, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-16 border-y border-brand-accent/20"
      style={{ background: "linear-gradient(135deg, #2C2A29 0%, #3d3531 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-serif font-bold mb-2"
                style={{ color: "#D49A8E" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-sm md:text-base text-white/60 font-light leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
