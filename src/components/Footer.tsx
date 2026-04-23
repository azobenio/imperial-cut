"use client";

import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

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
  const { t } = useI18n();

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
              {t("footer.tagline1")}
              <br />{t("footer.tagline2")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              {t("footer.contact")}
            </h4>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                {t("hero.badge")}
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
              {t("footer.nav")}
            </h4>
            <div className="space-y-2 text-sm text-muted">
              <Link href="/#services" className="block hover:text-foreground transition-colors">{t("services.tag")}</Link>
              <Link href="/booking" className="block hover:text-foreground transition-colors">{t("nav.book")}</Link>
              <Link href="/#galerie" className="block hover:text-foreground transition-colors">{t("gallery.tag")}</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Imperial Cut — {t("hero.badge")}
        </div>
      </div>
    </footer>
  );
}
