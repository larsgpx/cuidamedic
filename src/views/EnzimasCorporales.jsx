import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function EnzimasCorporales() {
  const treatments = [
    {
      title: "Enzimas Recombinantes - Reducción de Grasa Localizada",
      description: [
        "Las enzimas recombinantes son una solución innovadora para la reducción de grasa localizada en el cuerpo, especialmente en abdomen, flancos, brazos y muslos.",
        "Actúan disolviendo la grasa de forma natural y segura, mejorando el contorno corporal sin cirugía invasiva."
      ],
      features: [
        "Eliminación de grasa localizada en múltiples zonas",
        "Mejora del contorno corporal",
        "Resultados progresivos y duraderos"
      ],
      imagePlaceholder: "Enzimas - Grasa Corporal"
    },
    {
      title: "Enzimas Recombinantes - Celulitis y Fibrosis",
      description: [
        "Las enzimas recombinantes son muy efectivas para tratar la celulitis y la fibrosis cutánea, ayudando a mejorar la textura de la piel y reducir la apariencia de 'piel de naranja'.",
        "Promueven la regeneración del tejido conectivo y mejoran la circulación en las zonas tratadas."
      ],
      features: [
        "Reducción de celulitis y fibrosis",
        "Mejora de la textura de la piel",
        "Piel más suave y uniforme"
      ],
      imagePlaceholder: "Enzimas - Celulitis"
    },
    {
      title: "Enzimas Recombinantes - Flacidez Corporal",
      description: [
        "Además de la grasa, las enzimas pueden mejorar la flacidez corporal, estimulando la producción de colágeno y elastina en el tejido subcutáneo.",
        "Ayudan a tensar la piel y a restaurar la firmeza, proporcionando un aspecto más tonificado y juvenil."
      ],
      features: [
        "Mejora de la flacidez cutánea",
        "Estimulación de colágeno y elastina",
        "Piel más firme y elástica"
      ],
      imagePlaceholder: "Enzimas - Flacidez Corporal"
    },
    {
      title: "Enzimas Recombinantes - Tratamiento Integral",
      description: [
        "El tratamiento integral con enzimas recombinantes aborda múltiples aspectos del contorno corporal: grasa localizada, celulitis, fibrosis y flacidez.",
        "Este enfoque holístico maximiza los resultados, logrando una transformación corporal completa y natural."
      ],
      features: [
        "Tratamiento integral del contorno corporal",
        "Mejora de grasa, celulitis y flacidez",
        "Resultados sinérgicos y duraderos"
      ],
      imagePlaceholder: "Enzimas - Tratamiento Integral"
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
            isEven={index % 2 !== 0} // Índices impares (1, 3) tendrán background naranja
            imagePlaceholder={treatment.imagePlaceholder}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
