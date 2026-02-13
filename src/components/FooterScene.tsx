"use client";

import { motion } from "framer-motion";

export default function FooterScene() {
  return (
    <footer className="relative flex h-[40vh] items-center justify-center overflow-hidden bg-[#030306]">
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(59,130,246,0.04) 0%, transparent 60%)",
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-white/15">
          Layer 1 — Model Down-Selection Report
        </p>
        <p className="text-sm text-white/10">
          Data sourced from Miro board research · 11 AI video generation models analyzed
        </p>
        <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="mt-6 text-xs text-white/8">
          Cinematic Scrollytelling Experience · V4
        </p>
      </motion.div>
    </footer>
  );
}
