"use client";

import { motion } from "framer-motion";
import { lead, partner, credit, invite, contact } from "@/lib/data";

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

        <p className="mx-auto max-w-xl font-serif text-xl italic text-ink/70">
          {invite.memorable}
        </p>
        <p className="mt-1 font-body text-sm text-ink/50">
          We can&apos;t wait to celebrate with you. JazakAllah Khair.
        </p>

        {/* With best compliments from (the bride's family) */}
        <div className="mt-8">
          <p className="eyebrow text-ink/40">{invite.complimentsLabel}</p>
          <p className={`mt-2 font-display text-lg ${name}`}>
            {invite.compliments.join(" · ")}
          </p>
        </div>

        {/* Contact / RSVP */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="eyebrow text-ink/40">For invitations &amp; queries</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${contact.tel}`}
              className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 font-body text-sm font-medium text-rose-700 transition hover:bg-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z" />
              </svg>
              {contact.display}
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                contact.message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-body text-sm font-medium text-white transition hover:brightness-110"
              style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
            >
              <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L.6 31.5l7.9-2.1c2.2 1.2 4.7 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5Zm7.1 18.2c-.4-.2-2.3-1.1-2.6-1.3-.3-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.4 3.6 1.5 3.9c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.2.7-.1 2.3-.9 2.6-1.9.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.7-.4Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

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
