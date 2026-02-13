"use client";

import { motion } from "framer-motion";
import { tierConfig, originFlags, type ModelData, type BubblePosition } from "@/data/models";

const pastelBgs: Record<string, string> = {
  veo: "#dcfce7", runway: "#dbeafe", kling: "#fef3c7", sora: "#fce7f3",
  luma: "#e0e7ff", ltx: "#f3e8ff", pixverse: "#fed7aa", minimax: "#d1fae5",
  hunyuan: "#fef9c3", wan: "#ffe4e6", seedance: "#f1f5f9",
};

export default function Bubble({
  model,
  pos,
  onOpen,
}: {
  model: ModelData;
  pos: BubblePosition;
  onOpen: () => void;
}) {
  const tier = tierConfig[model.tier];
  const bg = pastelBgs[model.id] || "#f0f0f0";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: Math.random() * 0.4 + 0.1,
      }}
      onClick={(e) => { e.stopPropagation(); onOpen(); }}
      className="bubble absolute flex cursor-pointer flex-col items-center justify-center text-center"
      style={{
        left: pos.x - pos.size / 2,
        top: pos.y - pos.size / 2,
        width: pos.size,
        height: pos.size,
        backgroundColor: bg,
        transform: `rotate(${pos.rotation}deg)`,
      }}
    >
      {/* Tier emoji */}
      <span className="mb-1 text-lg">{tier.emoji}</span>

      {/* Model name */}
      <span className="text-sm font-bold text-gray-800 leading-tight">
        {model.name}
      </span>
      <span className="mt-0.5 text-[10px] font-medium text-gray-500">
        {model.version}
      </span>

      {/* Company + flag */}
      <span className="mt-1.5 text-[10px] text-gray-400">
        {originFlags[model.country]} {model.company.length > 14 ? model.company.slice(0, 14) + "\u2026" : model.company}
      </span>

      {/* Tier tag */}
      <span
        className="tag-pill mt-2"
        style={{ backgroundColor: `${tier.accent}12`, color: tier.accent }}
      >
        {tier.label}
      </span>
    </motion.div>
  );
}
