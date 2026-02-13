"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown, AlertTriangle } from "lucide-react";
import { models, tierConfig, originFlags } from "@/data/models";

type SortKey = "name" | "tier" | "resolution" | "clip" | "origin";

function resRank(r: string): number {
  if (r.toLowerCase().includes("4k")) return 4;
  if (r.includes("1080") || r.includes("1920")) return 3;
  if (r.includes("720") || r.includes("1280")) return 2;
  return 1;
}

function clipSec(s: string): number {
  const m = s.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function CompareTab() {
  const [sortKey, setSortKey] = useState<SortKey>("tier");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sorted = [...models].sort((a, b) => {
    let cmp = 0;
    switch (sortKey) {
      case "name": cmp = a.name.localeCompare(b.name); break;
      case "tier": {
        const order = { tier1: 0, tier2: 1, tier3: 2 };
        cmp = order[a.tier] - order[b.tier]; break;
      }
      case "resolution": cmp = resRank(a.specs.resolution) - resRank(b.specs.resolution); break;
      case "clip": cmp = clipSec(a.specs.maxClipLength) - clipSec(b.specs.maxClipLength); break;
      case "origin": cmp = a.country.localeCompare(b.country); break;
    }
    return sortDir === "asc" ? cmp : -cmp;
  });

  function toggle(k: SortKey) {
    if (sortKey === k) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(k); setSortDir("asc"); }
  }

  return (
    <motion.div
      key="compare-all"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex h-full flex-col overflow-hidden p-6"
    >
      <div className="mb-4">
        <h2 className="text-lg font-bold text-[var(--color-ink)]">
          All Models Comparison
        </h2>
        <p className="text-sm text-[var(--color-ink-faint)]">
          Click column headers to sort. 12 models across 3 tiers.
        </p>
      </div>

      {/* Filmstrip cards (horizontal scroll) */}
      <div className="filmstrip mb-6">
        {sorted.map((m, i) => {
          const tier = tierConfig[m.tier];
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
              className="panel w-56 rounded-lg p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-bold text-[var(--color-ink)]">{m.name}</span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase ${tier.tagBg} ${tier.tagText}`}
                >
                  {m.tierLabel}
                </span>
              </div>
              <div className="mb-3 text-[10px] text-[var(--color-ink-faint)]">
                {originFlags[m.country]} {m.company}
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-faint)]">Res</span>
                  <span className="font-mono text-[var(--color-ink)]">
                    {m.specs.resolution.length > 16 ? m.specs.resolution.slice(0, 16) + "..." : m.specs.resolution}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-faint)]">Clip</span>
                  <span className="font-mono text-[var(--color-ink)]">
                    {m.specs.maxClipLength.length > 16 ? m.specs.maxClipLength.slice(0, 16) + "..." : m.specs.maxClipLength}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-faint)]">Free</span>
                  <span className="font-mono text-[var(--color-accent-teal)]">
                    {m.pricing.freeTier.length > 16 ? m.pricing.freeTier.slice(0, 16) + "..." : m.pricing.freeTier}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-faint)]">Paid</span>
                  <span className="font-mono text-[var(--color-ink-muted)]">
                    {m.pricing.paidPlans.length > 16 ? m.pricing.paidPlans.slice(0, 16) + "..." : m.pricing.paidPlans}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full table */}
      <div className="panel flex-1 overflow-auto rounded-lg">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="sticky top-0 bg-[var(--color-panel)] z-10">
            <tr className="border-b border-[var(--color-border)]">
              <SH label="Model" k="name" cur={sortKey} dir={sortDir} toggle={toggle} />
              <SH label="Tier" k="tier" cur={sortKey} dir={sortDir} toggle={toggle} />
              <SH label="Origin" k="origin" cur={sortKey} dir={sortDir} toggle={toggle} />
              <SH label="Resolution" k="resolution" cur={sortKey} dir={sortDir} toggle={toggle} />
              <SH label="Max Clip" k="clip" cur={sortKey} dir={sortDir} toggle={toggle} />
              <th className="data-label px-4 py-3">Ratios</th>
              <th className="data-label px-4 py-3">Free Tier</th>
              <th className="data-label px-4 py-3">Paid Plans</th>
              <th className="data-label px-4 py-3">Highlight</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((m) => {
              const tier = tierConfig[m.tier];
              return (
                <tr
                  key={m.id}
                  className="border-b border-[var(--color-border)] last:border-b-0 transition-colors hover:bg-[var(--color-sand-50)]"
                >
                  <td className="px-4 py-2.5 font-medium text-[var(--color-ink)]">
                    {m.name} <span className="font-mono text-[10px] text-[var(--color-ink-faint)]">{m.version}</span>
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase ${tier.tagBg} ${tier.tagText}`}>
                      {m.tierLabel}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-[var(--color-ink-muted)]">
                    {originFlags[m.country]} {m.country}
                  </td>
                  <td className="px-4 py-2.5 font-mono text-[var(--color-ink)]">{m.specs.resolution}</td>
                  <td className="px-4 py-2.5 font-mono text-[var(--color-ink)]">
                    {m.specs.maxClipLength.length > 22 ? m.specs.maxClipLength.slice(0, 22) + "..." : m.specs.maxClipLength}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-[var(--color-ink-faint)]">
                    {m.specs.aspectRatios.join(", ")}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-[var(--color-accent-teal)]">
                    {m.pricing.freeTier.length > 24 ? m.pricing.freeTier.slice(0, 24) + "..." : m.pricing.freeTier}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-[var(--color-ink-muted)]">{m.pricing.paidPlans}</td>
                  <td className="px-4 py-2.5 text-xs text-[var(--color-ink-muted)] max-w-48 truncate">
                    {m.highlight}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footnote */}
      <div className="mt-4 flex items-start gap-2 text-[11px] text-[var(--color-ink-faint)]">
        <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-[var(--color-accent-amber)]" />
        Chinese-origin models: Kling (Kuaishou), Seedance (ByteDance), Wan (Alibaba), MiniMax Hailuo, Tencent Hunyuan. Sora 2 has regional restrictions (US, Canada, Japan, South Korea, Taiwan, and others).
      </div>
    </motion.div>
  );
}

function SH({ label, k, cur, dir, toggle }: {
  label: string; k: SortKey; cur: SortKey; dir: "asc"|"desc"; toggle: (k: SortKey) => void;
}) {
  const active = cur === k;
  return (
    <th className="px-4 py-3">
      <button
        onClick={() => toggle(k)}
        className="data-label flex items-center gap-1 transition-colors hover:text-[var(--color-ink-muted)]"
      >
        {label}
        <ArrowUpDown className={`h-3 w-3 ${active ? "text-[var(--color-accent-teal)]" : ""}`} />
      </button>
    </th>
  );
}
