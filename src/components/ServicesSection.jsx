import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DoctorEvaluationCard } from "@/components/DoctorEvaluationCard";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useRouter } from 'next/navigation';

export function WhyChooseUsSection({ description, image}) {
  const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + image;
  const descriptionDefault = "En Cuidamedic, tu bienestar y confianza son nuestra prioridad. Somos un centro médico estético en Lima, con sedes en Surco y Miraflores, especializado en tratamientos faciales y corporales con tecnología avanzada y respaldo médico certificado.";
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-semibold mb-6">
              ¿Por qué{" "}
              <b className="highlight font-semibold">Elegirnos</b>?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {description && (
                <BlocksRenderer content={description} />
              )}
              {!description && (
                <p>{descriptionDefault}</p>
              )}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center rounded-xl">
            {image && (
              <div className="relative w-full max-w-md h-80">
                <Image 
                  src={imageUrl} 
                  alt="Por que elegir cuidamedic" 
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-xl object-cover max-w-90 md:max-w-full"
                />
              </div>
            )}
            {!image && (
              <div className="w-full max-w-md h-80 bg-gray-200 rounded-3xl flex items-center justify-center">
                <span className="text-gray-500 text-lg">Imagen del Producto</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ servicesData }) {
  const router = useRouter();
  
  // Función para manejar la navegación
  const handleNavigate = (url) => {
    if (!url) return;
    
    // Si la URL es una ruta interna (empieza con /)
    if (url.startsWith('/')) {
      router.push(url);
    } 
    // Si es una URL externa (http/https)
    else if (url.startsWith('http://') || url.startsWith('https://')) {
      window.open(url, '_blank');
    } 
    // Si es una URL relativa, asumimos que es interna
    else {
      router.push(`/${url}`);
    }
  };
  
  const overlays = [
    {
      position: "top-small-1",
      overlay: "from-pink-100/80 to-purple-100/80"
    },
    {
      position: "top-small-2",
      overlay: "from-green-100/80 to-emerald-100/80"
    },
    {
      position: "top-small-3",
      overlay: "from-blue-100/80 to-cyan-100/80"
    },
    {
      position: "bottom-large-1",
      overlay: "from-orange-100/80 to-red-100/80"
    },
    {
      position: "bottom-large-2",
      overlay: "from-purple-100/80 to-indigo-100/80"
    }
  ]
  const services = [
    {
      id: 1,
      title: "Limpieza Faciales",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "bg-gradient-to-br from-pink-200 to-purple-200",
      backgroundImage: "/bg1.jpg",
      featured: false,
      position: "top-small-1",
      overlay: "from-pink-100/80 to-purple-100/80"
    },
    {
      id: 2,
      title: "Tratamientos Endovenosos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "bg-gradient-to-br from-green-200 to-emerald-200",
      backgroundImage: "/bg1.jpg",
      featured: false,
      position: "top-small-2",
      overlay: "from-green-100/80 to-emerald-100/80"
    },
    {
      id: 3,
      title: "Mesoterapia & Cocktails",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "bg-gradient-to-br from-blue-200 to-cyan-200",
      backgroundImage: "/bg1.jpg",
      featured: false,
      position: "top-small-3",
      overlay: "from-blue-100/80 to-cyan-100/80"
    },
    {
      id: 4,
      title: "Tratamientos Estéticos Corporales",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "bg-gradient-to-br from-orange-200 to-red-200",
      backgroundImage: "/bg2.jpg",
      featured: true,
      position: "bottom-large-1",
      overlay: "from-orange-100/80 to-red-100/80"
    },
    {
      id: 5,
      title: "Tratamientos Estéticos Faciales",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "bg-gradient-to-br from-purple-200 to-indigo-200",
      backgroundImage: "/bg2.jpg",
      featured: true,
      position: "bottom-large-2",
      overlay: "from-purple-100/80 to-indigo-100/80"
    }
  ];

  // Función helper para obtener las clases CSS basadas en la posición
  const getPositionClasses = (position) => {
    const positionMap = {
      // Servicios pequeños (arriba)
      'top-small-1': 'col-span-12 md:col-span-4',
      'top-small-2': 'col-span-12 md:col-span-4',
      'top-small-3': 'col-span-12 md:col-span-4',
      // Servicios grandes (abajo)
      'bottom-large-1': 'col-span-12 md:col-span-6',
      'bottom-large-2': 'col-span-12 md:col-span-6'
    };
    return positionMap[position] || 'col-span-12';
  };

  // Función helper para obtener las clases del contenedor de fila
  const getRowClasses = (position) => {
    const topPositions = ['top-small-1', 'top-small-2', 'top-small-3'];
    const bottomPositions = ['bottom-large-1', 'bottom-large-2'];
    
    if (topPositions.includes(position)) {
      return 'grid grid-cols-12 gap-6 mb-6';
    } else if (bottomPositions.includes(position)) {
      return 'grid grid-cols-12 gap-6';
    }
    return 'grid grid-cols-12 gap-6';
  };

  // Agrupar servicios por fila
  const topRowServices = services.filter(service => 
    service.position === 'top-small-1' || 
    service.position === 'top-small-2' || 
    service.position === 'top-small-3'
  );
  
  const bottomRowServices = services.filter(service => 
    service.position === 'bottom-large-1' || 
    service.position === 'bottom-large-2'
  );

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center mb-16">
          Nuestros <span className="highlight font-semibold">Servicios</span>
        </h2>

        {/* Service Cards - Layout dinámico */}
        <div className="mb-16">
          {/* Fila superior - 3 servicios pequeños */}
          <div className={getRowClasses('top-small-1')}>
            {servicesData?.map((service, index) => (
              <div key={service.id} className={getPositionClasses(overlays[index].position)}>
                <Card onClick={() => handleNavigate(service.url)} className={`overflow-hidden border-0 shadow-lg h-56 relative group cursor-pointer transition-all duration-300 bg-orange-primary`}>
                  <CardContent className="p-0 h-full">
                    <div 
                      className={`h-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200`}
                      style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${service?.imagen?.url})` }}
                    >
                      {/* Overlay para cards normales */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.overlay} transition-all duration-300 group-hover:backdrop-blur-sm`}></div>
                      
                      
                      {/* Overlay base para featured card */}
                      
                        <div className="absolute inset-0 bg-gradient-to-br from-red-100/80 to-cyan-100/80 transition-all duration-300 group-hover:backdrop-blur-sm"></div>
                      
                      
                      {/* Blur overlay que aparece en hover */}
                      
                      <div className="absolute inset-0 bg-orange-primary/0 group-hover:bg-orange-primary/40 transition-all duration-300 backdrop-blur-0 group-hover:backdrop-blur-sm"></div>
                      
                      
                      
                        <div className="absolute inset-0 bg-orange-primary/0 group-hover:bg-orange-primary/30 transition-all duration-300 backdrop-blur-0 group-hover:backdrop-blur-sm"></div>
                      
                      
                      {/* Título centrado absolutamente */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h3 className={`text-lg font-semibold transition-all duration-300 text-center ${
                          service.featured 
                            ? 'text-white opacity-100 group-hover:opacity-0 transform translate-y-0 group-hover:-translate-y-8' 
                            : 'text-gray-600 opacity-100 group-hover:opacity-0 transform translate-y-0 group-hover:-translate-y-8'
                        }`}>
                          {service.titulo}
                        </h3>
                      </div>
                      
                      {/* Descripción centrada absolutamente */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <p className={`text-sm transition-all duration-300 text-center px-4 ${
                          'leading-relaxed text-white opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0'
                        }`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors Section */}
        <DoctorEvaluationCard />

        <div>
          
        </div>
      </div>
    </section>
  );
}
