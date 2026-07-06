"use client";

import { motion } from "framer-motion";
import { lead, partner, bismillah, events } from "@/lib/data";

// Fixed positions so server & client render identically (no hydration drift).
const SPARKLES = [
  { l: "12%", t: "24%", s: 10, d: 0 },
  { l: "85%", t: "20%", s: 7, d: 1.2 },
  { l: "22%", t: "70%", s: 8, d: 0.6 },
  { l: "80%", t: "74%", s: 11, d: 1.8 },
  { l: "50%", t: "10%", s: 7, d: 0.9 },
  { l: "34%", t: "44%", s: 6, d: 2.3 },
  { l: "68%", t: "38%", s: 7, d: 1.5 },
  { l: "92%", t: "52%", s: 8, d: 0.3 },
  { l: "7%", t: "50%", s: 7, d: 2.6 },
];

function Sparkle({ l, t, s, d }) {
  return (
    <motion.svg
      aria-hidden
      className="absolute text-rose-300"
      style={{ left: l, top: t }}
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="currentColor"
      animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
      transition={{ duration: 3.4, repeat: Infinity, delay: d }}
    >
      <path d="M12 0c.6 5.6 5.8 10.8 12 12-6.2 1.2-11.4 6.4-12 12-.6-5.6-5.8-10.8-12-12C6.2 10.8 11.4 5.6 12 0Z" />
    </motion.svg>
  );
}

function DateBadge({ label, date, place, accent }) {
  const gold = accent === "marigold";
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      className="relative flex-1 overflow-hidden rounded-2xl px-5 py-3.5 text-center"
      style={{
        background: gold
          ? "linear-gradient(135deg,#fff8e6,#fde68a)"
          : "linear-gradient(135deg,#fff1f7,#fbcfe0)",
        border: gold ? "1px solid #f7cf6b" : "1px solid #f5a6c3",
        boxShadow: gold
          ? "0 14px 32px -16px rgba(234,140,10,.65), inset 0 1px 1px rgba(255,255,255,.85)"
          : "0 14px 32px -16px rgba(207,43,107,.6), inset 0 1px 1px rgba(255,255,255,.85)",
      }}
    >
      {/* glossy sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-white/50 blur-md"
        style={{ animation: "shimmer 6s linear infinite" }}
      />
      <span
        className="relative inline-block rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white"
        style={{
          background: gold
            ? "linear-gradient(135deg,#fbbf24,#ea8c0a)"
            : "linear-gradient(135deg,#f072a3,#cf2b6b)",
        }}
      >
        {label}
      </span>
      <p
        className={`relative mt-2 font-display text-base font-semibold sm:text-lg ${
          gold ? "text-saffron-800" : "text-rose-800"
        }`}
      >
        {date}
      </p>
      <p className="relative mt-0.5 font-body text-xs text-ink/55">{place}</p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden vignette-rose px-5 pt-24"
    >
      {/* ===== stylish layered background ===== */}
      {/* animated gradient-mesh orbs */}
      <motion.div
        aria-hidden
        className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-rose-300/40 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl"
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-10 left-1/4 h-72 w-72 rounded-full bg-marigold-200/30 blur-3xl"
        animate={{ x: [0, -24, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute right-1/4 top-6 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl"
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 13, repeat: Infinity }}
      />

      {/* decorative concentric rings */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {[46, 66, 88].map((v, i) => (
          <div
            key={v}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: `${v}vmin`,
              height: `${v}vmin`,
              borderColor: i % 2 ? "rgba(234,140,10,0.12)" : "rgba(207,43,107,0.12)",
            }}
          />
        ))}
      </div>
      {/* slow rotating dashed halo */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[108vmin] w-[108vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.4]"
        style={{
          background:
            "repeating-conic-gradient(from 0deg, rgba(207,43,107,0.10) 0deg 2deg, transparent 2deg 10deg)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 49.4%, #000 49.6%, #000 50%, transparent 50.2%)",
          maskImage:
            "radial-gradient(circle, transparent 49.4%, #000 49.6%, #000 50%, transparent 50.2%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      {/* twinkling sparkles */}
      {SPARKLES.map((s, i) => (
        <Sparkle key={i} {...s} />
      ))}

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

        {/* soft glow behind the names */}
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl"
          />
          <h1 className="relative mt-3 leading-none">
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
        </div>

        {/* Highlighted date badges — Haldi + Wedding, with place */}
        <motion.div
          className="mx-auto mt-9 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <DateBadge
            label="Haldi"
            date={events.haldi.pretty}
            place="At Our Residence · Aligunj, Midnapore"
            accent="marigold"
          />
          <DateBadge
            label="Wedding"
            date={events.wedding.pretty}
            place="Parinoy The Banquet · Midnapore"
            accent="rose"
          />
        </motion.div>

        {/* scroll cue */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-2 text-rose-400"
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
