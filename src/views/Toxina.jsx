import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function Toxina() {
  const treatments = [
    {
      title: "Toxina Botulínica - Frente",
      description: [
        "La aplicación de toxina botulínica en la frente ayuda a suavizar las líneas de expresión y arrugas horizontales, proporcionando un aspecto más joven y relajado.",
        "Es un procedimiento rápido y mínimamente invasivo, ideal para quienes buscan resultados efectivos sin cirugía."
      ],
      features: [
        "Reducción de arrugas frontales",
        "Prevención de nuevas líneas de expresión",
        "Resultados naturales y duraderos"
      ],
      imagePlaceholder: "Toxina Botulínica - Frente"
    },
    {
      title: "Toxina Botulínica - Entrecejo",
      description: [
        "El tratamiento del entrecejo con toxina botulínica es muy efectivo para eliminar las molestas líneas de 'preocupación' o 'ceño fruncido', que pueden dar una apariencia de enojo o cansancio.",
        "Este procedimiento relaja los músculos específicos, logrando una expresión más suave y serena."
      ],
      features: [
        "Eliminación de líneas glabelares",
        "Aspecto más relajado y menos severo",
        "Mejora la expresión facial general"
      ],
      imagePlaceholder: "Toxina Botulínica - Entrecejo"
    },
    {
      title: "Toxina Botulínica - Patas de Gallo",
      description: [
        "Las patas de gallo son arrugas que aparecen alrededor de los ojos. La toxina botulínica es el tratamiento estrella para suavizarlas, abriendo la mirada y rejuveneciendo el contorno ocular.",
        "Es un tratamiento seguro y popular para restaurar la frescura de la zona periorbital."
      ],
      features: [
        "Suaviza arrugas periorbitales",
        "Rejuvenece la mirada",
        "Resultados visibles en pocos días"
      ],
      imagePlaceholder: "Toxina Botulínica - Patas de Gallo"
    },
    {
      title: "Toxina Botulínica - Full Face",
      description: [
        "El tratamiento Full Face con toxina botulínica aborda múltiples áreas del rostro para una armonización completa. Incluye frente, entrecejo y patas de gallo, y puede extenderse a otras zonas según la evaluación.",
        "Este enfoque integral busca un rejuvenecimiento facial equilibrado y natural."
      ],
      features: [
        "Tratamiento integral de arrugas faciales",
        "Armonización y rejuvenecimiento completo",
        "Personalizado según las necesidades del paciente"
      ],
      imagePlaceholder: "Toxina Botulínica - Full Face"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner
        title="Tratamientos"
        subtitle="Toxina Botulínica"
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
