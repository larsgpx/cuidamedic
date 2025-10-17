import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function BioremBioest() {
  const treatments = [
    {
      title: "Bioremodelación Facial con Ácido Hialurónico",
      description: [
        "La bioremodelación utiliza ácido hialurónico de alto y bajo peso molecular para mejorar la calidad de la piel, hidratar profundamente y estimular la producción de colágeno y elastina.",
        "No busca dar volumen, sino restaurar la estructura y elasticidad de la piel, combatiendo la flacidez y mejorando la luminosidad."
      ],
      features: [
        "Mejora la calidad y elasticidad de la piel",
        "Hidratación profunda y duradera",
        "Estimulación de colágeno y elastina"
      ],
      imagePlaceholder: "Bioremodelación Facial"
    },
    {
      title: "Bioestimulación con Inductores de Colágeno",
      description: [
        "La bioestimulación con inductores de colágeno (como la hidroxiapatita cálcica o el ácido poliláctico) es un tratamiento avanzado para restaurar el volumen perdido y mejorar la firmeza de la piel.",
        "Activa la producción natural de colágeno del cuerpo, logrando un rejuvenecimiento progresivo y natural."
      ],
      features: [
        "Restauración de volumen facial",
        "Mejora de la firmeza y densidad de la piel",
        "Resultados progresivos y de larga duración"
      ],
      imagePlaceholder: "Bioestimulación de Colágeno"
    },
    {
      title: "Tratamiento Combinado Bioremodelación + Bioestimulación",
      description: [
        "La combinación de bioremodelación y bioestimulación ofrece un enfoque integral para el rejuvenecimiento facial, abordando tanto la calidad de la piel como la pérdida de volumen y flacidez.",
        "Este protocolo personalizado maximiza los resultados, logrando una piel más joven, firme y radiante."
      ],
      features: [
        "Rejuvenecimiento facial integral",
        "Mejora de la calidad de la piel y volumen",
        "Resultados sinérgicos y duraderos"
      ],
      imagePlaceholder: "Biorem + Bioest. Combinado"
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
