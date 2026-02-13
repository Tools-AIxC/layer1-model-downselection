"use client";

import { useRef, useEffect } from "react";
import { type MotionValue } from "framer-motion";
import { models, bubbleLayout, tierConfig } from "@/data/models";

const CANVAS_W = 1800;
const CANVAS_H = 1100;
const MAP_W = 180;
const MAP_H = 110;

export default function MiniMap({
  motionX,
  motionY,
  motionScale,
}: {
  motionX: MotionValue<number>;
  motionY: MotionValue<number>;
  motionScale: MotionValue<number>;
}) {
  const vpRef = useRef<HTMLDivElement>(null);

  const scaleX = MAP_W / CANVAS_W;
  const scaleY = MAP_H / CANVAS_H;

  // Subscribe to motion value changes and update the viewport rect directly
  useEffect(() => {
    function update() {
      if (!vpRef.current) return;
      const cx = motionX.get();
      const cy = motionY.get();
      const s = motionScale.get();
      const vw = window.innerWidth / s;
      const vh = window.innerHeight / s;

      vpRef.current.style.left = `${Math.max(0, -cx / s * scaleX)}px`;
      vpRef.current.style.top = `${Math.max(0, -cy / s * scaleY)}px`;
      vpRef.current.style.width = `${Math.min(MAP_W, vw * scaleX)}px`;
      vpRef.current.style.height = `${Math.min(MAP_H, vh * scaleY)}px`;
    }

    // Run once immediately
    update();

    // Subscribe to all three motion values
    const unsubX = motionX.on("change", update);
    const unsubY = motionY.on("change", update);
    const unsubS = motionScale.on("change", update);

    // Also update on window resize
    window.addEventListener("resize", update);

    return () => {
      unsubX();
      unsubY();
      unsubS();
      window.removeEventListener("resize", update);
    };
  }, [motionX, motionY, motionScale, scaleX, scaleY]);

  return (
    <div className="minimap fixed bottom-4 right-4 z-30 p-2" style={{ width: MAP_W + 16, height: MAP_H + 16 }}>
      <div className="relative" style={{ width: MAP_W, height: MAP_H }}>
        {/* Model dots */}
        {models.map((m) => {
          const pos = bubbleLayout[m.id];
          if (!pos) return null;
          const tier = tierConfig[m.tier];
          return (
            <div
              key={m.id}
              className="absolute rounded-full"
              style={{
                left: pos.x * scaleX - 3,
                top: pos.y * scaleY - 3,
                width: 6,
                height: 6,
                backgroundColor: tier.accent,
                opacity: 0.7,
              }}
            />
          );
        })}

        {/* Viewport rectangle — updated reactively via ref */}
        <div
          ref={vpRef}
          className="absolute rounded border border-gray-800/20 bg-gray-800/5"
        />
      </div>
    </div>
  );
}
