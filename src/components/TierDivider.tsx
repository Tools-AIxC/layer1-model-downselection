"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { tierConfig, type Tier } from "@/data/models";

export default function TierDivider({ tier, count }: { tier: Tier; count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const config = tierConfig[tier];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="scene-section relative flex h-[60vh] items-center justify-center overflow-hidden"
      style={{ background: config.bg }}
    >
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${config.accent}12 0%, transparent 70%)`,
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ y, opacity }}
      >
        {/* Animated line */}
        <motion.div
          className="mb-8 h-px"
          style={{
            width: lineWidth,
            background: `linear-gradient(90deg, transparent, ${config.accent}80, transparent)`,
          }}
        />

        <p
          className="mb-2 text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: `${config.accent}80` }}
        >
          {config.icon} Tier Classification
        </p>

        <h2
          className="glow-text mb-3 text-3xl font-black md:text-5xl"
          style={{ color: config.text, "--glow-color": `${config.accent}30` } as React.CSSProperties}
        >
          {config.label}
        </h2>

        <p className="text-sm" style={{ color: `${config.accent}60` }}>
          {count} model{count !== 1 ? "s" : ""} in this tier
        </p>

        {/* Animated line */}
        <motion.div
          className="mt-8 h-px"
          style={{
            width: lineWidth,
            background: `linear-gradient(90deg, transparent, ${config.accent}80, transparent)`,
          }}
        />
      </motion.div>
    </div>
  );
}
