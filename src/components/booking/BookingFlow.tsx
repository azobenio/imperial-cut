"use client";

import { useState, useCallback } from "react";
import { StepService } from "./StepService";
import { StepLocation } from "./StepLocation";
import { StepDateTime } from "./StepDateTime";
import { StepConfirm } from "./StepConfirm";
import { cn } from "@/lib/utils";

export type BookingData = {
  serviceId: string;
  location: "studio" | "domicile";
  address: string;
  date: string;
  time: string;
  name: string;
  phone: string;
};

const steps = ["Service", "Lieu", "Creneau", "Confirmation"];

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<BookingData>>({});

  const updateData = useCallback((partial: Partial<BookingData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  }, []);

  const next = useCallback(() => setStep((s) => Math.min(s + 1, 3)), []);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-10">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center flex-1">
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
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
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
