"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { lead, partner } from "@/lib/data";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Couple", href: "#couple" },
  { label: "Haldi", href: "#haldi" },
  { label: "Mehendi", href: "#mehendi" },
  { label: "Wedding", href: "#wedding" },
  { label: "Venue", href: "#venue" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/50 bg-white/70 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="#home"
          className="font-script text-2xl text-rose-700 sm:text-3xl"
        >
          {lead.initial} &amp; {partner.initial}
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative font-body text-sm font-medium text-ink/80 transition-colors hover:text-rose-600 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-rose-500 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/haldi" className="btn-glossy btn-gold !px-5 !py-2">
              Haldi Page
            </Link>
          </li>
        </ul>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-rose-700 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden bg-white/90 backdrop-blur-xl md:hidden"
      >
        <ul className="flex flex-col gap-1 px-6 py-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-body text-ink/80"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/haldi"
              onClick={() => setOpen(false)}
              className="block py-2 font-body font-semibold text-marigold-600"
            >
              Haldi Page →
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
