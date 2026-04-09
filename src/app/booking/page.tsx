import { BookingFlow } from "@/components/booking/BookingFlow";

export const metadata = {
  title: "Reserver | Imperial Cut",
  description: "Reserve ta coupe en 3 clics. Barbershop mobile Ostende.",
};

export default function BookingPage() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
            Reserve ta <span className="text-gold">coupe</span>
          </h1>
          <p className="text-muted mt-2">3 etapes, moins de 30 secondes.</p>
        </div>
        <BookingFlow />
      </div>
    </section>
  );
}
