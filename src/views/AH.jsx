import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function AH() {
  const treatments = [
    {
      title: "Ácido Hialurónico - Relleno de Labios",
      description: [
        "El relleno de labios con ácido hialurónico permite aumentar el volumen, definir el contorno y corregir asimetrías, logrando unos labios más sensuales y armoniosos.",
        "Es un tratamiento personalizable para obtener el resultado deseado, desde un aumento sutil hasta un volumen más pronunciado."
      ],
      features: [
        "Aumento de volumen labial",
        "Definición del arco de cupido",
        "Hidratación profunda de los labios"
      ],
      imagePlaceholder: "AH - Relleno de Labios"
    },
    {
      title: "Ácido Hialurónico - Rinomodelación",
      description: [
        "La rinomodelación con ácido hialurónico es una alternativa no quirúrgica para corregir imperfecciones en la nariz, como el caballete o la punta caída.",
        "Permite armonizar el perfil facial de forma inmediata y sin tiempo de recuperación."
      ],
      features: [
        "Corrección de imperfecciones nasales",
        "Armonización del perfil facial",
        "Resultados inmediatos y reversibles"
      ],
      imagePlaceholder: "AH - Rinomodelación"
    },
    {
      title: "Ácido Hialurónico - Ojeras",
      description: [
        "El tratamiento de ojeras con ácido hialurónico es ideal para rellenar el surco de la lágrima, reducir la apariencia de cansancio y mejorar la coloración oscura bajo los ojos.",
        "Devuelve una mirada fresca y descansada, con resultados muy naturales."
      ],
      features: [
        "Reducción de ojeras hundidas",
        "Mejora la coloración oscura",
        "Mirada más luminosa y descansada"
      ],
      imagePlaceholder: "AH - Ojeras"
    },
    {
      title: "Ácido Hialurónico - Pómulos y Mentón",
      description: [
        "El ácido hialurónico se utiliza para proyectar y definir pómulos y mentón, mejorando la estructura facial y el contorno del rostro.",
        "Este tratamiento aporta volumen y firmeza, creando un efecto lifting y una apariencia más juvenil."
      ],
      features: [
        "Definición de pómulos y mentón",
        "Mejora del contorno facial",
        "Efecto lifting sin cirugía"
      ],
      imagePlaceholder: "AH - Pómulos y Mentón"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner
        title="Tratamientos"
        subtitle="Ácido Hialurónico"
      />
      <main>
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={index}
            title={treatment.title}
            description={treatment.description}
            features={treatment.features}
            isEven={index % 2 !== 0}
            imagePlaceholder={treatment.imagePlaceholder}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
