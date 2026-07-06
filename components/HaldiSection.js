"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { events, haldiVenue } from "@/lib/data";
import Reveal from "./Reveal";
import Ornament from "./Ornament";

export default function HaldiSection() {
  const e = events.haldi;
  return (
    <section
      id="haldi"
      className="relative overflow-hidden vignette-gold py-20 sm:py-28"
    >
      {/* the colour shifts from rose into marigold here */}
      <div className="pointer-events-none absolute inset-x-0 -top-1 h-24 bg-gradient-to-b from-cream to-transparent" />

      {/* floating marigolds */}
      {[
        { l: "8%", t: "18%", s: 40, d: 0 },
        { l: "88%", t: "26%", s: 30, d: 1 },
        { l: "15%", t: "78%", s: 26, d: 2 },
        { l: "82%", t: "80%", s: 36, d: 0.5 },
      ].map((m, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: m.l, top: m.t }}
          animate={{ y: [0, -16, 0], rotate: [0, 25, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: m.d }}
        >
          <Marigold size={m.s} />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="eyebrow text-marigold-600">The Festival of Gold</p>
          <h2 className="mt-2 bg-marigold-sheen shimmer-text font-script text-5xl sm:text-7xl">
            Haldi Night
          </h2>
          <p className="mt-2 font-serif text-lg italic text-ink/60">
            {e.tagline}
          </p>
        </Reveal>

        <Ornament className="my-8" color="#ea8c0a" />

        <Reveal from="scale">
          <div className="glass-gold mx-auto max-w-xl px-7 py-9">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="font-body text-sm uppercase tracking-[0.25em] text-marigold-600">
                {e.day} Evening
              </p>
              <p className="font-display text-6xl font-bold text-marigold-700">
                13
              </p>
              <p className="font-display text-xl text-saffron-600">
                August 2026
              </p>
              <p className="mt-2 font-serif text-lg text-ink/70">
                {e.time} · {e.note}
              </p>
              <p className="mt-3 flex items-center justify-center gap-1.5 font-serif text-base text-saffron-700">
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

            <Link href="/haldi" className="btn-glossy btn-gold mt-7">
              Enter the Haldi Page
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}

export function Marigold({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className="drop-shadow">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="24"
          cy="11"
          rx="5"
          ry="9"
          fill="#f59e0b"
          opacity="0.85"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
      {[22, 67, 112, 157, 202, 247, 292, 337].map((deg) => (
        <ellipse
          key={deg}
          cx="24"
          cy="14"
          rx="4"
          ry="8"
          fill="#fbbf24"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r="6" fill="#ea8c0a" />
      <circle cx="24" cy="24" r="3" fill="#c2700b" />
    </svg>
  );
}
