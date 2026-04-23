"use client";

import { useI18n } from "@/lib/i18n-context";
import { localeLabels, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

const locales: Locale[] = ["fr", "en", "nl"];

export function LangSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-1 bg-surface-light border border-border rounded-full px-1 py-0.5">
      <Globe className="w-3.5 h-3.5 text-muted ml-1.5" />
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={cn(
            "px-2 py-1 rounded-full text-xs font-semibold transition-all",
            locale === l
              ? "bg-gold text-background"
              : "text-muted hover:text-foreground"
          )}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
