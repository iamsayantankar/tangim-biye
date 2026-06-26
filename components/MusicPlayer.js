"use client";

import { motion, AnimatePresence } from "framer-motion";

// Presentational floating control. The <audio> element and play/pause
// logic live in the parent experience so music survives across sections.
export default function MusicPlayer({ playing, onToggle, accent = "rose" }) {
  const ring =
    accent === "marigold" ? "rgba(245,158,11,0.55)" : "rgba(207,43,107,0.5)";
  const grad =
    accent === "marigold"
      ? "linear-gradient(135deg,#fbbf24,#ea8c0a)"
      : "linear-gradient(135deg,#f072a3,#ad1d56)";

  return (
    <motion.button
      onClick={onToggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
      style={{ background: grad, boxShadow: `0 8px 26px -6px ${ring}` }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {/* pulsing rings while playing */}
      <AnimatePresence>
        {playing && (
          <>
            <span
              className="absolute inset-0 rounded-full animate-pulse-ring"
              style={{ border: `2px solid ${ring}` }}
            />
            <span
              className="absolute inset-0 rounded-full animate-pulse-ring"
              style={{ border: `2px solid ${ring}`, animationDelay: "1.2s" }}
            />
          </>
        )}
      </AnimatePresence>

      {playing ? (
        // animated equalizer bars
        <span className="flex items-end gap-[3px]" style={{ height: 18 }}>
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-white"
              animate={{ height: [6, 16, 9, 18, 6] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </span>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 6.5v11c0 1-1.1 1.6-1.9 1L3 16.2c-.6-.4-1-1.1-1-1.8V9.6c0-.7.4-1.4 1-1.8L7.1 5.5c.8-.6 1.9 0 1.9 1Z" />
          <path d="M13 7.5a1 1 0 0 1 1.5-.86 6 6 0 0 1 0 10.72A1 1 0 0 1 13 16.5a1 1 0 0 1 .5-.86 4 4 0 0 0 0-7.28A1 1 0 0 1 13 7.5Z" />
        </svg>
      )}
    </motion.button>
  );
}
