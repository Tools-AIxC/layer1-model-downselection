"use client";

import { models, bubbleLayout, tierConfig } from "@/data/models";

const CANVAS_W = 1800;
const CANVAS_H = 1100;
const MAP_W = 180;
const MAP_H = 110;

export default function MiniMap({
  viewX,
  viewY,
  viewW,
  viewH,
}: {
  viewX: number;
  viewY: number;
  viewW: number;
  viewH: number;
}) {
  const scaleX = MAP_W / CANVAS_W;
  const scaleY = MAP_H / CANVAS_H;

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

        {/* Viewport rectangle */}
        <div
          className="absolute rounded border border-gray-800/20 bg-gray-800/5"
          style={{
            left: Math.max(0, -viewX * scaleX),
            top: Math.max(0, -viewY * scaleY),
            width: viewW * scaleX,
            height: viewH * scaleY,
          }}
        />
      </div>
    </div>
  );
}
