"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { tierConfig, originFlags, type ModelData, type BubblePosition, type BulletItem, type ContentSubsection } from "@/data/models";

export default function ExpandedBubble({
  model,
  pos,
  onClose,
}: {
  model: ModelData | null;
  pos: BubblePosition | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {model && pos && (
        <>
          {/* Backdrop (click to close) */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/10"
          />

          {/* Expanded card — centered via inset + margin auto */}
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="expanded-card fixed inset-0 z-[9999] m-auto max-h-[85vh] w-[520px] overflow-y-auto p-6"
            style={{ height: "fit-content" }}
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent model={model} onClose={onClose} />
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

function CardContent({ model, onClose }: { model: ModelData; onClose: () => void }) {
  const tier = tierConfig[model.tier];

  return (
    <>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-gray-100 p-1.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Header */}
      <div className="mb-4 flex items-start gap-3">
        <span className="text-3xl">{tier.emoji}</span>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {model.name}{" "}
            <span className="text-sm font-normal text-gray-400">{model.version}</span>
          </h2>
          <p className="text-sm text-gray-500">
            {originFlags[model.country]} {model.company} &middot; {model.city}
          </p>
          <p className="text-xs text-gray-400">
            {model.employees} employees &middot; Released {model.releaseDate}
          </p>
        </div>
      </div>

      {/* Tier + Highlight */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className="tag-pill"
          style={{ backgroundColor: `${tier.accent}15`, color: tier.accent }}
        >
          {tier.emoji} {tier.label}
        </span>
      </div>

      <div className="mb-4 rounded-2xl bg-amber-50/60 px-4 py-3">
        <p className="text-sm leading-relaxed text-amber-800/70">
          &#x2728; {model.highlight}
        </p>
      </div>

      {/* Demo Videos */}
      {((model.youtubeIds?.length ?? 0) > 0 || (model.localVideos?.length ?? 0) > 0) && (
        <>
          <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
            Demo Videos
          </h3>
          <div className="mb-4 space-y-3">
            {model.youtubeIds?.map((id, i) => (
              <div key={id} className="overflow-hidden rounded-2xl border border-gray-100 bg-black">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                    title={model.youtubeTitles?.[i] ?? `Video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full border-none"
                  />
                </div>
                <p className="truncate px-3 py-2 text-xs text-gray-400">
                  {model.youtubeTitles?.[i] ?? `Video ${i + 1}`}
                </p>
              </div>
            ))}
            {model.localVideos?.map((vid) => (
              <div key={vid.src} className="overflow-hidden rounded-2xl border border-gray-100 bg-black">
                <div className="aspect-video">
                  <video
                    src={vid.src}
                    controls
                    preload="metadata"
                    playsInline
                    muted
                    loop
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="truncate px-3 py-2 text-xs text-gray-400">
                  {vid.title}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="wavy-sep mb-4" />

      {/* Specs */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Technical Specs
      </h3>
      <div className="mb-4">
        <SpecRow label="Resolution" value={model.specs.resolution} />
        <SpecRow label="Aspect Ratios" value={model.specs.aspectRatios.join(", ")} />
        <SpecRow label="Max Clip" value={model.specs.maxClipLength} />
        <SpecRow label="Speed" value={model.specs.processingSpeed} />
        <SpecRow label="Color Space" value={model.specs.colorSpace} />
        <SpecRow label="Bit Depth" value={model.specs.bitDepth} />
        <SpecRow label="Codec" value={model.specs.codec} />
        {model.specs.frameRate && <SpecRow label="Frame Rate" value={model.specs.frameRate} />}
      </div>

      <div className="wavy-sep mb-4" />

      {/* Key Features */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Key Features
      </h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {model.keyFeatures.map((f) => (
          <span key={f} className="feature-chip">{f}</span>
        ))}
      </div>

      {/* Advanced Features */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Advanced Features
      </h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {model.advancedFeatures.map((f) => (
          <span key={f} className="feature-chip">{f}</span>
        ))}
      </div>

      <div className="wavy-sep mb-4" />

      {/* Pricing */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Pricing
      </h3>
      <div className="mb-4 grid grid-cols-2 gap-3">
        <PriceBox label="Free Tier" value={model.pricing.freeTier} emoji="\u{1F381}" />
        <PriceBox label="Paid Plans" value={model.pricing.paidPlans} emoji="\u{1F4B3}" />
        {model.pricing.perGeneration && (
          <PriceBox label="Per Generation" value={model.pricing.perGeneration} emoji="\u{26A1}" />
        )}
        {model.pricing.apiPricing && (
          <PriceBox label="API Pricing" value={model.pricing.apiPricing} emoji="\u{1F310}" />
        )}
      </div>

      {/* Availability */}
      <div className="mb-4 rounded-xl bg-emerald-50/60 px-4 py-3">
        <p className="text-xs font-semibold uppercase text-emerald-700/50">Availability</p>
        <p className="mt-1 text-sm text-emerald-800/70">{model.availability}</p>
      </div>

      {/* Limitations */}
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        Limitations
      </h3>
      <ul className="space-y-1.5">
        {model.limitations.map((l) => (
          <li key={l} className="flex items-start gap-2 text-sm text-gray-500">
            <span className="mt-1.5 text-xs text-rose-400">&bull;</span>
            {l}
          </li>
        ))}
      </ul>

      {/* ── Detailed Verbatim Content (Miro/Notion) ── */}
      {model.detailed && (
        <>
          <div className="wavy-sep my-4" />

          {/* Additional Company Info */}
          {model.detailed.companyInfo.additionalInfo && model.detailed.companyInfo.additionalInfo.length > 0 && (
            <GardenSection title="Additional Company Info">
              <GardenBullets items={model.detailed.companyInfo.additionalInfo.map(t => ({ text: t }))} />
            </GardenSection>
          )}

          {/* Model Info */}
          <GardenSection title="Model Info">
            <GardenSubsection title="Advertised Focus" items={model.detailed.modelInfo.advertisedFocus} />
            <GardenSubsection title="Advertised Resolutions" items={model.detailed.modelInfo.advertisedResolutions} />
            <GardenSubsection title="Aspect Ratios" items={model.detailed.modelInfo.aspectRatios} />
            <GardenSubsection title="Maximum Clip Length" items={model.detailed.modelInfo.maxClipLength} />
            <GardenSubsection title="Colourspace / Bit Depth" items={model.detailed.modelInfo.colourspaceBitDepth ?? []} />
            <GardenSubsection title="Processing Speed" items={model.detailed.modelInfo.processingSpeed ?? []} />
            <GardenSubsection title="Frame Rate" items={model.detailed.modelInfo.frameRate ?? []} />
          </GardenSection>

          <div className="wavy-sep my-4" />

          {/* Features */}
          <GardenSection title="Key Features / Functionality">
            <GardenSubsection title="Text to Video" items={model.detailed.features.textToVideo} />
            <GardenSubsection title="Keyframe Support" items={model.detailed.features.keyframeSupport} />
            {model.detailed.features.ingredientsToVideo.length > 0 && (
              <GardenSubsection title="Ingredients to Video" items={model.detailed.features.ingredientsToVideo} />
            )}
            {model.detailed.features.videoEditing.length > 0 && (
              <GardenSubsection title="Video Editing" items={model.detailed.features.videoEditing} />
            )}
            {model.detailed.features.additionalSections?.map((sec, i) => (
              <GardenSubsection key={i} title={sec.title} items={sec.items} />
            ))}
          </GardenSection>

          <div className="wavy-sep my-4" />

          {/* Further Information */}
          <GardenSection title="Further Information">
            {model.detailed.furtherInfo.cameraControl && model.detailed.furtherInfo.cameraControl.length > 0 && (
              <GardenSubsection title="Camera Control" items={model.detailed.furtherInfo.cameraControl} />
            )}
            {model.detailed.furtherInfo.physicsAndMotion && model.detailed.furtherInfo.physicsAndMotion.length > 0 && (
              <GardenSubsection title="Physics & Motion" items={model.detailed.furtherInfo.physicsAndMotion} />
            )}
            {model.detailed.furtherInfo.characterFeatures && model.detailed.furtherInfo.characterFeatures.length > 0 && (
              <GardenSubsection title="Character Features" items={model.detailed.furtherInfo.characterFeatures} />
            )}
            {model.detailed.furtherInfo.audioFeatures && model.detailed.furtherInfo.audioFeatures.length > 0 && (
              <GardenSubsection title="Audio Features" items={model.detailed.furtherInfo.audioFeatures} />
            )}
            {model.detailed.furtherInfo.platformAvailability && model.detailed.furtherInfo.platformAvailability.length > 0 && (
              <GardenSubsection title="Platform Availability" items={model.detailed.furtherInfo.platformAvailability} />
            )}
            {model.detailed.furtherInfo.pricingModel && model.detailed.furtherInfo.pricingModel.length > 0 && (
              <GardenSubsection title="Pricing Model" items={model.detailed.furtherInfo.pricingModel} />
            )}
            {model.detailed.furtherInfo.regionalAvailability && model.detailed.furtherInfo.regionalAvailability.length > 0 && (
              <GardenSubsection title="Regional Availability" items={model.detailed.furtherInfo.regionalAvailability} />
            )}
            {model.detailed.furtherInfo.safetyProvenance && model.detailed.furtherInfo.safetyProvenance.length > 0 && (
              <GardenSubsection title="Safety & Provenance" items={model.detailed.furtherInfo.safetyProvenance} />
            )}
            {model.detailed.furtherInfo.architectureTraining && model.detailed.furtherInfo.architectureTraining.length > 0 && (
              <GardenSubsection title="Architecture & Training" items={model.detailed.furtherInfo.architectureTraining} />
            )}
            {model.detailed.furtherInfo.dataAndTraining && model.detailed.furtherInfo.dataAndTraining.length > 0 && (
              <GardenSubsection title="Data & Training" items={model.detailed.furtherInfo.dataAndTraining} />
            )}
            {model.detailed.furtherInfo.videoSuperResolution && model.detailed.furtherInfo.videoSuperResolution.length > 0 && (
              <GardenSubsection title="Video Super-Resolution" items={model.detailed.furtherInfo.videoSuperResolution} />
            )}
            {model.detailed.furtherInfo.systemRequirements && model.detailed.furtherInfo.systemRequirements.length > 0 && (
              <GardenSubsection title="System Requirements" items={model.detailed.furtherInfo.systemRequirements} />
            )}
            {model.detailed.furtherInfo.notableAchievements && model.detailed.furtherInfo.notableAchievements.length > 0 && (
              <GardenSubsection title="Notable Achievements" items={model.detailed.furtherInfo.notableAchievements} />
            )}
            {model.detailed.furtherInfo.equipmentFootage && model.detailed.furtherInfo.equipmentFootage.length > 0 && (
              <GardenSubsection title="Equipment / Footage" items={model.detailed.furtherInfo.equipmentFootage} />
            )}
            {model.detailed.furtherInfo.limitations && model.detailed.furtherInfo.limitations.length > 0 && (
              <GardenSubsection title="Detailed Limitations" items={model.detailed.furtherInfo.limitations} />
            )}
            {model.detailed.furtherInfo.additionalSections?.map((sec, i) => (
              <GardenSubsection key={i} title={sec.title} items={sec.items} />
            ))}
          </GardenSection>
        </>
      )}
    </>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="spec-row">
      <span className="text-xs font-medium text-gray-400">{label}</span>
      <span className="text-right text-sm text-gray-700">{value}</span>
    </div>
  );
}

function PriceBox({ label, value, emoji }: { label: string; value: string; emoji: string }) {
  return (
    <div className="rounded-xl bg-gray-50/80 px-3 py-2.5 border border-gray-100">
      <p className="text-[10px] font-semibold uppercase text-gray-400">
        {emoji} {label}
      </p>
      <p className="mt-1 text-sm font-medium text-gray-700">{value}</p>
    </div>
  );
}

/* ── Garden-themed detail renderers ── */

function GardenBullets({ items }: { items: BulletItem[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i}>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="mt-1.5 text-xs text-rose-400">&bull;</span>
            <span>{item.text}</span>
          </div>
          {item.subItems && item.subItems.length > 0 && (
            <ul className="ml-5 mt-1 space-y-1">
              {item.subItems.map((sub, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                  <span className="mt-1 text-[10px] text-rose-300">&#9702;</span>
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

function GardenSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="sketchy-underline mb-3 inline-block text-xs font-bold uppercase tracking-wider text-gray-500">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function GardenSubsection({ title, items }: { title: string; items: BulletItem[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="rounded-xl bg-gray-50/60 px-4 py-3 border border-gray-100">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
        {title}
      </p>
      <GardenBullets items={items} />
    </div>
  );
}
