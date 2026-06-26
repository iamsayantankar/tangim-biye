"use client";

import { motion } from "framer-motion";
import { blessingQuote, bengaliBlessing } from "@/lib/data";
import Ornament from "./Ornament";

export default function Blessing() {
  return (
    <section className="relative section-pad text-center">
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/40 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.span
          className="font-script text-6xl text-rose-300"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          “
        </motion.span>
        <motion.blockquote
          className="-mt-6 font-serif text-2xl leading-relaxed text-rose-900 sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {blessingQuote.text}
        </motion.blockquote>
        <motion.cite
          className="mt-5 block font-body text-sm uppercase not-italic tracking-[0.3em] text-rose-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {blessingQuote.source}
        </motion.cite>

        <Ornament className="my-9" color="#cf2b6b" />

        <motion.p
          className="font-script text-3xl text-rose-600 sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {bengaliBlessing}
        </motion.p>
      </div>
    </section>
  );
}
