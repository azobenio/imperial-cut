"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-context";
import { LangSwitcher } from "./LangSwitcher";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { href: "/#signatures", label: t("nav.services") },
    { href: "/#galerie", label: t("nav.gallery") },
    { href: "/shop", label: t("nav.shop") },
    { href: "/#about", label: t("nav.about") },
    { href: "/booking", label: t("nav.book") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo-icon.svg"
            alt="Imperial Cut"
            width={36}
            height={36}
            className="group-hover:scale-105 transition-transform"
          />
          <span className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
            Imperial<span className="text-gold"> Cut</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.href === "/booking" ? (
              <Link
                key={link.href}
                href={link.href}
                className="bg-gold text-background px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <LangSwitcher />
        </nav>

        {/* Mobile burger */}
        <div className="flex items-center gap-3 md:hidden">
          <LangSwitcher />
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-surface border-b border-border",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "py-3 px-4 rounded-lg text-sm transition-colors",
                link.href === "/booking"
                  ? "bg-gold text-background font-semibold text-center mt-2"
                  : "text-muted hover:text-foreground hover:bg-surface-light"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
