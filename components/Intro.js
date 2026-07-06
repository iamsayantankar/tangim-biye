"use client";

import { motion } from "framer-motion";
import { lead, partner, bismillah } from "@/lib/data";

// Full-screen opening overlay. Tapping "Open Invitation" reveals the
// page and (because it's a user gesture) unlocks background music.
export default function Intro({ onOpen, accent = "rose" }) {
  const grad =
    accent === "marigold"
      ? "linear-gradient(135deg,#fffbeb,#fde68a 45%,#fbbf24)"
      : "linear-gradient(135deg,#fff5f9,#fbcfe0 45%,#f7a8c4)";

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden px-6"
      style={{ background: grad }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {/* soft rotating halo */}
      <motion.div
        aria-hidden
        className="absolute h-[120vmin] w-[120vmin] rounded-full"
        style={{
          background:
            accent === "marigold"
              ? "conic-gradient(from 0deg,#fde68a44,#fff,#fbbf2444,#fff,#fde68a44)"
              : "conic-gradient(from 0deg,#fbcfe044,#fff,#f7a8c444,#fff,#fbcfe044)",
          filter: "blur(40px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center">
        <motion.p
          className="font-arabic text-2xl text-rose-700 sm:text-3xl"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dir="rtl"
        >
          {bismillah.arabic}
        </motion.p>

        <motion.p
          className="eyebrow mt-6 text-rose-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Together with their families
        </motion.p>

        {/* Monogram */}
        <motion.div
          className="my-7 flex items-center justify-center gap-6 py-3 sm:gap-7"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <span className="font-script text-7xl uppercase leading-none text-rose-700 sm:text-8xl">
            {lead.initial}
          </span>
          <motion.span
            className="font-display text-5xl italic text-rose-400 sm:text-6xl"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            &
          </motion.span>
          <span className="font-script text-7xl uppercase leading-none text-rose-700 sm:text-8xl">
            {partner.initial}
          </span>
        </motion.div>

        <motion.h1
          className="mt-2 font-display text-2xl font-semibold tracking-wide text-rose-900 sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          {lead.short} <span className="font-display italic text-rose-500">&</span>{" "}
          {partner.short}
        </motion.h1>

        <motion.p
          className="mt-3 font-serif text-lg italic text-rose-700/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
          request the honour of your presence
        </motion.p>

        <motion.button
          onClick={onOpen}
          className="btn-glossy mt-9"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          whileHover={{ scale: 1.04 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v.4l-8 5-8-5v-.4Z" />
            <path d="M20 9.2l-7.5 4.7a1 1 0 0 1-1 0L4 9.2v8.3A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5V9.2Z" />
          </svg>
          Open Invitation
        </motion.button>

        <motion.p
          className="mt-5 text-xs uppercase tracking-[0.3em] text-rose-500/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
        >
          ♪ tap to open with music
        </motion.p>
      </div>
    </motion.div>
  );
}
