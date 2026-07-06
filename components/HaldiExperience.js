"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { lead, partner, events, haldiVenue } from "@/lib/data";
import Petals from "./Petals";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import Footer from "./Footer";
import { Marigold } from "./HaldiSection";

const RITUALS = [
  {
    title: "Turmeric Touch",
    desc: "Golden haldi paste blessed by loved ones for a radiant glow.",
    icon: "✦",
  },
  {
    title: "Dhol & Dance",
    desc: "Beats, claps and joyful dance till the night sparkles.",
    icon: "♪",
  },
  {
    title: "Marigold Magic",
    desc: "A décor drenched in marigold, sunshine and laughter.",
    icon: "❀",
  },
  {
    title: "Feast of Joy",
    desc: "Sweet treats and warm food shared among family.",
    icon: "✿",
  },
];

export default function HaldiExperience() {
  const e = events.haldi;

  return (
    <div className="min-h-screen vignette-gold">
      <Petals variant="marigold" count={18} />

      {/* top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 font-body text-sm font-medium text-marigold-700 backdrop-blur transition hover:bg-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5m0 0l6 6m-6-6l6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Back to Wedding
        </Link>
        <span className="font-script text-2xl text-marigold-700 sm:text-3xl">
          {lead.initial} &amp; {partner.initial}
        </span>
      </div>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5">
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
          style={{
            background:
              "conic-gradient(from 0deg,#fde68a,#fbbf24,#fff7d6,#f59e0b,#fde68a)",
            filter: "blur(60px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* big floating sun-marigold */}
        <motion.div
          className="absolute right-[8%] top-[18%] hidden sm:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Marigold size={120} />
        </motion.div>
        <motion.div
          className="absolute left-[6%] bottom-[14%]"
          animate={{ rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          <Marigold size={70} />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.p
            className="eyebrow text-marigold-600"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            You are invited to the
          </motion.p>

          <motion.h1
            className="mt-2 bg-marigold-sheen shimmer-text font-script text-7xl leading-none sm:text-9xl"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            Haldi
          </motion.h1>

          <motion.p
            className="mt-3 font-display text-2xl text-saffron-600 sm:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {lead.short} <span className="text-marigold-500">&amp;</span>{" "}
            {partner.short}
          </motion.p>

          <motion.div
            className="mx-auto mt-7 flex max-w-md items-center justify-center gap-4 text-marigold-700"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-marigold-300" />
            <span className="font-display text-lg tracking-[0.2em]">
              13 · 08 · 2026
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-marigold-300" />
          </motion.div>
          <motion.p
            className="mt-2 font-serif text-lg italic text-ink/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {e.day} Evening · {e.tagline}
          </motion.p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="section-pad">
        <Reveal className="text-center">
          <p className="eyebrow text-marigold-600">Save the evening</p>
          <h2 className="mt-2 font-display text-3xl text-saffron-700 sm:text-4xl">
            A Night Painted in Gold
          </h2>
        </Reveal>

        <Ornament className="my-8" color="#ea8c0a" />

        <Reveal from="scale">
          <div className="glass-gold mx-auto max-w-2xl px-8 py-10 text-center">
            <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-marigold-200">
              <div>
                <p className="eyebrow text-marigold-600">When</p>
                <p className="mt-2 font-display text-2xl text-saffron-700">
                  {e.day}
                </p>
                <p className="font-serif text-lg text-ink/70">{e.date}</p>
              </div>
              <div>
                <p className="eyebrow text-marigold-600">Time</p>
                <p className="mt-2 font-display text-2xl text-saffron-700">
                  Evening
                </p>
                <p className="font-serif text-lg text-ink/70">{e.time}</p>
              </div>
              <div>
                <p className="eyebrow text-marigold-600">Dress Code</p>
                <p className="mt-2 font-display text-2xl text-saffron-700">
                  Shades of
                </p>
                <p className="font-serif text-lg text-ink/70">
                  Yellow &amp; Gold
                </p>
              </div>
            </div>

            {/* Venue — held at the family's own residence */}
            <div className="mt-7 flex flex-col items-center gap-1 border-t border-marigold-100 pt-6">
              <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-marigold-300 to-saffron-500 text-white shadow-glow-gold">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 11.2 12 4l9 7.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 9.8V20h13V9.8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 20v-5h4v5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="eyebrow text-marigold-600">Venue</p>
              <p className="font-display text-2xl text-saffron-700">
                {haldiVenue.name}
              </p>
              <p className="mt-1 font-serif text-lg leading-snug text-ink/70">
                {haldiVenue.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </div>

            <p className="mt-6 font-serif italic text-ink/60">
              Come wrapped in sunshine — let&apos;s fill the evening with
              turmeric, music and endless smiles.
            </p>
          </div>
        </Reveal>
      </section>

      {/* RITUALS */}
      <section className="section-pad pt-0">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl text-saffron-700 sm:text-4xl">
            What Awaits You
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {RITUALS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="glass-gold flex flex-col items-center px-4 py-7 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-marigold-300 to-saffron-500 text-2xl text-white shadow-glow-gold">
                {r.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-saffron-700">
                {r.title}
              </h3>
              <p className="mt-1 font-body text-sm text-ink/60">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* closing */}
      <section className="section-pad pt-0 text-center">
        <Ornament className="mb-8" color="#ea8c0a" />
        <Reveal>
          <p className="font-script text-4xl text-saffron-600 sm:text-5xl">
            Let&apos;s celebrate together
          </p>
          <Link href="/" className="btn-glossy mt-8">
            See the Wedding Details
          </Link>
        </Reveal>
      </section>

      <Footer accent="marigold" />
    </div>
  );
}
