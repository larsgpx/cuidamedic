import { InternaTratamiento } from "@/views/InternaTratamiento";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";

export default function MesoterapiaCocktailsPage() {
    const data = {
        title: "Mesoterapia & Cocktails",
        subtitle: "Vitaminas y terapias regenerativas que revitalizan tu piel desde el interior",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/bg1.jpg",
        backgroundImage: "/bg1.jpg",
        featured: false,
        position: "bottom-left",
        overlay: "from-green-100/80 to-emerald-100/80"
    }
  // Datos específicos para Mesoterapia & Cocktails
  const mesoterapiaCocktailsTreatments = [
    {
      title: "Mesoterapia & Cocktails",
      description: [
        "La mesoterapia es una técnica que utiliza inyecciones de vitaminas y minerales para rejuvenecer la piel y mejorar la salud de la piel.",
        "Ideal para pieles con imperfecciones, puntos negros o que necesitan un tratamiento más intensivo."
      ],
      features: [
        "Inyecciones de vitaminas y minerales",
        "Rejuvenecimiento de la piel",
        "Mejora de la salud de la piel"
      ],
      imagePlaceholder: "Mesoterapia"
    },
    {
      title: "Cocktails",
      description: [
        "Los cocktails son una técnica que utiliza inyecciones de vitaminas y minerales para rejuvenecer la piel y mejorar la salud de la piel.",
        "Incluye análisis de piel, tratamiento personalizado y seguimiento post-tratamiento."
      ],
      features: [
        "Análisis digital de la piel",
        "Productos de marcas premium",
        "Seguimiento personalizado post-tratamiento"
      ],
      imagePlaceholder: "Cocktails"
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
        title={data.title}
        subtitle={data.subtitle}
        backgroundImage={data.backgroundImage}
      />
      
      {/* Secciones de tratamientos faciales */}
      {mesoterapiaCocktailsTreatments.map((treatment, index) => (
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
