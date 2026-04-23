"use client";

import { cn } from "@/lib/utils";
import { Home, MapPin, ArrowLeft } from "lucide-react";
import type { BookingData } from "./BookingFlow";
import { useI18n } from "@/lib/i18n-context";

type Props = {
  data: Partial<BookingData>;
  updateData: (d: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
};

export function StepLocation({ data, updateData, onNext, onPrev }: Props) {
  const { t } = useI18n();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">{t("book.where")}</h2>
      <p className="text-sm text-muted mb-6">{t("book.choose_location")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Studio */}
        <button
          onClick={() => updateData({ location: "studio", address: "" })}
          className={cn(
            "p-6 rounded-xl border-2 text-left transition-all",
            data.location === "studio"
              ? "border-gold bg-gold/5"
              : "border-border hover:border-gold/30 bg-surface-light"
          )}
        >
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
              data.location === "studio"
                ? "bg-gold text-background"
                : "bg-gold/10 text-gold"
            )}
          >
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-semibold mb-1">{t("book.studio_title")}</h3>
          <p className="text-xs text-muted">
            {t("book.studio_desc")}
          </p>
          <span className="inline-block mt-3 text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
            {t("book.best_price")}
          </span>
        </button>

        {/* Domicile */}
        <button
          onClick={() => updateData({ location: "domicile" })}
          className={cn(
            "p-6 rounded-xl border-2 text-left transition-all",
            data.location === "domicile"
              ? "border-gold bg-gold/5"
              : "border-border hover:border-gold/30 bg-surface-light"
          )}
        >
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
              data.location === "domicile"
                ? "bg-gold text-background"
                : "bg-gold/10 text-gold"
            )}
          >
            <Home className="w-6 h-6" />
          </div>
          <h3 className="font-semibold mb-1">{t("book.home_title")}</h3>
          <p className="text-xs text-muted">
            {t("book.home_desc")}
          </p>
          <span className="inline-block mt-3 text-xs bg-surface text-muted px-3 py-1 rounded-full">
            {t("book.extra_outside")}
          </span>
        </button>
      </div>

      {/* Address input for domicile */}
      {data.location === "domicile" && (
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">{t("book.your_address")}</label>
          <input
            type="text"
            placeholder={t("book.address_placeholder")}
            value={data.address || ""}
            onChange={(e) => updateData({ address: e.target.value })}
            className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted"
          />
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
          disabled={
            !data.location ||
            (data.location === "domicile" && !data.address?.trim())
          }
          onClick={onNext}
          className="flex-1 bg-gold text-background py-3.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {t("book.continue")}
        </button>
      </div>
    </div>
  );
}
