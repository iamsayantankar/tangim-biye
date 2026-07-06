"use client";

import { motion } from "framer-motion";
import { events, haldiVenue } from "@/lib/data";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import { MehendiGirl } from "./Illustrations";

const FLOATERS = [
  { l: "9%", t: "20%", s: 30, d: 0 },
  { l: "86%", t: "24%", s: 24, d: 1 },
  { l: "14%", t: "76%", s: 22, d: 2 },
  { l: "84%", t: "78%", s: 28, d: 0.5 },
];

function Paisley({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M14 34 C2 28 4 12 16 8 C26 5 34 12 32 22 C30 30 22 32 20 26 C19 22 22 19 26 21"
        stroke="#6b6f24"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="15" cy="14" r="2" fill="#6b6f24" opacity="0.5" />
    </svg>
  );
}

export default function MehendiSection() {
  const e = events.mehendi;
  return (
    <section
      id="mehendi"
      className="relative overflow-hidden vignette-mehendi py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-1 h-24 bg-gradient-to-b from-cream to-transparent" />

      {FLOATERS.map((m, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: m.l, top: m.t }}
          animate={{ y: [0, -14, 0], rotate: [0, 18, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: m.d }}
        >
          <Paisley size={m.s} />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="eyebrow text-mehendi-700">The Henna Night</p>
          <h2 className="mt-2 bg-mehendi-sheen shimmer-text font-script text-5xl sm:text-7xl">
            Mehendi Night
          </h2>
          <p className="mt-2 font-serif text-lg italic text-ink/60">
            {e.tagline}
          </p>
        </Reveal>

        <Ornament className="my-8" color="#565a1f" />

        <Reveal from="scale">
          <div className="mx-auto max-w-xl rounded-[2rem] border border-mehendi-300/70 bg-white/60 px-7 py-9 shadow-[0_18px_50px_-18px_rgba(86,90,31,0.4)] backdrop-blur-xl">
            <motion.div
              className="mx-auto -mt-3 mb-2 w-44 sm:w-52"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MehendiGirl className="h-full w-full" />
            </motion.div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="font-body text-sm uppercase tracking-[0.25em] text-mehendi-600">
                {e.day} Night
              </p>
              <p className="font-display text-6xl font-bold text-mehendi-700">
                13
              </p>
              <p className="font-display text-xl text-mehendi-600">
                August 2026
              </p>
              <p className="mt-2 font-serif text-lg text-ink/70">
                {e.time} · {e.note}
              </p>
              <p className="mt-3 flex items-center justify-center gap-1.5 font-serif text-base text-mehendi-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 11.2 12 4l9 7.2M5.5 9.8V20h13V9.8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {haldiVenue.name}
              </p>
              <p className="font-serif text-sm text-ink/55">
                {haldiVenue.lines[0]}, Midnapore
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
