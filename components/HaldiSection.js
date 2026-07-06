"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { events, haldiVenue } from "@/lib/data";
import Reveal from "./Reveal";
import Ornament from "./Ornament";

const MARIGOLDS = [
  { l: "6%", t: "16%", s: 40, d: 0 },
  { l: "90%", t: "22%", s: 30, d: 1 },
  { l: "12%", t: "80%", s: 26, d: 2 },
  { l: "86%", t: "82%", s: 36, d: 0.5 },
];

export default function HaldiSection() {
  const e = events.haldi;
  return (
    <section
      id="haldi"
      className="relative overflow-hidden vignette-gold py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-1 h-24 bg-gradient-to-b from-cream to-transparent" />

      {MARIGOLDS.map((m, i) => (
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

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="eyebrow text-marigold-600">The Festival of Gold</p>
          <h2 className="mt-2 bg-marigold-sheen shimmer-text font-script text-5xl sm:text-7xl">
            Haldi Ceremony
          </h2>
          <p className="mt-2 font-serif text-lg italic text-ink/60">
            {e.tagline}
          </p>
        </Reveal>

        <Reveal from="scale" className="mt-8">
          <figure className="group relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border-[5px] border-marigold-200 shadow-[0_30px_75px_-28px_rgba(234,140,10,0.65)]">
            <span className="pointer-events-none absolute inset-0 z-10 rounded-[calc(2rem-5px)] ring-1 ring-inset ring-white/40" />
            <img
              src="/img/haldi.webp"
              alt="Haldi Ceremony of Nowrin & Azahar"
              width="1536"
              height="1024"
              loading="lazy"
              className="block w-full transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
          </figure>
        </Reveal>

        <Ornament className="my-8" color="#ea8c0a" />

        <Reveal>
          <div className="glass-gold mx-auto max-w-2xl px-6 py-7">
            <div className="grid gap-6 text-center sm:grid-cols-3 sm:divide-x sm:divide-marigold-200">
              <div>
                <p className="eyebrow text-marigold-600">Date</p>
                <p className="mt-2">
                  <span className="inline-block rounded-lg bg-marigold-100 px-3 py-1 font-display text-lg font-bold text-marigold-700 sm:text-xl">
                    13 August 2026
                  </span>
                </p>
                <p className="mt-1.5 font-serif text-sm text-ink/55">{e.day}</p>
              </div>
              <div>
                <p className="eyebrow text-marigold-600">Time</p>
                <p className="mt-2">
                  <span className="inline-block rounded-lg bg-marigold-100 px-3 py-1 font-display text-lg font-bold text-marigold-700 sm:text-xl">
                    7:00 PM
                  </span>
                </p>
                <p className="mt-1.5 font-serif text-sm text-ink/55">onwards</p>
              </div>
              <div>
                <p className="eyebrow text-marigold-600">Venue</p>
                <p className="mt-2 font-display text-xl font-semibold text-saffron-700">
                  At Our Residence
                </p>
                <p className="mt-1 font-serif text-sm text-ink/55">
                  {haldiVenue.lines[0]}, Midnapore
                </p>
              </div>
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
