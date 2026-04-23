"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function CTASection() {
  const { t } = useI18n();

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-surface-light to-surface border border-border rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-6 h-6 text-gold" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4">
              {t("cta.title1")}<span className="text-gold">{t("cta.title2")}</span>{t("cta.title3")}
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              {t("cta.desc")}
            </p>
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 bg-gold text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light transition-all"
            >
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
