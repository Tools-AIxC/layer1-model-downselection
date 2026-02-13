"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles } from "lucide-react";
import { type ModelData } from "@/data/models";
import { DetailSection, DetailSubsection, ContentSubsections } from "./DetailBullets";

export default function FeaturesTab({ model }: { model: ModelData }) {
  return (
    <motion.div
      key={model.id + "-features"}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="h-full overflow-y-auto p-6"
    >
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        {/* Key Features */}
        <div className="panel rounded-lg p-5">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--color-accent-teal)]/10">
              <Zap className="h-3.5 w-3.5 text-[var(--color-accent-teal)]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-ink)]">
              Key Features
            </h3>
            <span className="rounded bg-[var(--color-sand-100)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-ink-faint)]">
              {model.keyFeatures.length}
            </span>
          </div>
          <div className="hud-bar mb-4 rounded" />
          <ul className="space-y-3">
            {model.keyFeatures.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[var(--color-accent-teal)]/10 font-mono text-[10px] font-bold text-[var(--color-accent-teal)]">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-[var(--color-ink-light)]">
                  {f}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Advanced Features */}
        <div className="panel rounded-lg p-5">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--color-accent-amber)]/10">
              <Sparkles className="h-3.5 w-3.5 text-[var(--color-accent-amber)]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-ink)]">
              Advanced Features
            </h3>
            <span className="rounded bg-[var(--color-sand-100)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-ink-faint)]">
              {model.advancedFeatures.length}
            </span>
          </div>
          <div className="hud-bar mb-4 rounded" style={{ background: `linear-gradient(90deg, var(--color-accent-amber), var(--color-accent-terra))` }} />
          <ul className="space-y-3">
            {model.advancedFeatures.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[var(--color-accent-amber)]/10 font-mono text-[10px] font-bold text-[var(--color-accent-amber)]">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm leading-relaxed text-[var(--color-ink-light)]">
                  {f}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Detailed Feature Sections (verbatim) ── */}
      {model.detailed && (
        <div className="mx-auto max-w-5xl space-y-4">
          <div className="hud-bar rounded" />

          <DetailSection title="Text to Video" accent="var(--color-accent-teal)">
            <DetailSubsection title="" items={model.detailed.features.textToVideo} />
          </DetailSection>

          <DetailSection title="Keyframe Support (Startframe + Endframe)" accent="var(--color-accent-amber)">
            <DetailSubsection title="" items={model.detailed.features.keyframeSupport} />
          </DetailSection>

          {model.detailed.features.ingredientsToVideo.length > 0 && (
            <DetailSection title="'Ingredients' to Video">
              <DetailSubsection title="" items={model.detailed.features.ingredientsToVideo} />
            </DetailSection>
          )}

          {model.detailed.features.videoEditing.length > 0 && (
            <DetailSection title="Video Editing">
              <DetailSubsection title="" items={model.detailed.features.videoEditing} />
            </DetailSection>
          )}

          <ContentSubsections sections={model.detailed.features.additionalSections} />

          {/* Further Info — feature-adjacent sections */}
          {model.detailed.furtherInfo.cameraControl && model.detailed.furtherInfo.cameraControl.length > 0 && (
            <DetailSection title="Camera Control">
              <DetailSubsection title="" items={model.detailed.furtherInfo.cameraControl} />
            </DetailSection>
          )}

          {model.detailed.furtherInfo.physicsAndMotion && model.detailed.furtherInfo.physicsAndMotion.length > 0 && (
            <DetailSection title="Physics & Motion">
              <DetailSubsection title="" items={model.detailed.furtherInfo.physicsAndMotion} />
            </DetailSection>
          )}

          {model.detailed.furtherInfo.characterFeatures && model.detailed.furtherInfo.characterFeatures.length > 0 && (
            <DetailSection title="Character Features">
              <DetailSubsection title="" items={model.detailed.furtherInfo.characterFeatures} />
            </DetailSection>
          )}

          {model.detailed.furtherInfo.audioFeatures && model.detailed.furtherInfo.audioFeatures.length > 0 && (
            <DetailSection title="Audio Features">
              <DetailSubsection title="" items={model.detailed.furtherInfo.audioFeatures} />
            </DetailSection>
          )}

          {model.detailed.furtherInfo.safetyProvenance && model.detailed.furtherInfo.safetyProvenance.length > 0 && (
            <DetailSection title="Safety & Provenance">
              <DetailSubsection title="" items={model.detailed.furtherInfo.safetyProvenance} />
            </DetailSection>
          )}

          {model.detailed.furtherInfo.architectureTraining && model.detailed.furtherInfo.architectureTraining.length > 0 && (
            <DetailSection title="Architecture & Training">
              <DetailSubsection title="" items={model.detailed.furtherInfo.architectureTraining} />
            </DetailSection>
          )}

          {model.detailed.furtherInfo.dataAndTraining && model.detailed.furtherInfo.dataAndTraining.length > 0 && (
            <DetailSection title="Data & Training">
              <DetailSubsection title="" items={model.detailed.furtherInfo.dataAndTraining} />
            </DetailSection>
          )}

          {model.detailed.furtherInfo.videoSuperResolution && model.detailed.furtherInfo.videoSuperResolution.length > 0 && (
            <DetailSection title="Video Super-Resolution">
              <DetailSubsection title="" items={model.detailed.furtherInfo.videoSuperResolution} />
            </DetailSection>
          )}

          <ContentSubsections sections={model.detailed.furtherInfo.additionalSections} />
        </div>
      )}
    </motion.div>
  );
}
