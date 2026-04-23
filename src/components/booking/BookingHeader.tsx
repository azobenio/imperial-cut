"use client";

import { useI18n } from "@/lib/i18n-context";

export function BookingHeader() {
  const { t } = useI18n();

  return (
    <div className="text-center mb-10">
      <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
        {t("book.title1")}<span className="text-gold">{t("book.title2")}</span>
      </h1>
      <p className="text-muted mt-2">{t("book.subtitle")}</p>
    </div>
  );
}
