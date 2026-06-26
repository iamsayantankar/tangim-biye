"use client";

import { motion } from "framer-motion";
import { lead, partner } from "@/lib/data";
import Reveal from "./Reveal";
import Ornament from "./Ornament";

function PersonCard({ person, side }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="glass group flex-1 px-7 py-9 text-center"
    >
      {/* monogram medallion */}
      <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-300 to-rose-600 opacity-90 shadow-glow" />
        <span className="absolute inset-[3px] rounded-full bg-white/90" />
        <motion.span
          className="absolute inset-0 rounded-full border border-rose-300"
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
        <span className="relative font-script text-5xl text-rose-700">
          {person.initial}
        </span>
      </div>

      <p className="eyebrow text-rose-500">{person.role}</p>
      <h3 className="mt-1 font-display text-2xl font-semibold text-rose-900 sm:text-3xl">
        {person.name}
      </h3>

      <div className="mx-auto my-4 h-px w-16 bg-rose-200" />

      <p className="font-serif text-base text-ink/70">
        <span className="text-ink/45">Son/Daughter of</span>
        <br />
        <span className="text-lg font-medium text-rose-800">
          {person.father}
        </span>
        <br />
        <span className="text-ink/40">&amp;</span>
        <br />
        <span className="text-lg font-medium text-rose-800">
          {person.mother}
        </span>
      </p>

      <div className="mt-5 flex flex-col items-center gap-0.5 font-body text-sm text-ink/55">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="mb-1 text-rose-400"
        >
          <path
            d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {person.address.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Couple() {
  return (
    <section id="couple" className="relative section-pad">
      <Reveal className="text-center">
        <p className="eyebrow text-rose-500">With the blessings of Allah</p>
        <h2 className="mt-2 font-display text-3xl text-rose-900 sm:text-4xl">
          The Beautiful Souls
        </h2>
      </Reveal>

      <Ornament className="my-8" color="#cf2b6b" />

      <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-center">
        <PersonCard person={lead} side="left" />

        {/* connecting heart */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-glow"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21s-7-4.6-9.3-9C1 8.5 2.6 5 6 5c2 0 3.2 1.1 4 2.3C10.8 6.1 12 5 14 5c3.4 0 5 3.5 3.3 7-2.3 4.4-9.3 9-9.3 9Z" />
            </svg>
          </motion.div>
        </motion.div>

        <PersonCard person={partner} side="right" />
      </div>
    </section>
  );
}
