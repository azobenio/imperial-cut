import { Suspense } from "react";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { BookingHeader } from "@/components/booking/BookingHeader";

export const metadata = {
  title: "Reserver | Imperial Cut",
  description: "Reserve ta coupe en 3 clics. Barbershop mobile Ostende.",
};

export default function BookingPage() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        <BookingHeader />
        <Suspense fallback={<div className="h-64 animate-pulse bg-surface rounded-2xl" />}>
          <BookingFlow />
        </Suspense>
      </div>
    </section>
  );
}
