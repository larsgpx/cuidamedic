'use client';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DoctorEvaluationCard } from "@/components/DoctorEvaluationCard";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useRouter } from 'next/navigation';

export function ServicesSectionEstetica({ servicesData }) {
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
      overlay: "from-orange-100/80 to-orange-200/30"
    },
    {
      position: "top-small-2",
      overlay: "from-orange-100/80 to-orange-200/30"
    },
    {
      position: "top-small-3",
      overlay: "from-orange-100/80 to-orange-200/30"
    },
    {
      position: "bottom-large-1",
      overlay: "from-orange-100/80 to-orange-200/30"
    },
    {
      position: "bottom-large-2",
      overlay: "from-orange-100/80 to-orange-200/30"
    },
    {
      position: "bottom-large-3",
      overlay: "from-orange-100/80 to-orange-200/30"
    },
    {
      position: "bottom-large-4",
      overlay: "from-orange-100/80 to-orange-200/30"
    },  
  ]
 

  // Función helper para obtener las clases CSS basadas en la cantidad de elementos en una fila
  const getColumnClasses = (itemCount) => {
    if (itemCount === 1) {
      return 'col-span-12';
    } else if (itemCount === 2) {
      return 'col-span-12 md:col-span-6';
    } else {
      return 'col-span-12 md:col-span-4';
    }
  };

  // Función helper para agrupar servicios en filas dinámicas
  const groupServicesIntoRows = (servicesData) => {
    if (!servicesData || !Array.isArray(servicesData)) return [];
    
    const rows = [];
    const MAX_PER_ROW = 3; // Máximo 3 por fila
    
    let currentRow = [];
    
    servicesData.forEach((service, index) => {
      // Determinar si debe ir en una fila pequeña (3) o grande (2)
      // Alternamos: cada 3 filas pequeñas, hacemos 2 filas grandes
      const cycleIndex = Math.floor(index / 9); // Cada 9 items = 3 filas de 3
      const positionInCycle = index % 9;
      
      let maxItemsForThisRow = MAX_PER_ROW;
      
      // Si estamos en las últimas posiciones de un ciclo de 9, usar 2 items por fila
      if (cycleIndex > 0 && positionInCycle >= 6) {
        maxItemsForThisRow = 2;
      }
      
      // Agregar item a la fila actual
      currentRow.push(service);
      
      // Si la fila está completa, guardarla y empezar una nueva
      if (currentRow.length === maxItemsForThisRow) {
        rows.push({ 
          items: [...currentRow], 
          type: maxItemsForThisRow === 2 ? 'large' : 'small' 
        });
        currentRow = [];
      }
    });
    
    // Agregar la última fila si tiene elementos
    if (currentRow.length > 0) {
      rows.push({ 
        items: currentRow, 
        type: currentRow.length <= 2 ? 'large' : 'small' 
      });
    }
    
    return rows;
  };
  
  const serviceRows = groupServicesIntoRows(servicesData);
  
  // Calcular índices globales para overlays
  let globalIndexCounter = 0;
  const serviceRowsWithIndex = serviceRows.map(row => ({
    ...row,
    items: row.items.map(item => {
      const index = globalIndexCounter;
      globalIndexCounter++;
      return { ...item, globalIndex: index };
    })
  }));

  console.log('📊 servicesData:', servicesData);

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4">
 
        {/* Service Cards - Layout dinámico */}
        <div className="mb-16">
          {serviceRowsWithIndex.map((row, rowIndex) => {
            const isLarge = row.type === 'large';
            const cardHeight = isLarge ? 'h-64' : 'h-56';
            
            return (
              <div key={rowIndex} className="grid grid-cols-12 gap-6 mb-6">
                {row.items.map((service, itemIndex) => {
                  const globalIndex = service.globalIndex || itemIndex;
                  
                  return (
                    <div key={service.id} className={getColumnClasses(row.items.length)}>
                      <Card onClick={() => handleNavigate(service.url)} className={`overflow-hidden border-0 shadow-lg ${cardHeight} relative group cursor-pointer transition-all duration-300 bg-orange-primary`}>
                        <CardContent className="p-0 h-full">
                          <div 
                            className={`h-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200`}
                            style={{ backgroundImage: `url('${service?.Imagen?.url.includes('http') ? service?.Imagen?.url : process.env.NEXT_PUBLIC_BASE_URL}${service?.Imagen?.url}')` }}
                          >
                            {/* Overlay para cards normales */}
                            <div className={`absolute inset-0 bg-gradient-to-br  transition-all duration-300 group-hover:backdrop-blur-sm`}></div>
                            
                            {/* Overlay base para featured card */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${overlays[globalIndex]?.overlay || 'from-orange-100/80 to-orange-200/30'} transition-all duration-300 group-hover:backdrop-blur-sm`}></div>
                            
                            
                            {/* Título centrado absolutamente */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                              <h3 className={`text-2xl font-semibold transition-all duration-300 text-center ${
                                service.featured 
                                  ? 'text-white text-2xl group-hover:text-3xl transform translate-y-0 group-hover:-translate-y-2' 
                                  : 'text-gray-600 text-2xl group-hover:text-3xl transform translate-y-0 group-hover:-translate-y-2'
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
            );
          })}
        </div>

        {/* Doctors Section */}
        <DoctorEvaluationCard />

        <div>
          
        </div>
      </div>
    </section>
  );
}
