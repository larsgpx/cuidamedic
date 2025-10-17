import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function Mesoterapias() {
  const treatments = [
    {
      title: "Mesoterapia Facial - Revitalización",
      description: [
        "La mesoterapia facial consiste en la aplicación de microinyecciones de vitaminas, minerales, aminoácidos y ácido hialurónico no reticulado directamente en la piel.",
        "Este cóctel revitalizante nutre la piel en profundidad, mejora la luminosidad, hidratación y elasticidad, y previene el envejecimiento."
      ],
      features: [
        "Hidratación y nutrición profunda",
        "Mejora de la luminosidad y tono",
        "Prevención del envejecimiento cutáneo"
      ],
      imagePlaceholder: "Mesoterapia - Revitalización"
    },
    {
      title: "Mesoterapia Facial - Anti-envejecimiento",
      description: [
        "Con formulaciones específicas, la mesoterapia anti-envejecimiento combate las arrugas finas, la flacidez y la pérdida de firmeza.",
        "Estimula la producción de colágeno y elastina, logrando una piel más joven y tersa."
      ],
      features: [
        "Reducción de arrugas finas",
        "Mejora de la flacidez",
        "Estimulación de colágeno"
      ],
      imagePlaceholder: "Mesoterapia - Anti-envejecimiento"
    },
    {
      title: "Mesoterapia Facial - Manchas y Acné",
      description: [
        "Existen protocolos de mesoterapia diseñados para tratar manchas pigmentarias y mejorar la piel con tendencia al acné.",
        "Ayudan a unificar el tono, reducir la inflamación y controlar la producción de sebo."
      ],
      features: [
        "Atenuación de manchas",
        "Control de acné y sebo",
        "Piel más uniforme y clara"
      ],
      imagePlaceholder: "Mesoterapia - Manchas y Acné"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner
        title="Tratamientos"
        subtitle="Mesoterapias"
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
