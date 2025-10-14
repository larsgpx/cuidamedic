'use client';

import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection, ServicesSection } from "@/components/ServicesSection";
import { BrandsSection } from "@/components/BrandsSection";
import { SuccessCasesSection, TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

export function Home() {
  // Configurar SEO específico para la página de inicio
  useSEO(SEO_CONFIGS.home);

  return (
    <Layout>
      <HeroSection />
      <WhyChooseUsSection />
      <BrandsSection />
      <ServicesSection />
      <SuccessCasesSection />
      <TestimonialsSection />
      <LocationsSection />
    </Layout>
  );
}
