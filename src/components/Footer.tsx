"use client";

import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo-icon.svg"
                alt="Imperial Cut"
                width={32}
                height={32}
              />
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold">
                Imperial<span className="text-gold"> Cut</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Coupes premium hommes & enfants.
              <br />A domicile ou en studio prive.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                Ostende, Belgique
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                +32 XXX XX XX XX
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-gold" />
                @imperialcut
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Navigation
            </h4>
            <div className="space-y-2 text-sm text-muted">
              <Link href="/#services" className="block hover:text-foreground transition-colors">Services & Tarifs</Link>
              <Link href="/booking" className="block hover:text-foreground transition-colors">Reserver</Link>
              <Link href="/#galerie" className="block hover:text-foreground transition-colors">Galerie</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Imperial Cut — Ostende, Belgique
        </div>
      </div>
    </footer>
  );
}
