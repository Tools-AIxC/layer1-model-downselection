"use client";

import { connections, bubbleLayout } from "@/data/models";

export default function ConnectionLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0"
      style={{ width: 1800, height: 1100 }}
    >
      {connections.map(([from, to]) => {
        const a = bubbleLayout[from];
        const b = bubbleLayout[to];
        if (!a || !b) return null;

        // Organic curved path — use a control point offset
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        // Perpendicular offset for organic curve
        const offset = Math.min(Math.abs(dx), Math.abs(dy)) * 0.2;
        const cpX = midX - dy * 0.15 + offset * 0.3;
        const cpY = midY + dx * 0.15 - offset * 0.3;

        return (
          <path
            key={`${from}-${to}`}
            d={`M ${a.x} ${a.y} Q ${cpX} ${cpY} ${b.x} ${b.y}`}
            className="connection-line"
          />
        );
      })}
    </svg>
  );
}
