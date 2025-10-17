import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function ExosomasCorporales() {
  const treatments = [
    {
      title: "Exosomas - Regeneración Celular Corporal",
      description: [
        "Los exosomas aplicados en el cuerpo son vesículas extracelulares que contienen factores de crecimiento, proteínas y lípidos, capaces de estimular la regeneración celular y la producción de colágeno y elastina en la piel corporal.",
        "Este tratamiento innovador mejora la calidad de la piel del cuerpo, reduce la flacidez y unifica el tono en zonas como brazos, abdomen, glúteos y muslos."
      ],
      features: [
        "Estimulación de colágeno y elastina corporal",
        "Mejora de la textura y tono de la piel",
        "Reducción de flacidez y mejora de firmeza"
      ],
      imagePlaceholder: "Exosomas - Regeneración Corporal"
    },
    {
      title: "Exosomas - Tratamiento Anti-envejecimiento Corporal",
      description: [
        "Los exosomas ofrecen un potente efecto anti-envejecimiento para la piel del cuerpo, promoviendo la reparación celular y la revitalización de la piel madura.",
        "Ayudan a restaurar la luminosidad, firmeza y elasticidad en zonas como brazos, cuello, escote y piernas, combatiendo los signos visibles del envejecimiento corporal."
      ],
      features: [
        "Revitalización de piel corporal madura",
        "Restauración de luminosidad y firmeza",
        "Efecto anti-envejecimiento integral"
      ],
      imagePlaceholder: "Exosomas - Anti-envejecimiento"
    },
    {
      title: "Exosomas - Mejora de Cicatrices y Estrías Corporales",
      description: [
        "Gracias a sus propiedades regenerativas, los exosomas son efectivos en la mejora de cicatrices, estrías y marcas corporales, ayudando a suavizar la textura de la piel.",
        "Promueven una piel más uniforme y con menos imperfecciones en todo el cuerpo."
      ],
      features: [
        "Reducción de estrías y marcas corporales",
        "Mejora de cicatrices y textura de la piel",
        "Piel más uniforme y sin imperfecciones"
      ],
      imagePlaceholder: "Exosomas - Cicatrices Corporales"
    },
    {
      title: "Exosomas - Tratamiento Integral Corporal",
      description: [
        "El tratamiento integral con exosomas aborda múltiples aspectos del rejuvenecimiento corporal: regeneración celular, anti-envejecimiento y mejora de imperfecciones.",
        "Este enfoque holístico maximiza los resultados, logrando una transformación corporal completa y natural."
      ],
      features: [
        "Tratamiento integral del cuerpo",
        "Regeneración, anti-envejecimiento y mejora de imperfecciones",
        "Resultados sinérgicos y duraderos"
      ],
      imagePlaceholder: "Exosomas - Tratamiento Integral"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner
        title="Tratamientos"
        subtitle="Exosomas Corporales"
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
