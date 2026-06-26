"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingDateISO } from "@/lib/data";
import Reveal from "./Reveal";
import Ornament from "./Ornament";

function diff(target) {
  const total = target - Date.now();
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds, done: false };
}

export default function Countdown() {
  const target = new Date(weddingDateISO).getTime();
  const [time, setTime] = useState(null); // null on server → no mismatch

  useEffect(() => {
    setTime(diff(target));
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds },
  ];

  return (
    <section className="relative section-pad text-center">
      <Reveal>
        <p className="eyebrow text-rose-500">Counting every moment</p>
        <h2 className="mt-2 font-display text-3xl text-rose-900 sm:text-4xl">
          Until we say <span className="italic text-rose-600">Qubool Hai</span>
        </h2>
      </Reveal>

      <Ornament className="my-7" color="#cf2b6b" />

      {time?.done ? (
        <Reveal from="scale">
          <p className="font-script text-5xl text-rose-600">
            Today is the day! ♥
          </p>
        </Reveal>
      ) : (
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3 sm:gap-5">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 30, rotateX: -40 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="glass flex h-24 w-20 flex-col items-center justify-center sm:h-28 sm:w-24"
            >
              <span className="font-display text-3xl font-semibold text-rose-700 sm:text-4xl tabular-nums">
                {time == null ? "--" : String(u.value).padStart(2, "0")}
              </span>
              <span className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-ink/50">
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
