'use client';
import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";
import { useAPI } from "@/hooks/useAPI";
import { useEffect, useState } from "react";
import { useSEO } from "@/hooks/useSEO";

export default function MesoterapiaCocktails() {
  const API_LIMPIEZAS_FACIALES = (process.env.NEXT_PUBLIC_API_MESOTERAPIA_COCKTAILS || '/api/mesoterapia-y-cocktail') + '?populate[Tratamientos][populate][imagen]=true&populate[Seo]=true';
  const { data: mesoterapiaCocktailAPI } = useAPI(API_LIMPIEZAS_FACIALES);
  const [mesoterapiaCocktail, setmesoterapiaCocktail] = useState('');
  
  // useSEO({
  //   title: mesoterapiaCocktail?.data?.Seo?.title || 'Cuidamedic - Tratamientos Médicos Estéticos de Calidad | Evaluación Gratuita',
  //   description: mesoterapiaCocktail?.data?.Seo?.descripcion || 'Descubre los mejores tratamientos médicos estéticos en Cuidamedic. Más de 3200 pacientes satisfechos. Marcas seguras y médicos expertos. Solicita tu evaluación gratuita.',
  //   keywords: mesoterapiaCocktail?.data?.Seo?.keywords || 'tratamientos médicos estéticos, medicina estética, evaluación gratuita, dermatología, cirugía estética, Cuidamedic',
  //   url: process.env.NEXT_PUBLIC_URL + '/tratamientos/limpiezas-faciales',
  // });
  useEffect(() => {
    if (mesoterapiaCocktailAPI) {
      setmesoterapiaCocktail(mesoterapiaCocktailAPI?.data);
    }
  }, [mesoterapiaCocktailAPI]);
  // Datos específicos para limpiezas faciales
  const facialTreatments = [
    {
      title: "Básica",
      description: [
        "Nuestra limpieza facial básica es perfecta para el mantenimiento regular de tu piel. Incluye limpieza profunda, exfoliación suave y hidratación.",
        "Este tratamiento está diseñado para pieles normales y mixtas que buscan mantener un cutis saludable y radiante de forma regular."
      ],
      features: [
        "Limpieza profunda con productos especializados",
        "Exfoliación suave para remover células muertas",
        "Hidratación y protección solar"
      ],
      imagePlaceholder: "Limpieza Facial Básica"
    },
    {
      title: "Profesional",
      description: [
        "La limpieza facial profesional incluye técnicas avanzadas como extracción de comedones, mascarillas especializadas y masaje facial relajante.",
        "Ideal para pieles con imperfecciones, puntos negros o que necesitan un tratamiento más intensivo."
      ],
      features: [
        "Extracción profesional de comedones",
        "Mascarillas especializadas según tipo de piel",
        "Masaje facial relajante de 15 minutos"
      ],
      imagePlaceholder: "Limpieza Facial Profesional"
    },
    {
      title: "Premium",
      description: [
        "Nuestro tratamiento premium combina limpieza profunda con tecnología avanzada y productos de alta gama para resultados excepcionales.",
        "Incluye análisis de piel, tratamiento personalizado y seguimiento post-tratamiento."
      ],
      features: [
        "Análisis digital de la piel",
        "Productos de marcas premium",
        "Seguimiento personalizado post-tratamiento"
      ],
      imagePlaceholder: "Limpieza Facial Premium"
    },
    {
      title: "VIP",
      description: [
        "El tratamiento VIP es nuestra experiencia más exclusiva, diseñada para ofrecer resultados de spa de lujo con atención personalizada.",
        "Incluye múltiples técnicas, productos de lujo y un ambiente relajante para una experiencia completa de bienestar."
      ],
      features: [
        "Técnicas múltiples en una sola sesión",
        "Productos de marcas de lujo",
        "Ambiente spa con música relajante"
      ],
      imagePlaceholder: "Limpieza Facial VIP"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner 
        title={mesoterapiaCocktail?.titulo}
        subtitle={mesoterapiaCocktail?.subtitulo}
        backgroundImage={mesoterapiaCocktail?.Banner?.url ? `${process.env.NEXT_PUBLIC_BASE_URL || 'https://refined-candy-35961bcadd.strapiapp.com'}${mesoterapiaCocktail.Banner.url}` : undefined}
      />
      
      {/* Secciones de tratamientos faciales */}
      {Array.isArray(mesoterapiaCocktail?.Tratamientos) && mesoterapiaCocktail.Tratamientos.map((treatment, index) => (
        <TreatmentCard
          key={treatment.id}
          title={treatment.titulo}
          description={treatment.description}
          boton={treatment?.boton}
          isEven={index % 2 !== 0} // Índices impares (1, 3) tendrán background naranja
          img={treatment?.imagen?.url ? `${process.env.NEXT_PUBLIC_BASE_URL}${treatment.imagen.url}` : undefined}
        />
      ))}
      
      <Footer />
    </div>
  );
}
