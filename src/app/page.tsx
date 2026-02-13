"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar, { type TabId } from "@/components/TopBar";
import OverviewTab from "@/components/OverviewTab";
import SpecsTab from "@/components/SpecsTab";
import FeaturesTab from "@/components/FeaturesTab";
import PricingTab from "@/components/PricingTab";
import CompareTab from "@/components/CompareTab";
import { models, type ModelData } from "@/data/models";

export default function Home() {
  const [activeModel, setActiveModel] = useState<ModelData>(models[0]);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  function renderTab() {
    switch (activeTab) {
      case "overview":
        return <OverviewTab model={activeModel} />;
      case "specs":
        return <SpecsTab model={activeModel} />;
      case "features":
        return <FeaturesTab model={activeModel} />;
      case "pricing":
        return <PricingTab model={activeModel} />;
      case "compare":
        return <CompareTab />;
      default:
        return <OverviewTab model={activeModel} />;
    }
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-sand-100)]">
      {/* Left sidebar */}
      <Sidebar
        activeId={activeModel.id}
        onSelect={(m) => {
          setActiveModel(m);
          if (activeTab === "compare") setActiveTab("overview");
        }}
      />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          modelName={activeTab === "compare" ? "All Models" : `${activeModel.name} ${activeModel.version}`}
        />
        <div className="hud-bar" />
        <main className="flex-1 overflow-hidden grid-paper">
          {renderTab()}
        </main>
      </div>
    </div>
  );
}
