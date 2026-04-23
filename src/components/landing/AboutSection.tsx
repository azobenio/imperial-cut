"use client";

import Image from "next/image";
import { MapPin, Clock, Shield, Truck } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/i18n";

const featureKeys = [
  { icon: <Truck className="w-5 h-5" />, titleKey: "about.feat_home" as TranslationKey, descKey: "about.feat_home_desc" as TranslationKey },
  { icon: <MapPin className="w-5 h-5" />, titleKey: "about.feat_studio" as TranslationKey, descKey: "about.feat_studio_desc" as TranslationKey },
  { icon: <Clock className="w-5 h-5" />, titleKey: "about.feat_time" as TranslationKey, descKey: "about.feat_time_desc" as TranslationKey },
  { icon: <Shield className="w-5 h-5" />, titleKey: "about.feat_hygiene" as TranslationKey, descKey: "about.feat_hygiene_desc" as TranslationKey },
];

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              {t("about.tag")}
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold mt-4 mb-6">
              {t("about.title1")}
              <br />
              <span className="text-gold">{t("about.title2")}</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              {t("about.desc")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureKeys.map((f) => (
                <div
                  key={f.titleKey}
                  className="flex gap-3 p-4 rounded-xl bg-surface border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{t(f.titleKey)}</h4>
                    <p className="text-xs text-muted mt-0.5">{t(f.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80&fit=crop&crop=faces"
                alt="Barber professionnel"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-gold text-background px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg">
              {t("about.badge")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
