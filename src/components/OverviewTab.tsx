"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Calendar, Users, Star, Globe, AlertTriangle } from "lucide-react";
import { tierConfig, originFlags, type ModelData } from "@/data/models";
import SpecRadar from "./SpecRadar";

export default function OverviewTab({ model }: { model: ModelData }) {
  const tier = tierConfig[model.tier];

  return (
    <motion.div
      key={model.id + "-overview"}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="grid h-full gap-4 overflow-y-auto p-6 lg:grid-cols-3"
    >
      {/* Left column — Identity */}
      <div className="flex flex-col gap-4 lg:col-span-1">
        {/* ID card */}
        <div className="panel rounded-lg p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[var(--color-ink)]">
              {model.name}
            </h2>
            <span
              className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tier.tagBg} ${tier.tagText}`}
            >
              {model.tierLabel}
            </span>
          </div>
          <div className="hud-bar mb-4 rounded" />

          <div className="space-y-3">
            <DataRow icon={Building2} label="Company" value={model.company} />
            <DataRow icon={MapPin} label="Location" value={`${originFlags[model.country]} ${model.city}`} />
            <DataRow icon={Users} label="Employees" value={model.employees} />
            <DataRow icon={Calendar} label="Released" value={model.releaseDate} />
            <DataRow icon={Globe} label="Availability" value={model.availability} />
          </div>
        </div>

        {/* Highlight callout */}
        <div className="panel-inset rounded-lg p-4">
          <div className="mb-2 flex items-center gap-2">
            <Star className="h-3.5 w-3.5 text-[var(--color-accent-amber)]" />
            <span className="data-label">Key Differentiator</span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--color-ink-light)]">
            {model.highlight}
          </p>
        </div>

        {/* Limitations */}
        <div className="panel rounded-lg p-4">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5 text-[var(--color-accent-terra)]" />
            <span className="data-label">Known Limitations</span>
          </div>
          <ul className="space-y-2">
            {model.limitations.map((l) => (
              <li key={l} className="flex items-start gap-2 text-xs text-[var(--color-ink-muted)]">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-terra)]" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right column — Radar + Quick Specs */}
      <div className="flex flex-col gap-4 lg:col-span-2">
        {/* Radar chart */}
        <div className="panel rounded-lg p-5">
          <h3 className="data-label mb-4">Capability Profile</h3>
          <SpecRadar model={model} />
        </div>

        {/* Quick spec grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <QuickStat label="Resolution" value={model.specs.resolution} />
          <QuickStat label="Max Clip" value={model.specs.maxClipLength} />
          <QuickStat label="Speed" value={model.specs.processingSpeed} />
          <QuickStat label="Codec" value={model.specs.codec} />
        </div>

        {/* Aspect Ratios filmstrip */}
        <div className="panel rounded-lg p-4">
          <h3 className="data-label mb-3">Supported Aspect Ratios</h3>
          <div className="flex flex-wrap gap-2">
            {model.specs.aspectRatios.map((ar) => (
              <span
                key={ar}
                className="rounded border border-[var(--color-border)] bg-[var(--color-sand-50)] px-3 py-1.5 font-mono text-xs text-[var(--color-ink-muted)]"
              >
                {ar}
              </span>
            ))}
          </div>
        </div>

        {/* Additional specs row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="panel-inset rounded-lg px-4 py-3">
            <div className="data-label mb-1">Color Space</div>
            <div className="data-value">{model.specs.colorSpace}</div>
          </div>
          <div className="panel-inset rounded-lg px-4 py-3">
            <div className="data-label mb-1">Bit Depth</div>
            <div className="data-value">{model.specs.bitDepth}</div>
          </div>
          <div className="panel-inset rounded-lg px-4 py-3">
            <div className="data-label mb-1">Frame Rate</div>
            <div className="data-value">{model.specs.frameRate || "Not specified"}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DataRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-ink-faint)]" />
      <div className="min-w-0 flex-1">
        <div className="data-label">{label}</div>
        <div className="text-sm text-[var(--color-ink-light)]">{value}</div>
      </div>
    </div>
  );
}

function QuickStat({ label, value }: { label: string; value: string }) {
  const display = value.length > 30 ? value.slice(0, 30) + "..." : value;
  return (
    <div className="panel rounded-lg px-4 py-3">
      <div className="data-label mb-1">{label}</div>
      <div className="text-sm font-medium text-[var(--color-ink)]">{display}</div>
    </div>
  );
}
