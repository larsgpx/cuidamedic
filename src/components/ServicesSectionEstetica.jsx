'use client';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DoctorEvaluationCard } from "@/components/DoctorEvaluationCard";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useRouter } from 'next/navigation';

export function ServicesSectionEstetica({ allServices = false, servicesData, freeTreatment = false }) {
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
      overlay: "from-orange-100/80 to-orange-200/40"
    },
    {
      position: "top-small-2",
      overlay: "from-orange-100/80 to-orange-200/40"
    },
    {
      position: "top-small-3",
      overlay: "from-orange-100/80 to-orange-200/40"
    },
    {
      position: "bottom-large-1",
      overlay: "from-orange-100/80 to-orange-200/40"
    },
    {
      position: "bottom-large-2",
      overlay: "from-orange-100/80 to-orange-200/40"
    },
    {
      position: "bottom-large-3",
      overlay: "from-orange-100/80 to-orange-200/40"
    },
    {
      position: "bottom-large-4",
      overlay: "from-orange-100/80 to-orange-200/40"
    },  
  ]

  // Limitar servicios según el prop allServices
  const limitedServices = servicesData && Array.isArray(servicesData)
    ? (allServices ? servicesData : servicesData.slice(0, 4))
    : [];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4">
 
        {/* Service Cards - Responsivo: mobile 1 col, tablet 2 cols, desktop hasta 4 cols (o más si allServices es true) */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {limitedServices.map((service, index) => {
              const cardHeight = 'h-56';
              
              // Construir la URL de la imagen de forma segura
              const getImageUrl = () => {
                if (!service?.Imagen?.url) return '';
                const imageUrl = service.Imagen.url;
                if (imageUrl.includes('http://') || imageUrl.includes('https://')) {
                  return imageUrl;
                }
                const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
                return `${baseUrl}${imageUrl}`;
              };
              
              const imageUrl = getImageUrl();
              const backgroundImageStyle = imageUrl ? { backgroundImage: `url('${imageUrl}')` } : {};
              
              // Calcular ancho de las cards para flexbox
              const getCardWidth = () => {
                const count = limitedServices.length;
                if (count === 1) return 'w-full max-w-md';
                if (count === 2) return 'w-full md:w-[calc(50%-0.75rem)] max-w-md';
                if (count === 3) return 'w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm';
                return 'w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] max-w-sm';
              };
              
              return (
                <div key={service.id || index} className={getCardWidth()}>
                  <Card onClick={() => handleNavigate(service.url)} className={`overflow-hidden border-0 shadow-lg ${cardHeight} relative group cursor-pointer transition-all duration-300 bg-orange-primary w-full`}>
                    <CardContent className="p-0 h-full">
                      <div 
                        className={`h-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200`}
                        style={backgroundImageStyle}
                      >
                        {/* Overlay para cards normales */}
                        <div className={`absolute inset-0 bg-gradient-to-br  transition-all duration-300 group-hover:backdrop-blur-sm`}></div>
                        
                        {/* Overlay base para featured card */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${overlays[index]?.overlay || 'from-orange-100/90 to-orange-200/90'} transition-all duration-300 group-hover:backdrop-blur-sm`}></div>
                        
                        
                        {/* Título centrado absolutamente */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <h3 className={`text-2xl font-semibold transition-all duration-300 text-center ${
                            service.featured 
                              ? 'text-white text-xl group-hover:text-2xl transform translate-y-0 group-hover:-translate-y-2' 
                              : 'text-gray-700 text-xl group-hover:text-2xl transform translate-y-0 group-hover:-translate-y-2'
                          }`}>
                            {service.Titulo}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Doctors Section */}
        {freeTreatment && (
          <DoctorEvaluationCard />
        )}

        <div>
          
        </div>
      </div>
    </section>
  );
}
