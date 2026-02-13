"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ModelPanel from "@/components/ModelPanel";
import { models, tierConfig, cinematicConfig, originFlags } from "@/data/models";

/* Total panels: 1 hero + 11 models + 1 finale = 13 */
const PANEL_COUNT = 13;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Track vertical scroll of the tall container */
  const { scrollYProgress } = useScroll({ target: containerRef });

  /* Map vertical scroll → horizontal translateX (GPU-accelerated) */
  const rawX = useTransform(scrollYProgress, [0, 1], ["0%", `-${((PANEL_COUNT - 1) / PANEL_COUNT) * 100}%`]);
  const x = useSpring(rawX, { stiffness: 300, damping: 40, mass: 0.5 });

  /* Progress bar */
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  /* Active panel index for nav dots */
  const activeRaw = useTransform(scrollYProgress, [0, 1], [0, PANEL_COUNT - 1]);

  const tier1 = models.filter((m) => m.tier === "tier1");
  const tier2 = models.filter((m) => m.tier === "tier2");
  const tier3 = models.filter((m) => m.tier === "tier3");

  return (
    <>
      {/* Progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Nav dots (right side) */}
      <NavDots progress={activeRaw} />

      {/* Scroll container: height = PANEL_COUNT * 100vh so user scrolls vertically */}
      <div ref={containerRef} style={{ height: `${PANEL_COUNT * 100}vh` }}>
        {/* Sticky viewport that fills screen */}
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          {/* Horizontal track — slides left via translateX */}
          <motion.div
            className="h-track"
            style={{ x, width: `${PANEL_COUNT * 100}vw` }}
          >
            {/* ── Panel 0: Hero ── */}
            <HeroPanel />

            {/* ── Panels 1–11: Models ── */}
            {models.map((model, i) => (
              <ModelPanel key={model.id} model={model} index={i} total={models.length} />
            ))}

            {/* ── Panel 12: Finale ── */}
            <FinalePanel tier1={tier1} tier2={tier2} tier3={tier3} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

/* ═══ HERO PANEL ═══ */
function HeroPanel() {
  return (
    <div className="h-panel flex items-center justify-center" style={{
      background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.1) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(139,92,246,0.07) 0%, transparent 50%), #050508",
    }}>
      <div className="scanline" />

      <div className="relative z-10 flex flex-col items-center px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-400/60"
        >
          Layer 1 — Model Down-Selection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 50 }}
          className="glow-text font-hero mb-6 max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
        >
          <span className="glitch-wrapper">
            <span className="glitch-text" data-text="11 AI Video Models.">
              11 AI Video Models.
            </span>
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            One Cinematic Reel.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-10 max-w-xl text-base leading-relaxed text-white/30 md:text-lg"
        >
          Scroll to travel sideways through every model — specs, demos, pricing &amp; verdicts unveiled scene by scene.
        </motion.p>

        {/* Tier legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-14 flex gap-6 text-sm"
        >
          {(["tier1", "tier2", "tier3"] as const).map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tierConfig[t].accent }} />
              <span className="text-white/25">{tierConfig[t].label}</span>
            </span>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="scroll-hint-arrow flex items-center gap-2 text-white/20 text-sm"
        >
          <span>Scroll to explore</span>
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>
    </div>
  );
}

/* ═══ FINALE PANEL ═══ */
function FinalePanel({
  tier1, tier2, tier3,
}: {
  tier1: typeof models;
  tier2: typeof models;
  tier3: typeof models;
}) {
  return (
    <div className="h-panel flex items-center justify-center" style={{
      background: "linear-gradient(135deg, #050510 0%, #0a0a1e 50%, #050510 100%)",
    }}>
      <div className="scanline" />

      <div className="relative z-10 mx-auto max-w-5xl px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-400/40">Final Verdict</p>
          <h2 className="glow-text font-hero text-3xl font-extrabold tracking-tight md:text-5xl">The Complete Lineup</h2>
        </div>

        <div className="model-scroll max-h-[70vh] overflow-y-auto pr-2">
          <TierGroup label="Must Try" items={tier1} tier="tier1" />
          <TierGroup label="Worth Considering" items={tier2} tier="tier2" />
          <TierGroup label="Probably Skip" items={tier3} tier="tier3" />
        </div>
      </div>
    </div>
  );
}

function TierGroup({ label, items, tier }: { label: string; items: typeof models; tier: "tier1" | "tier2" | "tier3" }) {
  const cfg = tierConfig[tier];
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cfg.accent }}>{cfg.icon} {label}</span>
        <div className="h-px flex-1" style={{ background: `${cfg.accent}20` }} />
      </div>
      <div className="space-y-2">
        {items.map((m) => {
          const c = cinematicConfig[m.id];
          return (
            <div key={m.id} className="reveal-card p-4 grid grid-cols-[1fr_2fr_1fr] gap-3 items-center">
              <div>
                <p className="text-sm font-bold" style={{ color: c.accentGlow }}>{m.name} <span className="text-xs font-normal text-white/25">{m.version}</span></p>
                <p className="text-[10px] text-white/20">{originFlags[m.country]} {m.company}</p>
              </div>
              <p className="text-xs" style={{ color: `${c.accentGlow}aa` }}>✦ {m.highlight}</p>
              <p className="text-right text-xs text-white/30">{m.pricing.paidPlans}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══ NAV DOTS ═══ */
function NavDots({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-2">
      {Array.from({ length: PANEL_COUNT }).map((_, i) => (
        <NavDot key={i} index={i} progress={progress} />
      ))}
    </div>
  );
}

function NavDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const isActive = useTransform(progress, (v: number): number => Math.round(v) === index ? 1 : 0);
  const scale = useTransform(isActive, (v: number) => v ? 1.5 : 1);
  const bg = useTransform(isActive, (v: number) => v ? getColorForPanel(index) : "rgba(255,255,255,0.12)");
  const shadow = useTransform(isActive, (v: number) => v ? `0 0 10px ${getColorForPanel(index)}` : "none");

  return (
    <motion.div
      style={{ scale, backgroundColor: bg, boxShadow: shadow }}
      className="nav-dot"
      onClick={() => {
        const scrollTo = (index / (PANEL_COUNT - 1)) * (document.documentElement.scrollHeight - window.innerHeight);
        window.scrollTo({ top: scrollTo, behavior: "smooth" });
      }}
    />
  );
}

function getColorForPanel(i: number): string {
  if (i === 0) return "#3b82f6"; // hero
  if (i === PANEL_COUNT - 1) return "#8b5cf6"; // finale
  const model = models[i - 1];
  return model ? cinematicConfig[model.id]?.accentGlow || "#3b82f6" : "#3b82f6";
}
