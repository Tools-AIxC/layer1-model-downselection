"use client";

import { motion } from "framer-motion";
import { type ModelData } from "@/data/models";

interface SpecRow {
  label: string;
  value: string;
}

export default function SpecsTab({ model }: { model: ModelData }) {
  const specs: SpecRow[] = [
    { label: "Resolution", value: model.specs.resolution },
    { label: "Aspect Ratios", value: model.specs.aspectRatios.join("  /  ") },
    { label: "Max Clip Length", value: model.specs.maxClipLength },
    { label: "Processing Speed", value: model.specs.processingSpeed },
    { label: "Color Space", value: model.specs.colorSpace },
    { label: "Bit Depth", value: model.specs.bitDepth },
    { label: "Output Codec", value: model.specs.codec },
    { label: "Frame Rate", value: model.specs.frameRate || "Not specified" },
  ];

  return (
    <motion.div
      key={model.id + "-specs"}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="h-full overflow-y-auto p-6"
    >
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[var(--color-ink)]">
            Technical Specifications
          </h2>
          <p className="text-sm text-[var(--color-ink-faint)]">
            {model.name} {model.version} — {model.company}
          </p>
        </div>

        {/* Spec table */}
        <div className="panel overflow-hidden rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="data-label px-5 py-3 text-left">Parameter</th>
                <th className="data-label px-5 py-3 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  className="border-b border-[var(--color-border)] last:border-b-0 transition-colors hover:bg-[var(--color-sand-50)]"
                >
                  <td className="px-5 py-3 text-sm font-medium text-[var(--color-ink-muted)]">
                    {row.label}
                  </td>
                  <td className="px-5 py-3 font-mono text-sm text-[var(--color-ink)]">
                    {row.value}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Visual bars */}
        <div className="mt-6 space-y-4">
          <h3 className="data-label">Relative Metrics</h3>
          <BarMetric label="Resolution" value={resScore(model)} color="var(--color-accent-teal)" />
          <BarMetric label="Clip Duration" value={clipScore(model)} color="var(--color-accent-amber)" />
          <BarMetric label="Format Variety" value={Math.min(model.specs.aspectRatios.length / 6, 1)} color="var(--color-accent-indigo)" />
        </div>
      </div>
    </motion.div>
  );
}

function resScore(m: ModelData): number {
  const r = m.specs.resolution.toLowerCase();
  if (r.includes("4k")) return 1.0;
  if (r.includes("1080") || r.includes("1920")) return 0.75;
  if (r.includes("720") || r.includes("1280")) return 0.5;
  return 0.3;
}

function clipScore(m: ModelData): number {
  const match = m.specs.maxClipLength.match(/(\d+)/);
  const sec = match ? parseInt(match[1], 10) : 5;
  if (m.specs.maxClipLength.includes("140")) return 1.0;
  return Math.min(sec / 25, 1);
}

function BarMetric({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-[var(--color-ink-muted)]">{label}</span>
        <span className="font-mono text-xs text-[var(--color-ink-faint)]">
          {Math.round(value * 100)}%
        </span>
      </div>
      <div className="spec-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value * 100}%` }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="spec-bar-fill"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
