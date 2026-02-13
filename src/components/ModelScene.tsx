"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ModelData, CinematicConfig } from "@/data/models";
import { tierConfig, originFlags, cinematicConfig } from "@/data/models";

export default function ModelScene({
  model,
  index,
  total,
}: {
  model: ModelData;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const config = cinematicConfig[model.id];
  const tier = tierConfig[model.tier];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax layers at different speeds
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const titleY = useTransform(scrollYProgress, [0, 1], [100 * config.parallaxSpeed, -80 * config.parallaxSpeed]);
  const cardY = useTransform(scrollYProgress, [0, 1], [140, -40]);
  const specsY = useTransform(scrollYProgress, [0, 1], [180, -30]);

  // Fade in as section enters viewport
  const entryOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const specsOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  // Background scale
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section
      ref={ref}
      className="scene-section relative min-h-screen py-32 lg:py-40"
    >
      {/* Background layer with gradient + parallax */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: config.bgGradient,
          y: bgY,
          scale: bgScale,
        }}
      />

      {/* Glow orb (parallax decorative) */}
      <motion.div
        className="pointer-events-none absolute -z-10"
        style={{
          y: titleY,
          opacity: 0.2,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${config.accentGlow}40 0%, transparent 70%)`,
          top: "10%",
          right: index % 2 === 0 ? "-10%" : "auto",
          left: index % 2 !== 0 ? "-10%" : "auto",
        }}
      />

      <div className="scanline-overlay" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12"
        style={{ opacity: entryOpacity }}
      >
        {/* Scene counter */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-8"
        >
          <p className="mb-2 font-mono text-xs tracking-widest" style={{ color: config.accentGlow, opacity: 0.6 }}>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>

          {/* Neon line */}
          <div className="neon-line mb-8 w-32" style={{ "--line-color": `${config.accentGlow}80` } as React.CSSProperties} />

          {/* Model name + tagline */}
          <h2
            className="glow-text mb-2 text-4xl font-black tracking-tight md:text-6xl lg:text-7xl"
            style={{ "--glow-color": `${config.accentGlow}40` } as React.CSSProperties }
          >
            {model.name}{" "}
            <span className="text-2xl font-light opacity-40 md:text-3xl">{model.version}</span>
          </h2>
          <p className="text-xl font-light italic tracking-wide" style={{ color: `${config.accentGlow}cc` }}>
            {config.tagline}
          </p>
        </motion.div>

        {/* Two-column layout: Info + Details */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column: origin + highlight + features */}
          <motion.div style={{ y: cardY, opacity: cardOpacity }}>
            {/* Origin bar */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span
                className="tier-badge"
                style={{ backgroundColor: `${tier.accent}18`, color: tier.accent, borderColor: `${tier.accent}30` }}
              >
                {tier.icon} {tier.label}
              </span>
              <span className="text-sm text-white/30">
                {originFlags[model.country]} {model.company} · {model.city}
              </span>
            </div>

            {/* Highlight callout */}
            <div
              className="mb-8 rounded-2xl px-5 py-4"
              style={{ backgroundColor: `${config.accentGlow}10`, borderLeft: `3px solid ${config.accentGlow}60` }}
            >
              <p className="text-sm font-medium leading-relaxed" style={{ color: `${config.accentGlow}dd` }}>
                ✦ {model.highlight}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                Key Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {model.keyFeatures.map((f, i) => (
                  <motion.span
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="feature-pill"
                    style={{ color: `${config.accentGlow}bb` }}
                  >
                    {f}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Advanced Features */}
            <div className="mb-6">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                Advanced
              </h3>
              <div className="flex flex-wrap gap-2">
                {model.advancedFeatures.map((f, i) => (
                  <motion.span
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="feature-pill text-white/50"
                  >
                    {f}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Limitations */}
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                Limitations
              </h3>
              <ul className="space-y-2">
                {model.limitations.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-white/35">
                    <span className="mt-1 text-xs text-red-400/60">✕</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column: specs + pricing */}
          <motion.div style={{ y: specsY, opacity: specsOpacity }}>
            {/* Specs grid */}
            <div className="reveal-card mb-6 p-1">
              <div className="reveal-card-inner p-5">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <SpecItem label="Resolution" value={model.specs.resolution} glow={config.accentGlow} />
                  <SpecItem label="Aspect Ratios" value={model.specs.aspectRatios.join(", ")} glow={config.accentGlow} />
                  <SpecItem label="Max Clip" value={model.specs.maxClipLength} glow={config.accentGlow} />
                  <SpecItem label="Speed" value={model.specs.processingSpeed} glow={config.accentGlow} />
                  <SpecItem label="Color Space" value={model.specs.colorSpace} glow={config.accentGlow} />
                  <SpecItem label="Codec" value={model.specs.codec} glow={config.accentGlow} />
                  <SpecItem label="Bit Depth" value={model.specs.bitDepth} glow={config.accentGlow} />
                  {model.specs.frameRate && <SpecItem label="Frame Rate" value={model.specs.frameRate} glow={config.accentGlow} />}
                </div>
              </div>
            </div>

            {/* Pricing grid */}
            <div className="reveal-card mb-6 p-1">
              <div className="reveal-card-inner p-5">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                  Pricing
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <PriceBox label="Free Tier" value={model.pricing.freeTier} emoji="🎁" />
                  <PriceBox label="Paid Plans" value={model.pricing.paidPlans} emoji="💳" />
                  {model.pricing.perGeneration && <PriceBox label="Per Generation" value={model.pricing.perGeneration} emoji="⚡" />}
                  {model.pricing.apiPricing && <PriceBox label="API Pricing" value={model.pricing.apiPricing} emoji="🌐" />}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="reveal-card p-1">
              <div className="reveal-card-inner p-5">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                  Availability
                </h3>
                <p className="text-sm leading-relaxed text-white/50">{model.availability}</p>

                <div className="mt-3 flex gap-4 text-xs text-white/25">
                  <span>{model.employees} employees</span>
                  <span>Released {model.releaseDate}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function SpecItem({ label, value, glow }: { label: string; value: string; glow: string }) {
  return (
    <div className="spec-item">
      <p className="spec-item-label">{label}</p>
      <p className="spec-item-value" style={{ color: `${glow}cc` }}>{value}</p>
    </div>
  );
}

function PriceBox({ label, value, emoji }: { label: string; value: string; emoji: string }) {
  return (
    <div className="price-box">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white/25">
        {emoji} {label}
      </p>
      <p className="text-sm font-medium text-white/60">{value}</p>
    </div>
  );
}
