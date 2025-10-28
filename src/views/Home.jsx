'use client';

import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection, ServicesSection } from "@/components/ServicesSection";
import { BrandsSection } from "@/components/BrandsSection";
import { SuccessCasesSection, TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import { useAPI } from "@/hooks/useAPI";

export function Home() {
  // Configurar SEO específico para la página de inicio
  useSEO(SEO_CONFIGS.home);

  // Obtener datos de la API de Strapi
  const API_HOME = (process.env.NEXT_PUBLIC_API_HOME || '/api/home') + '?populate[Banner]=true&populate[porqueElegirnosImage]=true&populate[Servicios][populate][imagen]=true&populate[casosDeExito][populate][antes]=true&populate[casosDeExito][populate][despues]=true&populate[testimonios]=true';
  const { data } = useAPI(API_HOME);

  return (
    <Layout>
      <HeroSection dataBanners={data?.data?.Banner} />
      <WhyChooseUsSection image={data?.data?.porqueElegirnosImage?.url} description={data?.data?.porqueElegirnosDescription} />
      <BrandsSection />
      <ServicesSection servicesData={data?.data?.Servicios} />
      <SuccessCasesSection casosTexto={data?.data?.casosDeExitoDescription} casosData={data?.data?.casosDeExito} />
      <TestimonialsSection data={data?.data?.testimonios} />
      <LocationsSection />
    </Layout>
  );
}
