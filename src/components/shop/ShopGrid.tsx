"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { shopItems, type ShopCategory } from "@/lib/data";
import { useI18n } from "@/lib/i18n-context";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, MessageCircle, Sparkles, Footprints } from "lucide-react";

type Filter = "all" | ShopCategory;

const WHATSAPP_NUMBER = "32484000000"; // placeholder — a remplacer par le vrai numero

export function ShopGrid() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(
    () => (filter === "all" ? shopItems : shopItems.filter((i) => i.category === filter)),
    [filter]
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t("shop.filter_all") },
    { id: "perfume", label: t("shop.filter_perfume") },
    { id: "shoes", label: t("shop.filter_shoes") },
  ];

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={
              "px-4 py-2 rounded-full text-sm font-medium border transition-colors " +
              (filter === f.id
                ? "bg-gold text-background border-gold"
                : "bg-transparent text-muted border-border hover:text-foreground hover:border-gold/50")
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Section headers when no filter */}
      {filter === "all" && (
        <SectionHeader
          icon={<Sparkles className="w-5 h-5 text-gold" />}
          title={t("shop.section_perfumes_title")}
          desc={t("shop.section_perfumes_desc")}
        />
      )}

      {/* Perfumes grid */}
      {(filter === "all" || filter === "perfume") && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {items
            .filter((i) => i.category === "perfume")
            .map((item) => (
              <ShopCard key={item.id} item={item} whatsApp={WHATSAPP_NUMBER} />
            ))}
        </div>
      )}

      {filter === "all" && (
        <SectionHeader
          icon={<Footprints className="w-5 h-5 text-gold" />}
          title={t("shop.section_shoes_title")}
          desc={t("shop.section_shoes_desc")}
        />
      )}

      {/* Shoes grid */}
      {(filter === "all" || filter === "shoes") && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {items
            .filter((i) => i.category === "shoes")
            .map((item) => (
              <ShopCard key={item.id} item={item} whatsApp={WHATSAPP_NUMBER} />
            ))}
        </div>
      )}
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold">
          {title}
        </h3>
        <p className="text-sm text-muted mt-1 max-w-xl">{desc}</p>
      </div>
    </div>
  );
}

function ShopCard({
  item,
  whatsApp,
}: {
  item: (typeof shopItems)[number];
  whatsApp: string;
}) {
  const { t } = useI18n();
  const askMessage = encodeURIComponent(
    `Bonjour ! Je suis interesse(e) par "${item.name}" (${formatPrice(item.price)}). Encore disponible ?`
  );
  const waUrl = `https://wa.me/${whatsApp}?text=${askMessage}`;

  return (
    <article className="group relative bg-surface-light border border-border rounded-2xl overflow-hidden hover:border-gold/40 transition-colors">
      {/* Image */}
      <div className="relative aspect-square bg-surface">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover img-editorial group-hover:scale-105 transition-transform duration-700"
        />
        {item.badge && (
          <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-gold text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-gold/30">
            {item.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-[family-name:var(--font-display)] text-base md:text-lg font-semibold leading-tight">
            {item.name}
          </h4>
          <span className="text-gold font-bold text-sm md:text-base whitespace-nowrap">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-xs text-muted line-clamp-2 mb-3">{item.description}</p>

        <div className="flex items-center gap-2 text-[11px] text-muted mb-3">
          <ShoppingBag className="w-3 h-3 text-gold" />
          <span>{t("shop.available_studio")}</span>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full bg-surface border border-border hover:border-gold hover:text-gold text-foreground text-xs font-medium py-2 rounded-full transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          {t("shop.ask")}
        </a>
      </div>
    </article>
  );
}
