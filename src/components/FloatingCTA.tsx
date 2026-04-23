"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-context";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  // Hide on the booking page itself
  const isBookingPage = pathname?.startsWith("/booking");

  useEffect(() => {
    if (isBookingPage) return;
    const handler = () => {
      // Show after scrolling past the hero (roughly one viewport)
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isBookingPage]);

  if (isBookingPage) return null;

  return (
    <Link
      href="/booking"
      className={cn(
        "fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 group",
        "bg-gold text-background rounded-full shadow-lg shadow-gold/30",
        "flex items-center gap-2 font-semibold",
        "transition-all duration-500",
        "hover:bg-gold-light hover:scale-105",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
        "px-5 py-3 text-sm md:px-6 md:py-3.5 md:text-base"
      )}
    >
      <span>{t("nav.book")}</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
    </Link>
  );
}
