'use client';

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection, ServicesSection } from "@/components/ServicesSection";
import { BrandsSection } from "@/components/BrandsSection";
import { SuccessCasesSection, TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { Footer } from "@/components/Footer";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

export function Home() {
  // Configurar SEO específico para la página de inicio
  useSEO(SEO_CONFIGS.home);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <BrandsSection />
      <ServicesSection />
      <SuccessCasesSection />
      <TestimonialsSection />
      <LocationsSection />
      <Footer />
    </div>
  );
}
