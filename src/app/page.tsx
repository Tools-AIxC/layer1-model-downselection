"use client";

import ScrollProgress from "@/components/ScrollProgress";
import HeroScene from "@/components/HeroScene";
import ModelScene from "@/components/ModelScene";
import TierDivider from "@/components/TierDivider";
import FinaleScene from "@/components/FinaleScene";
import FooterScene from "@/components/FooterScene";
import { models } from "@/data/models";

export default function Home() {
  const tier1 = models.filter((m) => m.tier === "tier1");
  const tier2 = models.filter((m) => m.tier === "tier2");
  const tier3 = models.filter((m) => m.tier === "tier3");

  return (
    <main>
      <ScrollProgress />

      {/* Act 1: Hero */}
      <HeroScene />

      {/* Act 2: Tier 1 — Must Try */}
      <TierDivider tier="tier1" count={tier1.length} />
      {tier1.map((model, i) => (
        <ModelScene key={model.id} model={model} index={i} total={models.length} />
      ))}

      {/* Act 3: Tier 2 — Worth Considering */}
      <TierDivider tier="tier2" count={tier2.length} />
      {tier2.map((model, i) => (
        <ModelScene key={model.id} model={model} index={tier1.length + i} total={models.length} />
      ))}

      {/* Act 4: Tier 3 — Probably Skip */}
      <TierDivider tier="tier3" count={tier3.length} />
      {tier3.map((model, i) => (
        <ModelScene key={model.id} model={model} index={tier1.length + tier2.length + i} total={models.length} />
      ))}

      {/* Finale: Full comparison */}
      <FinaleScene />

      {/* Credits */}
      <FooterScene />
    </main>
  );
}
