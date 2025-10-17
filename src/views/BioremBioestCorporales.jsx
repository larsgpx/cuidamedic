import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function BioremBioestCorporales() {
  const treatments = [
    {
      title: "Bioremodelación Corporal con Ácido Hialurónico",
      description: [
        "La bioremodelación corporal utiliza ácido hialurónico para mejorar la calidad de la piel del cuerpo, hidratar profundamente y estimular la producción de colágeno y elastina.",
        "Es ideal para mejorar la textura de la piel, reducir la flacidez y restaurar la firmeza en zonas como brazos, abdomen, glúteos y muslos."
      ],
      features: [
        "Mejora la calidad y elasticidad de la piel corporal",
        "Hidratación profunda y duradera",
        "Estimulación de colágeno y elastina"
      ],
      imagePlaceholder: "Bioremodelación Corporal"
    },
    {
      title: "Bioestimulación Corporal con Inductores de Colágeno",
      description: [
        "La bioestimulación corporal con inductores de colágeno es un tratamiento avanzado para restaurar el volumen perdido y mejorar la firmeza de la piel en el cuerpo.",
        "Activa la producción natural de colágeno del cuerpo, logrando un rejuvenecimiento progresivo y natural en zonas como glúteos, brazos y abdomen."
      ],
      features: [
        "Restauración de volumen corporal",
        "Mejora de la firmeza y densidad de la piel",
        "Resultados progresivos y de larga duración"
      ],
      imagePlaceholder: "Bioestimulación Corporal"
    },
    {
      title: "Tratamiento Combinado Bioremodelación + Bioestimulación",
      description: [
        "La combinación de bioremodelación y bioestimulación corporal ofrece un enfoque integral para el rejuvenecimiento del cuerpo, abordando tanto la calidad de la piel como la pérdida de volumen y flacidez.",
        "Este protocolo personalizado maximiza los resultados, logrando una piel más joven, firme y radiante en todo el cuerpo."
      ],
      features: [
        "Rejuvenecimiento corporal integral",
        "Mejora de la calidad de la piel y volumen",
        "Resultados sinérgicos y duraderos"
      ],
      imagePlaceholder: "Biorem + Bioest. Corporal"
    },
    {
      title: "Tratamiento Especializado por Zonas",
      description: [
        "Ofrecemos tratamientos especializados por zonas específicas del cuerpo: glúteos, brazos, abdomen, muslos y espalda, adaptando la técnica según las necesidades de cada área.",
        "Cada zona recibe un protocolo personalizado para maximizar los resultados y lograr la transformación deseada."
      ],
      features: [
        "Tratamiento personalizado por zonas",
        "Protocolos específicos para cada área",
        "Resultados óptimos en cada zona tratada"
      ],
      imagePlaceholder: "Tratamiento por Zonas"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner
        title="Tratamientos"
        subtitle="Bioremodelación + Bioestimulación"
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
