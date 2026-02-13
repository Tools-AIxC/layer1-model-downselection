export type Tier = "tier1" | "tier2" | "tier3";
export type Origin = "USA" | "China" | "Israel";

export interface ModelSpec {
  resolution: string;
  aspectRatios: string[];
  maxClipLength: string;
  processingSpeed: string;
  colorSpace: string;
  bitDepth: string;
  codec: string;
  frameRate?: string;
}

export interface PricingInfo {
  freeTier: string;
  paidPlans: string;
  perGeneration?: string;
  apiPricing?: string;
}

export interface ModelData {
  id: string;
  name: string;
  version: string;
  company: string;
  country: Origin;
  city: string;
  employees: string;
  releaseDate: string;
  tier: Tier;
  tierLabel: string;
  specs: ModelSpec;
  keyFeatures: string[];
  advancedFeatures: string[];
  pricing: PricingInfo;
  availability: string;
  limitations: string[];
  highlight: string;
  gridSpan?: string;
}

export const tierConfig = {
  tier1: {
    label: "Must Try",
    color: "#0d9488",
    dotClass: "tier-dot-1",
    tagBg: "bg-teal-50",
    tagText: "text-teal-700",
    barColor: "#0d9488",
  },
  tier2: {
    label: "Might Be Worth It",
    color: "#d97706",
    dotClass: "tier-dot-2",
    tagBg: "bg-amber-50",
    tagText: "text-amber-700",
    barColor: "#d97706",
  },
  tier3: {
    label: "Probably Not Worth It",
    color: "#9a9aac",
    dotClass: "tier-dot-3",
    tagBg: "bg-gray-100",
    tagText: "text-gray-500",
    barColor: "#9a9aac",
  },
};

export const models: ModelData[] = [
  {
    id: "veo",
    name: "Veo",
    version: "3.1",
    company: "Google",
    country: "USA",
    city: "Mountain View, California",
    employees: "180,000+",
    releaseDate: "2025",
    tier: "tier1",
    tierLabel: "Must Try",
    specs: {
      resolution: "Up to 4K",
      aspectRatios: ["16:9", "9:16", "1:1"],
      maxClipLength: "8s per clip, sequences up to 140s",
      processingSpeed: "Variable",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264",
    },
    keyFeatures: [
      "Text-to-video generation",
      "Up to 4K resolution output",
      "Sequence chaining up to 140 seconds",
      "Advanced cinematic controls",
    ],
    advancedFeatures: [
      "Industry-leading resolution",
      "Extended sequence capability",
      "Google ecosystem integration",
    ],
    pricing: {
      freeTier: "Limited via Google AI Studio",
      paidPlans: "$250/month (top tier)",
      apiPricing: "Available via Vertex AI",
    },
    availability: "Global via Google platforms",
    limitations: [
      "Premium pricing",
      "Ecosystem lock-in",
    ],
    highlight: "Highest resolution (4K) & longest sequences (140s)",
    gridSpan: "col-span-2",
  },
  {
    id: "runway",
    name: "Runway",
    version: "4.5",
    company: "Runway AI",
    country: "USA",
    city: "New York, USA",
    employees: "500+",
    releaseDate: "2025",
    tier: "tier1",
    tierLabel: "Must Try",
    specs: {
      resolution: "1080p",
      aspectRatios: ["16:9", "9:16", "1:1", "4:3"],
      maxClipLength: "10 seconds",
      processingSpeed: "Fast",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264",
    },
    keyFeatures: [
      "Text-to-video with cinematic controls",
      "Image-to-video conversion",
      "Advanced motion brush",
      "Professional editing tools",
    ],
    advancedFeatures: [
      "Industry-leading cinematic control",
      "Professional filmmaker adoption",
      "Multi-modal input pipeline",
    ],
    pricing: {
      freeTier: "Limited free generations",
      paidPlans: "$12–$95/month",
    },
    availability: "Global",
    limitations: [
      "10s max clip length",
      "Credit-based system",
    ],
    highlight: "Best cinematic controls for professional filmmakers",
    gridSpan: "col-span-2",
  },
  {
    id: "kling",
    name: "Kling",
    version: "3.0 / 2.6 / 2.5",
    company: "Kuaishou Technology",
    country: "China",
    city: "Beijing, China",
    employees: "~30,000",
    releaseDate: "January 2025",
    tier: "tier1",
    tierLabel: "Must Try",
    specs: {
      resolution: "1080p",
      aspectRatios: ["16:9", "9:16", "1:1", "4:3"],
      maxClipLength: "10 seconds",
      processingSpeed: "2–4 min (standard), 5–8 min (HQ)",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264 / H.265",
    },
    keyFeatures: [
      "Text-to-video, image-to-video",
      "Multi-concept generation",
      "Motion control & motion brush",
      "Keyframe support (start frame, end-frame experimental)",
    ],
    advancedFeatures: [
      "Physics simulation",
      "Character consistency",
      "Professional camera modes",
      "Complex motion dynamics",
    ],
    pricing: {
      freeTier: "66 free daily credits",
      paidPlans: "$10–$180/month",
    },
    availability: "Global access",
    limitations: [
      "End-frame targeting limited/experimental",
      "HDR not confirmed",
    ],
    highlight: "Best free tier (66 daily credits) with strong motion control",
  },
  {
    id: "sora",
    name: "Sora",
    version: "2",
    company: "OpenAI",
    country: "USA",
    city: "San Francisco, California",
    employees: "1,500+",
    releaseDate: "September 30, 2025",
    tier: "tier1",
    tierLabel: "Must Try",
    specs: {
      resolution: "720p (Plus) / 1080p (Pro)",
      aspectRatios: ["16:9", "9:16", "1:1"],
      maxClipLength: "10–25s depending on tier",
      processingSpeed: "45–180 seconds (1–5 min typical)",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264",
      frameRate: "24 FPS / 30 FPS",
    },
    keyFeatures: [
      "Text-to-video with advanced NLU",
      "Storyboard feature (second-by-second planning)",
      "Character Cameos (reusable digital likenesses)",
      "Keyframe support via Storyboard (Beta)",
    ],
    advancedFeatures: [
      "Disney partnership — 200+ licensed characters",
      "Synchronized audio generation (dialogue, SFX, ambient)",
      "90% lip-sync accuracy with Cameo",
      "Cinematic camera controls (dolly, pan, tracking, lens specs)",
      "Physics simulation with collision detection",
      "Style presets: Thankful, Vintage, Comic, News, Musical, Selfie",
      "Video editing: Remix, Loop, Blend, Stitching",
    ],
    pricing: {
      freeTier: "Generous (10–15s clips)",
      paidPlans: "$20/month (Plus) – $200/month (Pro)",
      perGeneration: "30 free credits",
      apiPricing: "$0.12–$0.80 per request",
    },
    availability: "Regional: US, Canada, Japan, South Korea, Taiwan, Thailand, Vietnam, Argentina, Mexico, Chile, Colombia",
    limitations: [
      "Not globally available — regional restrictions",
      "Physics simulation has occasional artifacts",
      "Character consistency drifts in complex scenes",
      "Text rendering ~80% accurate for simple words",
      "Watermark on all videos (C2PA metadata)",
    ],
    highlight: "Disney partnership (200+ characters) & best audio sync",
    gridSpan: "col-span-2",
  },
  {
    id: "luma",
    name: "Luma Ray",
    version: "3.14 / Modify Video",
    company: "Luma AI (Luma Labs)",
    country: "USA",
    city: "Palo Alto, California",
    employees: "50–100",
    releaseDate: "January 2025",
    tier: "tier1",
    tierLabel: "Must Try",
    specs: {
      resolution: "1080p (primary), 720p (standard)",
      aspectRatios: ["16:9", "9:16", "1:1", "4:3", "2.35:1"],
      maxClipLength: "10s (extendable to 30s+ via Ray2 chaining)",
      processingSpeed: "2–6 min per 10s clip",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264 / H.265",
    },
    keyFeatures: [
      "Industry-leading image-to-video quality",
      "Keyframe support (start frame excellent, end frame experimental)",
      "Style reference capability",
      "Advanced camera presets (crane, dolly, pan, orbit, drone, Steadicam)",
    ],
    advancedFeatures: [
      "Photorealistic rendering",
      "Physics & lighting simulation",
      "3D-aware scene understanding",
      "Ray2 chaining for extended sequences",
    ],
    pricing: {
      freeTier: "Limited free tier",
      paidPlans: "$8–$30/month",
      perGeneration: "$0.31/generation",
    },
    availability: "Global",
    limitations: [
      "End frame experimental/limited",
      "Multi-image composition limited",
      "HDR not confirmed for production",
    ],
    highlight: "Best image-to-video quality & widest aspect ratio support",
  },
  {
    id: "ltx",
    name: "LTX Pro",
    version: "1.0",
    company: "Lightricks",
    country: "Israel",
    city: "Jerusalem, Israel",
    employees: "~500",
    releaseDate: "January 2025",
    tier: "tier2",
    tierLabel: "Might Be Worth It",
    specs: {
      resolution: "768×512 (landscape), 512×768 (portrait) — No 4K",
      aspectRatios: ["16:9", "9:16", "1:1", "custom"],
      maxClipLength: "5 seconds (121 frames at 24fps), extendable via chaining",
      processingSpeed: "20–40s (cloud), 60–90s (local RTX 4090)",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264",
    },
    keyFeatures: [
      "Text-to-video with natural language",
      "Keyframe support (start frame only, no end-frame)",
      "Open-source transformer architecture",
      "Fastest among open-source models",
    ],
    advancedFeatures: [
      "Runs on consumer hardware (RTX 4090)",
      "Custom pipelines & local control",
      "Near-real-time generation",
      "Optimized for rapid iteration",
    ],
    pricing: {
      freeTier: "Open source — free locally",
      paidPlans: "Cloud hosting costs vary",
    },
    availability: "Global (open source)",
    limitations: [
      "Low native resolution (768×512)",
      "No 4K upscaling",
      "5-second max clip length",
      "Not highest realism — trade-off for speed",
    ],
    highlight: "Fastest open-source model, runs on consumer GPUs",
  },
  {
    id: "pixverse",
    name: "Pixverse",
    version: "V5.6",
    company: "PixVerse",
    country: "USA",
    city: "California, USA",
    employees: "100M+ global users",
    releaseDate: "January 26, 2026",
    tier: "tier2",
    tierLabel: "Might Be Worth It",
    specs: {
      resolution: "360p to native 4K",
      aspectRatios: ["16:9", "9:16", "1:1", "4:3", "3:4"],
      maxClipLength: "5s (1080p/4K), 10s (up to 720p)",
      processingSpeed: "Variable",
      colorSpace: "Not publicly specified",
      bitDepth: "N/A",
      codec: "N/A",
    },
    keyFeatures: [
      "Multi-character fusion via Character LoRAs (5 photos/character)",
      "Native 4K rendering",
      "Text-to-video with negative prompts & optimizer",
      "Start/end frame conditioning",
    ],
    advancedFeatures: [
      "20+ cinematic camera movements",
      "Physics Weight slider (0–1.0)",
      "Audio-visual sync (dialogue, SFX)",
      "R1 real-time model (early deployment)",
      "Template effects & style presets",
    ],
    pricing: {
      freeTier: "Free tier available",
      paidPlans: "$10/month (Standard) to Pro Max & Studio",
    },
    availability: "Web, iOS, Android, API integrations",
    limitations: [
      "Short clip durations",
      "4K limited to 5 seconds",
      "Pro Max required for multi-character & 4K",
      "Some generation artifacts",
    ],
    highlight: "Multi-character LoRA system & native 4K (first in industry)",
  },
  {
    id: "minimax",
    name: "MiniMax Hailuo",
    version: "2.3 / I2V-01-Live",
    company: "MiniMax",
    country: "China",
    city: "China",
    employees: "100M+ users",
    releaseDate: "Feb 4, 2026 (I2V-01-Live) / Oct 28, 2025 (2.3)",
    tier: "tier2",
    tierLabel: "Might Be Worth It",
    specs: {
      resolution: "768p and 1080p",
      aspectRatios: ["16:9", "9:16", "1:1"],
      maxClipLength: "10s (6s at 1080p)",
      processingSpeed: "Variable",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264",
    },
    keyFeatures: [
      "Text-to-video, Image-to-video, Video-to-video",
      "Media Agent — creation through conversation",
      "I2V-01-Live specializes in 2D illustration animation",
      "Director models for precise creative control",
    ],
    advancedFeatures: [
      "Advanced camera controls (pan, zoom, dolly, drone)",
      "Physics simulation (NCR framework)",
      "Character & expression animation",
      "Multi-modal input support",
    ],
    pricing: {
      freeTier: "Free tier available",
      paidPlans: "$9.99/month (Standard) – $94.99/month (Unlimited)",
    },
    availability: "Website, mobile apps, third-party integrations",
    limitations: [
      "Short clip duration",
      "Last-frame conditioning only in legacy Hailuo 02",
      "Reduced keyframe functionality in newer versions",
    ],
    highlight: "Media Agent conversational creation & 2D illustration animation",
  },
  {
    id: "hunyuan",
    name: "Tencent Hunyuan",
    version: "1.5",
    company: "Tencent",
    country: "China",
    city: "China",
    employees: "100,000+",
    releaseDate: "November 21, 2025",
    tier: "tier2",
    tierLabel: "Might Be Worth It",
    specs: {
      resolution: "480p–720p native, upscale to 1080p",
      aspectRatios: ["16:9", "9:16", "multiple"],
      maxClipLength: "5–10s (v1.5), up to 16s (original)",
      processingSpeed: "75% faster with step-distilled model",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264",
      frameRate: "24 FPS",
    },
    keyFeatures: [
      "Text-to-video with bilingual NLP (EN/CN)",
      "Image-to-video with start & end frame keyframes",
      "Video-to-video transformation",
      "HunyuanCustom — customized generation",
    ],
    advancedFeatures: [
      "Open source (GitHub, Hugging Face)",
      "8.3B parameters (v1.5), 13B (original)",
      "Diffusion Transformer (DiT) architecture",
      "HunyuanVideo-Avatar (audio-driven human animation)",
      "Multi-stage unified framework (T2I → T2V → I2V)",
    ],
    pricing: {
      freeTier: "Open source — free",
      paidPlans: "Third-party API varies",
      apiPricing: "$0.075/second (fal.ai)",
    },
    availability: "Open source, Tencent Cloud API (testing), third-party platforms",
    limitations: [
      "High VRAM requirements (24–45 GB)",
      "1080p requires super-resolution step",
      "Complex setup without platform integration",
      "10s max clip duration (v1.5)",
    ],
    highlight: "Largest open-source model (8.3B params) with full pipeline",
  },
  {
    id: "wan",
    name: "Wan",
    version: "2.6",
    company: "Alibaba Cloud (Tongyi)",
    country: "China",
    city: "Hangzhou, China",
    employees: "250,000+ (Alibaba Group)",
    releaseDate: "January 2025",
    tier: "tier2",
    tierLabel: "Might Be Worth It",
    specs: {
      resolution: "1920×1080 (primary), 1280×720 (standard)",
      aspectRatios: ["16:9", "9:16", "1:1", "4:5"],
      maxClipLength: "10–15 seconds depending on mode",
      processingSpeed: "1–4 minutes",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264",
    },
    keyFeatures: [
      "E-commerce optimized (product videos, advertising)",
      "Keyframe support (start/end frames, excellent for product/portrait)",
      "Product + background composition",
      "Video editing (background replacement, color grading)",
    ],
    advancedFeatures: [
      "Portrait & face animation",
      "Talking avatar generation",
      "Template-based camera moves",
      "Bilingual (Chinese/English)",
      "Social media format optimization (4:5 for mobile commerce)",
    ],
    pricing: {
      freeTier: "Limited free tier",
      paidPlans: "Various plans available",
    },
    availability: "Alibaba Cloud ecosystem",
    limitations: [
      "Less creative/artistic than competitors",
      "Limited end frame targeting",
      "No advanced inpainting",
      "Not a true multi-ingredient system",
      "Template-based approach",
    ],
    highlight: "Best for e-commerce & product video generation",
  },
  {
    id: "seedance",
    name: "Seedance Pro",
    version: "1.5",
    company: "ByteDance",
    country: "China",
    city: "China",
    employees: "150,000+",
    releaseDate: "December 2024",
    tier: "tier3",
    tierLabel: "Probably Not Worth It",
    specs: {
      resolution: "1920×1080 (primary), 1280×720 (standard)",
      aspectRatios: ["16:9", "9:16", "1:1", "4:3", "21:9"],
      maxClipLength: "10 seconds (extendable via chaining)",
      processingSpeed: "3–5 min (standard), 6–10 min (HQ)",
      colorSpace: "Standard RGB",
      bitDepth: "8-bit",
      codec: "H.264 / H.265",
    },
    keyFeatures: [
      "Text-to-video with advanced prompt parsing (CN/EN)",
      "Keyframe support (start, end, mid-keyframes experimental)",
      "Multi-reference input for composition & style blending",
      "Character consistency & identity preservation (Pro exclusive)",
    ],
    advancedFeatures: [
      "Ultra-high motion consistency",
      "Cinematic camera movements",
      "Fine-grained motion control",
      "Text rendering (experimental)",
      "Industry-leading interpolation between keyframes",
      "Face ID preservation & multi-angle character gen",
    ],
    pricing: {
      freeTier: "Limited free tier",
      paidPlans: "Various (TikTok/CapCut infrastructure)",
    },
    availability: "Via ByteDance platforms (TikTok/CapCut ecosystem)",
    limitations: [
      "Slow processing (up to 10 min HQ)",
      "ByteDance ecosystem dependency",
      "Some features Pro-exclusive",
    ],
    highlight: "Best keyframe interpolation quality (ByteDance/TikTok infrastructure)",
  },
];

export const originFlags: Record<Origin, string> = {
  USA: "\u{1F1FA}\u{1F1F8}",
  China: "\u{1F1E8}\u{1F1F3}",
  Israel: "\u{1F1EE}\u{1F1F1}",
};
