"use client";

import { motion } from "framer-motion";
import { venue } from "@/lib/data";
import Reveal from "./Reveal";
import Ornament from "./Ornament";

export default function Venue() {
  return (
    <section id="venue" className="relative section-pad">
      <Reveal className="text-center">
        <p className="eyebrow text-rose-500">Find your way to us</p>
        <h2 className="mt-2 font-display text-3xl text-rose-900 sm:text-4xl">
          The Venue
        </h2>
      </Reveal>

      <Ornament className="my-8" color="#cf2b6b" />

      <div className="grid items-stretch gap-7 md:grid-cols-2">
        {/* details */}
        <Reveal from="right" className="flex">
          <div className="glass flex w-full flex-col justify-center px-8 py-10 text-center md:text-left">
            <motion.div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-glow md:mx-0"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </motion.div>

            <h3 className="font-display text-2xl font-semibold text-rose-900">
              {venue.name}
            </h3>
            <div className="mt-3 space-y-1 font-serif text-lg text-ink/70">
              {venue.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>

            <a
              href={venue.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glossy mt-7 self-center md:self-start"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </Reveal>

        {/* map */}
        <Reveal from="left" className="flex">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass w-full overflow-hidden p-2"
          >
            <iframe
              title="Venue location"
              src={venue.mapsEmbed}
              className="h-[320px] w-full rounded-[1.6rem] md:h-full"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
