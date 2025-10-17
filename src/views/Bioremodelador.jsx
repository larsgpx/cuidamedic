import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function Bioremodelador() {
  const treatments = [
    {
      title: "Bioremodelador - Profhilo",
      description: [
        "Profhilo es un bioremodelador inyectable a base de ácido hialurónico puro, diseñado para mejorar la calidad de la piel, hidratar y estimular la producción de colágeno y elastina.",
        "Actúa en las capas profundas de la piel, restaurando la firmeza y elasticidad sin añadir volumen, ideal para combatir la flacidez facial y del cuello."
      ],
      features: [
        "Mejora la calidad y elasticidad de la piel",
        "Hidratación profunda y duradera",
        "Estimulación de colágeno y elastina"
      ],
      imagePlaceholder: "Bioremodelador - Profhilo"
    },
    {
      title: "Bioremodelador - Redensificación Cutánea",
      description: [
        "El tratamiento con bioremodeladores busca redensificar la piel, aportando los componentes esenciales para su salud y vitalidad.",
        "Es ideal para pieles deshidratadas, con pérdida de luminosidad y signos de envejecimiento prematuro."
      ],
      features: [
        "Redensificación y mejora de la piel",
        "Aumento de luminosidad y vitalidad",
        "Combate el envejecimiento prematuro"
      ],
      imagePlaceholder: "Bioremodelador - Redensificación"
    },
    {
      title: "Bioremodelador - Tratamiento de Cuello y Escote",
      description: [
        "Los bioremodeladores son muy efectivos para tratar la flacidez y las arrugas en zonas delicadas como el cuello y el escote.",
        "Ayudan a tensar la piel, mejorar su textura y reducir los signos de envejecimiento en estas áreas."
      ],
      features: [
        "Mejora de flacidez en cuello y escote",
        "Reducción de arrugas en zonas delicadas",
        "Piel más tersa y rejuvenecida"
      ],
      imagePlaceholder: "Bioremodelador - Cuello y Escote"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner
        title="Tratamientos"
        subtitle="Bioremodelador"
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
