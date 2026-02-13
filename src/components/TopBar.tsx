"use client";

export type TabId = "overview" | "specs" | "features" | "pricing" | "compare";

const tabs: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "specs", label: "Specifications" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing & Access" },
  { id: "compare", label: "Compare All" },
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
  return (
    <header className="flex items-end justify-between border-b border-[var(--color-border)] bg-[var(--color-panel)] px-6">
      <div className="flex items-center gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`pb-3 pt-4 text-sm font-medium transition-all duration-150 ${
              activeTab === tab.id ? "tab-active" : "tab-inactive"
            }`}
          >
            {tab.label}
          </button>
        ))}
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
