"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Bubble from "@/components/Bubble";
import ExpandedBubble from "@/components/ExpandedBubble";
import ConnectionLines from "@/components/ConnectionLines";
import MiniMap from "@/components/MiniMap";
import GardenHUD from "@/components/GardenHUD";
import { models, bubbleLayout, type ModelData, type BubblePosition } from "@/data/models";

const CANVAS_W = 1800;
const CANVAS_H = 1100;
const MIN_SCALE = 0.45;
const MAX_SCALE = 1.6;

export default function Home() {
  const [expanded, setExpanded] = useState<{ model: ModelData; pos: BubblePosition } | null>(null);
  const [viewSize, setViewSize] = useState({ w: 1200, h: 800 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(0.75);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  // Track viewport size
  useEffect(() => {
    function update() {
      setViewSize({ w: window.innerWidth, h: window.innerHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Center canvas initially
  useEffect(() => {
    const cx = -(CANVAS_W * 0.75 - window.innerWidth) / 2;
    const cy = -(CANVAS_H * 0.75 - window.innerHeight) / 2;
    x.set(cx);
    y.set(cy);
  }, []);

  // Pan handlers
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (expanded) return;
    dragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, [expanded]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    x.set(x.get() + dx);
    y.set(y.get() + dy);
  }, [x, y]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  // Zoom handler
  const onWheel = useCallback((e: React.WheelEvent) => {
    if (expanded) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.06 : 0.06;
    const next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale.get() + delta));

    // Zoom toward mouse position
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const oldScale = scale.get();
      const ratio = next / oldScale;
      x.set(mx - ratio * (mx - x.get()));
      y.set(my - ratio * (my - y.get()));
    }
    scale.set(next);
  }, [expanded, scale, x, y]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onWheel={onWheel}
      style={{ touchAction: "none" }}
    >
      {/* HUD */}
      <GardenHUD />

      {/* Draggable/Zoomable Canvas */}
      <motion.div
        className="absolute"
        style={{
          x,
          y,
          scale,
          width: CANVAS_W,
          height: CANVAS_H,
        }}
      >
        {/* Connection lines (behind bubbles) */}
        <ConnectionLines />

        {/* Floating bubbles */}
        {models.map((model) => {
          const pos = bubbleLayout[model.id];
          if (!pos) return null;
          return (
            <Bubble
              key={model.id}
              model={model}
              pos={pos}
              onOpen={() => setExpanded({ model, pos })}
            />
          );
        })}
      </motion.div>

      {/* Mini Map */}
      <MiniMap
        viewX={x.get()}
        viewY={y.get()}
        viewW={viewSize.w / scale.get()}
        viewH={viewSize.h / scale.get()}
      />

      {/* Expanded Bubble Overlay */}
      <ExpandedBubble
        model={expanded?.model ?? null}
        pos={expanded?.pos ?? null}
        onClose={() => setExpanded(null)}
      />
    </div>
  );
}
