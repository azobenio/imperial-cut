"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { lookBook } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-context";

type Props = {
  selectedLookId?: string;
  onSelect: (lookId: string | undefined) => void;
  serviceId?: string;
};

export function LookPicker({ selectedLookId, onSelect, serviceId }: Props) {
  const { t } = useI18n();

  // Filter looks by selected service if relevant, otherwise show all
  const relevantLooks = serviceId
    ? lookBook.filter(
        (l) => l.suggestedServiceId === serviceId || !l.suggestedServiceId
      )
    : lookBook;
  const looks = relevantLooks.length > 0 ? relevantLooks : lookBook;

  const selected = lookBook.find((l) => l.id === selectedLookId);

  return (
    <div className="mt-6 p-4 rounded-2xl border border-dashed border-gold/30 bg-gold/[0.03]">
      <div className="flex items-start justify-between mb-1">
        <div>
          <h3 className="text-sm font-semibold text-gold">{t("byl.title")}</h3>
          <p className="text-xs text-muted mt-0.5">{t("byl.desc")}</p>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wider bg-gold/10 text-gold px-2 py-0.5 rounded-full">
          {t("byl.optional")}
        </span>
      </div>

      {/* Selected preview */}
      {selected && (
        <div className="mt-4 flex items-center gap-3 p-3 rounded-xl border border-gold/40 bg-gold/5">
          <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gold">
              {t("byl.selected")}
            </p>
            <p className="text-sm truncate">{selected.alt}</p>
          </div>
          <button
            type="button"
            onClick={() => onSelect(undefined)}
            className="shrink-0 w-8 h-8 rounded-full bg-background/60 border border-border hover:border-gold/60 flex items-center justify-center transition-colors"
            aria-label={t("byl.remove")}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Horizontal scroll picker */}
      <div className="mt-4 -mx-1 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 px-1 pb-2 snap-x snap-mandatory">
          {looks.map((look) => {
            const isSelected = look.id === selectedLookId;
            return (
              <button
                key={look.id}
                type="button"
                onClick={() =>
                  onSelect(isSelected ? undefined : look.id)
                }
                className={cn(
                  "relative shrink-0 w-20 h-24 rounded-xl overflow-hidden border-2 transition-all snap-start",
                  isSelected
                    ? "border-gold ring-2 ring-gold/30 scale-[1.02]"
                    : "border-border/60 hover:border-gold/50"
                )}
              >
                <Image
                  src={look.src}
                  alt={look.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-gold/20" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      <p className="text-[10px] text-muted text-center mt-1">
        {t("byl.scroll")}
      </p>
    </div>
  );
}
