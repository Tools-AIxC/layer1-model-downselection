"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ModelData, BulletItem, ContentSubsection } from "@/data/models";
import { tierConfig, originFlags, cinematicConfig } from "@/data/models";

export default function ModelPanel({
  model,
  index,
  total,
}: {
  model: ModelData;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const config = cinematicConfig[model.id];
  const tier = tierConfig[model.tier];

  /* Parallax: track when this panel is scrolled through */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Different speeds for parallax layers */
  const bgX = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const titleX = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const contentX = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const hasYouTube = config.youtubeIds.length > 0;
  const hasLocal = (config.localVideos?.length ?? 0) > 0;
  const hasVideos = hasYouTube || hasLocal;

  return (
    <div ref={ref} className="h-panel" style={{ background: config.bgGradient }}>
      <div className="scanline" />

      {/* Glow orb — fastest parallax layer */}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          x: glowX,
          width: 600, height: 600, borderRadius: "50%",
          background: `radial-gradient(circle, ${config.accentGlow}25 0%, transparent 70%)`,
          top: "-10%",
          right: index % 2 === 0 ? "-5%" : "auto",
          left: index % 2 !== 0 ? "-5%" : "auto",
          willChange: "transform",
        }}
      />

      <motion.div className="relative z-10 flex h-full" style={{ opacity }}>
        {/* ── LEFT: Info column ── */}
        <div className="flex w-full flex-col justify-center px-10 lg:w-[55%] lg:px-16">
          {/* Scene counter + neon line */}
          <motion.div style={{ x: titleX }} className="mb-6 will-change-transform">
            <p className="mb-2 font-mono text-xs tracking-widest" style={{ color: config.accentGlow, opacity: 0.5 }}>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <div className="neon-line mb-6 w-24" style={{ "--line": `${config.accentGlow}80` } as React.CSSProperties} />

            {/* Model name */}
            <h2
              className="glow-text font-hero mb-1 text-4xl font-extrabold tracking-tight lg:text-6xl"
              style={{ "--glow": `${config.accentGlow}40` } as React.CSSProperties}
            >
              {model.name}
              <span className="ml-3 text-xl font-light opacity-30 lg:text-2xl">{model.version}</span>
            </h2>
            <p className="text-lg font-light italic tracking-wide" style={{ color: `${config.accentGlow}bb` }}>
              {config.tagline}
            </p>
          </motion.div>

          {/* Scrollable detail area */}
          <motion.div
            style={{ x: contentX }}
            className="model-scroll max-h-[60vh] overflow-y-auto pr-4 will-change-transform"
          >
            {/* Origin + tier */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className="tier-badge"
                style={{ backgroundColor: `${tier.accent}18`, color: tier.accent, borderColor: `${tier.accent}30` }}
              >
                {tier.icon} {tier.label}
              </span>
              <span className="text-sm text-white/25">
                {originFlags[model.country]} {model.company} · {model.city}
              </span>
            </div>

            {/* Highlight */}
            <div className="mb-5 rounded-xl px-4 py-3" style={{ backgroundColor: `${config.accentGlow}0c`, borderLeft: `3px solid ${config.accentGlow}50` }}>
              <p className="text-sm font-medium" style={{ color: `${config.accentGlow}cc` }}>✦ {model.highlight}</p>
            </div>

            {/* Specs grid */}
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">Technical Specs</h3>
            <div className="mb-5 grid grid-cols-2 gap-2">
              <Spec label="Resolution" value={model.specs.resolution} glow={config.accentGlow} />
              <Spec label="Max Clip" value={model.specs.maxClipLength} glow={config.accentGlow} />
              <Spec label="Aspect Ratios" value={model.specs.aspectRatios.join(", ")} glow={config.accentGlow} />
              <Spec label="Speed" value={model.specs.processingSpeed} glow={config.accentGlow} />
              <Spec label="Codec" value={model.specs.codec} glow={config.accentGlow} />
              <Spec label="Bit Depth" value={model.specs.bitDepth} glow={config.accentGlow} />
            </div>

            {/* Features */}
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">Key Features</h3>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {model.keyFeatures.map((f) => (
                <span key={f} className="feat-pill" style={{ color: `${config.accentGlow}aa` }}>{f}</span>
              ))}
            </div>

            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">Advanced</h3>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {model.advancedFeatures.map((f) => (
                <span key={f} className="feat-pill text-white/40">{f}</span>
              ))}
            </div>

            {/* Pricing */}
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">Pricing</h3>
            <div className="mb-4 grid grid-cols-2 gap-2">
              <div className="price-box">
                <p className="text-[10px] font-bold uppercase text-white/20">🎁 Free</p>
                <p className="mt-1 text-xs text-white/50">{model.pricing.freeTier}</p>
              </div>
              <div className="price-box">
                <p className="text-[10px] font-bold uppercase text-white/20">💳 Paid</p>
                <p className="mt-1 text-xs text-white/50">{model.pricing.paidPlans}</p>
              </div>
              {model.pricing.apiPricing && (
                <div className="price-box col-span-2">
                  <p className="text-[10px] font-bold uppercase text-white/20">🌐 API</p>
                  <p className="mt-1 text-xs text-white/50">{model.pricing.apiPricing}</p>
                </div>
              )}
            </div>

            {/* Availability + limitations */}
            <div className="mb-4 rounded-xl bg-white/[0.02] px-4 py-3 border border-white/[0.04]">
              <p className="text-[10px] font-bold uppercase text-white/20 mb-1">Availability</p>
              <p className="text-xs text-white/40">{model.availability}</p>
            </div>

            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">Limitations</h3>
            <ul className="space-y-1 mb-6">
              {model.limitations.map((l) => (
                <li key={l} className="flex items-start gap-2 text-xs text-white/30">
                  <span className="mt-0.5 text-red-400/50">✕</span>{l}
                </li>
              ))}
            </ul>

            {/* ═══ DETAILED CONTENT (verbatim Miro/Notion data) ═══ */}
            <div className="mt-6 border-t border-white/[0.06] pt-6">
              {/* ── Company Info ── */}
              {model.detailed.companyInfo.additionalInfo && model.detailed.companyInfo.additionalInfo.length > 0 && (
                <DetailSection title="Company Info" glow={config.accentGlow}>
                  <p className="text-xs text-white/35 mb-1"><strong className="text-white/50">Company:</strong> {model.company}</p>
                  <p className="text-xs text-white/35 mb-1"><strong className="text-white/50">Location:</strong> {model.city}</p>
                  <p className="text-xs text-white/35 mb-1"><strong className="text-white/50">Size:</strong> {model.employees}</p>
                  <p className="text-xs text-white/35 mb-1"><strong className="text-white/50">Latest Release:</strong> {model.releaseDate}</p>
                  <DetailBullets items={model.detailed.companyInfo.additionalInfo.map(t => ({ text: t }))} />
                </DetailSection>
              )}

              {/* ── Model Info ── */}
              <DetailSection title="Model Info" glow={config.accentGlow}>
                <DetailSubsection title="Advertised Focus / Specialisations" items={model.detailed.modelInfo.advertisedFocus} glow={config.accentGlow} />
                <DetailSubsection title="Advertised Resolutions" items={model.detailed.modelInfo.advertisedResolutions} glow={config.accentGlow} />
                <DetailSubsection title="Aspect Ratios" items={model.detailed.modelInfo.aspectRatios} glow={config.accentGlow} />
                <DetailSubsection title="Maximum Clip Length" items={model.detailed.modelInfo.maxClipLength} glow={config.accentGlow} />
                {model.detailed.modelInfo.colourspaceBitDepth && (
                  <DetailSubsection title="Colourspace / Bit Depth" items={model.detailed.modelInfo.colourspaceBitDepth} glow={config.accentGlow} />
                )}
                {model.detailed.modelInfo.processingSpeed && (
                  <DetailSubsection title="Processing Speed" items={model.detailed.modelInfo.processingSpeed} glow={config.accentGlow} />
                )}
                {model.detailed.modelInfo.frameRate && (
                  <DetailSubsection title="Frame Rate" items={model.detailed.modelInfo.frameRate} glow={config.accentGlow} />
                )}
              </DetailSection>

              {/* ── Key Features / Functionality ── */}
              <DetailSection title="Key Features / Functionality" glow={config.accentGlow}>
                <DetailSubsection title="Text to Video" items={model.detailed.features.textToVideo} glow={config.accentGlow} />
                <DetailSubsection title="Keyframe Support (Startframe + Endframe)" items={model.detailed.features.keyframeSupport} glow={config.accentGlow} />
                {model.detailed.features.ingredientsToVideo.length > 0 && (
                  <DetailSubsection title="'Ingredients' to Video" items={model.detailed.features.ingredientsToVideo} glow={config.accentGlow} />
                )}
                {model.detailed.features.videoEditing.length > 0 && (
                  <DetailSubsection title="Video Editing" items={model.detailed.features.videoEditing} glow={config.accentGlow} />
                )}
                {model.detailed.features.additionalSections?.map((s) => (
                  <DetailSubsection key={s.title} title={s.title} items={s.items} glow={config.accentGlow} />
                ))}
              </DetailSection>

              {/* ── Further Information ── */}
              {Object.keys(model.detailed.furtherInfo).length > 0 && (
                <DetailSection title="Further Information" glow={config.accentGlow}>
                  {model.detailed.furtherInfo.cameraControl && (
                    <DetailSubsection title="Camera Control" items={model.detailed.furtherInfo.cameraControl} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.physicsAndMotion && (
                    <DetailSubsection title="Physics & Motion" items={model.detailed.furtherInfo.physicsAndMotion} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.characterFeatures && (
                    <DetailSubsection title="Character Features" items={model.detailed.furtherInfo.characterFeatures} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.audioFeatures && (
                    <DetailSubsection title="Audio Features" items={model.detailed.furtherInfo.audioFeatures} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.safetyProvenance && (
                    <DetailSubsection title="Safety & Provenance" items={model.detailed.furtherInfo.safetyProvenance} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.platformAvailability && (
                    <DetailSubsection title="Platform Availability" items={model.detailed.furtherInfo.platformAvailability} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.regionalAvailability && (
                    <DetailSubsection title="Regional Availability" items={model.detailed.furtherInfo.regionalAvailability} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.pricingModel && (
                    <DetailSubsection title="Pricing Model" items={model.detailed.furtherInfo.pricingModel} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.dataAndTraining && (
                    <DetailSubsection title="Data & Training" items={model.detailed.furtherInfo.dataAndTraining} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.architectureTraining && (
                    <DetailSubsection title="Architecture & Training" items={model.detailed.furtherInfo.architectureTraining} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.videoSuperResolution && (
                    <DetailSubsection title="Video Super-Resolution" items={model.detailed.furtherInfo.videoSuperResolution} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.systemRequirements && (
                    <DetailSubsection title="System Requirements" items={model.detailed.furtherInfo.systemRequirements} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.notableAchievements && (
                    <DetailSubsection title="Notable Achievements" items={model.detailed.furtherInfo.notableAchievements} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.equipmentFootage && (
                    <DetailSubsection title="Equipment / Footage" items={model.detailed.furtherInfo.equipmentFootage} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.limitations && (
                    <DetailSubsection title="Detailed Limitations" items={model.detailed.furtherInfo.limitations} glow={config.accentGlow} />
                  )}
                  {model.detailed.furtherInfo.additionalSections?.map((s) => (
                    <DetailSubsection key={s.title} title={s.title} items={s.items} glow={config.accentGlow} />
                  ))}
                </DetailSection>
              )}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Video column (only on lg+) ── */}
        {hasVideos && (
          <motion.div
            style={{ x: bgX }}
            className="hidden w-[45%] flex-col justify-center gap-4 pr-12 lg:flex will-change-transform"
          >
            {/* ── YouTube embeds ── */}
            {hasYouTube && (
              <>
                {/* Primary YouTube — large */}
                <div className="yt-frame">
                  <iframe
                    src={`https://www.youtube.com/embed/${config.youtubeIds[0]}?rel=0&modestbranding=1`}
                    title={config.youtubeTitles[0]}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-white/20 text-center">{config.youtubeTitles[0]}</p>

                {/* Secondary YouTube — smaller row */}
                {config.youtubeIds.length > 1 && (
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {config.youtubeIds.slice(1, 3).map((vid, i) => (
                      <div key={vid}>
                        <div className="yt-frame">
                          <iframe
                            src={`https://www.youtube.com/embed/${vid}?rel=0&modestbranding=1`}
                            title={config.youtubeTitles[i + 1]}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                        <p className="mt-1 text-[10px] text-white/15 text-center truncate">{config.youtubeTitles[i + 1]}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* ── Local video files ── */}
            {hasLocal && config.localVideos && (
              <>
                {/* Primary local video — large */}
                <div className="yt-frame">
                  <video
                    src={config.localVideos[0].src}
                    controls
                    preload="metadata"
                    playsInline
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-white/20 text-center">{config.localVideos[0].title}</p>

                {/* Secondary local videos — smaller row */}
                {config.localVideos.length > 1 && (
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {config.localVideos.slice(1, 3).map((vid) => (
                      <div key={vid.src}>
                        <div className="yt-frame">
                          <video
                            src={vid.src}
                            controls
                            preload="metadata"
                            playsInline
                            muted
                            loop
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="mt-1 text-[10px] text-white/15 text-center truncate">{vid.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

function Spec({ label, value, glow }: { label: string; value: string; glow: string }) {
  return (
    <div className="spec-item">
      <p className="spec-label">{label}</p>
      <p className="spec-value" style={{ color: `${glow}bb` }}>{value}</p>
    </div>
  );
}

/* ── Detailed content helper components ── */

function DetailSection({ title, glow, children }: { title: string; glow: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3
        className="mb-3 text-xs font-bold uppercase tracking-[0.12em]"
        style={{ color: `${glow}99` }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function DetailSubsection({ title, items, glow }: { title: string; items: BulletItem[]; glow: string }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-3">
      <h4 className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/30">
        {title}
      </h4>
      <DetailBullets items={items} />
    </div>
  );
}

function DetailBullets({ items }: { items: BulletItem[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i} className="text-xs text-white/40">
          <span className="mr-1.5 text-white/15">-</span>
          {item.text}
          {item.subItems && item.subItems.length > 0 && (
            <ul className="ml-4 mt-0.5 space-y-0.5">
              {item.subItems.map((sub, j) => (
                <li key={j} className="text-[11px] text-white/25">
                  <span className="mr-1 text-white/10">-</span>
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
