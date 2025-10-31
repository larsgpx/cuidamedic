'use client';
import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";
import { useAPI } from "@/hooks/useAPI";
import { useEffect, useState } from "react";
import { useSEO } from "@/hooks/useSEO";

export function LimpiezasFaciales() {
  const API_LIMPIEZAS_FACIALES = (process.env.NEXT_PUBLIC_API_LIMPIEZA_FACIAL || '/api/limpieza-facial') + '?populate[Banner]=true&populate[Tratamientos][populate][imagen]=true&populate[Tratamientos][populate][Checklist]=true&populate[Seo]=true';
  const { data: dataLimpiezasFacialesAPI } = useAPI(API_LIMPIEZAS_FACIALES);
  const [dataLimpiezasFaciales, setDataLimpiezasFaciales] = useState('');
  
  useSEO({
    title: dataLimpiezasFaciales?.data?.Seo?.title || 'Cuidamedic- Tratamientos Médicos Estéticos de Calidad | Evaluación Gratuita',
    description: dataLimpiezasFaciales?.data?.Seo?.descripcion || 'Descubre los mejores tratamientos médicos estéticos en Cuidamedic. Más de 3200 pacientes satisfechos. Marcas seguras y médicos expertos. Solicita tu evaluación gratuita.',
    keywords: dataLimpiezasFaciales?.data?.Seo?.keywords || 'tratamientos médicos estéticos, medicina estética, evaluación gratuita, dermatología, cirugía estética, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/tratamientos/limpiezas-faciales',
  });
  useEffect(() => {
    if (dataLimpiezasFacialesAPI) {
      setDataLimpiezasFaciales(dataLimpiezasFacialesAPI?.data);
    }
  }, [dataLimpiezasFacialesAPI]);
  console.log('📊 dataLimpiezasFaciales:', dataLimpiezasFaciales);

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner 
        title={dataLimpiezasFaciales?.titulo}
        subtitle={dataLimpiezasFaciales?.subtitulo}
        backgroundImage={dataLimpiezasFaciales?.Banner?.url ? `${dataLimpiezasFaciales?.Banner?.url.includes('http') ? dataLimpiezasFaciales?.Banner?.url : process.env.NEXT_PUBLIC_BASE_URL}${dataLimpiezasFaciales?.Banner?.url}` : undefined}
      />
      
      {/* Secciones de tratamientos faciales */}
      {Array.isArray(dataLimpiezasFaciales?.Tratamientos) && dataLimpiezasFaciales.Tratamientos.map((treatment, index) => (
        <TreatmentCard
          key={treatment.id}
          title={treatment.titulo}
          description={treatment.description}
          boton={treatment?.boton}
          isEven={index % 2 !== 0} // Índices impares (1, 3) tendrán background naranja
          img={treatment?.imagen?.url ? `${treatment?.imagen?.url.includes('http') ? treatment?.imagen?.url : process.env.NEXT_PUBLIC_BASE_URL}${treatment?.imagen?.url}` : undefined}
          checklist={treatment?.Checklist}
        />
      ))}
      
      <Footer />
    </div>
  );
}
