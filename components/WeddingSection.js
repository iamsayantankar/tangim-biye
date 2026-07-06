"use client";

import { motion } from "framer-motion";
import { events, venue, invite } from "@/lib/data";
import Reveal from "./Reveal";
import Ornament from "./Ornament";

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

      <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-2">
        {/* portrait of the couple */}
        <Reveal from="scale">
          <figure className="group relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border-[5px] border-rose-200 shadow-[0_30px_75px_-28px_rgba(207,43,107,0.6)]">
            <span className="pointer-events-none absolute inset-0 z-10 rounded-[calc(2rem-5px)] ring-1 ring-inset ring-white/40" />
            <img
              src="/img/marriage.webp"
              alt="Nowrin & Azahar — the wedding"
              width="1024"
              height="1536"
              loading="lazy"
              className="block w-full transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
          </figure>
        </Reveal>

        {/* details */}
        <Reveal from="up">
          <div className="glass relative overflow-hidden px-7 py-9 text-center">
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-12 bg-white/40 blur-xl"
              animate={{ x: ["0%", "400%"] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 3 }}
            />
            <p className="font-body text-sm uppercase tracking-[0.25em] text-rose-500">
              {e.day}
            </p>
            <p className="my-1 font-display text-7xl font-bold text-rose-700">
              14
            </p>
            <p className="font-display text-xl text-rose-800">August 2026</p>

            <div className="mx-auto my-4 h-px w-16 bg-rose-200" />

            <p className="flex items-center justify-center gap-2 font-serif text-lg text-ink/75">
              <Clock />
              {e.time}
            </p>
            <p className="mt-2 flex items-start justify-center gap-2 font-serif text-lg leading-snug text-ink/75">
              <Pin />
              <span>
                <span className="font-semibold text-rose-800">{venue.name}</span>
                <br />
                {venue.lines[1]}
              </span>
            </p>
            <a href="#venue" className="btn-glossy mt-5 !px-6 !py-2.5 text-xs">
              View Venue &amp; Map
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="mx-auto mt-10 max-w-2xl border-t border-rose-100 pt-6 text-center font-serif italic text-ink/60">
          {invite.honour}
        </p>
      </Reveal>
    </section>
  );
}

function Clock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-rose-500">
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
