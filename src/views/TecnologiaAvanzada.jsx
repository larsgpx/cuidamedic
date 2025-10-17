import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function TecnologiaAvanzada() {
  // Datos específicos para limpiezas faciales
  const facialTreatments = [
    {
      title: "Básica",
      description: [
        "Nuestra limpieza facial básica es perfecta para el mantenimiento regular de tu piel. Incluye limpieza profunda, exfoliación suave y hidratación.",
        "Este tratamiento está diseñado para pieles normales y mixtas que buscan mantener un cutis saludable y radiante de forma regular."
      ],
      features: [
        "Limpieza profunda con productos especializados",
        "Exfoliación suave para remover células muertas",
        "Hidratación y protección solar"
      ],
      imagePlaceholder: "Limpieza Facial Básica"
    },
    {
      title: "Profesional",
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
      title: "Premium",
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
    {
      title: "VIP",
      description: [
        "El tratamiento VIP es nuestra experiencia más exclusiva, diseñada para ofrecer resultados de spa de lujo con atención personalizada.",
        "Incluye múltiples técnicas, productos de lujo y un ambiente relajante para una experiencia completa de bienestar."
      ],
      features: [
        "Técnicas múltiples en una sola sesión",
        "Productos de marcas de lujo",
        "Ambiente spa con música relajante"
      ],
      imagePlaceholder: "Limpieza Facial VIP"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner 
        title="Tratamientos"
        subtitle="Limpiezas Faciales"
      />
      
      {/* Secciones de tratamientos faciales */}
      {facialTreatments.map((treatment, index) => (
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
