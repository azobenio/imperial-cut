"use client";

import { ShopGrid } from "@/components/shop/ShopGrid";
import { useI18n } from "@/lib/i18n-context";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "32467635724"; // Denzel

export default function ShopPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-gold mb-3">
            {t("shop.tag")}
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            {t("shop.title1")}
            <span className="text-gold italic">{t("shop.title2")}</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-sm md:text-base">
            {t("shop.desc")}
          </p>
        </div>

        {/* Grid */}
        <ShopGrid />

        {/* Closing CTA */}
        <div className="mt-16 bg-surface-light border border-border rounded-2xl p-8 md:p-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-3">
            {t("shop.cta_title")}
          </h2>
          <p className="text-muted text-sm mb-6 max-w-xl mx-auto">
            {t("shop.cta_desc")}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {t("shop.ask_whatsapp")}
          </a>
        </div>
      </div>
    </div>
  );
}
