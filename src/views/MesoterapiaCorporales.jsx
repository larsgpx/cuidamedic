import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function MesoterapiaCorporales() {
  const treatments = [
    {
      title: "Mesoterapia Corporal - Reducción de Grasa Localizada",
      description: [
        "La mesoterapia corporal consiste en la aplicación de microinyecciones de sustancias específicas directamente en las capas de grasa subcutánea para disolver la grasa localizada.",
        "Es especialmente efectiva en zonas como abdomen, flancos, brazos, muslos y espalda, ayudando a reducir el contorno corporal sin cirugía."
      ],
      features: [
        "Reducción de grasa localizada en múltiples zonas",
        "Mejora del contorno corporal",
        "Resultados progresivos y duraderos"
      ],
      imagePlaceholder: "Mesoterapia - Grasa Localizada"
    },
    {
      title: "Mesoterapia Corporal - Celulitis y Fibrosis",
      description: [
        "La mesoterapia para celulitis utiliza cócteles específicos que ayudan a romper las fibras de colágeno que causan la apariencia de 'piel de naranja' y mejoran la circulación.",
        "Es efectiva para tratar la celulitis en glúteos, muslos, brazos y abdomen, mejorando la textura y apariencia de la piel."
      ],
      features: [
        "Reducción de celulitis y fibrosis",
        "Mejora de la textura de la piel",
        "Piel más suave y uniforme"
      ],
      imagePlaceholder: "Mesoterapia - Celulitis"
    },
    {
      title: "Mesoterapia Corporal - Reafirmación y Firmeza",
      description: [
        "La mesoterapia de reafirmación utiliza cócteles de vitaminas, minerales y aminoácidos para estimular la producción de colágeno y elastina en la piel corporal.",
        "Ayuda a mejorar la flacidez, tensar la piel y restaurar la firmeza en zonas como brazos, abdomen, glúteos y muslos."
      ],
      features: [
        "Mejora de la flacidez cutánea",
        "Estimulación de colágeno y elastina",
        "Piel más firme y elástica"
      ],
      imagePlaceholder: "Mesoterapia - Reafirmación"
    },
    {
      title: "Mesoterapia Corporal - Tratamiento Integral",
      description: [
        "El tratamiento integral de mesoterapia corporal combina diferentes cócteles para abordar múltiples aspectos: grasa localizada, celulitis, flacidez y mejora de la textura de la piel.",
        "Este enfoque holístico maximiza los resultados, logrando una transformación corporal completa y natural."
      ],
      features: [
        "Tratamiento integral del contorno corporal",
        "Mejora de grasa, celulitis y flacidez",
        "Resultados sinérgicos y duraderos"
      ],
      imagePlaceholder: "Mesoterapia - Tratamiento Integral"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner
        title="Tratamientos"
        subtitle="Mesoterapia Corporal"
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
