"use client";

import { useRef, useEffect } from "react";
import { type ModelData } from "@/data/models";

/* Convert model specs into normalized 0-1 scores for the radar */
function getScores(model: ModelData) {
  // Resolution score
  const res = model.specs.resolution.toLowerCase();
  let resSc = 0.3;
  if (res.includes("4k")) resSc = 1.0;
  else if (res.includes("1080") || res.includes("1920")) resSc = 0.75;
  else if (res.includes("720") || res.includes("1280")) resSc = 0.5;
  else if (res.includes("768")) resSc = 0.35;

  // Clip length score
  const clipMatch = model.specs.maxClipLength.match(/(\d+)/);
  const clipSec = clipMatch ? parseInt(clipMatch[1], 10) : 5;
  let clipSc = Math.min(clipSec / 25, 1);
  if (model.specs.maxClipLength.includes("140")) clipSc = 1.0;

  // Features richness
  const featSc = Math.min((model.keyFeatures.length + model.advancedFeatures.length) / 12, 1);

  // Aspect ratio variety
  const arSc = Math.min(model.specs.aspectRatios.length / 6, 1);

  // Pricing accessibility (inverse of cost)
  let priceSc = 0.5;
  if (model.pricing.freeTier.toLowerCase().includes("open source")) priceSc = 1.0;
  else if (model.pricing.freeTier.includes("66")) priceSc = 0.9;
  else if (model.pricing.freeTier.toLowerCase().includes("generous")) priceSc = 0.8;
  else if (model.pricing.freeTier.toLowerCase().includes("free")) priceSc = 0.6;
  else if (model.pricing.paidPlans.includes("250")) priceSc = 0.2;

  // Speed score
  const speed = model.specs.processingSpeed.toLowerCase();
  let speedSc = 0.5;
  if (speed.includes("20") && speed.includes("40s")) speedSc = 0.95;
  else if (speed.includes("fast") || speed.includes("45")) speedSc = 0.8;
  else if (speed.includes("1") && speed.includes("4 min")) speedSc = 0.6;
  else if (speed.includes("variable")) speedSc = 0.5;
  else if (speed.includes("6") && speed.includes("10")) speedSc = 0.3;

  return [
    { label: "Resolution", value: resSc },
    { label: "Clip Length", value: clipSc },
    { label: "Features", value: featSc },
    { label: "Formats", value: arSc },
    { label: "Accessibility", value: priceSc },
    { label: "Speed", value: speedSc },
  ];
}

export default function SpecRadar({ model }: { model: ModelData }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scores = getScores(model);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = 320;
    const h = 280;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    const cx = w / 2;
    const cy = h / 2 + 8;
    const maxR = 100;
    const n = scores.length;
    const angleStep = (Math.PI * 2) / n;
    const startAngle = -Math.PI / 2;

    ctx.clearRect(0, 0, w, h);

    // Grid rings
    for (let ring = 1; ring <= 4; ring++) {
      const r = (maxR * ring) / 4;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const a = startAngle + i * angleStep;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = ring === 4 ? "#c8bea8" : "#e0d8c8";
      ctx.lineWidth = ring === 4 ? 1 : 0.5;
      ctx.stroke();
    }

    // Spoke lines
    for (let i = 0; i < n; i++) {
      const a = startAngle + i * angleStep;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + maxR * Math.cos(a), cy + maxR * Math.sin(a));
      ctx.strokeStyle = "#e0d8c8";
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Data polygon
    ctx.beginPath();
    scores.forEach((s, i) => {
      const a = startAngle + i * angleStep;
      const r = maxR * s.value;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = "rgba(13, 148, 136, 0.12)";
    ctx.fill();
    ctx.strokeStyle = "#0d9488";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Data points
    scores.forEach((s, i) => {
      const a = startAngle + i * angleStep;
      const r = maxR * s.value;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#0d9488";
      ctx.fill();
      ctx.strokeStyle = "#fdfcf9";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Labels
    ctx.font = "10px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#6b6b80";

    scores.forEach((s, i) => {
      const a = startAngle + i * angleStep;
      const lR = maxR + 22;
      let x = cx + lR * Math.cos(a);
      let y = cy + lR * Math.sin(a);
      // Adjust alignment for left/right labels
      if (Math.cos(a) < -0.3) ctx.textAlign = "right";
      else if (Math.cos(a) > 0.3) ctx.textAlign = "left";
      else ctx.textAlign = "center";
      ctx.fillText(s.label.toUpperCase(), x, y);
      ctx.textAlign = "center";
    });
  }, [model.id]);

  return (
    <div className="flex items-center justify-center">
      <canvas ref={canvasRef} />
    </div>
  );
}
