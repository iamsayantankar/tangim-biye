"use client";

import { motion } from "framer-motion";

// An elegant animated divider: a center bloom flanked by tapering vines.
export default function Ornament({ color = "#cf2b6b", className = "" }) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-3 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <svg width="90" height="20" viewBox="0 0 90 20" fill="none">
        <path
          d="M2 10 C 25 10, 35 3, 60 10 C 70 13, 80 10, 88 10"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="60" cy="10" r="2" fill={color} opacity="0.6" />
        <circle cx="40" cy="8" r="1.4" fill={color} opacity="0.45" />
      </svg>

      <motion.svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="12"
            cy="6"
            rx="2.6"
            ry="5"
            fill={color}
            opacity="0.55"
            transform={`rotate(${deg} 12 12)`}
          />
        ))}
        <circle cx="12" cy="12" r="2.4" fill="#fff" opacity="0.9" />
      </motion.svg>

      <svg width="90" height="20" viewBox="0 0 90 20" fill="none">
        <path
          d="M88 10 C 65 10, 55 3, 30 10 C 20 13, 10 10, 2 10"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="30" cy="10" r="2" fill={color} opacity="0.6" />
        <circle cx="50" cy="8" r="1.4" fill={color} opacity="0.45" />
      </svg>
    </motion.div>
  );
}
