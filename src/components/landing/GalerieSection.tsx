"use client";

import Image from "next/image";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80&fit=crop",
    alt: "Clean fade haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80&fit=crop",
    alt: "Beard sculpting",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860019-8764e2c4d472?w=800&q=80&fit=crop",
    alt: "Barber tools",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80&fit=crop",
    alt: "Kid haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80&fit=crop",
    alt: "Barber at work",
  },
  {
    src: "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=800&q=80&fit=crop",
    alt: "Fresh haircut close-up",
  },
];

export function GalerieSection() {
  return (
    <section id="galerie" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Galerie
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4">
            Mon <span className="text-gold">travail</span>
          </h2>
          <p className="text-muted mt-4">Chaque coupe raconte une histoire.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden border border-border group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-8">
          Retrouve plus de photos sur{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            className="text-gold hover:underline"
          >
            @imperialcut
          </a>
        </p>
      </div>
    </section>
  );
}
