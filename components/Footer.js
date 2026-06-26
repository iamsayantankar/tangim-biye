"use client";

import { motion } from "framer-motion";
import { lead, partner, credit, bengaliBlessing } from "@/lib/data";

export default function Footer({ accent = "rose" }) {
  const isGold = accent === "marigold";
  const name = isGold ? "text-marigold-700" : "text-rose-700";
  const grad = isGold
    ? "from-marigold-600 to-saffron-600"
    : "from-rose-500 to-rose-800";

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent to-white/40 px-5 pb-10 pt-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-current opacity-30" />
          <span className={`font-script text-4xl ${name}`}>
            {lead.initial} &amp; {partner.initial}
          </span>
          <span className="h-px w-12 bg-current opacity-30" />
        </div>

        <p className="font-serif text-xl italic text-ink/70">
          {bengaliBlessing}
        </p>
        <p className="mt-1 font-body text-sm text-ink/50">
          We can&apos;t wait to celebrate with you. JazakAllah Khair.
        </p>

        {/* The honoured credit */}
        <div className="mt-10">
          <motion.a
            href={credit.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group inline-flex flex-col items-center"
          >
            <span className="font-body text-[11px] uppercase tracking-[0.35em] text-ink/40">
              Designed &amp; Developed by
            </span>
            <span
              className={`mt-1 bg-gradient-to-r ${grad} bg-clip-text font-display text-2xl font-semibold text-transparent`}
            >
              {credit.name}
            </span>
            <span className="font-body text-sm text-ink/50 underline-offset-4 group-hover:underline">
              {credit.site}
            </span>
          </motion.a>
        </div>

        <p className="mt-8 font-body text-xs text-ink/30">
          © 2026 · Made with{" "}
          <span className={isGold ? "text-marigold-500" : "text-rose-500"}>
            ♥
          </span>{" "}
          for a beautiful union
        </p>
      </motion.div>
    </footer>
  );
}
