"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
        alt="Barbershop ambiance"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs font-medium text-gold">Ostende, Belgique</span>
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold leading-tight mb-6">
          Premium Cuts,
          <br />
          <span className="text-gold">Delivered to You.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Barbershop mobile a Ostende. Coupes hommes & enfants,
          a domicile ou en studio prive. Experience premium garantie.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/booking"
            className="group bg-gold text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light transition-all flex items-center gap-2"
          >
            Reserver maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#services"
            className="text-muted hover:text-foreground transition-colors px-6 py-4 text-lg"
          >
            Voir les services
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="ml-1">5.0</span>
          </div>
          <span className="w-px h-4 bg-border" />
          <span>+200 coupes realisees</span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span className="hidden sm:inline">A domicile ou studio</span>
        </div>
      </div>
    </section>
  );
}
