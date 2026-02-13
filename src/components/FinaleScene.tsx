"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { models, tierConfig, originFlags, cinematicConfig } from "@/data/models";

export default function FinaleScene() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0, 1, 1, 0.6]);

  const tier1 = models.filter((m) => m.tier === "tier1");
  const tier2 = models.filter((m) => m.tier === "tier2");
  const tier3 = models.filter((m) => m.tier === "tier3");

  return (
    <section
      ref={ref}
      className="scene-section relative min-h-screen py-32"
      style={{ background: "linear-gradient(180deg, #050510 0%, #0a0a1e 50%, #050510 100%)" }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 40% at 50% 20%, rgba(59,130,246,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 30% at 50% 80%, rgba(168,85,247,0.05) 0%, transparent 50%)",
      }} />
      <div className="scanline-overlay" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12"
        style={{ opacity }}
      >
        <motion.div style={{ y: titleY }} className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-400/50">
            Final Verdict
          </p>
          <h2 className="glow-text mb-4 text-4xl font-black tracking-tight md:text-6xl">
            The Complete Lineup
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/30">
            All 11 models ranked by tier — a head-to-head comparison of what matters most.
          </p>
        </motion.div>

        {/* Tier 1 */}
        <TierGroup label="Must Try" models={tier1} tier="tier1" />
        <TierGroup label="Worth Considering" models={tier2} tier="tier2" />
        <TierGroup label="Probably Skip" models={tier3} tier="tier3" />
      </motion.div>
    </section>
  );
}

function TierGroup({
  label,
  models: tierModels,
  tier,
}: {
  label: string;
  models: typeof models;
  tier: "tier1" | "tier2" | "tier3";
}) {
  const config = tierConfig[tier];

  return (
    <div className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: config.accent }}
        >
          {config.icon} {label}
        </span>
        <div className="h-px flex-1" style={{ background: `${config.accent}20` }} />
      </div>

      <div className="space-y-3">
        {tierModels.map((model, i) => {
          const cinema = cinematicConfig[model.id];
          return (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="reveal-card group p-1"
            >
              <div className="reveal-card-inner grid grid-cols-1 gap-4 p-5 md:grid-cols-[1fr_2fr_1fr]">
                {/* Name block */}
                <div>
                  <h3 className="text-lg font-bold" style={{ color: cinema.accentGlow }}>
                    {model.name} <span className="text-sm font-normal text-white/30">{model.version}</span>
                  </h3>
                  <p className="mt-1 text-xs text-white/30">
                    {originFlags[model.country]} {model.company}
                  </p>
                </div>

                {/* Highlight + key specs */}
                <div>
                  <p className="mb-2 text-sm font-medium" style={{ color: `${cinema.accentGlow}cc` }}>
                    ✦ {model.highlight}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/30">
                    <span>{model.specs.resolution}</span>
                    <span>{model.specs.maxClipLength}</span>
                    <span>{model.specs.codec}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-right">
                  <p className="text-sm font-medium text-white/50">{model.pricing.paidPlans}</p>
                  <p className="mt-1 text-xs text-white/25">{model.pricing.freeTier}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
