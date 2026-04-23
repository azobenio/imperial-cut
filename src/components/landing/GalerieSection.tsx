"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { lookBook, type Category } from "@/lib/data";
import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const FILTERS: Array<"all" | Category> = [
  "all",
  "fade",
  "waves",
  "beard",
  "linework",
  "kids",
  "combo",
];

export function GalerieSection() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return lookBook;
    return lookBook.filter((img) => img.tags.includes(activeFilter));
  }, [activeFilter]);

  const openImage = filtered[openIndex ?? 0];

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (openIndex === null) return;
      const next = (openIndex + dir + filtered.length) % filtered.length;
      setOpenIndex(next);
    },
    [openIndex, filtered.length]
  );

  // Keyboard nav for lightbox
  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      else if (e.key === "ArrowRight") navigate(1);
      else if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIndex, navigate]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [openIndex]);

  return (
    <section id="galerie" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("gallery.tag")}
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mt-4 leading-tight">
            {t("gallery.title1")}
            <span className="text-gold italic">{t("gallery.title2")}</span>
          </h2>
          <p className="text-muted mt-5 max-w-lg mx-auto text-base md:text-lg">
            {t("gallery.desc")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "text-xs md:text-sm font-medium px-4 py-2 rounded-full border transition-all",
                activeFilter === f
                  ? "bg-gold text-background border-gold"
                  : "bg-transparent text-muted border-border hover:border-gold/40 hover:text-foreground"
              )}
            >
              {t(`filter.${f}` as TranslationKey)}
            </button>
          ))}
        </div>

        {/* Masonry grid - CSS columns for natural varied heights */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
          {filtered.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setOpenIndex(i)}
              className={cn(
                "relative mb-3 block w-full overflow-hidden rounded-2xl border border-border group cursor-zoom-in",
                img.aspect === "portrait" && "aspect-[3/4]",
                img.aspect === "landscape" && "aspect-[4/3]",
                (!img.aspect || img.aspect === "square") && "aspect-square"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-foreground">
                  {img.alt}
                </span>
                <span className="text-xs text-gold font-semibold flex items-center gap-1">
                  {t("gallery.book_this")}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Counter + Instagram link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-12">
          <span className="text-lg font-[family-name:var(--font-display)] text-gold italic">
            {t("gallery.cuts_count")}
          </span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <p className="text-sm text-muted">
            {t("gallery.more")}{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              className="text-gold hover:underline font-medium"
            >
              @imperialcut
            </a>
          </p>
        </div>
      </div>

      {/* Lightbox modal */}
      {openIndex !== null && openImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setOpenIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-light border border-border flex items-center justify-center hover:border-gold transition-colors z-10"
            aria-label={t("gallery.close")}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-light border border-border flex items-center justify-center hover:border-gold transition-colors z-10"
              aria-label={t("gallery.prev")}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next */}
          {filtered.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-light border border-border flex items-center justify-center hover:border-gold transition-colors z-10"
              aria-label={t("gallery.next")}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Content */}
          <div
            className="relative flex flex-col items-center gap-6 max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[70vh] aspect-[4/5] md:aspect-[4/3]">
              <Image
                src={openImage.src}
                alt={openImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Book CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
              <span className="text-sm text-muted">{openImage.alt}</span>
              <Link
                href={
                  openImage.suggestedServiceId
                    ? `/booking?service=${openImage.suggestedServiceId}&look=${openImage.id}`
                    : `/booking?look=${openImage.id}`
                }
                className="group bg-gold text-background px-6 py-3 rounded-full font-semibold text-sm hover:bg-gold-light transition-all flex items-center gap-2"
              >
                {t("gallery.book_this")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Counter */}
            <span className="text-xs text-muted">
              {(openIndex ?? 0) + 1} / {filtered.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
