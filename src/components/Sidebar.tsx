"use client";

import { motion } from "framer-motion";
import { Radio, MapPin } from "lucide-react";
import { models, tierConfig, originFlags, type ModelData, type Tier } from "@/data/models";

const tierOrder: Tier[] = ["tier1", "tier2", "tier3"];

export default function Sidebar({
  activeId,
  onSelect,
  isCompareActive = false,
}: {
  activeId: string;
  onSelect: (m: ModelData) => void;
  isCompareActive?: boolean;
}) {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-[var(--color-border)] bg-[var(--color-panel)]">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded bg-[var(--color-accent-teal)] text-white">
          <Radio className="h-3.5 w-3.5" />
        </div>
        <div>
          <h1 className="text-xs font-bold tracking-wide text-[var(--color-ink)]">
            LAYER 1
          </h1>
          <p className="text-[10px] text-[var(--color-ink-faint)]">
            Model Down-Selection
          </p>
        </div>
      </div>

      <div className="hud-bar" />

      {/* Compare mode indicator */}
      {isCompareActive && (
        <div className="mx-3 mt-2 rounded bg-[var(--color-accent-indigo)]/10 px-3 py-2 text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent-indigo)]">
            Comparing All Models
          </span>
          <p className="mt-0.5 text-[10px] text-[var(--color-ink-faint)]">
            Select a model to view details
          </p>
        </div>
      )}

      {/* Model list */}
      <div className={`flex-1 overflow-y-auto py-2 ${isCompareActive ? "opacity-60" : ""}`}>
        {tierOrder.map((tier) => {
          const config = tierConfig[tier];
          const tierModels = models.filter((m) => m.tier === tier);
          return (
            <div key={tier} className="mb-1">
              {/* Tier header */}
              <div className="flex items-center gap-2 px-4 py-1.5">
                <div className={config.dotClass + " tier-dot"} />
                <span className="data-label">{config.label}</span>
                <span className="data-label ml-auto">{tierModels.length}</span>
              </div>

              {/* Models */}
              {tierModels.map((model, i) => {
                const isActive = model.id === activeId;
                return (
                  <motion.button
                    key={model.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    onClick={() => onSelect(model)}
                    className={`flex w-full items-center gap-3 border-l-[3px] px-4 py-2 text-left transition-all duration-150 ${
                      isActive
                        ? "border-l-[var(--color-accent-teal)] bg-[var(--color-sand-50)]"
                        : "border-l-transparent hover:bg-[var(--color-sand-100)]"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-sm font-medium ${
                            isActive
                              ? "text-[var(--color-ink)]"
                              : "text-[var(--color-ink-muted)]"
                          }`}
                        >
                          {model.name}
                        </span>
                        <span className="font-mono text-[10px] text-[var(--color-ink-faint)]">
                          {model.version}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-[var(--color-ink-faint)]">
                        <span>{originFlags[model.country]}</span>
                        <span>{model.company}</span>
                      </div>
                    </div>
                    {isActive && (
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-teal)] pulse-dot" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Footer stats */}
      <div className="border-t border-[var(--color-border)] px-4 py-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="font-mono text-base font-bold text-[var(--color-ink)]">12</div>
            <div className="data-label">Models</div>
          </div>
          <div>
            <div className="font-mono text-base font-bold text-[var(--color-ink)]">3</div>
            <div className="data-label">Origins</div>
          </div>
          <div>
            <div className="font-mono text-base font-bold text-[var(--color-accent-teal)]">5</div>
            <div className="data-label">Tier 1</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
