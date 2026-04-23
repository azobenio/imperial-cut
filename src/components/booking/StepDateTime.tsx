"use client";

import { useState, useMemo } from "react";
import { timeSlots } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { BookingData } from "./BookingFlow";
import { useI18n } from "@/lib/i18n-context";
import type { Locale } from "@/lib/i18n";

type Props = {
  data: Partial<BookingData>;
  updateData: (d: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
};

function getNextDays(count: number, offset: number = 0): Date[] {
  const days: Date[] = [];
  const start = new Date();
  start.setDate(start.getDate() + offset);
  for (let i = 0; i < count; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    // Skip Sundays
    if (d.getDay() !== 0) days.push(d);
    else count++;
  }
  return days;
}

function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

const localeMap: Record<Locale, string> = { fr: "fr-BE", en: "en-GB", nl: "nl-BE" };

export function StepDateTime({ data, updateData, onNext, onPrev }: Props) {
  const [weekOffset, setWeekOffset] = useState(0);
  const { t, locale } = useI18n();
  const dateLocale = localeMap[locale];

  const days = useMemo(() => getNextDays(7, weekOffset * 7), [weekOffset]);

  function formatDayLabel(d: Date): string {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (formatDate(d) === formatDate(today)) return t("book.today");
    if (formatDate(d) === formatDate(tomorrow)) return t("book.tomorrow");
    return d.toLocaleDateString(dateLocale, { weekday: "short" });
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">{t("book.when")}</h2>
      <p className="text-sm text-muted mb-6">{t("book.choose_datetime")}</p>

      {/* Date selector */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
            disabled={weekOffset === 0}
            className="p-1 text-muted hover:text-foreground disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-muted">
            {days[0]?.toLocaleDateString(dateLocale, { month: "long", year: "numeric" })}
          </span>
          <button
            onClick={() => setWeekOffset(weekOffset + 1)}
            className="p-1 text-muted hover:text-foreground"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((d) => {
            const key = formatDate(d);
            const selected = data.date === key;
            return (
              <button
                key={key}
                onClick={() => updateData({ date: key, time: undefined })}
                className={cn(
                  "flex flex-col items-center py-3 rounded-xl text-sm transition-all",
                  selected
                    ? "bg-gold text-background"
                    : "bg-surface-light border border-border hover:border-gold/30"
                )}
              >
                <span className="text-[10px] uppercase">
                  {formatDayLabel(d)}
                </span>
                <span className="text-lg font-bold">{d.getDate()}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      {data.date && (
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">{t("book.available_slots")}</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {timeSlots.map((slot) => {
              const selected = data.time === slot;
              return (
                <button
                  key={slot}
                  onClick={() => updateData({ time: slot })}
                  className={cn(
                    "py-2.5 rounded-lg text-sm font-medium transition-all",
                    selected
                      ? "bg-gold text-background"
                      : "bg-surface-light border border-border hover:border-gold/30 text-muted"
                  )}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 px-5 py-3.5 rounded-full text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("book.back")}
        </button>
        <button
          disabled={!data.date || !data.time}
          onClick={onNext}
          className="flex-1 bg-gold text-background py-3.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {t("book.continue")}
        </button>
      </div>
    </div>
  );
}
