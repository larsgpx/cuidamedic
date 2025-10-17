import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";

export function Tratamientos() {
  // Datos de los tratamientos basados en la imagen de referencia
  const treatments = [
    {
      title: "Estandar",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
      features: [
        "Lorem ipsum dolor sit amet consectetur",
        "Sed do eiusmod tempor incididunt ut labore",
        "Excepteur sint occaecat cupidatat non proident"
      ],
      imagePlaceholder: "Imagen del Producto"
    },
    {
      title: "Premium",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
      features: [
        "Lorem ipsum dolor sit amet consectetur",
        "Sed do eiusmod tempor incididunt ut labore",
        "Excepteur sint occaecat cupidatat non proident"
      ],
      imagePlaceholder: "Imagen del Producto"
    },
    {
      title: "Platinum",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
      features: [
        "Lorem ipsum dolor sit amet consectetur",
        "Sed do eiusmod tempor incididunt ut labore",
        "Excepteur sint occaecat cupidatat non proident"
      ],
      imagePlaceholder: "Imagen del Producto"
    },
    {
      title: "Elite",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
      features: [
        "Lorem ipsum dolor sit amet consectetur",
        "Sed do eiusmod tempor incididunt ut labore",
        "Excepteur sint occaecat cupidatat non proident"
      ],
      imagePlaceholder: "Imagen del Producto"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner 
        title="Tratamientos"
        subtitle="Limpiezas Faciales"
      />
      
      {/* Secciones de tratamientos */}
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
      
      <Footer />
    </div>
  );
}
