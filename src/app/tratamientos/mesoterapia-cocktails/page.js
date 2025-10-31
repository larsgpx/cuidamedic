'use client';
import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";
import { useAPI } from "@/hooks/useAPI";
import { useEffect, useState } from "react";
import { useSEO } from "@/hooks/useSEO";

export default function MesoterapiaCocktails() {
  const API_LIMPIEZAS_FACIALES = (process.env.NEXT_PUBLIC_API_MESOTERAPIA_COCKTAILS || '/api/mesoterapia-y-cocktail') + '?populate[Tratamientos][populate][imagen]=true&populate[Tratamientos][populate][Checklist]=true&populate[Seo]=true';
  const { data: mesoterapiaCocktailAPI } = useAPI(API_LIMPIEZAS_FACIALES);
  const [mesoterapiaCocktail, setmesoterapiaCocktail] = useState('');
  
  useSEO({
    title: mesoterapiaCocktail?.data?.Seo?.title || 'Cuidamedic - Tratamientos Médicos Estéticos de Calidad | Evaluación Gratuita',
    description: mesoterapiaCocktail?.data?.Seo?.descripcion || 'Descubre los mejores tratamientos médicos estéticos en Cuidamedic. Más de 3200 pacientes satisfechos. Marcas seguras y médicos expertos. Solicita tu evaluación gratuita.',
    keywords: mesoterapiaCocktail?.data?.Seo?.keywords || 'tratamientos médicos estéticos, medicina estética, evaluación gratuita, dermatología, cirugía estética, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/tratamientos/limpiezas-faciales',
  });
  useEffect(() => {
    if (mesoterapiaCocktailAPI) {
      setmesoterapiaCocktail(mesoterapiaCocktailAPI?.data);
    }
  }, [mesoterapiaCocktailAPI]);
  // Datos específicos para limpiezas faciales
  console.log('📊 mesoterapiaCocktail:', mesoterapiaCocktail);

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner 
        title={mesoterapiaCocktail?.titulo}
        subtitle={mesoterapiaCocktail?.subtitulo}
        backgroundImage={mesoterapiaCocktail?.Banner?.url ? `${mesoterapiaCocktail.Banner.url.includes('http') ? mesoterapiaCocktail.Banner.url : process.env.NEXT_PUBLIC_BASE_URL}${mesoterapiaCocktail.Banner.url}` : undefined}
      />
      
      {/* Secciones de tratamientos faciales */}
      {Array.isArray(mesoterapiaCocktail?.Tratamientos) && mesoterapiaCocktail.Tratamientos.map((treatment, index) => (
        <TreatmentCard
          key={treatment.id}
          title={treatment.titulo}
          description={treatment.description}
          boton={treatment?.boton}
          checklist={treatment?.Checklist}
          isEven={index % 2 !== 0} // Índices impares (1, 3) tendrán background naranja
          img={treatment?.imagen?.url ? `${treatment.imagen.url.includes('http') ? treatment.imagen.url : process.env.NEXT_PUBLIC_BASE_URL}${treatment.imagen.url}` : undefined}
        />
      ))}
      
      <Footer />
    </div>
  );
}
