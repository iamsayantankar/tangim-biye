# 💍 Azahar & Nowrin — Wedding & Haldi Invitation

A modern, animated, glossy invitation website built with **Next.js 14**,
**Tailwind CSS** and **Framer Motion**.

- 🌸 **Wedding** — rose / rose-gold themed (14ᵗʰ August 2026)
- 🌼 **Haldi** — marigold / golden themed (13ᵗʰ August 2026, evening) at `/haldi`
- ✨ Animated script fonts, glossy glass cards, falling petals, live countdown
- 🎵 Optional background music (tap "Open Invitation" to start)
- 📍 Live Google Map of **Parinoy The Banquet, Midnapore**
- 📱 Fully responsive

## Run it locally

```bash
npm install      # already done
npm run dev      # start dev server → http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Background music 🎵

The track `public/bgmusic.mp3` plays automatically the moment a guest taps
**"Open Invitation"**, and keeps playing seamlessly across both pages.
A floating button (bottom-right) lets them mute/unmute. To swap the song,
replace that file (or change `musicSrc` in `lib/data.js`).

## Edit the details ✏️

**Everything** (names, parents, dates, venue, blessings) lives in one file:

```
lib/data.js
```

Change it there and the whole site updates.

## Deploy

This is a standard Next.js app. Deploy free on **Vercel** or **Netlify**:

- **Vercel:** import the repo → it just works.
- **Netlify:** build command `npm run build`, uses the Next.js runtime.

---

Designed & developed by **Sayantan Kar** · [sayantankar.com](https://sayantankar.com)
# tangim-biye
