"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Music, Music2 } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "ic-music-on";
const TRACK_SRC = "/music/ambient.mp3";

export function MusicToggle() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  // Hide on focus pages
  const isFocusPage =
    pathname?.startsWith("/booking") || pathname?.startsWith("/shop");

  // Restore previous state — but browser will block autoplay until user clicks
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY) === "1") {
      // We can't autoplay here — but we'll attempt it; if it fails, user has to click again
      tryPlay();
    }
  }, []);

  function tryPlay() {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.35;
    a.play()
      .then(() => {
        setPlaying(true);
        localStorage.setItem(STORAGE_KEY, "1");
      })
      .catch(() => {
        // Autoplay blocked or file 404 — leave UI in off state
        setPlaying(false);
      });
  }

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
      localStorage.setItem(STORAGE_KEY, "0");
    } else {
      tryPlay();
    }
  }

  if (isFocusPage || !available) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACK_SRC}
        loop
        preload="none"
        onError={() => setAvailable(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play ambient music"}
        title={playing ? "Couper l'ambiance" : "Lancer l'ambiance sonore"}
        className={cn(
          "fixed bottom-5 left-5 md:bottom-8 md:left-8 z-40",
          "w-11 h-11 md:w-12 md:h-12 rounded-full",
          "flex items-center justify-center",
          "border backdrop-blur-md transition-all",
          playing
            ? "bg-gold/90 border-gold text-background shadow-lg shadow-gold/30 hover:bg-gold-light"
            : "bg-background/70 border-border text-muted hover:text-gold hover:border-gold/50"
        )}
      >
        {playing ? (
          <Music2 className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
        ) : (
          <Music className="w-4 h-4 md:w-5 md:h-5" />
        )}
      </button>
    </>
  );
}
