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
              <a
                href="tel:+32467635724"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                +32 467 63 57 24
              </a>
              <a
                href="https://wa.me/32467635724"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
                </svg>
                WhatsApp
              </a>
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
              <Link href="/#signatures" className="block hover:text-foreground transition-colors">{t("services.tag")}</Link>
              <Link href="/#galerie" className="block hover:text-foreground transition-colors">{t("gallery.tag")}</Link>
              <Link href="/shop" className="block hover:text-foreground transition-colors">{t("nav.shop")}</Link>
              <Link href="/booking" className="block hover:text-foreground transition-colors">{t("nav.book")}</Link>
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
