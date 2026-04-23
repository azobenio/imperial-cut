"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/i18n";

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="signatures" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("sig.tag")}
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mt-4 leading-tight">
            {t("sig.title1")}
            <span className="text-gold italic">{t("sig.title2")}</span>
          </h2>
          <p className="text-muted mt-5 max-w-lg mx-auto text-base md:text-lg">
            {t("sig.desc")}
          </p>
        </div>

        {/* Signature cards - editorial magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const isFeature = service.popular;
            return (
              <Link
                key={service.id}
                href={`/booking?service=${service.id}`}
                className={`group relative block overflow-hidden rounded-3xl border border-border bg-surface hover:border-gold/40 transition-all duration-500 ${
                  isFeature && i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
                style={{ minHeight: "420px" }}
              >
                {/* Full-bleed image */}
                <Image
                  src={service.heroImage}
                  alt={t(`svc.${service.id}` as TranslationKey)}
                  fill
                  sizes={isFeature && i === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/50" />

                {/* Top badges */}
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
                  {service.popular && (
                    <span className="text-[10px] font-semibold uppercase tracking-widest bg-gold text-background px-3 py-1 rounded-full">
                      {t("services.popular")}
                    </span>
                  )}
                  <span className="ml-auto text-xs text-foreground/60 bg-background/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border/40">
                    {service.duration} min
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-gold uppercase tracking-widest">
                      {t(`svc.${service.id}` as TranslationKey)}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold leading-tight mb-2 group-hover:text-gold transition-colors">
                    {t(`sig.${service.id}` as TranslationKey)}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                    {t(`svc.${service.id}.desc` as TranslationKey)}
                  </p>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-muted block">
                        {t("sig.from")}
                      </span>
                      <span className="text-2xl font-bold text-gold">
                        {formatPrice(service.priceStudio)}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-gold transition-colors">
                      {t("sig.book")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
