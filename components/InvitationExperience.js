"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { useMusic } from "./MusicProvider";
import Intro from "./Intro";
import Nav from "./Nav";
import Petals from "./Petals";
import Hero from "./Hero";
import Countdown from "./Countdown";
import Couple from "./Couple";
import WeddingSection from "./WeddingSection";
import HaldiSection from "./HaldiSection";
import Venue from "./Venue";
import Blessing from "./Blessing";
import Footer from "./Footer";

export default function InvitationExperience() {
  const music = useMusic();
  const [opened, setOpened] = useState(false);

  // Lock background scroll while the opening overlay is showing.
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const handleOpen = useCallback(() => {
    setOpened(true);
    music?.play(); // the tap is the user gesture that unlocks audio
  }, [music]);

  return (
    <>
      {/* The full invitation is always rendered — the intro simply
          overlays it and fades away on tap. */}
      <Petals variant="rose" count={16} />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <Countdown />
        <Couple />
        <WeddingSection />
        <HaldiSection />
        <Venue />
        <Blessing />
      </main>

      <Footer accent="rose" />

      <AnimatePresence>
        {!opened && <Intro key="intro" onOpen={handleOpen} accent="rose" />}
      </AnimatePresence>
    </>
  );
}
