import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function Exosomas() {
  const treatments = [
    {
      title: "Exosomas - Regeneración Celular Facial",
      description: [
        "Los exosomas son vesículas extracelulares que contienen factores de crecimiento, proteínas y lípidos, capaces de estimular la regeneración celular y la producción de colágeno y elastina.",
        "Este tratamiento innovador mejora la calidad de la piel, reduce arrugas y líneas finas, y unifica el tono."
      ],
      features: [
        "Estimulación de colágeno y elastina",
        "Mejora de la textura y tono de la piel",
        "Reducción de arrugas y líneas finas"
      ],
      imagePlaceholder: "Exosomas - Regeneración Facial"
    },
    {
      title: "Exosomas - Tratamiento Anti-envejecimiento",
      description: [
        "Los exosomas ofrecen un potente efecto anti-envejecimiento al promover la reparación celular y la revitalización de la piel madura.",
        "Ayudan a restaurar la luminosidad, firmeza y elasticidad, combatiendo los signos visibles del envejecimiento."
      ],
      features: [
        "Revitalización de piel madura",
        "Restauración de luminosidad y firmeza",
        "Efecto anti-envejecimiento integral"
      ],
      imagePlaceholder: "Exosomas - Anti-envejecimiento"
    },
    {
      title: "Exosomas - Mejora de Cicatrices y Manchas",
      description: [
        "Gracias a sus propiedades regenerativas, los exosomas son efectivos en la mejora de cicatrices (especialmente de acné) y la reducción de manchas pigmentarias.",
        "Promueven una piel más uniforme y con menos imperfecciones."
      ],
      features: [
        "Reducción de cicatrices de acné",
        "Atenuación de manchas pigmentarias",
        "Piel más uniforme y sin imperfecciones"
      ],
      imagePlaceholder: "Exosomas - Cicatrices y Manchas"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner
        title="Tratamientos"
        subtitle="Exosomas"
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
