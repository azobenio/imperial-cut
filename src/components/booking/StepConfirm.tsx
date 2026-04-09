"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, Check, Calendar, MapPin, Scissors, User, Phone } from "lucide-react";
import type { BookingData } from "./BookingFlow";

type Props = {
  data: Partial<BookingData>;
  onPrev: () => void;
};

export function StepConfirm({ data, onPrev }: Props) {
  const [name, setName] = useState(data.name || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [submitted, setSubmitted] = useState(false);

  const service = services.find((s) => s.id === data.serviceId);
  const price =
    data.location === "domicile"
      ? service?.priceHome ?? 0
      : service?.priceStudio ?? 0;

  const dateLabel = data.date
    ? new Date(data.date).toLocaleDateString("fr-BE", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "";

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) return;
    // TODO: Send to backend / WhatsApp / Supabase
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-gold" />
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3">
          Reservation confirmee !
        </h2>
        <p className="text-muted mb-2">
          {service?.name} &middot; {dateLabel} a {data.time}
        </p>
        <p className="text-muted text-sm mb-8">
          Tu recevras un message de confirmation par WhatsApp.
        </p>
        <a
          href="/"
          className="inline-block bg-gold text-background px-8 py-3 rounded-full font-semibold hover:bg-gold-light transition-colors"
        >
          Retour a l&apos;accueil
        </a>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">Confirme ta reservation</h2>
      <p className="text-sm text-muted mb-6">Verifie les details et laisse tes coordonnees.</p>

      {/* Summary */}
      <div className="bg-surface-light border border-border rounded-2xl p-5 mb-6 space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <Scissors className="w-4 h-4 text-gold shrink-0" />
          <span className="text-muted">Service</span>
          <span className="ml-auto font-medium">{service?.name}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <MapPin className="w-4 h-4 text-gold shrink-0" />
          <span className="text-muted">Lieu</span>
          <span className="ml-auto font-medium">
            {data.location === "studio" ? "Studio prive" : "A domicile"}
          </span>
        </div>
        {data.location === "domicile" && data.address && (
          <div className="text-xs text-muted pl-7">{data.address}</div>
        )}
        <div className="flex items-center gap-3 text-sm">
          <Calendar className="w-4 h-4 text-gold shrink-0" />
          <span className="text-muted">Date</span>
          <span className="ml-auto font-medium">
            {dateLabel} a {data.time}
          </span>
        </div>
        <div className="border-t border-border pt-3 flex items-center justify-between">
          <span className="font-semibold">Total</span>
          <span className="text-xl font-bold text-gold">{formatPrice(price)}</span>
        </div>
      </div>

      {/* Contact info */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            <User className="w-4 h-4 text-gold" />
            Ton prenom
          </label>
          <input
            type="text"
            placeholder="Ex: Jean Marie"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            <Phone className="w-4 h-4 text-gold" />
            Ton numero (WhatsApp)
          </label>
          <input
            type="tel"
            placeholder="+32 4XX XX XX XX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 px-5 py-3.5 rounded-full text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </button>
        <button
          disabled={!name.trim() || !phone.trim()}
          onClick={handleSubmit}
          className="flex-1 bg-gold text-background py-3.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Confirmer — {formatPrice(price)}
        </button>
      </div>
    </div>
  );
}
