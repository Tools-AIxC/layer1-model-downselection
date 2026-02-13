import type { DetailedContent } from "./models";

export const modelDetails: Record<string, DetailedContent> = {
  pixverse: {
    subtitle: "Might be worth | Chinese",
    companyInfo: {
      additionalInfo: [
        "User base: Over 100 million users globally as of August 2025 — First 4K AI video model launched in Q1 2024"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "V5.6: Multi-character consistency, native 4K rendering, realistic physics" },
        { text: "R1: Real-time interactive video generation with instant response to user commands" },
        { text: "Cinematic-quality professional video creation" },
        { text: "Social media viral content (AI Kiss, Hug, Muscle, Fighting, Transform effects)" },
        { text: "Text-to-video and image-to-video generation" },
        { text: "Multi-subject fusion (multiple characters in single scene)" },
        { text: "Professional camera controls (20+ types)" },
        { text: "Physics-driven motion and material simulation" },
        { text: "Audio-visual synchronization (V5.5+)" },
        { text: "Multi-shot storytelling" }
      ],
      advertisedResolutions: [
        { text: "360p (Turbo/preview mode)" },
        { text: "540p" },
        { text: "720p" },
        { text: "1080p" },
        { text: "Native 4K (V5.6 - requires Pro Max plan)" }
      ],
      aspectRatios: [
        { text: "16:9 (landscape/YouTube)" },
        { text: "9:16 (portrait/TikTok/Reels)" },
        { text: "1:1 (square/Instagram)" },
        { text: "4:3 (standard)" },
        { text: "3:4 (portrait)" }
      ],
      maxClipLength: [
        { text: "5 seconds (1080p and 4K)" },
        { text: "10 seconds (up to 720p resolution)" }
      ],
      colourspaceBitDepth: [
        { text: "Not publicly specified" }
      ],
      processingSpeed: [
        { text: "Normal mode: Standard generation" },
        { text: "Fast/Turbo mode: Rapid generation for quick iterations" },
        { text: "V5.6: Same generation speed as previous versions (60 seconds for 4K)" },
        { text: "R1: Real-time generation (instant, no waiting)" },
        { text: "Typical generation time: 1-2 minutes depending on settings" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Natural language prompt-based generation" },
        { text: "Prompt optimizer available (rewrites prompts for better results)" },
        { text: "Maximum prompt length: 2048 characters" },
        { text: "Negative prompts supported" },
        { text: "Enhanced prompt adherence in V5.6" },
        { text: "Cinematic camera control via text prompts" },
        { text: "Real-time interactive commands (R1 model)" }
      ],
      keyframeSupport: [
        { text: "[Supported] Start frame + End frame" },
        { text: "Multi-element reference and fusion" },
        { text: "Multiple image uploads for scene composition" },
        { text: "First/last frame conditioning" },
        { text: "Smooth transitions between keyframes" }
      ],
      ingredientsToVideo: [
        { text: "Image-to-video: Upload static images for animation" },
        { text: "Multiple image inputs: Combine 2+ images for scene fusion" },
        { text: "Text + image combinations" },
        { text: "Reference image support for style consistency" },
        { text: "Character LoRAs for multi-subject fusion (V5.6)" }
      ],
      videoEditing: [
        { text: "Template-based effects (Transform, AI Kiss, AI Hug, AI Mirror, etc.)" },
        { text: "Motion modes: Normal and Fast" },
        { text: "Style presets: Cinematic, anime, photorealistic, cartoon, surreal" },
        { text: "Remix and iteration capabilities" },
        { text: "Watermark: Optional (removable in paid plans)" },
        { text: "Stitching: Combine multiple clips into longer sequences" },
        { text: "Real-time editing during generation (R1)" }
      ]
    },
    furtherInfo: {
      cameraControl: [
        { text: "20+ cinematic camera movements:", subItems: ["Dynamic pan (left/right)", "Zoom (push-pull, dolly in/out)", "Camera rotation", "Vertical movements", "Tilt operations", "Handheld sway", "Tracking shots", "Drone perspectives"] },
        { text: "Precise camera angle specification" },
        { text: "Multi-shot camera sequences" }
      ],
      characterFeatures: [
        { text: "Upload 5 photos per character to create Character LoRAs" },
        { text: "Tag characters with @CharacterName in prompts" },
        { text: "Multiple subjects in single scene with consistent appearance" },
        { text: "Supports people, pets, objects, and personas" }
      ],
      audioFeatures: [
        { text: "Synchronized audio generation" },
        { text: "Dialogue, sound effects, ambient audio" },
        { text: "Audio-visual sync maintained throughout" },
        { text: "Natural sound based on scene context" }
      ],
      physicsAndMotion: [
        { text: "Physics Weight slider (0-1.0) for controlling realism" },
        { text: "Superior motion control, reduced \"swarping\"" },
        { text: "Fluid character movements matching real-life kinetics" },
        { text: "Realistic fabric draping, liquid flow, material behavior" },
        { text: "Improved temporal consistency" },
        { text: "Weight simulation algorithms (e.g., wet fabric clinging)" }
      ],
      platformAvailability: [
        { text: "Web platform: app.pixverse.ai" },
        { text: "iOS app (launched September 2025)" },
        { text: "Android app (updated February 2, 2026)" },
        { text: "API platform: platform.pixverse.ai" },
        { text: "Available through third-party platforms: fal.ai, Replicate, WaveSpeedAI, VideoWeb, Scenario, Segmind, Pollo AI" }
      ],
      pricingModel: [
        { text: "Free tier available with limited credits" },
        { text: "Standard Plan: $10/month (suitable for casual creators)" },
        { text: "Pro Max Plan: Required for multi-character feature and 4K rendering" },
        { text: "Studio Plan: Unlimited Relax Generations for overnight experimentation" },
        { text: "Credit-based system with variable costs by duration/resolution" },
        { text: "Additional credit purchases available beyond subscription" },
        { text: "4K generation is more expensive due to computational requirements" }
      ],
      notableAchievements: [
        { text: "16+ million monthly active users (October 2025)" },
        { text: "Launched real-time video generation (January 2026)" },
        { text: "First to market with multi-character consistency at scale (V5.6)" },
        { text: "Native 4K AI video generation" },
        { text: "Successfully monetizing with $40M ARR" }
      ],
      limitations: [
        { text: "Shorter clip durations (max 10 seconds for standard models)" },
        { text: "4K and 1080p limited to 5 seconds" },
        { text: "Multi-character feature requires Pro Max subscription" },
        { text: "Some artifacts in complex scenes" },
        { text: "Real-time R1 model still in early deployment" },
        { text: "Quality depends on prompt clarity and character LoRA setup" }
      ],
      equipmentFootage: [
        { text: "different camera perspectives" },
        { text: "character consistency" },
        { text: "no morphing" },
        { text: "stable, smooth motion" }
      ]
    }
  },

  sora: {
    subtitle: "Must try 100%",
    companyInfo: {
      additionalInfo: [
        "Creator of ChatGPT, GPT-4, DALL-E, Whisper, and other AI products — Partnership with Microsoft (exclusive cloud provider) — $1 billion partnership with Disney (December 2025) for character generation — Original Sora model first previewed February 15, 2024 — Sora 2 launched September 30, 2025"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "World simulation and physics-accurate modeling (\"GPT-3.5 moment for video\")" },
        { text: "Synchronized dialogue and sound effects generation" },
        { text: "Cinematic-quality video with realistic motion" },
        { text: "Multi-shot consistency and narrative capability" },
        { text: "Character consistency (Cameos feature): Upload yourself, pets, plushies, doodles, personas" },
        { text: "Character Cameos (December 2025): Create and reuse characters across videos" },
        { text: "Controllable video generation with complex instruction following" },
        { text: "Social media-ready content" },
        { text: "Professional-quality output for various creative applications" },
        { text: "Interactive social app: Discovery feed, remix, community features" }
      ],
      advertisedResolutions: [
        { text: "720p (ChatGPT Plus tier)" },
        { text: "1080p (ChatGPT Pro tier / Sora 2 Pro)" },
        { text: "Additional Pro resolutions: 1792x1024 and 1024x1792 (cinematic and vertical formats)" },
        { text: "Various sources mention \"up to 4K\" in roadmap/future plans" }
      ],
      aspectRatios: [
        { text: "9:16 (portrait/vertical - optimized for Shorts/Reels)" },
        { text: "16:9 (landscape - optimized for YouTube)" },
        { text: "1:1 (square - for Instagram posts)" }
      ],
      maxClipLength: [
        { text: "Free/Standard users: 10 seconds (default), 15 seconds available" },
        { text: "ChatGPT Plus ($20/month): 5 seconds" },
        { text: "ChatGPT Pro ($200/month): 10 seconds standard, 20 seconds maximum, 25 seconds with Storyboard feature" },
        { text: "API/Preview: Up to 20 seconds" }
      ],
      colourspaceBitDepth: [
        { text: "Not publicly specified" }
      ],
      frameRate: [
        { text: "24 FPS (cinematic)" },
        { text: "30 FPS (smoother motion, recommended for action)" },
        { text: "Some sources mention 24-60 FPS options" }
      ],
      processingSpeed: [
        { text: "Generation time: 45-180 seconds depending on length and complexity" },
        { text: "Typical processing: 1-5 minutes" },
        { text: "Faster processing for shorter clips" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Advanced natural language understanding" },
        { text: "Detailed prompt interpretation across multiple sentences" },
        { text: "Complex instruction following spanning multiple shots" },
        { text: "Context and spatial relationship understanding" },
        { text: "Physics-aware generation" },
        { text: "Cinematic terminology support (e.g., \"dolly in,\" \"handheld camera,\" \"35mm lens\")" },
        { text: "Storyboard feature for detailed scene planning (beta, ChatGPT Pro)" }
      ],
      keyframeSupport: [
        { text: "Start frame + End frame: Storyboard feature allows second-by-second frame planning (Beta for ChatGPT Pro)" },
        { text: "Generate storyboard from description: AI creates detailed frame structure that can be edited" },
        { text: "Frame-by-frame building: Build video from scratch like traditional storyboards" },
        { text: "Image-to-video: Upload still image to animate" },
        { text: "Multi-shot sequences with state persistence" },
        { text: "Character and environment consistency across frames" }
      ],
      ingredientsToVideo: [
        { text: "Text-to-video generation" },
        { text: "Image-to-video: Expand still images into motion" },
        { text: "Storyboard creation (Beta, December 2025): Generate detailed frame structure from descriptions, edit second-by-second" },
        { text: "Cameos feature: Verified digital likeness insertion (one-time video-and-audio recording)" },
        { text: "Character Cameos (December 2025): Create and reuse characters:", subItems: ["People, pets, plushies, doodles, original personas", "Upload video from camera roll or create directly in-app", "Separate permissions per character (private, mutual followers, or public)", "Display name, handle, and tagging system (@charactername)", "Starter pack characters included (e.g., Halloween characters)"] },
        { text: "Disney partnership: Licensed character generation (200+ Disney/Pixar/Marvel/Star Wars characters)" }
      ],
      videoEditing: [
        { text: "Remix functionality for existing videos" },
        { text: "Loop tool: Seamless 10-second clip repetition" },
        { text: "Blend tool: Combine multiple clips smoothly" },
        { text: "Stitching (December 2025): Combine multiple clips into longer videos", subItems: ["Available on Sora app and sora.com", "Select clips in drafts, tap 'select', choose clips to stitch"] },
        { text: "Style presets: Thankful, Vintage, Comic, News, Musical, Selfie (6 preset options)" },
        { text: "In-app editing tools for refinement" },
        { text: "Duration selection: 10s (default), 15s, 25s (with Storyboard) options" }
      ]
    },
    furtherInfo: {
      audioFeatures: [
        { text: "Synchronized audio: Dialogue, sound effects, and ambient audio generated with video" },
        { text: "Automatic generation: Ambient noise created automatically based on scene" },
        { text: "Audio cues in prompts: Specify sounds (e.g., \"sound of wheels clicking,\" \"steam hissing\")" },
        { text: "Lip-sync: Cameo feature ensures mouth movements match speech (90% accuracy reported)" },
        { text: "Volume and mixing controls: Adjustable in Pro version" }
      ],
      cameraControl: [
        { text: "Cinematic camera movements via text prompts:", subItems: ["Dolly (in/out)", "Pan (left/right)", "Handheld sway", "Static tripod shots", "Tracking shots", "Aerial/drone perspectives"] },
        { text: "Camera angle specifications (close-up, medium, wide)" },
        { text: "Lens specifications (35mm, 50mm, etc.)" },
        { text: "Shot framing control" },
        { text: "Dynamic camera movements during action" }
      ],
      physicsAndMotion: [
        { text: "Improved physics accuracy (\"simulation-grade\" in Pro version)" },
        { text: "Objects obey gravity, momentum, and real-world constraints" },
        { text: "Realistic failure modeling (e.g., basketball missing shot rebounds naturally)" },
        { text: "Accurate motion and interactions" },
        { text: "Fluid dynamics and collision detection" },
        { text: "Material properties simulation" },
        { text: "Lighting and shadow physics" }
      ],
      safetyProvenance: [
        { text: "Visible moving watermark on all generated videos" },
        { text: "C2PA (Content Credentials) metadata embedded" },
        { text: "Multi-layer content moderation" },
        { text: "Red-teaming and safety testing" },
        { text: "Prompt filtering for prohibited content" },
        { text: "Identity verification for Cameos" },
        { text: "Age verification (birthday check)" },
        { text: "Copyright protection measures" }
      ],
      platformAvailability: [
        { text: "Sora iOS app: Launched September 30, 2025" },
        { text: "Android app: Launched November 2025 (all Sora-available markets)", subItems: ["Initially without character creation, stitching, additional purchase features (being added)", "Available on Google Play Store", "Latest version: 1.2026.029 (February 2, 2026)"] },
        { text: "Web platform: sora.com" },
        { text: "API access: via OpenAI API platform (v1/videos endpoint)", subItems: ["Sora 2 and Sora 2 Pro models available"] },
        { text: "Azure integration available" },
        { text: "ChatGPT integration for video generation from chatbot" }
      ],
      regionalAvailability: [
        { text: "United States" },
        { text: "Canada" },
        { text: "Japan" },
        { text: "South Korea (Korea)" },
        { text: "Taiwan" },
        { text: "Thailand" },
        { text: "Vietnam" },
        { text: "Latin America: Argentina, Mexico, Chile, Colombia" },
        { text: "European expansion planned but no official dates" },
        { text: "Note: Android app available in all markets where Sora is available" }
      ],
      pricingModel: [
        { text: "Free tier: Generous usage limits (subject to compute capacity) — 10-second default, 15-second available" },
        { text: "ChatGPT Plus ($20/month): 50 priority video generations/month — 720p resolution — 5-second maximum duration — Includes full ChatGPT Plus features" },
        { text: "ChatGPT Pro ($200/month): 500 priority video generations/month — 1080p resolution — 20-second maximum duration (25s with Storyboard) — Unlimited non-priority \"relaxed\" generations — Sora 2 Pro experimental high-quality version — Advanced editing tools — Storyboard access (Beta)" },
        { text: "Additional purchases (December 2025): Buy more video generations beyond included usage — Available in Sora app and via ChatGPT credits system — Seamless in-app purchase flow" },
        { text: "API pricing (via third-party): $0.12-$0.80 per request depending on standard vs Pro" }
      ],
      limitations: [
        { text: "Not perfect physics simulation (occasional artifacts)" },
        { text: "Character consistency can drift in complex scenes" },
        { text: "Text rendering: 80%+ accuracy for simple words" },
        { text: "Some morphing/deformation in complex prompts" },
        { text: "Compute-intensive (generation takes 1-5 minutes)" },
        { text: "Regional restrictions (not globally available yet)" },
        { text: "Watermark can be removed by third-party tools (reported concern)" },
        { text: "Android app initially missing some features (being added)" }
      ]
    }
  },

  minimax: {
    subtitle: "Might be worth | Chinese",
    companyInfo: {
      additionalInfo: [
        "One of China's \"AI Tiger\" companies — 100+ million users"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "I2V-01-Live: Transforms 2D illustrations into smooth, vivid dynamic videos with enhanced motion for artistic styles" },
        { text: "Director Models: Professional filmmaking tools with reduced movement randomness for strict creative control" },
        { text: "Hailuo 2.3: Physics-driven realism, complex character movements, stylization (anime, illustration, ink-wash, game CG)" },
        { text: "Media Agent: Comprehensive multi-modal creation platform (evolved from Video Agent, launched October 2025)" },
        { text: "Cinematic-quality video generation" },
        { text: "Extreme physics simulation with NCR framework" },
        { text: "Natural motion synthesis and camera control" },
        { text: "Multi-shot consistency" },
        { text: "Ultra-realistic physics and instruction-following" }
      ],
      advertisedResolutions: [
        { text: "768p (Standard)" },
        { text: "1080p (Pro)" }
      ],
      aspectRatios: [
        { text: "Multiple aspect ratios supported" },
        { text: "16:9 (landscape)" },
        { text: "9:16 (portrait)" },
        { text: "1:1 (square)" },
        { text: "Custom aspect ratios available" }
      ],
      maxClipLength: [
        { text: "10 seconds (768p)" },
        { text: "1080p limited to 6-second clips" }
      ],
      colourspaceBitDepth: [
        { text: "Not publicly specified" }
      ],
      processingSpeed: [
        { text: "Standard model: Regular generation speed" },
        { text: "Fast model: 50% cost reduction and faster rendering" },
        { text: "Typical generation time: Under 1 minute for image-to-video (Fast model)" },
        { text: "2.5x faster training and inference compared to predecessors (Hailuo 02)" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Advanced natural language understanding via Multimodal Large Language Model (MLLM)" },
        { text: "Detailed prompt interpretation" },
        { text: "Multi-language support (English, Chinese, and more)" },
        { text: "Complex scene description capabilities" },
        { text: "Improved prompt adherence in 2.3 version" },
        { text: "Zero-shot learning through system instructions" },
        { text: "Director models: Significantly reduced movement randomness for precise creative control" }
      ],
      keyframeSupport: [
        { text: "Start frame + End frame" },
        { text: "(Hailuo 02 only): Last-frame conditioning supported at 6 or 10 seconds (768p), 6 seconds (1080p)" },
        { text: "Not supported in Hailuo 2.3, 2.3 Fast, or Director models" },
        { text: "First-frame guidance for image-to-video" },
        { text: "I2V-01-Live specializes in animating 2D illustrations with stable motion" }
      ],
      ingredientsToVideo: [
        { text: "Text-to-video (T2V) generation" },
        { text: "Image-to-video (I2V) generation" },
        { text: "I2V-01-Live: Optimized for 2D illustrations, artistic styles, anime, character art" },
        { text: "Multi-element reference and fusion" },
        { text: "Video-to-video transformation" },
        { text: "Media Agent: One-click multi-modal video creation with step-by-step optional editing" }
      ],
      videoEditing: [
        { text: "Remix feature for social co-creation" },
        { text: "Style transformation (realistic, cinematic, anime, illustration, ink-wash, game CG)" },
        { text: "Camera motion controls" },
        { text: "Scene understanding and modification" },
        { text: "Physical simulation adjustments" },
        { text: "Media Agent: Comprehensive creation pipeline with conversational editing" },
        { text: "Lipsync feature for character speech synchronization (January 2026)" }
      ],
      additionalSections: [
        {
          title: "Media Agent (2026)",
          items: [
            { text: "Evolved from Hailuo Video Agent (summer 2025)" },
            { text: "Multi-modal fusion creation (text, image, video, audio)" },
            { text: "One-click video creation OR detailed step-by-step editing" },
            { text: "Canvas-based adjustment interface" },
            { text: "\"Creation through conversation\" using natural language" },
            { text: "Supports comprehensive multi-modal workflows" },
            { text: "Globally rolled out simultaneously" }
          ]
        }
      ]
    },
    furtherInfo: {
      cameraControl: [
        { text: "Advanced cinematic camera movements:", subItems: ["Dynamic pan", "Zoom operations", "Push-pull lenses", "Camera rotation", "Tracking shots", "Dolly movements", "Vertical movements", "Drone-style movements"] },
        { text: "Improved camera responsiveness to prompts" },
        { text: "Stable camera coherence across shots" },
        { text: "Director models: Enhanced precision and reduced randomness" }
      ],
      physicsAndMotion: [
        { text: "Noise-aware Compute Redistribution (NCR) framework" },
        { text: "Enhanced understanding of physics and command following" },
        { text: "Fluid and natural character motions" },
        { text: "Accurate modeling of real-world physics (gravity, fluid dynamics, collision detection)" },
        { text: "Complex action rendering (gymnastics, acrobatics, dance)" },
        { text: "Realistic object interactions" },
        { text: "Natural material behavior (fabric folds, hair flow, particle motion)" },
        { text: "Hailuo 2.3: Further improvements in body movement fluidity" }
      ],
      characterFeatures: [
        { text: "Micro-expression modeling" },
        { text: "Seamless emotional transitions" },
        { text: "Natural facial performances" },
        { text: "Complex expression support" },
        { text: "Improved body movement fluidity in 2.3" },
        { text: "Character consistency throughout sequences" },
        { text: "I2V-01-Live: Enhanced subtlety and smoothness for 2D character animation" }
      ],
      platformAvailability: [
        { text: "Hailuo AI website: hailuoai.video" },
        { text: "Media Agent: hailuoai.video/agent" },
        { text: "MiniMax official site: minimax.io" },
        { text: "MiniMax Open Platform API: minimax.io/platform_overview" },
        { text: "Mobile app (iOS and Android)" },
        { text: "Available through third-party platforms: fal.ai, getimg.ai, WaveSpeedAI, VEED, Kie.ai, Higgsfield, Scenario, BasedLabs, Pollo AI, Segmind" }
      ],
      pricingModel: [
        { text: "Free tier with daily trial credits" },
        { text: "Standard Plan: $9.99/month (1000 credits, fast-track generation, watermark removal)" },
        { text: "Unlimited Plan: $94.99/month (unlimited credits)" },
        { text: "API pricing: $0.28 per video generation (fal.ai), varies by platform" },
        { text: "Hailuo 2.3 Fast: ~50% lower cost than standard Hailuo 2.3" },
        { text: "Same pricing maintained as Hailuo 02 (cost-efficiency improvement)" }
      ],
      dataAndTraining: [
        { text: "Meticulous data curation pipeline" },
        { text: "Progressive pre-training across multiple stages" },
        { text: "Mixed-task training ratio: T2I:T2V:I2V = 1:6:3" },
        { text: "Post-training: CT → SFT → RLHF" },
        { text: "Bucket training strategy for multiple resolutions/aspect ratios/frame rates" }
      ],
      limitations: [
        { text: "Short clip duration (max 10 seconds)" },
        { text: "1080p limited to 6-second clips" },
        { text: "Some artifacts may occur in complex scenes" },
        { text: "Last-frame conditioning removed in 2.3 version (only in 02)" },
        { text: "Evolving features under active development" },
        { text: "Director models reduce randomness but may limit creative serendipity" }
      ]
    }
  },

  veo: {
    subtitle: "Must try 100%",
    companyInfo: {
      additionalInfo: [
        "Reliable and tends to be legally approved"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "Cinematic realism and motion consistency" },
        { text: "Advanced physics understanding (fluid dynamics, lighting, reflections)" },
        { text: "Multi-shot generation with camera controls" },
        { text: "Text and image-to-video generation" }
      ],
      advertisedResolutions: [
        { text: "Up to 4K (4096 × 2160)" },
        { text: "Default generation 720p, upscaled to 4K" }
      ],
      aspectRatios: [
        { text: "16:9 (landscape)" },
        { text: "9:16 (portrait)" },
        { text: "1:1 (square)" },
        { text: "Custom ratios supported (comfy??)" }
      ],
      maxClipLength: [
        { text: "8 Seconds" },
        { text: "(+Sequences up to 140 sec)" }
      ],
      colourspaceBitDepth: [
        { text: "Likely 8-bit output for web delivery" },
        { text: "HDR support unclear" }
      ],
      processingSpeed: [
        { text: "Generation time depends on length, resolution, and queue priority" },
        { text: "Typically ranges from several minutes to 15+ minutes for longer clips" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Information about feature" }
      ],
      keyframeSupport: [
        { text: "Information about feature" }
      ],
      ingredientsToVideo: [
        { text: "Information about feature" }
      ],
      videoEditing: [],
      additionalSections: [
        {
          title: "Sequences",
          items: [
            { text: "It allows to continue video gen through a whole sequence with better consistency" }
          ]
        }
      ]
    },
    furtherInfo: {}
  },

  runway: {
    subtitle: "Must try 100%",
    companyInfo: {
      additionalInfo: [
        "One of the favourites so far for cinematographic artists"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "Cinematic camera control (pans, tilts, dolly, crane shots)" },
        { text: "Temporal consistency and motion realism" },
        { text: "Director mode with precise frame control" },
        { text: "Multi-modal input (text, image, video)" }
      ],
      advertisedResolutions: [
        { text: "Native: 1280×768 (720p-ish)" },
        { text: "Upscaled: 1920×1080 (1080p)" },
        { text: "Gen-4 Turbo outputs lower resolution for speed" }
      ],
      aspectRatios: [
        { text: "16:9 (landscape)" },
        { text: "9:16 (portrait)" },
        { text: "1:1 (square)" },
        { text: "Custom ratios within limits" }
      ],
      maxClipLength: [
        { text: "10 seconds per generation" },
        { text: "Extendable through chaining/continuation" }
      ],
      colourspaceBitDepth: [
        { text: "Standard RGB, 8-bit" },
        { text: "H.264/H.265 codec delivery" }
      ],
      processingSpeed: [
        { text: "Gen-4.5: ~90-180 seconds per 10s clip" },
        { text: "Gen-4 Turbo: ~30-60 seconds per 10s clip" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Primary input method: text prompts with optional image reference" },
        { text: "Supports detailed scene descriptions and cinematic language" }
      ],
      keyframeSupport: [
        { text: "Can set first frame (image input) + last frame (target image)" },
        { text: "Model interpolates motion between keyframes" },
        { text: "Also supports mid-point keyframes for complex sequences" }
      ],
      ingredientsToVideo: [],
      videoEditing: [
        { text: "Separate model: Aleph (Gen-2 based)" },
        { text: "Object removal/addition via inpainting" },
        { text: "Masking-based editing workflow" },
        { text: "Style transfer and video-to-video transformations" },
        { text: "Gen-4.5 itself doesn't do direct video editing" }
      ],
      additionalSections: [
        {
          title: "Motion control with driving performance videos (Act two)",
          items: [
            { text: "Gen-4.5: Motion control via camera presets" },
            { text: "Upload reference motion video to guide movement" },
            { text: "Motion control with sketch" }
          ]
        },
        {
          title: "Character Swap (Act two)",
          items: [
            { text: "Model can add or remove objects from etc. etc. etc." }
          ]
        }
      ]
    },
    furtherInfo: {}
  },

  ltx: {
    subtitle: "Might be worth | Chinese",
    companyInfo: {
      additionalInfo: [
        "Open source Model"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "Lightweight, accessible video generation" },
        { text: "Open-source transformer architecture" },
        { text: "Fast inference on consumer hardware" },
        { text: "Real-time/near-real-time generation focus" }
      ],
      advertisedResolutions: [
        { text: "Native: 768×512 (landscape standard)" },
        { text: "Also supports 512×768 (portrait)" },
        { text: "No 4K upscaling advertised" }
      ],
      aspectRatios: [
        { text: "16:9 (landscape - 768×432)" },
        { text: "9:16 (portrait - 432×768)" },
        { text: "1:1 (square - 512×512)" },
        { text: "Custom ratios within model constraints" }
      ],
      maxClipLength: [
        { text: "5 seconds per generation" },
        { text: "121 frames at 24fps" },
        { text: "Extendable through chaining" }
      ],
      colourspaceBitDepth: [
        { text: "Standard RGB, 8-bit" },
        { text: "H.264 output codec" }
      ],
      processingSpeed: [
        { text: "~20-40 seconds per 5s clip (cloud)" },
        { text: "~60-90 seconds on local RTX 4090" },
        { text: "Fastest among open-source models" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Primary generation mode" },
        { text: "Supports natural language prompts" }
      ],
      keyframeSupport: [
        { text: "No explicit end-frame targeting" }
      ],
      ingredientsToVideo: [],
      videoEditing: []
    },
    furtherInfo: {}
  },

  kling: {
    subtitle: "Must try 100%",
    companyInfo: {
      additionalInfo: [
        "Major Chinese short-video platform"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "Complex motion simulation (physics, fluid dynamics)" },
        { text: "Character consistency across shots" },
        { text: "Large-scale scene generation" },
        { text: "Realistic human movement and expressions" },
        { text: "Multi-concept combination in single scenes" }
      ],
      advertisedResolutions: [
        { text: "Standard: 1920×1080 (1080p)" },
        { text: "Also: 1280×720 (720p option)" },
        { text: "Kling 1.5/1.6 had 1080p, maintained in 3.0" }
      ],
      aspectRatios: [
        { text: "16:9 (landscape)" },
        { text: "9:16 (portrait)" },
        { text: "1:1 (square)" },
        { text: "4:3 (standard)" },
        { text: "Custom ratios supported" }
      ],
      maxClipLength: [
        { text: "Standard mode: 10 seconds" },
        { text: "Pro mode: Up to 10 seconds (reports suggest possible extension)" },
        { text: "Higher consistency than previous versions" }
      ],
      colourspaceBitDepth: [
        { text: "Standard RGB, 8-bit" },
        { text: "H.264/H.265 codec" },
        { text: "HDR support not confirmed" }
      ],
      processingSpeed: [
        { text: "Standard: ~2-4 minutes per 10s clip" },
        { text: "High-quality mode: ~5-8 minutes per 10s clip" },
        { text: "Varies by complexity and server load" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Highly detailed prompt understanding" },
        { text: "Supports complex multi-element scenes" },
        { text: "Strong Chinese and English language support" }
      ],
      keyframeSupport: [
        { text: "Image-to-video mode with strong adherence" },
        { text: "End-frame targeting: Limited/Experimental" },
        { text: "Better frame interpolation than v1.0/1.5" }
      ],
      ingredientsToVideo: [
        { text: "Partial - Multi-concept prompting" },
        { text: "Can combine multiple reference images" },
        { text: "Not a formal \"ingredients\" interface" },
        { text: "Strong at merging disparate concepts" }
      ],
      videoEditing: [],
      additionalSections: [
        {
          title: "Motion control",
          items: [
            { text: "Kling 1.5+ introduced motion brush" },
            { text: "3.0 has enhanced motion parameters:", subItems: ["Pan, tilt, zoom, dolly controls", "Motion trajectory specification"] }
          ]
        },
        {
          title: "Character consistency",
          items: [
            { text: "Multi-shot character preservation" },
            { text: "Face/outfit retention across generations" }
          ]
        },
        {
          title: "Physics Simulation",
          items: [
            { text: "Advanced cloth, water, smoke dynamics" },
            { text: "Collision detection and response" },
            { text: "Gravity and natural motion" }
          ]
        },
        {
          title: "Professional camera modes",
          items: [
            { text: "Cinematic presets (Steadicam, crane, drone)" },
            { text: "Depth of field control" },
            { text: "Lighting direction hints" }
          ]
        }
      ]
    },
    furtherInfo: {
      additionalSections: [
        {
          title: "KLING 3.0 Early access",
          items: [
            { text: "I had early access to Kling 3.0. This short film is called MIRA. Every shot came from one single start image, using Kling's new custom multi-shot feature. This changes how films get made." }
          ]
        }
      ]
    }
  },

  seedance: {
    subtitle: "Might be worth | Chinese",
    companyInfo: {
      additionalInfo: [
        "ByteDance's AI Research division, leverages TikTok/CapCut infrastructure"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "Ultra-high motion consistency" },
        { text: "Character identity preservation" },
        { text: "Multi-shot narrative generation" },
        { text: "Fine-grained motion control" },
        { text: "Cinematic camera movements" },
        { text: "Text rendering in video (experimental)" }
      ],
      advertisedResolutions: [
        { text: "Primary: 1920×1080 (1080p)" },
        { text: "Standard: 1280×720 (720p)" },
        { text: "Maintains quality across aspect ratios" }
      ],
      aspectRatios: [
        { text: "16:9 (landscape)" },
        { text: "9:16 (portrait/vertical)" },
        { text: "1:1 (square)" },
        { text: "4:3 (standard)" },
        { text: "21:9 (cinematic widescreen)" }
      ],
      maxClipLength: [
        { text: "Standard: 10 seconds" },
        { text: "Can extend via continuation/chaining" }
      ],
      colourspaceBitDepth: [
        { text: "Standard RGB, 8-bit" },
        { text: "H.264 primary codec" },
        { text: "H.265 available for higher quality exports" }
      ],
      processingSpeed: [
        { text: "Standard quality: ~3-5 minutes per 10s clip" },
        { text: "High quality mode: ~6-10 minutes per 10s clip" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Advanced prompt parsing (Chinese/English)" },
        { text: "Supports detailed scene descriptions" },
        { text: "Style transfer from text descriptions" },
        { text: "Action/motion verbs well understood" }
      ],
      keyframeSupport: [
        { text: "Start frame: Image-to-video with high fidelity" },
        { text: "End frame: Target image guidance (v1.5 Pro feature)" },
        { text: "Mid-keyframes: Experimental in Pro version" },
        { text: "Interpolation quality industry-leading" },
        { text: "Character/object consistency between keyframes" }
      ],
      ingredientsToVideo: [
        { text: "Can use multiple images as composition reference" },
        { text: "Strong at concept blending from references" },
        { text: "Style + content separation possible" }
      ],
      videoEditing: [],
      additionalSections: [
        {
          title: "SEEDANCE 1.5 PRO EXCLUSIVE FEATURES",
          items: [
            { text: "Lock character appearance across multiple generations" },
            { text: "Face ID preservation" },
            { text: "Outfit/style retention" },
            { text: "Multi-angle character generation" }
          ]
        }
      ]
    },
    furtherInfo: {}
  },

  wan: {
    subtitle: "Might be worth | Chinese",
    companyInfo: {
      additionalInfo: [
        "Part of Tongyi AI suite, e-commerce optimization focus. — Previous models were open source, not anymore"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "E-commerce product videos" },
        { text: "Portrait/face animation and lip-sync" },
        { text: "Product showcase with 360° rotation" },
        { text: "Advertising and marketing content" },
        { text: "Talking avatar generation" },
        { text: "Brand-safe, commercial-ready outputs" }
      ],
      advertisedResolutions: [
        { text: "Primary: 1920×1080 (1080p)" },
        { text: "Standard: 1280×720 (720p)" },
        { text: "Optimized for mobile/social platforms" }
      ],
      aspectRatios: [
        { text: "16:9 (landscape)" },
        { text: "9:16 (portrait/vertical - optimized for mobile commerce)" },
        { text: "1:1 (square - social media)" },
        { text: "4:5 (Instagram/Facebook feed)" }
      ],
      maxClipLength: [
        { text: "Standard: 10 seconds" },
        { text: "Portrait mode: Up to 15 seconds (talking heads)" },
        { text: "Product rotation: 5-8 seconds optimal" },
        { text: "Extendable through API chaining" }
      ],
      colourspaceBitDepth: [
        { text: "Standard RGB, 8-bit" },
        { text: "H.264 codec (optimized for streaming)" },
        { text: "Color grading presets for e-commerce" }
      ],
      processingSpeed: [
        { text: "Standard generation: ~2-3 minutes per 10s clip" },
        { text: "Portrait animation: ~1-2 minutes per 10s" },
        { text: "Product showcase: ~3-4 minutes per clip" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Strong for product descriptions" },
        { text: "E-commerce terminology optimized" },
        { text: "Chinese/English bilingual" },
        { text: "Less creative/artistic than competitors" },
        { text: "Commercial context understanding" }
      ],
      keyframeSupport: [
        { text: "Product image-to-video: Excellent" },
        { text: "Portrait image-to-video: Excellent" },
        { text: "End frame targeting: Limited" },
        { text: "Designed for single-image product input" },
        { text: "Maintains product identity well" }
      ],
      ingredientsToVideo: [
        { text: "Can combine product image + scene description" },
        { text: "Multi-asset composition for e-commerce" },
        { text: "Not a true multi-ingredient system" },
        { text: "Template-based combinations available" }
      ],
      videoEditing: [
        { text: "Background replacement (e-commerce specific)" },
        { text: "Color grading presets" },
        { text: "Logo/watermark insertion" },
        { text: "No advanced inpainting" },
        { text: "Focused on enhancement, not manipulation" }
      ],
      additionalSections: [
        {
          title: "Motion Control",
          items: [
            { text: "Product rotation (360°, orbital)" },
            { text: "Camera movements: zoom, pan (limited)" },
            { text: "Face animation: Audio-driven lip-sync" },
            { text: "Pose control: Not available" },
            { text: "Pre-set e-commerce camera moves" },
            { text: "No custom motion trajectory painting" }
          ]
        }
      ]
    },
    furtherInfo: {}
  },

  luma: {
    subtitle: "Must try 100%",
    companyInfo: {
      additionalInfo: [
        "Previously known for NeRF/3D capture, pivoted to video generation."
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "Photorealistic rendering quality" },
        { text: "Advanced physics and lighting simulation" },
        { text: "3D-aware scene understanding" },
        { text: "Cinematic camera movements" },
        { text: "Temporal consistency and coherence" },
        { text: "Natural motion dynamics" },
        { text: "Material/texture accuracy" }
      ],
      advertisedResolutions: [
        { text: "Primary: 1920×1080 (1080p)" },
        { text: "Standard: 1280×720 (720p option)" },
        { text: "High bitrate encoding for quality" },
        { text: "Upscaling experiments (not production)" }
      ],
      aspectRatios: [
        { text: "16:9 (landscape)" },
        { text: "9:16 (portrait/vertical)" },
        { text: "1:1 (square)" },
        { text: "4:3 (standard)" },
        { text: "2.35:1 (cinematic widescreen)" },
        { text: "Custom ratios supported" }
      ],
      maxClipLength: [
        { text: "Ray 3.14: 10 seconds primary" },
        { text: "Ray2 (extension model): Can extend to 30+ seconds via chaining" }
      ],
      colourspaceBitDepth: [
        { text: "Standard RGB, 8-bit output" },
        { text: "H.264 primary, H.265 available" },
        { text: "HDR experiments (not confirmed for 3.14)" },
        { text: "High dynamic range rendering internally" }
      ],
      processingSpeed: [
        { text: "Standard: ~2-4 minutes per 10s clip" },
        { text: "High quality: ~4-6 minutes per 10s clip" },
        { text: "Extension generations: ~3-5 minutes each" }
      ]
    },
    features: {
      textToVideo: [
        { text: "Core feature" },
        { text: "Strong prompt understanding" },
        { text: "Photorealistic interpretation" },
        { text: "Physics-aware generation" },
        { text: "Natural lighting comprehension" },
        { text: "Material property understanding" }
      ],
      keyframeSupport: [
        { text: "Start frame excellent" },
        { text: "Image-to-video: Industry-leading quality" },
        { text: "End frame: Experimental/Limited" },
        { text: "Ray2 extension uses last frame as start" },
        { text: "3D consistency from single image" },
        { text: "Camera pose estimation from image" }
      ],
      ingredientsToVideo: [
        { text: "Can use reference image for style" },
        { text: "Multi-image composition limited" }
      ],
      videoEditing: [],
      additionalSections: [
        {
          title: "Camera motion control",
          items: [
            { text: "Advanced camera controls" },
            { text: "Camera presets: Professional movements", subItems: ["Crane, dolly, pan, tilt, orbit", "Push in, pull out, drone shots", "Handheld, Steadicam styles"] },
            { text: "Camera trajectory: Custom path definition (limited)" },
            { text: "Motion intensity: Speed/smoothness controls" }
          ]
        }
      ]
    },
    furtherInfo: {}
  },

  hunyuan: {
    subtitle: "Might be worth | Chinese",
    companyInfo: {
      additionalInfo: [
        "behind major products: WeChat, QQ, Tencent Games, Tencent Cloud — Hunyuan is Tencent's generative AI brand across text, image, video, and 3D"
      ]
    },
    modelInfo: {
      advertisedFocus: [
        { text: "Professional-quality video generation with state-of-the-art visual quality" },
        { text: "Motion coherence and temporal consistency" },
        { text: "Bilingual understanding (English and Chinese)" },
        { text: "Lightweight architecture for consumer-grade GPU accessibility" },
        { text: "Physics-accurate simulation" },
        { text: "Open-source model for research and development" },
        { text: "Text-to-video and image-to-video generation" },
        { text: "High-fidelity video synthesis" }
      ],
      advertisedResolutions: [
        { text: "HunyuanVideo 1.5 (First Stage): 480p to 720p" },
        { text: "HunyuanVideo 1.5 (Second Stage with Super-Resolution): 1080p" },
        { text: "HunyuanVideo (original): 1024×576 (primary), up to 1280×720" }
      ],
      aspectRatios: [
        { text: "Multiple aspect ratios supported" },
        { text: "16:9 (landscape)" },
        { text: "9:16 (portrait/vertical)" },
        { text: "Various other aspect ratios" },
        { text: "Dynamic aspect ratio support with bucket training strategy" }
      ],
      maxClipLength: [
        { text: "HunyuanVideo 1.5: 5 to 10 seconds" },
        { text: "HunyuanVideo (original): Up to 16 seconds (129 frames)" }
      ],
      colourspaceBitDepth: [
        { text: "Not publicly specified" },
        { text: "24 FPS (standard)" },
        { text: "Trained at 24 fps" }
      ],
      processingSpeed: [
        { text: "HunyuanVideo 1.5:", subItems: ["With step-distilled model: 75% faster (75 seconds on single RTX 4090)", "1.87× speedup with SSTA mechanism compared to FlashAttention-3", "Reduced by 75% with 480p I2V step-distilled model", "FP8 quantization available for memory optimization", "Multi-GPU parallel inference supported via xDiT"] }
      ]
    },
    features: {
      textToVideo: [
        { text: "Natural language prompt processing" },
        { text: "Multimodal Large Language Model (MLLM) as text encoder (Decoder-Only structure)" },
        { text: "Better image-text alignment compared to traditional T5 encoders" },
        { text: "Superior ability in image detail description and complex reasoning" },
        { text: "Zero-shot learning capability through system instructions" },
        { text: "Bidirectional token refiner for enhanced text features" },
        { text: "Prompt rewrite model available (Normal and Master modes)" }
      ],
      keyframeSupport: [
        { text: "Start frame + End frame: Image-to-video conditioning supported" },
        { text: "First-frame guidance for I2V generation" },
        { text: "Instructional captioning for temporal evolution descriptions" },
        { text: "Maintains consistency across frames" }
      ],
      ingredientsToVideo: [
        { text: "Text-to-image (T2I) → Text-to-video (T2V) → Image-to-video (I2V) unified framework" },
        { text: "Multi-stage progressive training approach" },
        { text: "Mixed-task training with balanced data ratios" },
        { text: "Image and video joint model training" },
        { text: "HunyuanVideo-I2V (released March 6, 2025)" },
        { text: "HunyuanVideo-Avatar for audio-driven human animation (May 28, 2025)" }
      ],
      videoEditing: [
        { text: "HunyuanCustom for customized video generation (May 9, 2025)" },
        { text: "Video-to-video transformation" },
        { text: "Multimodal-driven architecture" },
        { text: "Resolution and duration adjustments" },
        { text: "Style transfer capabilities" }
      ]
    },
    furtherInfo: {
      architectureTraining: [
        { text: "13 billion parameters (original HunyuanVideo)" },
        { text: "8.3 billion parameters (HunyuanVideo 1.5 - lightweight)" },
        { text: "Diffusion Transformer (DiT) with \"Dual-stream to Single-stream\" hybrid design" },
        { text: "Full Attention mechanism for unified image and video generation" },
        { text: "3D Variational Autoencoder (VAE) with CausalConv3D" },
        { text: "Compression ratios: 16× spatial, 4× temporal, 16× channel" },
        { text: "Selective and Sliding Tile Attention (SSTA) mechanism" },
        { text: "Glyph-aware text encoding for bilingual understanding" }
      ],
      dataAndTraining: [
        { text: "Meticulous data curation pipeline" },
        { text: "Progressive pre-training across multiple stages" },
        { text: "T2I training: 256p → 512p" },
        { text: "T2V training: 256p → 480p → 720p" },
        { text: "Mixed-task training ratio: T2I:T2V:I2V = 1:6:3" },
        { text: "Post-training: CT → SFT → RLHF" },
        { text: "Bucket training strategy for multiple resolutions/aspect ratios/frame rates" }
      ],
      videoSuperResolution: [
        { text: "Dedicated Video Super-Resolution Network" },
        { text: "Upscales from 480p-720p to 1080p" },
        { text: "Few-step super-resolution model" },
        { text: "Improves sharpness while preserving motion" },
        { text: "Stabilizes motion artifacts" }
      ],
      platformAvailability: [
        { text: "Open-source: GitHub (Tencent-Hunyuan/HunyuanVideo and HunyuanVideo-1.5)" },
        { text: "Hugging Face: Available through Diffusers library" },
        { text: "Tencent Cloud API for enterprise" },
        { text: "Tencent Yuanbao app for consumers" },
        { text: "Available through third-party platforms: Pollo AI, Segmind, ComfyUI, fal.ai, Scenario" },
        { text: "Community tools: ComfyUI plugins, LightX2V framework, WanGP app" }
      ],
      pricingModel: [
        { text: "Open-source: Free (model weights and code)" },
        { text: "API through third-party platforms: Varies by provider" },
        { text: "fal.ai: $0.075 per second" },
        { text: "Tencent Cloud: API pricing for enterprise (internal testing phase)" },
        { text: "Free trial credits available on various platform" }
      ],
      systemRequirements: [
        { text: "Minimum VRAM: 24GB (with quality adjustments)" },
        { text: "Optimal VRAM: 45GB for best performance" },
        { text: "Can run on consumer-grade GPUs (RTX 4090, etc.)" },
        { text: "Supports FP8 quantization to reduce memory requirements" },
        { text: "Multi-GPU inference supported" }
      ],
      limitations: [
        { text: "Requires significant computing resources (24-45GB VRAM)" },
        { text: "HunyuanVideo 1.5 limited to 10-second clips" },
        { text: "Original HunyuanVideo limited to 16 seconds" },
        { text: "1080p requires super-resolution step" },
        { text: "Setup and installation can be complex without platforms" },
        { text: "Some content generation challenges with complex scenes" },
        { text: "[ Hard to find ]" }
      ]
    }
  }
};
