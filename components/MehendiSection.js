"use client";

import { motion } from "framer-motion";
import { events, haldiVenue } from "@/lib/data";
import Reveal from "./Reveal";
import Ornament from "./Ornament";

const FLOATERS = [
  { l: "9%", t: "18%", s: 30, d: 0 },
  { l: "87%", t: "22%", s: 24, d: 1 },
  { l: "13%", t: "80%", s: 22, d: 2 },
  { l: "85%", t: "82%", s: 28, d: 0.5 },
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

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="eyebrow text-mehendi-700">The Henna Night</p>
          <h2 className="mt-2 bg-mehendi-sheen shimmer-text font-script text-5xl sm:text-7xl">
            Mehendi Night
          </h2>
          <p className="mt-2 font-serif text-lg italic text-ink/60">
            {e.tagline}
          </p>
        </Reveal>

        <Reveal from="scale" className="mt-8">
          <figure className="group relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border-[5px] border-mehendi-200 shadow-[0_30px_75px_-28px_rgba(86,90,31,0.6)]">
            <span className="pointer-events-none absolute inset-0 z-10 rounded-[calc(2rem-5px)] ring-1 ring-inset ring-white/40" />
            <img
              src="/img/mehendi.webp"
              alt="Mehendi Night of Nowrin & Azahar"
              width="1536"
              height="1024"
              loading="lazy"
              className="block w-full transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
          </figure>
        </Reveal>

        <Ornament className="my-8" color="#565a1f" />

        <Reveal>
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-mehendi-300/70 bg-white/60 px-6 py-7 shadow-[0_18px_50px_-18px_rgba(86,90,31,0.4)] backdrop-blur-xl">
            <div className="grid gap-5 text-center sm:grid-cols-3 sm:divide-x sm:divide-mehendi-200">
              <div>
                <p className="eyebrow text-mehendi-600">When</p>
                <p className="mt-1 font-display text-2xl text-mehendi-700">
                  {e.day}
                </p>
                <p className="font-serif text-ink/70">13 August 2026</p>
              </div>
              <div>
                <p className="eyebrow text-mehendi-600">Time</p>
                <p className="mt-1 font-display text-2xl text-mehendi-700">
                  Night
                </p>
                <p className="font-serif text-ink/70">{e.time}</p>
              </div>
              <div>
                <p className="eyebrow text-mehendi-600">Venue</p>
                <p className="mt-1 font-display text-2xl text-mehendi-700">
                  At Our Residence
                </p>
                <p className="font-serif text-ink/70">
                  {haldiVenue.lines[0]}, Midnapore
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
