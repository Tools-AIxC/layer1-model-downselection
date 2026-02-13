"use client";

import { motion } from "framer-motion";
import { models, tierConfig } from "@/data/models";

const tier1Count = models.filter((m) => m.tier === "tier1").length;
const tier2Count = models.filter((m) => m.tier === "tier2").length;
const tier3Count = models.filter((m) => m.tier === "tier3").length;

export default function GardenHUD() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed left-4 top-4 z-30 flex items-center gap-4"
    >
      {/* Title */}
      <div className="rounded-2xl bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm border border-black/[0.04]">
        <h1 className="text-sm font-bold text-gray-800">
          &#x1F331; Layer 1 &mdash; Digital Garden
        </h1>
        <p className="text-[10px] text-gray-400">
          Click a bubble to explore &middot; Drag to pan &middot; Scroll to zoom
        </p>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm border border-black/[0.04]">
        <LegendItem emoji={tierConfig.tier1.emoji} label="Must Try" count={tier1Count} color={tierConfig.tier1.accent} />
        <div className="h-5 w-px bg-gray-200" />
        <LegendItem emoji={tierConfig.tier2.emoji} label="Worth It" count={tier2Count} color={tierConfig.tier2.accent} />
        <div className="h-5 w-px bg-gray-200" />
        <LegendItem emoji={tierConfig.tier3.emoji} label="Skip" count={tier3Count} color={tierConfig.tier3.accent} />
      </div>
    </motion.div>
  );
}

function LegendItem({ emoji, label, count, color }: { emoji: string; label: string; count: number; color: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-sm">{emoji}</span>
      <span className="text-[11px] font-medium" style={{ color }}>{count}</span>
      <span className="text-[10px] text-gray-400">{label}</span>
    </div>
  );
}
