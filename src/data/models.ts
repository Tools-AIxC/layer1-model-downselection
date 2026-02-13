import { modelDetails } from "./modelDetails";

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

/* ── Detailed content interfaces (verbatim Miro/Notion data) ── */
export interface BulletItem {
  text: string;
  subItems?: string[];
}

export interface ContentSubsection {
  title: string;
  items: BulletItem[];
}

export interface DetailedCompanyInfo {
  additionalInfo?: string[];
}

export interface DetailedModelInfo {
  advertisedFocus: BulletItem[];
  advertisedResolutions: BulletItem[];
  aspectRatios: BulletItem[];
  maxClipLength: BulletItem[];
  colourspaceBitDepth?: BulletItem[];
  processingSpeed?: BulletItem[];
  frameRate?: BulletItem[];
}

export interface DetailedFeatures {
  textToVideo: BulletItem[];
  keyframeSupport: BulletItem[];
  ingredientsToVideo: BulletItem[];
  videoEditing: BulletItem[];
  additionalSections?: ContentSubsection[];
}

export interface DetailedFurtherInfo {
  cameraControl?: BulletItem[];
  physicsAndMotion?: BulletItem[];
  characterFeatures?: BulletItem[];
  audioFeatures?: BulletItem[];
  platformAvailability?: BulletItem[];
  pricingModel?: BulletItem[];
  dataAndTraining?: BulletItem[];
  limitations?: BulletItem[];
  notableAchievements?: BulletItem[];
  equipmentFootage?: BulletItem[];
  safetyProvenance?: BulletItem[];
  regionalAvailability?: BulletItem[];
  videoSuperResolution?: BulletItem[];
  architectureTraining?: BulletItem[];
  systemRequirements?: BulletItem[];
  additionalSections?: ContentSubsection[];
}

export interface DetailedContent {
  subtitle?: string;
  companyInfo: DetailedCompanyInfo;
  modelInfo: DetailedModelInfo;
  features: DetailedFeatures;
  furtherInfo: DetailedFurtherInfo;
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
  detailed: DetailedContent;
}

/* ── Tier config ── */
export const tierConfig: Record<Tier, { label: string; accent: string; icon: string }> = {
  tier1: { label: "Must Try", accent: "#3b82f6", icon: "◆" },
  tier2: { label: "Worth Considering", accent: "#f59e0b", icon: "●" },
  tier3: { label: "Probably Skip", accent: "#a855f7", icon: "▲" },
};

export const originFlags: Record<Origin, string> = {
  USA: "\u{1F1FA}\u{1F1F8}",
  China: "\u{1F1E8}\u{1F1F3}",
  Israel: "\u{1F1EE}\u{1F1F1}",
};

/* ── Cinematic config per model ── */
const VIDEO_CDN = "https://github.com/Tools-AIxC/layer1-model-downselection/releases/download/v1.0-videos";

export interface LocalVideo {
  src: string;     // full URL to video file hosted on GitHub Releases CDN
  title: string;
}

export interface CinematicConfig {
  bgGradient: string;
  accentGlow: string;
  tagline: string;
  youtubeIds: string[];       // YouTube video IDs from Miro board
  youtubeTitles: string[];    // titles for the videos
  localVideos?: LocalVideo[]; // direct video files (for models without YouTube embeds)
}

export const cinematicConfig: Record<string, CinematicConfig> = {
  veo: {
    bgGradient: "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #071428 100%)",
    accentGlow: "#3b82f6",
    tagline: "The Resolution King",
    youtubeIds: ["B78BJuPxmBU", "ZFh6gVarloc", "eNe4UZ3XGeo", "Bk-4gHuuK80"],
    youtubeTitles: ["Veo 3.1 — Artistic Control in Flow", "Veo 3.1 — Frames to Video", "NanoBanana Short Film", "Veo 3.1 on Artlist"],
  },
  runway: {
    bgGradient: "linear-gradient(135deg, #0a0f1e 0%, #1a0d2e 50%, #0d0721 100%)",
    accentGlow: "#8b5cf6",
    tagline: "Filmmaker's Weapon",
    youtubeIds: ["AwKSrJFvdps", "I4DXMWWSDeM"],
    youtubeTitles: ["Gen-4.5 Image to Video", "Move with Gen-4.5"],
  },
  kling: {
    bgGradient: "linear-gradient(135deg, #0f1a0a 0%, #0a1f1f 50%, #071414 100%)",
    accentGlow: "#10b981",
    tagline: "The Motion Master",
    youtubeIds: ["XD_7FNPhZQY", "krOgBXl1cKw", "FGRvymY_9tY"],
    youtubeTitles: ["Kling 3.0 — Everyone a Director", "Kling 2.6 — Synced Audio", "Kling 2.5 — Cinematic Quality"],
  },
  sora: {
    bgGradient: "linear-gradient(135deg, #1a0a14 0%, #2a0a1e 50%, #140714 100%)",
    accentGlow: "#ec4899",
    tagline: "Disney's Co-Pilot",
    youtubeIds: [],
    youtubeTitles: [],
    localVideos: [
      { src: `${VIDEO_CDN}/sora-1.mp4`, title: "Grandma vs Cat 2 — Ultra-Realistic AI Footage" },
      { src: `${VIDEO_CDN}/sora-2.mp4`, title: "The Global Recall — AI Found Footage" },
      { src: `${VIDEO_CDN}/sora-3.mp4`, title: "Sora 2 HD vs Veo 3.1 Fast" },
      { src: `${VIDEO_CDN}/sora-4.webm`, title: "Sora 2 Demo Reel" },
    ],
  },
  luma: {
    bgGradient: "linear-gradient(135deg, #0a0f1e 0%, #0a1a2e 50%, #051422 100%)",
    accentGlow: "#06b6d4",
    tagline: "Photorealism Pioneer",
    youtubeIds: ["w7ZCcWsx5bU", "ALaZRpmgCbo", "oxBaihKTiLE", "bVvRi6ZfIrs"],
    youtubeTitles: ["Introducing Ray3.14", "VFX with Ray 3.14 Modify", "Ray3 Modify Walkthrough", "Captain of Expression"],
  },
  ltx: {
    bgGradient: "linear-gradient(135deg, #0f1a0a 0%, #1a1f0a 50%, #0f140a 100%)",
    accentGlow: "#eab308",
    tagline: "Open-Source Speed Demon",
    youtubeIds: ["KRJW3yXwJdY", "nKeCnvsYN3c"],
    youtubeTitles: ["Introducing LTX-2", "LTX-2 Video Models Explained"],
  },
  pixverse: {
    bgGradient: "linear-gradient(135deg, #1a0a0a 0%, #2a1414 50%, #140a0a 100%)",
    accentGlow: "#ef4444",
    tagline: "Multi-Character Maestro",
    youtubeIds: [],
    youtubeTitles: [],
    localVideos: [
      { src: `${VIDEO_CDN}/pixverse-1.mp4`, title: "PixVerse V5.6 is Officially LIVE!" },
      { src: `${VIDEO_CDN}/pixverse-2.mp4`, title: "PixVerse V5 Transition Reel" },
    ],
  },
  minimax: {
    bgGradient: "linear-gradient(135deg, #0a0f1e 0%, #141e32 50%, #0a1422 100%)",
    accentGlow: "#6366f1",
    tagline: "The Conversationalist",
    youtubeIds: [],
    youtubeTitles: [],
    localVideos: [
      { src: `${VIDEO_CDN}/minimax-1.mp4`, title: "Hailuo 2.3 — Motion & Emotion" },
      { src: `${VIDEO_CDN}/minimax-2.mp4`, title: "Upload Photo to Generate Video" },
      { src: `${VIDEO_CDN}/minimax-3.mp4`, title: "A Masked Man — Physics Demo" },
      { src: `${VIDEO_CDN}/minimax-4.mp4`, title: "Introducing Hailuo 2.3 & 2.3 Fast" },
    ],
  },
  hunyuan: {
    bgGradient: "linear-gradient(135deg, #0f1a0a 0%, #0a1e14 50%, #071410 100%)",
    accentGlow: "#22c55e",
    tagline: "Open-Source Giant",
    youtubeIds: [],
    youtubeTitles: [],
    localVideos: [
      { src: `${VIDEO_CDN}/hunyuan-1.mp4`, title: "HunyuanVideo 1.5 — Open-Sourced!" },
    ],
  },
  wan: {
    bgGradient: "linear-gradient(135deg, #1a0a14 0%, #1e0a1e 50%, #140a14 100%)",
    accentGlow: "#d946ef",
    tagline: "E-Commerce Engine",
    youtubeIds: ["moFwdfQOGMM", "Y9q5p2M6kQk", "uV5wdDG7ngE"],
    youtubeTitles: ["Wan 2.6 — Multishot Clips", "Cinematic AI Videos", "15s Scenes From One Prompt"],
  },
  seedance: {
    bgGradient: "linear-gradient(135deg, #0a0a1a 0%, #14142a 50%, #0a0a14 100%)",
    accentGlow: "#a78bfa",
    tagline: "Keyframe Interpolator",
    youtubeIds: ["0XbXMXOGLKs", "ACBJfGiC66A"],
    youtubeTitles: ["The Last Cell — Short Film", "Hollywood-Level Audio & Video"],
  },
};

export const models: ModelData[] = [
  {
    id: "veo", name: "Veo", version: "3.1", company: "Google", country: "USA",
    city: "Mountain View, California", employees: "180,000+", releaseDate: "2025",
    tier: "tier1", tierLabel: "Must Try",
    specs: { resolution: "Up to 4K", aspectRatios: ["16:9", "9:16", "1:1"], maxClipLength: "8s per clip, sequences up to 140s", processingSpeed: "Variable", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264" },
    keyFeatures: ["Text-to-video generation", "Up to 4K resolution output", "Sequence chaining up to 140 seconds", "Advanced cinematic controls"],
    advancedFeatures: ["Industry-leading resolution", "Extended sequence capability", "Google ecosystem integration"],
    pricing: { freeTier: "Limited via Google AI Studio", paidPlans: "$250/month (top tier)", apiPricing: "Available via Vertex AI" },
    availability: "Global via Google platforms",
    limitations: ["Premium pricing", "Ecosystem lock-in"],
    highlight: "Highest resolution (4K) & longest sequences (140s)",
    detailed: modelDetails.veo,
  },
  {
    id: "runway", name: "Runway", version: "4.5", company: "Runway AI", country: "USA",
    city: "New York, USA", employees: "500+", releaseDate: "2025",
    tier: "tier1", tierLabel: "Must Try",
    specs: { resolution: "1080p", aspectRatios: ["16:9", "9:16", "1:1", "4:3"], maxClipLength: "10 seconds", processingSpeed: "Fast", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264" },
    keyFeatures: ["Text-to-video with cinematic controls", "Image-to-video conversion", "Advanced motion brush", "Professional editing tools"],
    advancedFeatures: ["Industry-leading cinematic control", "Professional filmmaker adoption", "Multi-modal input pipeline"],
    pricing: { freeTier: "Limited free generations", paidPlans: "$12\u2013$95/month" },
    availability: "Global",
    limitations: ["10s max clip length", "Credit-based system"],
    highlight: "Best cinematic controls for professional filmmakers",
    detailed: modelDetails.runway,
  },
  {
    id: "kling", name: "Kling", version: "3.0 / 2.6 / 2.5", company: "Kuaishou Technology", country: "China",
    city: "Beijing, China", employees: "~30,000", releaseDate: "January 2025",
    tier: "tier1", tierLabel: "Must Try",
    specs: { resolution: "1080p", aspectRatios: ["16:9", "9:16", "1:1", "4:3"], maxClipLength: "10 seconds", processingSpeed: "2\u20134 min (standard), 5\u20138 min (HQ)", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264 / H.265" },
    keyFeatures: ["Text-to-video, image-to-video", "Multi-concept generation", "Motion control & motion brush", "Keyframe support (start frame, end-frame experimental)"],
    advancedFeatures: ["Physics simulation", "Character consistency", "Professional camera modes", "Complex motion dynamics"],
    pricing: { freeTier: "66 free daily credits", paidPlans: "$10\u2013$180/month" },
    availability: "Global access",
    limitations: ["End-frame targeting limited/experimental", "HDR not confirmed"],
    highlight: "Best free tier (66 daily credits) with strong motion control",
    detailed: modelDetails.kling,
  },
  {
    id: "sora", name: "Sora", version: "2", company: "OpenAI", country: "USA",
    city: "San Francisco, California", employees: "1,500+", releaseDate: "September 30, 2025",
    tier: "tier1", tierLabel: "Must Try",
    specs: { resolution: "720p (Plus) / 1080p (Pro)", aspectRatios: ["16:9", "9:16", "1:1"], maxClipLength: "10\u201325s depending on tier", processingSpeed: "45\u2013180 seconds (1\u20135 min typical)", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264", frameRate: "24 FPS / 30 FPS" },
    keyFeatures: ["Text-to-video with advanced NLU", "Storyboard feature (second-by-second planning)", "Character Cameos (reusable digital likenesses)", "Keyframe support via Storyboard (Beta)"],
    advancedFeatures: ["Disney partnership \u2014 200+ licensed characters", "Synchronized audio generation (dialogue, SFX, ambient)", "90% lip-sync accuracy with Cameo", "Cinematic camera controls (dolly, pan, tracking, lens specs)", "Physics simulation with collision detection", "Style presets: Thankful, Vintage, Comic, News, Musical, Selfie", "Video editing: Remix, Loop, Blend, Stitching"],
    pricing: { freeTier: "Generous (10\u201315s clips)", paidPlans: "$20/month (Plus) \u2013 $200/month (Pro)", perGeneration: "30 free credits", apiPricing: "$0.12\u2013$0.80 per request" },
    availability: "Regional: US, Canada, Japan, South Korea, Taiwan, Thailand, Vietnam, Argentina, Mexico, Chile, Colombia",
    limitations: ["Not globally available \u2014 regional restrictions", "Physics simulation has occasional artifacts", "Character consistency drifts in complex scenes", "Text rendering ~80% accurate for simple words", "Watermark on all videos (C2PA metadata)"],
    highlight: "Disney partnership (200+ characters) & best audio sync",
    detailed: modelDetails.sora,
  },
  {
    id: "luma", name: "Luma Ray", version: "3.14 / Modify Video", company: "Luma AI (Luma Labs)", country: "USA",
    city: "Palo Alto, California", employees: "50\u2013100", releaseDate: "January 2025",
    tier: "tier1", tierLabel: "Must Try",
    specs: { resolution: "1080p (primary), 720p (standard)", aspectRatios: ["16:9", "9:16", "1:1", "4:3", "2.35:1"], maxClipLength: "10s (extendable to 30s+ via Ray2 chaining)", processingSpeed: "2\u20136 min per 10s clip", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264 / H.265" },
    keyFeatures: ["Industry-leading image-to-video quality", "Keyframe support (start frame excellent, end frame experimental)", "Style reference capability", "Advanced camera presets (crane, dolly, pan, orbit, drone, Steadicam)"],
    advancedFeatures: ["Photorealistic rendering", "Physics & lighting simulation", "3D-aware scene understanding", "Ray2 chaining for extended sequences"],
    pricing: { freeTier: "Limited free tier", paidPlans: "$8\u2013$30/month", perGeneration: "$0.31/generation" },
    availability: "Global",
    limitations: ["End frame experimental/limited", "Multi-image composition limited", "HDR not confirmed for production"],
    highlight: "Best image-to-video quality & widest aspect ratio support",
    detailed: modelDetails.luma,
  },
  {
    id: "ltx", name: "LTX Pro", version: "1.0", company: "Lightricks", country: "Israel",
    city: "Jerusalem, Israel", employees: "~500", releaseDate: "January 2025",
    tier: "tier2", tierLabel: "Might Be Worth It",
    specs: { resolution: "768\u00d7512 (landscape), 512\u00d7768 (portrait) \u2014 No 4K", aspectRatios: ["16:9", "9:16", "1:1", "custom"], maxClipLength: "5 seconds (121 frames at 24fps), extendable via chaining", processingSpeed: "20\u201340s (cloud), 60\u201390s (local RTX 4090)", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264" },
    keyFeatures: ["Text-to-video with natural language", "Keyframe support (start frame only, no end-frame)", "Open-source transformer architecture", "Fastest among open-source models"],
    advancedFeatures: ["Runs on consumer hardware (RTX 4090)", "Custom pipelines & local control", "Near-real-time generation", "Optimized for rapid iteration"],
    pricing: { freeTier: "Open source \u2014 free locally", paidPlans: "Cloud hosting costs vary" },
    availability: "Global (open source)",
    limitations: ["Low native resolution (768\u00d7512)", "No 4K upscaling", "5-second max clip length", "Not highest realism \u2014 trade-off for speed"],
    highlight: "Fastest open-source model, runs on consumer GPUs",
    detailed: modelDetails.ltx,
  },
  {
    id: "pixverse", name: "Pixverse", version: "V5.6", company: "PixVerse", country: "USA",
    city: "California, USA", employees: "100M+ global users", releaseDate: "January 26, 2026",
    tier: "tier2", tierLabel: "Might Be Worth It",
    specs: { resolution: "360p to native 4K", aspectRatios: ["16:9", "9:16", "1:1", "4:3", "3:4"], maxClipLength: "5s (1080p/4K), 10s (up to 720p)", processingSpeed: "Variable", colorSpace: "Not publicly specified", bitDepth: "N/A", codec: "N/A" },
    keyFeatures: ["Multi-character fusion via Character LoRAs (5 photos/character)", "Native 4K rendering", "Text-to-video with negative prompts & optimizer", "Start/end frame conditioning"],
    advancedFeatures: ["20+ cinematic camera movements", "Physics Weight slider (0\u20131.0)", "Audio-visual sync (dialogue, SFX)", "R1 real-time model (early deployment)", "Template effects & style presets"],
    pricing: { freeTier: "Free tier available", paidPlans: "$10/month (Standard) to Pro Max & Studio" },
    availability: "Web, iOS, Android, API integrations",
    limitations: ["Short clip durations", "4K limited to 5 seconds", "Pro Max required for multi-character & 4K", "Some generation artifacts"],
    highlight: "Multi-character LoRA system & native 4K (first in industry)",
    detailed: modelDetails.pixverse,
  },
  {
    id: "minimax", name: "MiniMax Hailuo", version: "2.3 / I2V-01-Live", company: "MiniMax", country: "China",
    city: "China", employees: "100M+ users", releaseDate: "Feb 4, 2026 (I2V-01-Live) / Oct 28, 2025 (2.3)",
    tier: "tier2", tierLabel: "Might Be Worth It",
    specs: { resolution: "768p and 1080p", aspectRatios: ["16:9", "9:16", "1:1"], maxClipLength: "10s (6s at 1080p)", processingSpeed: "Variable", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264" },
    keyFeatures: ["Text-to-video, Image-to-video, Video-to-video", "Media Agent \u2014 creation through conversation", "I2V-01-Live specializes in 2D illustration animation", "Director models for precise creative control"],
    advancedFeatures: ["Advanced camera controls (pan, zoom, dolly, drone)", "Physics simulation (NCR framework)", "Character & expression animation", "Multi-modal input support"],
    pricing: { freeTier: "Free tier available", paidPlans: "$9.99/month (Standard) \u2013 $94.99/month (Unlimited)" },
    availability: "Website, mobile apps, third-party integrations",
    limitations: ["Short clip duration", "Last-frame conditioning only in legacy Hailuo 02", "Reduced keyframe functionality in newer versions"],
    highlight: "Media Agent conversational creation & 2D illustration animation",
    detailed: modelDetails.minimax,
  },
  {
    id: "hunyuan", name: "Tencent Hunyuan", version: "1.5", company: "Tencent", country: "China",
    city: "China", employees: "100,000+", releaseDate: "November 21, 2025",
    tier: "tier2", tierLabel: "Might Be Worth It",
    specs: { resolution: "480p\u2013720p native, upscale to 1080p", aspectRatios: ["16:9", "9:16", "multiple"], maxClipLength: "5\u201310s (v1.5), up to 16s (original)", processingSpeed: "75% faster with step-distilled model", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264", frameRate: "24 FPS" },
    keyFeatures: ["Text-to-video with bilingual NLP (EN/CN)", "Image-to-video with start & end frame keyframes", "Video-to-video transformation", "HunyuanCustom \u2014 customized generation"],
    advancedFeatures: ["Open source (GitHub, Hugging Face)", "8.3B parameters (v1.5), 13B (original)", "Diffusion Transformer (DiT) architecture", "HunyuanVideo-Avatar (audio-driven human animation)", "Multi-stage unified framework (T2I \u2192 T2V \u2192 I2V)"],
    pricing: { freeTier: "Open source \u2014 free", paidPlans: "Third-party API varies", apiPricing: "$0.075/second (fal.ai)" },
    availability: "Open source, Tencent Cloud API (testing), third-party platforms",
    limitations: ["High VRAM requirements (24\u201345 GB)", "1080p requires super-resolution step", "Complex setup without platform integration", "10s max clip duration (v1.5)"],
    highlight: "Largest open-source model (8.3B params) with full pipeline",
    detailed: modelDetails.hunyuan,
  },
  {
    id: "wan", name: "Wan", version: "2.6", company: "Alibaba Cloud (Tongyi)", country: "China",
    city: "Hangzhou, China", employees: "250,000+ (Alibaba Group)", releaseDate: "January 2025",
    tier: "tier2", tierLabel: "Might Be Worth It",
    specs: { resolution: "1920\u00d71080 (primary), 1280\u00d7720 (standard)", aspectRatios: ["16:9", "9:16", "1:1", "4:5"], maxClipLength: "10\u201315 seconds depending on mode", processingSpeed: "1\u20134 minutes", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264" },
    keyFeatures: ["E-commerce optimized (product videos, advertising)", "Keyframe support (start/end frames, excellent for product/portrait)", "Product + background composition", "Video editing (background replacement, color grading)"],
    advancedFeatures: ["Portrait & face animation", "Talking avatar generation", "Template-based camera moves", "Bilingual (Chinese/English)", "Social media format optimization (4:5 for mobile commerce)"],
    pricing: { freeTier: "Limited free tier", paidPlans: "Various plans available" },
    availability: "Alibaba Cloud ecosystem",
    limitations: ["Less creative/artistic than competitors", "Limited end frame targeting", "No advanced inpainting", "Not a true multi-ingredient system", "Template-based approach"],
    highlight: "Best for e-commerce & product video generation",
    detailed: modelDetails.wan,
  },
  {
    id: "seedance", name: "Seedance Pro", version: "1.5", company: "ByteDance", country: "China",
    city: "China", employees: "150,000+", releaseDate: "December 2024",
    tier: "tier3", tierLabel: "Probably Not Worth It",
    specs: { resolution: "1920\u00d71080 (primary), 1280\u00d7720 (standard)", aspectRatios: ["16:9", "9:16", "1:1", "4:3", "21:9"], maxClipLength: "10 seconds (extendable via chaining)", processingSpeed: "3\u20135 min (standard), 6\u201310 min (HQ)", colorSpace: "Standard RGB", bitDepth: "8-bit", codec: "H.264 / H.265" },
    keyFeatures: ["Text-to-video with advanced prompt parsing (CN/EN)", "Keyframe support (start, end, mid-keyframes experimental)", "Multi-reference input for composition & style blending", "Character consistency & identity preservation (Pro exclusive)"],
    advancedFeatures: ["Ultra-high motion consistency", "Cinematic camera movements", "Fine-grained motion control", "Text rendering (experimental)", "Industry-leading interpolation between keyframes", "Face ID preservation & multi-angle character gen"],
    pricing: { freeTier: "Limited free tier", paidPlans: "Various (TikTok/CapCut infrastructure)" },
    availability: "Via ByteDance platforms (TikTok/CapCut ecosystem)",
    limitations: ["Slow processing (up to 10 min HQ)", "ByteDance ecosystem dependency", "Some features Pro-exclusive"],
    highlight: "Best keyframe interpolation quality (ByteDance/TikTok infrastructure)",
    detailed: modelDetails.seedance,
  },
];
