"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Music, Music2, SkipForward } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "ic-music-on";
const TRACK_KEY = "ic-music-idx";

// Editorial credits
// 1. "Mellow Smooth Jazz Relaxing Acoustic Guitar" — Denis Pavlov (Pixabay)
// 2. "Background Jazz - Golden Whisper" — Music For Creators (Pixabay)
const TRACKS = [
  { src: "/music/ambient.mp3", title: "Mellow Smooth Jazz" },
  { src: "/music/alt.mp3", title: "Golden Whisper" },
];

export function MusicToggle() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [idx, setIdx] = useState(0);

  const isFocusPage =
    pathname?.startsWith("/booking") || pathname?.startsWith("/shop");

  // Restore state on mount (autoplay still requires user gesture, so we just stage it)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedIdx = parseInt(localStorage.getItem(TRACK_KEY) || "0", 10);
    if (!Number.isNaN(savedIdx) && savedIdx >= 0 && savedIdx < TRACKS.length) {
      setIdx(savedIdx);
    }
    if (localStorage.getItem(STORAGE_KEY) === "1") {
      tryPlay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When idx changes while playing, swap source and continue
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.src = TRACKS[idx].src;
    localStorage.setItem(TRACK_KEY, String(idx));
    if (playing) {
      a.play().catch(() => setPlaying(false));
    }
  }, [idx, playing]);

  function tryPlay() {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.35;
    if (!a.src) a.src = TRACKS[idx].src;
    a.play()
      .then(() => {
        setPlaying(true);
        localStorage.setItem(STORAGE_KEY, "1");
      })
      .catch(() => setPlaying(false));
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

  function nextTrack() {
    setIdx((i) => (i + 1) % TRACKS.length);
  }

  if (isFocusPage) return null;

  return (
    <>
      <audio ref={audioRef} loop preload="none" />
      <div className="fixed bottom-5 left-5 md:bottom-8 md:left-8 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play ambient music"}
          title={playing ? `${TRACKS[idx].title} — couper` : "Lancer l'ambiance"}
          className={cn(
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

        {playing && (
          <button
            type="button"
            onClick={nextTrack}
            aria-label="Next track"
            title={`Passer à : ${TRACKS[(idx + 1) % TRACKS.length].title}`}
            className={cn(
              "w-9 h-9 md:w-10 md:h-10 rounded-full",
              "flex items-center justify-center",
              "border border-border bg-background/70 backdrop-blur-md",
              "text-muted hover:text-gold hover:border-gold/50 transition-all",
              "animate-fade-up"
            )}
          >
            <SkipForward className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>
        )}
      </div>
    </>
  );
}
