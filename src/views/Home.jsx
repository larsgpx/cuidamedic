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
  const API_MARCAS = process.env.NEXT_PUBLIC_API_MARCA + '?populate=*' || '/api/marcas?populate=*';
  const API_SUCURSALES = process.env.NEXT_PUBLIC_API_SUCURSALES + '?populate=*' || '/api/sucursales?populate=*';
  const { data, loading, error } = useAPI(API_HOME);
  const { data: dataMarcas, loading: loadingMarcas} = useAPI(API_MARCAS);
  const { data: dataLocations, loading: loadingLocations } = useAPI(API_SUCURSALES);

  // Console log para verificar los datos
  if (data) {
    // console.log('📊 Datos de Home desde Strapi:', data);
    
    console.log('📊 Datos de sucursales desde Strapi:', dataLocations);
    
  }

  return (
    <Layout>
      <HeroSection dataBanners={data?.data?.Banner} />
      <WhyChooseUsSection image={data?.data?.porqueElegirnosImage?.url} description={data?.data?.porqueElegirnosDescription} />
      <BrandsSection brandsData={dataMarcas?.data} />
      <ServicesSection servicesData={data?.data?.Servicios} />
      <SuccessCasesSection casosTexto={data?.data?.casosDeExitoDescription} casosData={data?.data?.casosDeExito} />
      <TestimonialsSection data={data?.data?.testimonios} />
      <LocationsSection data={dataLocations?.data} />
    </Layout>
  );
}
