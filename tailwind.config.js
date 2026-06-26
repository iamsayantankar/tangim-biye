/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"],
      },
      colors: {
        // Wedding — rose / rose-gold / blush
        rose: {
          50: "#fdf2f6",
          100: "#fce7ef",
          200: "#fbcfe0",
          300: "#f7a8c4",
          400: "#f072a3",
          500: "#e34985",
          600: "#cf2b6b",
          700: "#ad1d56",
          800: "#8f1c49",
          900: "#771b40",
        },
        gold: {
          100: "#f7eed8",
          200: "#eeddb0",
          300: "#e2c886",
          400: "#d4af6a",
          500: "#c69749",
          600: "#a87b39",
        },
        // Haldi — marigold / sunflower / saffron
        marigold: {
          50: "#fffbeb",
          100: "#fff3c4",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#ea8c0a",
          700: "#c2700b",
        },
        saffron: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        cream: "#fffaf3",
        ink: "#3b2a33",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(227, 73, 133, 0.45)",
        "glow-gold": "0 0 45px -8px rgba(245, 158, 11, 0.5)",
        glossy:
          "0 10px 40px -10px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        // Kept within readable tones (no white / near-white stops) so the
        // animated text never fades out against the light background.
        "rose-sheen":
          "linear-gradient(110deg, #8f1c49 0%, #cf2b6b 24%, #f072a3 45%, #cf2b6b 66%, #ad1d56 86%, #771b40 100%)",
        "gold-sheen":
          "linear-gradient(110deg, #a87b39 0%, #d4af6a 30%, #c69749 55%, #e2c886 75%, #a87b39 100%)",
        "marigold-sheen":
          "linear-gradient(110deg, #9a5808 0%, #c2700b 22%, #f59e0b 45%, #ea8c0a 66%, #c2700b 86%, #7a4606 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "80%,100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "bob": {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(3deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.2,0.6,0.4,1) infinite",
        bob: "bob 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
