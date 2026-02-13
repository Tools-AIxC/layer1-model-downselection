"use client";

import { BarChart3 } from "lucide-react";

export type TabId = "overview" | "specs" | "features" | "pricing" | "compare";

const modelTabs: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "specs", label: "Specifications" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing & Access" },
];

export default function TopBar({
  activeTab,
  onTabChange,
  modelName,
}: {
  activeTab: TabId;
  onTabChange: (t: TabId) => void;
  modelName: string;
}) {
  const isCompare = activeTab === "compare";

  return (
    <header className="flex items-end justify-between border-b border-[var(--color-border)] bg-[var(--color-panel)] px-6">
      <div className="flex items-center gap-6">
        {modelTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`pb-3 pt-4 text-sm font-medium transition-all duration-150 ${
              !isCompare && activeTab === tab.id ? "tab-active" : "tab-inactive"
            }`}
          >
            {tab.label}
          </button>
        ))}

        {/* Visual separator */}
        <div className="mx-1 h-5 w-px bg-[var(--color-border-strong)]" />

        {/* Compare All — visually distinct */}
        <button
          onClick={() => onTabChange("compare")}
          className={`flex items-center gap-1.5 pb-3 pt-4 text-sm font-medium transition-all duration-150 ${
            isCompare
              ? "border-b-2 border-[var(--color-accent-indigo)] text-[var(--color-accent-indigo)]"
              : "border-b-2 border-transparent text-[var(--color-ink-faint)] hover:text-[var(--color-accent-indigo)]"
          }`}
        >
          <BarChart3 className="h-3.5 w-3.5" />
          Compare All
        </button>
      </div>
      <div className="pb-3 text-right">
        <span className="data-label">Viewing</span>
        <span className="ml-2 font-mono text-sm font-semibold text-[var(--color-ink)]">
          {modelName}
        </span>
      </div>
    </header>
  );
}
