"use client";

import { services } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";
import { Scissors, Sparkles, Paintbrush, Crown, Smile, Users, Check, Waves } from "lucide-react";
import type { BookingData } from "./BookingFlow";
import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/i18n";
import { LookPicker } from "./LookPicker";

const iconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  brush: <Paintbrush className="w-5 h-5" />,
  crown: <Crown className="w-5 h-5" />,
  smile: <Smile className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  waves: <Waves className="w-5 h-5" />,
};

type Props = {
  data: Partial<BookingData>;
  updateData: (d: Partial<BookingData>) => void;
  onNext: () => void;
};

export function StepService({ data, updateData, onNext }: Props) {
  const { t } = useI18n();

  const handleSelect = (id: string) => {
    updateData({ serviceId: id });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">{t("book.what_today")}</h2>
      <p className="text-sm text-muted mb-6">{t("book.choose_service")}</p>

      <div className="space-y-3">
        {services.map((s) => {
          const selected = data.serviceId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => handleSelect(s.id)}
              className={cn(
                "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4",
                selected
                  ? "border-gold bg-gold/5"
                  : "border-border hover:border-gold/30 bg-surface-light"
              )}
            >
              <div
                className={cn(
                  "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
                  selected ? "bg-gold text-background" : "bg-gold/10 text-gold"
                )}
              >
                {iconMap[s.icon]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{t(`svc.${s.id}` as TranslationKey)}</span>
                  {s.popular && (
                    <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full">
                      Top
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted">
                  {t(`svc.${s.id}.desc` as TranslationKey)} &middot; {s.duration} min
                </span>
              </div>
              <div className="text-right shrink-0">
                <span className="text-sm font-bold text-gold">
                  {t("book.from")} {formatPrice(s.priceStudio)}
                </span>
              </div>
              {selected && (
                <Check className="w-5 h-5 text-gold shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Book Your Look — signature feature */}
      {data.serviceId && (
        <LookPicker
          selectedLookId={data.lookId}
          onSelect={(lookId) => updateData({ lookId })}
          serviceId={data.serviceId}
        />
      )}

      <button
        disabled={!data.serviceId}
        onClick={onNext}
        className="w-full mt-6 bg-gold text-background py-3.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {t("book.continue")}
      </button>
    </div>
  );
}
