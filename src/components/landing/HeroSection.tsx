"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { heroImages } from "@/lib/data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  // Cross-fade every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background cross-fade layers */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 transition-opacity duration-[2000ms] ease-in-out",
            i === activeIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition-transform duration-[8000ms] ease-out",
              i === activeIndex ? "scale-110" : "scale-100"
            )}
          />
        </div>
      ))}

      {/* Dark editorial overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs font-medium text-gold tracking-wide">
            {t("hero.badge")}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight">
          {t("hero.title1")}
          <br />
          <span className="text-gold italic">{t("hero.title2")}</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed">
          {t("hero.desc")}
        </p>

        {/* Spec badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["Fade", "Waves", "Beard Sculpt"].map((tag) => (
            <span
              key={tag}
              className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gold/80 border border-gold/20 rounded-full px-3 py-1 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/booking"
            className="group bg-gold text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light transition-all flex items-center gap-2 shadow-lg shadow-gold/20"
          >
            {t("hero.cta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#signatures"
            className="text-foreground/70 hover:text-foreground transition-colors px-6 py-4 text-lg underline-offset-4 hover:underline"
          >
            {t("hero.see_services")}
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="ml-1 text-foreground/80">5.0</span>
          </div>
          <span className="w-px h-4 bg-border" />
          <span>{t("hero.cuts_done")}</span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span className="hidden sm:inline">{t("hero.home_studio")}</span>
        </div>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                i === activeIndex ? "w-10 bg-gold" : "w-4 bg-gold/30 hover:bg-gold/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
