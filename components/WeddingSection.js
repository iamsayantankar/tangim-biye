"use client";

import { motion } from "framer-motion";
import { events, venue, invite } from "@/lib/data";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import { CoupleFigure } from "./Illustrations";

export default function WeddingSection() {
  const e = events.wedding;
  return (
    <section id="wedding" className="relative section-pad">
      <Reveal className="text-center">
        <p className="eyebrow text-rose-500">The Main Celebration</p>
        <h2 className="mt-2 bg-rose-sheen shimmer-text font-script text-5xl sm:text-7xl">
          The Wedding
        </h2>
        <p className="mt-2 font-serif text-lg italic text-ink/60">
          {e.tagline}
        </p>
      </Reveal>

      <Ornament className="my-8" color="#cf2b6b" />

      <Reveal from="scale">
        <div className="glass relative mx-auto max-w-3xl overflow-hidden px-7 py-10 sm:px-12">
          {/* glossy sheen sweep */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-12 bg-white/40 blur-xl"
            animate={{ x: ["0%", "400%"] }}
            transition={{ duration: 6, repeat: Infinity, repeatDelay: 3 }}
          />

          <motion.div
            className="relative mx-auto mb-4 w-36 sm:w-44"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <CoupleFigure className="h-full w-full" />
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            {/* Date */}
            <div className="text-center">
              <p className="font-body text-sm uppercase tracking-[0.25em] text-rose-500">
                {e.day}
              </p>
              <p className="my-1 font-display text-6xl font-bold text-rose-700">
                14
              </p>
              <p className="font-display text-xl text-rose-800">August 2026</p>
            </div>

            <div className="mx-auto hidden h-24 w-px bg-rose-200 sm:block" />

            {/* Time + venue */}
            <div className="space-y-4 text-center sm:text-left">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Clock />
                <span className="font-serif text-lg text-ink/75">{e.time}</span>
              </div>
              <div className="flex items-start justify-center gap-2 sm:justify-start">
                <Pin />
                <span className="font-serif text-lg leading-snug text-ink/75">
                  <span className="font-semibold text-rose-800">
                    {venue.name}
                  </span>
                  <br />
                  {venue.lines[1]}
                </span>
              </div>
              <a
                href="#venue"
                className="btn-glossy mt-2 !px-6 !py-2.5 text-xs"
              >
                View Venue & Map
              </a>
            </div>
          </div>

          <p className="mt-8 border-t border-rose-100 pt-5 text-center font-serif italic text-ink/60">
            {invite.honour}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Clock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-rose-500">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function Pin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-1 shrink-0 text-rose-500">
      <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
