import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function Endovenosos() {
  // Datos específicos para limpiezas faciales
  const endovenososTreatments = [
    {
      title: "Vitamina C",
      description: [
        "La vitamina C es una vitamina hidrosoluble que ayuda a mejorar la textura de la piel, reducir la inflamación y mejorar la luminosidad de la piel."
      ],
      features: [
        "Limpieza profunda con productos especializados",
        "Exfoliación suave para remover células muertas",
        "Hidratación y protección solar"
      ],
      imagePlaceholder: "Limpieza Facial Básica"
    },
    {
      title: "Coctal Antiedad",
      description: [
        "La limpieza facial profesional incluye técnicas avanzadas como extracción de comedones, mascarillas especializadas y masaje facial relajante.",
        "Ideal para pieles con imperfecciones, puntos negros o que necesitan un tratamiento más intensivo."
      ],
      features: [
        "Extracción profesional de comedones",
        "Mascarillas especializadas según tipo de piel",
        "Masaje facial relajante de 15 minutos"
      ],
      imagePlaceholder: "Limpieza Facial Profesional"
    },
    {
      title: "Plasma Rico en Plaquetas",
      description: [
        "Nuestro tratamiento premium combina limpieza profunda con tecnología avanzada y productos de alta gama para resultados excepcionales.",
        "Incluye análisis de piel, tratamiento personalizado y seguimiento post-tratamiento."
      ],
      features: [
        "Análisis digital de la piel",
        "Productos de marcas premium",
        "Seguimiento personalizado post-tratamiento"
      ],
      imagePlaceholder: "Limpieza Facial Premium"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner 
        title="Tratamientos"
        subtitle="Endovenosos"
      />
      
      {/* Secciones de tratamientos faciales */}
      {endovenososTreatments.map((treatment, index) => (
        <TreatmentCard
          key={index}
          title={treatment.title}
          description={treatment.description}
          features={treatment.features}
          isEven={index % 2 !== 0} // Índices impares (1, 3) tendrán background naranja
          imagePlaceholder={treatment.imagePlaceholder}
        />
      ))}
      
      <Footer />
    </div>
  );
}
