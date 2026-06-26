// ─────────────────────────────────────────────────────────────
//  All invitation content lives here. Edit this one file to
//  update names, dates, venue, music, etc. — nothing else.
// ─────────────────────────────────────────────────────────────

export const couple = {
  groom: {
    name: "Sk Azahar Ali",
    short: "Azahar",
    initial: "A",
    role: "The Groom",
    father: "Sk Aktar Ali",
    mother: "Gulsan Ara Khatun",
    address: [
      "Mahutpara, Abash",
      "P.O. Abash · P.S. Kotwali",
      "Dist. Paschim Medinipur",
    ],
  },
  bride: {
    name: "Nowrin Aktar",
    short: "Nowrin",
    initial: "N",
    role: "The Bride",
    father: "Sk Abdul Hakim",
    mother: "Najni Khatun",
    address: [
      "Aligunj",
      "P.O. Midnapore · P.S. Kotwali",
      "Dist. Paschim Medinipur",
    ],
  },
};

// This invitation is sent from the BRIDE's side, so her name leads
// everywhere (names, monograms, couple cards). Swap these to change order.
export const lead = couple.bride; // shown first
export const partner = couple.groom; // shown second

// Primary date used by the countdown timer (the wedding).
export const weddingDateISO = "2026-08-14T19:00:00+05:30";

export const events = {
  haldi: {
    name: "Haldi Ceremony",
    tagline: "An evening of turmeric, laughter & golden blessings",
    day: "Thursday",
    date: "13th August 2026",
    time: "Evening onwards",
    note: "A night drenched in marigold & joy",
  },
  wedding: {
    name: "The Wedding",
    tagline: "Two hearts, one beautiful beginning",
    day: "Friday",
    date: "14th August 2026",
    time: "From the evening, In sha Allah",
    note: "With the blessings of our families",
  },
};

// The Wedding venue (banquet hall).
export const venue = {
  name: "Parinoy The Banquet",
  lines: [
    "N.H-60, beside Indian Oil Pump",
    "Dharma, Habibpur, Midnapore",
    "West Bengal 721101",
  ],
  // The exact share link the family provided.
  mapsLink: "https://maps.app.goo.gl/6a6Fq5xfmqEdKKjC8",
  // Query-based embed (no API key required).
  mapsEmbed:
    "https://www.google.com/maps?q=Parinoy+The+Banquet+Habibpur+Midnapore+West+Bengal+721101&output=embed",
};

// The Haldi is held at the family's OWN residence — not the banquet hall.
export const haldiVenue = {
  name: "At Our Residence",
  bengali: "নিজ গৃহ ভবনে",
  lines: [
    "Aligunj",
    "P.O. Midnapore · P.S. Kotwali",
    "Dist. Paschim Medinipur",
  ],
};

export const bismillah = {
  arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
  meaning: "In the name of Allah, the Most Gracious, the Most Merciful",
};

export const bengaliBlessing = "আপনার শুভ উপস্থিতি আমাদের আনন্দকে পূর্ণতা দেবে";

export const blessingQuote = {
  text: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquillity, and He has put love and mercy between your hearts.",
  source: "— Surah Ar-Rum (30:21)",
};

// Background music — served from /public/bgmusic.mp3
export const musicSrc = "/bgmusic.mp3";

export const credit = {
  name: "Sayantan Kar",
  site: "sayantankar.com",
  url: "https://sayantankar.com",
};
