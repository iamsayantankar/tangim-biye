"use client";

import { motion } from "framer-motion";
import { lead, partner, bismillah, events } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden vignette-rose px-5 pt-20"
    >
      {/* decorative blurred orbs */}
      <motion.div
        aria-hidden
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-gold-200/50 blur-3xl"
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      {/* faint slow-rotating mandala */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, transparent 38%, #cf2b6b 38.4%, transparent 39%), radial-gradient(circle, transparent 48%, #cf2b6b 48.3%, transparent 49%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          dir="rtl"
          className="font-arabic text-xl text-rose-700/90 sm:text-2xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {bismillah.arabic}
        </motion.p>
        <motion.p
          className="mt-1 font-serif text-sm italic text-ink/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {bismillah.meaning}
        </motion.p>

        <motion.p
          className="eyebrow mt-8 text-rose-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          We are getting married
        </motion.p>

        {/* Names */}
        <h1 className="mt-3 leading-none">
          <motion.span
            className="block bg-rose-sheen shimmer-text font-script text-6xl sm:text-8xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            {lead.short}
          </motion.span>
          <motion.span
            className="my-1 block font-display text-3xl text-rose-400 sm:text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            &amp;
          </motion.span>
          <motion.span
            className="block bg-rose-sheen shimmer-text font-script text-6xl sm:text-8xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            {partner.short}
          </motion.span>
        </h1>

        <motion.div
          className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4 text-rose-700"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-300" />
          <span className="font-display text-lg tracking-[0.25em]">
            14 · 08 · 2026
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-300" />
        </motion.div>
        <motion.p
          className="mt-2 font-serif text-lg text-ink/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {events.wedding.day} · Parinoy The Banquet, Midnapore
        </motion.p>

        {/* scroll cue */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-2 text-rose-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4v14m0 0l6-6m-6 6l-6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
