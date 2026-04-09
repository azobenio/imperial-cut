"use client";

import { cn } from "@/lib/utils";
import { Home, MapPin, ArrowLeft } from "lucide-react";
import type { BookingData } from "./BookingFlow";

type Props = {
  data: Partial<BookingData>;
  updateData: (d: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
};

export function StepLocation({ data, updateData, onNext, onPrev }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">Ou veux-tu te faire coiffer ?</h2>
      <p className="text-sm text-muted mb-6">Choisis le lieu de ta coupe.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Studio */}
        <button
          onClick={() => updateData({ location: "studio", address: "" })}
          className={cn(
            "p-6 rounded-xl border-2 text-left transition-all",
            data.location === "studio"
              ? "border-gold bg-gold/5"
              : "border-border hover:border-gold/30 bg-surface-light"
          )}
        >
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
              data.location === "studio"
                ? "bg-gold text-background"
                : "bg-gold/10 text-gold"
            )}
          >
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-semibold mb-1">Studio prive</h3>
          <p className="text-xs text-muted">
            Viens dans mon espace dedie a Ostende. Ambiance premium.
          </p>
          <span className="inline-block mt-3 text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
            Meilleur prix
          </span>
        </button>

        {/* Domicile */}
        <button
          onClick={() => updateData({ location: "domicile" })}
          className={cn(
            "p-6 rounded-xl border-2 text-left transition-all",
            data.location === "domicile"
              ? "border-gold bg-gold/5"
              : "border-border hover:border-gold/30 bg-surface-light"
          )}
        >
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
              data.location === "domicile"
                ? "bg-gold text-background"
                : "bg-gold/10 text-gold"
            )}
          >
            <Home className="w-6 h-6" />
          </div>
          <h3 className="font-semibold mb-1">A domicile</h3>
          <p className="text-xs text-muted">
            Je me deplace chez toi. Gratuit dans Ostende centre (&lt; 5 km).
          </p>
          <span className="inline-block mt-3 text-xs bg-surface text-muted px-3 py-1 rounded-full">
            +5 &euro; hors centre
          </span>
        </button>
      </div>

      {/* Address input for domicile */}
      {data.location === "domicile" && (
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Ton adresse</label>
          <input
            type="text"
            placeholder="Rue, numero, code postal, Ostende"
            value={data.address || ""}
            onChange={(e) => updateData({ address: e.target.value })}
            className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted"
          />
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 px-5 py-3.5 rounded-full text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </button>
        <button
          disabled={
            !data.location ||
            (data.location === "domicile" && !data.address?.trim())
          }
          onClick={onNext}
          className="flex-1 bg-gold text-background py-3.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
