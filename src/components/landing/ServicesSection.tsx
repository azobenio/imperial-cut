"use client";

import { services } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Scissors, Sparkles, Paintbrush, Crown, Smile, Users } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  brush: <Paintbrush className="w-5 h-5" />,
  crown: <Crown className="w-5 h-5" />,
  smile: <Smile className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Services & Tarifs
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4">
            Choisis ton <span className="text-gold">experience</span>
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto">
            Chaque coupe est une experience. Choisis ce qui te correspond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/booking?service=${service.id}`}
              className="group relative bg-surface-light border border-border rounded-2xl p-6 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              {service.popular && (
                <div className="absolute -top-3 right-4 bg-gold text-background text-xs font-semibold px-3 py-1 rounded-full">
                  Populaire
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  {iconMap[service.icon]}
                </div>
                <span className="text-xs text-muted bg-background/50 px-2 py-1 rounded-full">
                  {service.duration} min
                </span>
              </div>

              <h3 className="font-semibold text-lg mb-1 group-hover:text-gold transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-muted mb-4">{service.description}</p>

              <div className="flex items-baseline gap-3 pt-3 border-t border-border">
                <div>
                  <span className="text-xs text-muted">Studio</span>
                  <span className="block text-lg font-bold text-gold">
                    {formatPrice(service.priceStudio)}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-muted">Domicile</span>
                  <span className="block text-lg font-semibold text-foreground">
                    {formatPrice(service.priceHome)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
