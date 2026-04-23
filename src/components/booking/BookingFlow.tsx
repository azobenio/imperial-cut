"use client";

import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { StepService } from "./StepService";
import { StepLocation } from "./StepLocation";
import { StepDateTime } from "./StepDateTime";
import { StepConfirm } from "./StepConfirm";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/i18n";
import { services, lookBook } from "@/lib/data";

export type BookingData = {
  serviceId: string;
  location: "studio" | "domicile";
  address: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  lookId?: string;
};

const stepKeys: TranslationKey[] = [
  "book.step_service",
  "book.step_location",
  "book.step_datetime",
  "book.step_confirm",
];

export function BookingFlow() {
  const { t } = useI18n();
  const searchParams = useSearchParams();

  // Pre-fill service + look from URL on first render (deep-link from gallery / signature card)
  const [data, setData] = useState<Partial<BookingData>>(() => {
    const init: Partial<BookingData> = {};
    const serviceParam = searchParams.get("service");
    const lookParam = searchParams.get("look");
    if (serviceParam && services.some((s) => s.id === serviceParam)) {
      init.serviceId = serviceParam;
    }
    if (lookParam && lookBook.some((l) => l.id === lookParam)) {
      init.lookId = lookParam;
    }
    return init;
  });
  const [step, setStep] = useState(0);

  const updateData = useCallback((partial: Partial<BookingData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  }, []);

  const next = useCallback(() => setStep((s) => Math.min(s + 1, 3)), []);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-10">
        {stepKeys.map((key, i) => (
          <div key={key} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all",
                  i <= step
                    ? "bg-gold border-gold text-background"
                    : "border-border text-muted"
                )}
              >
                {i + 1}
              </div>
              <span
                className={cn(
                  "text-xs mt-1.5 hidden sm:block",
                  i <= step ? "text-gold" : "text-muted"
                )}
              >
                {t(key)}
              </span>
            </div>
            {i < stepKeys.length - 1 && (
              <div
                className={cn(
                  "h-0.5 flex-1 mx-2 transition-colors",
                  i < step ? "bg-gold" : "bg-border"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Steps */}
      {step === 0 && (
        <StepService data={data} updateData={updateData} onNext={next} />
      )}
      {step === 1 && (
        <StepLocation data={data} updateData={updateData} onNext={next} onPrev={prev} />
      )}
      {step === 2 && (
        <StepDateTime data={data} updateData={updateData} onNext={next} onPrev={prev} />
      )}
      {step === 3 && <StepConfirm data={data} onPrev={prev} />}
    </div>
  );
}
