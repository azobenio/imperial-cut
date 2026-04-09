"use client";

import { useState, useMemo } from "react";
import { timeSlots } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { BookingData } from "./BookingFlow";

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

function formatDayLabel(d: Date): string {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  if (formatDate(d) === formatDate(today)) return "Auj.";
  if (formatDate(d) === formatDate(tomorrow)) return "Demain";
  return d.toLocaleDateString("fr-BE", { weekday: "short" });
}

export function StepDateTime({ data, updateData, onNext, onPrev }: Props) {
  const [weekOffset, setWeekOffset] = useState(0);

  const days = useMemo(() => getNextDays(7, weekOffset * 7), [weekOffset]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">Quand es-tu disponible ?</h2>
      <p className="text-sm text-muted mb-6">Choisis une date et un creneau.</p>

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
            {days[0]?.toLocaleDateString("fr-BE", { month: "long", year: "numeric" })}
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
          <h3 className="text-sm font-medium mb-3">Creneaux disponibles</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {timeSlots.map((t) => {
              const selected = data.time === t;
              return (
                <button
                  key={t}
                  onClick={() => updateData({ time: t })}
                  className={cn(
                    "py-2.5 rounded-lg text-sm font-medium transition-all",
                    selected
                      ? "bg-gold text-background"
                      : "bg-surface-light border border-border hover:border-gold/30 text-muted"
                  )}
                >
                  {t}
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
          Retour
        </button>
        <button
          disabled={!data.date || !data.time}
          onClick={onNext}
          className="flex-1 bg-gold text-background py-3.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
