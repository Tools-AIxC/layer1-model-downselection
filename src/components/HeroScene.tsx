"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="scene-section relative flex h-screen items-center justify-center"
    >
      {/* Animated background layer */}
      <motion.div
        className="hero-gradient absolute inset-0"
        style={{ scale: bgScale }}
      />
      <div className="scanline-overlay" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-8 text-center"
        style={{ opacity }}
      >
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-400/70"
        >
          Layer 1 — Model Down-Selection
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 60 }}
          style={{ y: titleY }}
          className="glow-text mb-6 max-w-4xl text-5xl font-black leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
        >
          11 AI Video Models.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            One Cinematic Journey.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ y: subtitleY }}
          className="mb-12 max-w-2xl text-lg leading-relaxed text-white/40 md:text-xl"
        >
          Scroll to explore each model — specs, features, pricing, and verdicts
          revealed one scene at a time.
        </motion.p>

        {/* Tier legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-16 flex gap-6 text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-white/30">Must Try (5)</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-white/30">Worth It (5)</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            <span className="text-white/30">Skip (1)</span>
          </span>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="scroll-hint text-white/20"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
