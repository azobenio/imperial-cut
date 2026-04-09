import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { GalerieSection } from "@/components/landing/GalerieSection";
import { CTASection } from "@/components/landing/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GalerieSection />
      <CTASection />
    </>
  );
}
