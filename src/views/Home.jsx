'use client';

import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection, ServicesSection } from "@/components/ServicesSection";
import { BrandsSection } from "@/components/BrandsSection";
import { SuccessCasesSection, TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect } from "react";

export function Home() {
  // Obtener datos de la API de Strapi
  const API_HOME = (process.env.NEXT_PUBLIC_API_HOME || '/api/home') + '?populate[Banner][populate]=*&populate[porqueElegirnosImage]=true&populate[Servicios][populate][imagen]=true&populate[casosDeExito][populate][antes]=true&populate[casosDeExito][populate][despues]=true&populate[testimonios]=true&populate[Seo]=true';
  const { data } = useAPI(API_HOME);
  const [dataHomeData, setDataHomeData] = useState(null);
  useEffect(() => {
    if (data) {
      setDataHomeData(data?.data);
    }
  }, [data]);
  console.log('📊 dataHomeData:', dataHomeData);
  useSEO({
    title: dataHomeData?.Seo?.title || 'Cuidamedic - Tratamientos Médicos Estéticos de Calidad | Evaluación Gratuita',
    description: dataHomeData?.Seo?.descripcion || 'Descubre los mejores tratamientos médicos estéticos en Cuidamedic. Más de 3200 pacientes satisfechos. Marcas seguras y médicos expertos. Solicita tu evaluación gratuita.',
    keywords: dataHomeData?.Seo?.keywords || 'tratamientos médicos estéticos, medicina estética, evaluación gratuita, dermatología, cirugía estética, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/',
  });
  return (
    <Layout>
      <HeroSection dataBanners={dataHomeData?.Banner} />
      <WhyChooseUsSection image={dataHomeData?.porqueElegirnosImage?.url} description={dataHomeData?.porqueElegirnosDescription} />
      <BrandsSection />
      <ServicesSection servicesData={dataHomeData?.Servicios} />
      <SuccessCasesSection casosTexto={dataHomeData?.casosDeExitoDescription} casosData={dataHomeData?.casosDeExito} />
      <TestimonialsSection data={dataHomeData?.testimonios} />
      <LocationsSection />
    </Layout>
  );
}
