"use client";

import { motion } from "framer-motion";
import { Gift, CreditCard, DollarSign, Globe, Server, AlertTriangle } from "lucide-react";
import { type ModelData } from "@/data/models";

export default function PricingTab({ model }: { model: ModelData }) {
  return (
    <motion.div
      key={model.id + "-pricing"}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="h-full overflow-y-auto p-6"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[var(--color-ink)]">
            Pricing & Access
          </h2>
          <p className="text-sm text-[var(--color-ink-faint)]">
            {model.name} — {model.company}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <PricingCard
            icon={Gift}
            label="Free Tier"
            value={model.pricing.freeTier}
            accent="var(--color-accent-teal)"
          />
          <PricingCard
            icon={CreditCard}
            label="Paid Plans"
            value={model.pricing.paidPlans}
            accent="var(--color-accent-amber)"
          />
          {model.pricing.perGeneration && (
            <PricingCard
              icon={DollarSign}
              label="Per Generation"
              value={model.pricing.perGeneration}
              accent="var(--color-accent-terra)"
            />
          )}
          {model.pricing.apiPricing && (
            <PricingCard
              icon={Server}
              label="API Pricing"
              value={model.pricing.apiPricing}
              accent="var(--color-accent-indigo)"
            />
          )}
        </div>

        {/* Availability */}
        <div className="panel rounded-lg p-5">
          <div className="mb-3 flex items-center gap-2">
            <Globe className="h-4 w-4 text-[var(--color-accent-teal)]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-ink)]">
              Availability
            </h3>
          </div>
          <div className="hud-bar mb-4 rounded" />
          <p className="text-sm leading-relaxed text-[var(--color-ink-light)]">
            {model.availability}
          </p>
        </div>

        {/* Origin note */}
        {model.country === "China" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex items-start gap-3 rounded-lg border border-[var(--color-accent-amber)]/20 bg-amber-50/50 px-4 py-3"
          >
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-amber)]" />
            <p className="text-xs leading-relaxed text-[var(--color-ink-muted)]">
              <strong className="text-[var(--color-accent-amber)]">Origin note:</strong>{" "}
              This model originates from China. Regional access restrictions or
              data handling policies may apply depending on your jurisdiction.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function PricingCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="panel rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <div
          className="flex h-7 w-7 items-center justify-center rounded"
          style={{ backgroundColor: `${accent}15` }}
        >
          <Icon className="h-3.5 w-3.5" style={{ color: accent }} />
        </div>
        <span className="data-label">{label}</span>
      </div>
      <p className="font-mono text-sm font-medium text-[var(--color-ink)]">
        {value}
      </p>
    </div>
  );
}
