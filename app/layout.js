import "./globals.css";
import {
  Akronim,
  Playfair_Display,
  Cormorant_Garamond,
  Jost,
  Amiri,
} from "next/font/google";
import MusicProvider from "@/components/MusicProvider";

// Decorative script used for the couple's names, monogram & headings.
const script = Akronim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const display = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const body = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const arabic = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata = {
  title: "Nowrin & Azahar · Wedding Invitation",
  description:
    "With joyful hearts, we invite you to the Haldi celebration and the Wedding of Nowrin Aktar & Sk Azahar Ali — 13th & 14th August 2026.",
  keywords: ["wedding", "haldi", "invitation", "Nowrin", "Azahar"],
  openGraph: {
    title: "Nowrin & Azahar · Wedding Invitation",
    description:
      "You are warmly invited to celebrate the union of Nowrin & Azahar — 14th August 2026.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#cf2b6b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${script.variable} ${display.variable} ${serif.variable} ${body.variable} ${arabic.variable}`}
    >
      <body>
        <MusicProvider>{children}</MusicProvider>
      </body>
    </html>
  );
}
