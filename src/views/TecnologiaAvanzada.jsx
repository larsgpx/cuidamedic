'use client';
import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { InternaTratamientoEspecial } from "@/views/InternaTratamientoEspecial";

export function TecnologiaAvanzada() {
  const API_EXION = '/api/tecnologia-avanzada?populate[Banner]=true&populate[Tratamientos][populate]=Imagen&populate[Tratamientos][populate]=Tabs&populate[Seo]=true';
  const { data: dataTecnologiaAPI } = useAPI(API_EXION);
  const [dataTecnologia, setDataTecnologia] = useState(null);

  useEffect(() => {
    if (dataTecnologiaAPI) {
      setDataTecnologia(dataTecnologiaAPI?.data);
    }
  }, [dataTecnologiaAPI]);
  console.log('📊 dataTecnologia:', dataTecnologia);

  useSEO({
    title: dataTecnologia?.Interna?.Seo?.titulo || 'Tecnologia Avanzada - Cuidamedic',
    description: dataTecnologia?.data?.Seo?.descripcion || 'Descubre los beneficios de la tecnologia avanzada y los cuidados esenciales que debes seguir después del tratamiento para obtener los mejores resultados.',
    keywords: dataTecnologia?.data?.Seo?.keywords || 'tecnologia, avanzada, cuidados, tratamiento, Cuidamedic', 
    url: process.env.NEXT_PUBLIC_URL + '/tratamientos/tecnologia-avanzada',
  });
 
  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner 
        title={dataTecnologia?.TituloBanner}
        subtitle={dataTecnologia?.SubtituloBanner}
        backgroundImage={dataTecnologia?.Banner?.url ? `${process.env.NEXT_PUBLIC_BASE_URL}${dataTecnologia.Banner.url}` : undefined}
      />
      
      {/* Secciones de tratamientos tecnologia avanzada */}
        <InternaTratamientoEspecial data={dataTecnologia} title={dataTecnologia?.Titulo} />
      <Footer />
    </div>
  );
}
