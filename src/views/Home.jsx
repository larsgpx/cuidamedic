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
  const API_HOME = (process.env.NEXT_PUBLIC_API_HOME || '/api/home') + '?populate[Banner][populate]=*';
  const API_MARCAS = process.env.NEXT_PUBLIC_API_MARCA || '/api/marcas';
  const API_SUCURSALES = process.env.NEXT_PUBLIC_API_SUCURSALES || '/api/sucursales';
  const { data, loading, error } = useAPI(API_HOME);
  const { data: dataMarcas, loading: loadingMarcas} = useAPI(API_MARCAS);
  const { data: dataLocations, loading: loadingLocations } = useAPI(API_SUCURSALES);

  // Console log para verificar los datos
  if (data) {
    console.log('📊 Datos de Home desde Strapi:', data);
    console.log('📊 Datos de Banner desde Strapi:', data?.data?.Banner);
  //   console.log('📊 Datos de marcas desde Strapi:', dataMarcas);
  //   console.log('📊 Datos de sucursales desde Strapi:', dataLocations);
  //   console.log('base url', process.env.NEXT_PUBLIC_BASE_URL + API_SUCURSALES);
  }

  return (
    <Layout>
      <HeroSection data={data?.data?.Banner} />
      <WhyChooseUsSection img={data?.data?.porqueElegirnosImage} title={data?.data?.titlePorqueElegirnos} description={data?.data?.porqueElegirnosDescription} />
      <BrandsSection data={dataMarcas?.data} />
      <ServicesSection data={data?.data?.Servicios} />
      <SuccessCasesSection data={data?.data?.casosDeExito} />
      <TestimonialsSection data={data?.data?.testimonios} />
      <LocationsSection data={dataLocations?.data} />
    </Layout>
  );
}
