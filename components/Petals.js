"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PALETTES = {
  rose: ["#f7a8c4", "#f072a3", "#fbcfe0", "#e34985", "#ffd9e6"],
  marigold: ["#fbbf24", "#f59e0b", "#fde68a", "#fb923c", "#fcd34d"],
};

// A petal teardrop shape rendered with CSS border-radius.
function Petal({ color, size }) {
  return (
    <span
      style={{
        width: size,
        height: size * 1.15,
        background: `radial-gradient(circle at 30% 30%, #ffffff88, ${color})`,
        borderRadius: "0 100% 0 100% / 0 100% 0 100%",
        display: "block",
        boxShadow: `0 2px 6px ${color}55`,
      }}
    />
  );
}

export default function Petals({ variant = "rose", count = 16 }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const colors = PALETTES[variant] || PALETTES.rose;
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 16,
      duration: 9 + Math.random() * 11,
      delay: -Math.random() * 18,
      drift: (Math.random() - 0.5) * 120,
      rotate: Math.random() * 360,
      color: colors[i % colors.length],
      opacity: 0.45 + Math.random() * 0.45,
    }));
    setPetals(items);
  }, [variant, count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
    >
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-8%]"
          style={{ left: `${p.left}%`, opacity: p.opacity }}
          initial={{ y: "-10vh", x: 0, rotate: p.rotate }}
          animate={{
            y: "115vh",
            x: [0, p.drift, -p.drift * 0.6, p.drift * 0.3, 0],
            rotate: p.rotate + 360,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Petal color={p.color} size={p.size} />
        </motion.div>
      ))}
    </div>
  );
}
