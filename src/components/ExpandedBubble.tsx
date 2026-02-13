"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { tierConfig, originFlags, type ModelData, type BubblePosition } from "@/data/models";

export default function ExpandedBubble({
  model,
  pos,
  onClose,
}: {
  model: ModelData | null;
  pos: BubblePosition | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {model && pos && (
        <>
          {/* Backdrop (click to close) */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/10"
          />

          {/* Expanded card — centered via inset + margin auto */}
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="expanded-card fixed inset-0 z-[9999] m-auto max-h-[85vh] w-[520px] overflow-y-auto p-6"
            style={{ height: "fit-content" }}
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent model={model} onClose={onClose} />
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

function CardContent({ model, onClose }: { model: ModelData; onClose: () => void }) {
  const tier = tierConfig[model.tier];

  return (
    <>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-gray-100 p-1.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Header */}
      <div className="mb-4 flex items-start gap-3">
        <span className="text-3xl">{tier.emoji}</span>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {model.name}{" "}
            <span className="text-sm font-normal text-gray-400">{model.version}</span>
          </h2>
          <p className="text-sm text-gray-500">
            {originFlags[model.country]} {model.company} &middot; {model.city}
          </p>
          <p className="text-xs text-gray-400">
            {model.employees} employees &middot; Released {model.releaseDate}
          </p>
        </div>
      </div>

      {/* Tier + Highlight */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className="tag-pill"
          style={{ backgroundColor: `${tier.accent}15`, color: tier.accent }}
        >
          {tier.emoji} {tier.label}
        </span>
      </div>

      <div className="mb-4 rounded-2xl bg-amber-50/60 px-4 py-3">
        <p className="text-sm leading-relaxed text-amber-800/70">
          &#x2728; {model.highlight}
        </p>
      </div>

      <div className="wavy-sep mb-4" />

      {/* Specs */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Technical Specs
      </h3>
      <div className="mb-4">
        <SpecRow label="Resolution" value={model.specs.resolution} />
        <SpecRow label="Aspect Ratios" value={model.specs.aspectRatios.join(", ")} />
        <SpecRow label="Max Clip" value={model.specs.maxClipLength} />
        <SpecRow label="Speed" value={model.specs.processingSpeed} />
        <SpecRow label="Color Space" value={model.specs.colorSpace} />
        <SpecRow label="Bit Depth" value={model.specs.bitDepth} />
        <SpecRow label="Codec" value={model.specs.codec} />
        {model.specs.frameRate && <SpecRow label="Frame Rate" value={model.specs.frameRate} />}
      </div>

      <div className="wavy-sep mb-4" />

      {/* Key Features */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Key Features
      </h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {model.keyFeatures.map((f) => (
          <span key={f} className="feature-chip">{f}</span>
        ))}
      </div>

      {/* Advanced Features */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Advanced Features
      </h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {model.advancedFeatures.map((f) => (
          <span key={f} className="feature-chip">{f}</span>
        ))}
      </div>

      <div className="wavy-sep mb-4" />

      {/* Pricing */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Pricing
      </h3>
      <div className="mb-4 grid grid-cols-2 gap-3">
        <PriceBox label="Free Tier" value={model.pricing.freeTier} emoji="\u{1F381}" />
        <PriceBox label="Paid Plans" value={model.pricing.paidPlans} emoji="\u{1F4B3}" />
        {model.pricing.perGeneration && (
          <PriceBox label="Per Generation" value={model.pricing.perGeneration} emoji="\u{26A1}" />
        )}
        {model.pricing.apiPricing && (
          <PriceBox label="API Pricing" value={model.pricing.apiPricing} emoji="\u{1F310}" />
        )}
      </div>

      {/* Availability */}
      <div className="mb-4 rounded-xl bg-emerald-50/60 px-4 py-3">
        <p className="text-xs font-semibold uppercase text-emerald-700/50">Availability</p>
        <p className="mt-1 text-sm text-emerald-800/70">{model.availability}</p>
      </div>

      {/* Limitations */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Limitations
      </h3>
      <ul className="space-y-1.5">
        {model.limitations.map((l) => (
          <li key={l} className="flex items-start gap-2 text-sm text-gray-500">
            <span className="mt-1.5 text-xs text-rose-400">&bull;</span>
            {l}
          </li>
        ))}
      </ul>
    </>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="spec-row">
      <span className="text-xs font-medium text-gray-400">{label}</span>
      <span className="text-right text-sm text-gray-700">{value}</span>
    </div>
  );
}

function PriceBox({ label, value, emoji }: { label: string; value: string; emoji: string }) {
  return (
    <div className="rounded-xl bg-gray-50/80 px-3 py-2.5 border border-gray-100">
      <p className="text-[10px] font-semibold uppercase text-gray-400">
        {emoji} {label}
      </p>
      <p className="mt-1 text-sm font-medium text-gray-700">{value}</p>
    </div>
  );
}
