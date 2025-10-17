import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function Enzimas() {
  const treatments = [
    {
      title: "Enzimas Recombinantes - Reducción de Grasa Localizada",
      description: [
        "Las enzimas recombinantes son una solución innovadora para la reducción de grasa localizada en el rostro y cuello, como la papada o los depósitos de grasa en las mejillas.",
        "Actúan disolviendo la grasa de forma natural, mejorando el contorno facial sin cirugía."
      ],
      features: [
        "Eliminación de papada y grasa facial",
        "Mejora del contorno mandibular",
        "Resultados progresivos y duraderos"
      ],
      imagePlaceholder: "Enzimas - Grasa Localizada"
    },
    {
      title: "Enzimas Recombinantes - Flacidez Facial",
      description: [
        "Además de la grasa, las enzimas también pueden mejorar la flacidez facial, estimulando la producción de colágeno y elastina.",
        "Ayudan a tensar la piel y a restaurar la firmeza, proporcionando un aspecto más juvenil y tonificado."
      ],
      features: [
        "Mejora de la flacidez cutánea",
        "Estimulación de colágeno y elastina",
        "Piel más firme y elástica"
      ],
      imagePlaceholder: "Enzimas - Flacidez Facial"
    },
    {
      title: "Enzimas Recombinantes - Cicatrices y Fibrosis",
      description: [
        "Las enzimas recombinantes son efectivas en el tratamiento de cicatrices de acné, queloides y fibrosis post-quirúrgicas, ayudando a remodelar el tejido y suavizar la textura de la piel.",
        "Promueven la regeneración celular y mejoran la apariencia de la piel dañada."
      ],
      features: [
        "Reducción de cicatrices de acné",
        "Mejora de queloides y fibrosis",
        "Remodelación y suavizado de la piel"
      ],
      imagePlaceholder: "Enzimas - Cicatrices"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner
        title="Tratamientos"
        subtitle="Enzimas Recombinantes"
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
