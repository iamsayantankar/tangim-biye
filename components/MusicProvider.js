"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import { musicSrc } from "@/lib/data";
import MusicPlayer from "./MusicPlayer";
import ContactButton from "./ContactButton";

const MusicContext = createContext(null);
export const useMusic = () => useContext(MusicContext);

const TARGET_VOL = 0.5;

export default function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const pathname = usePathname();
  const accent = pathname && pathname.startsWith("/haldi") ? "marigold" : "rose";

  // Gentle fade-in so the music doesn't burst in abruptly.
  const fadeIn = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (fadeRef.current) clearInterval(fadeRef.current);
    a.volume = 0;
    fadeRef.current = setInterval(() => {
      const next = Math.min(TARGET_VOL, a.volume + 0.04);
      a.volume = next;
      if (next >= TARGET_VOL) {
        clearInterval(fadeRef.current);
        fadeRef.current = null;
      }
    }, 60);
  }, []);

  const play = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    const p = a.play();
    if (p && p.then) {
      p.then(() => {
        setPlaying(true);
        fadeIn();
      }).catch(() => setPlaying(false)); // blocked until a gesture — that's fine
    }
  }, [fadeIn]);

  const toggle = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) play();
    else {
      a.pause();
      setPlaying(false);
    }
  }, [play]);

  // Try once on mount (usually blocked), then on the very first user
  // gesture anywhere — so it starts the moment the guest interacts.
  useEffect(() => {
    play();
    const start = () => {
      play();
      remove();
    };
    const events = ["pointerdown", "touchstart", "keydown", "click"];
    const remove = () =>
      events.forEach((e) => document.removeEventListener(e, start));
    events.forEach((e) => document.addEventListener(e, start, { passive: true }));
    return remove;
  }, [play]);

  // Keep the button in sync if playback state changes for any reason.
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    // Safety net: if the `loop` attribute is ever dropped, restart manually
    // so the music keeps playing endlessly.
    const onEnded = () => {
      a.currentTime = 0;
      a.play().catch(() => {});
    };
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("ended", onEnded);
    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <MusicContext.Provider value={{ playing, play, toggle }}>
      <audio ref={audioRef} src={musicSrc} loop preload="auto" />
      {children}
      <ContactButton />
      <MusicPlayer playing={playing} onToggle={toggle} accent={accent} />
    </MusicContext.Provider>
  );
}
