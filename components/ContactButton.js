"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/data";

// Floating WhatsApp / RSVP button — bottom-left corner (music sits bottom-right).
export default function ContactButton() {
  const href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    contact.message
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contact us on WhatsApp ${contact.display}`}
      className="group fixed bottom-5 left-5 z-50 flex h-14 items-center rounded-full text-white shadow-lg"
      style={{
        background: "linear-gradient(135deg,#25D366,#128C7E)",
        boxShadow: "0 8px 26px -6px rgba(18,140,126,0.55)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04 }}
    >
      {/* attention pulse */}
      <span
        className="absolute left-0 top-0 h-14 w-14 rounded-full animate-pulse-ring"
        style={{ border: "2px solid rgba(37,211,102,0.5)" }}
      />
      <span className="flex h-14 w-14 flex-none items-center justify-center">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L.6 31.5l7.9-2.1c2.2 1.2 4.7 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5Zm0 28.2c-2.5 0-4.8-.7-6.8-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.6 20.5 3 18.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.7-13 12.7Zm7.1-9.5c-.4-.2-2.3-1.1-2.6-1.3-.3-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.4 3.6 1.5 3.9c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.2.7-.1 2.3-.9 2.6-1.9.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.7-.4Z" />
        </svg>
      </span>
      {/* label that slides open on hover (desktop) */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-300 group-hover:max-w-[140px] group-hover:pr-5">
        Contact / RSVP
      </span>
    </motion.a>
  );
}
