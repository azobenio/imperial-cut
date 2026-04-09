"use client";

import Image from "next/image";
import { MapPin, Clock, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-5 h-5" />,
    title: "A domicile",
    desc: "Je me deplace chez toi dans tout Ostende",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Studio prive",
    desc: "Ou viens dans mon espace dedie, ambiance VIP",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Ponctuel",
    desc: "Respect de ton temps, zero attente",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Hygiene stricte",
    desc: "Materiel desinfecte entre chaque client",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              A propos
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold mt-4 mb-6">
              Ton barber,
              <br />
              <span className="text-gold">ou tu veux.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Je suis barber independant base a Ostende. Mon objectif : te proposer
              une coupe premium sans que tu aies a te deplacer. A domicile ou dans
              mon studio prive, chaque rendez-vous est une experience personnalisee.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-3 p-4 rounded-xl bg-surface border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{f.title}</h4>
                    <p className="text-xs text-muted mt-0.5">{f.desc}</p>
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
              +200 clients satisfaits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
