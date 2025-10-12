import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WhyChooseUsSection() {
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Imagen del Producto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Tratamiento Facial",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "bg-gradient-to-br from-pink-200 to-purple-200",
      backgroundImage: "/bg1.jpg",
      featured: false,
      position: "top-left", // 5 columnas
      overlay: "from-pink-100/80 to-purple-100/80"
    },
    {
      id: 2,
      title: "Medicina Estética",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "bg-gradient-to-br from-blue-200 to-cyan-200",
      backgroundImage: "/bg1.jpg",
      featured: false,
      position: "bottom-left", // 7 columnas
      overlay: "from-green-100/80 to-emerald-100/80"
    },
    {
      id: 3,
      title: "Tratamiento Ocular",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "bg-gradient-to-br from-green-200 to-emerald-200",
      backgroundImage: "/bg1.jpg",
      featured: false,
      position: "top-right", // 7 columnas
      overlay: "from-blue-100/80 to-cyan-100/80"
    },
    {
      id: 4,
      title: "Tratamiento Premium",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "bg-yellow-500",
      backgroundImage: "/bg2.jpg",
      featured: true,
      position: "bottom-right", // 5 columnas
      overlay: null
    }
  ];

  // Función helper para obtener las clases CSS basadas en la posición
  const getPositionClasses = (position) => {
    const positionMap = {
      'top-left': 'col-span-12 md:col-span-5',
      'top-right': 'col-span-12 md:col-span-7',
      'bottom-left': 'col-span-12 md:col-span-7',
      'bottom-right': 'col-span-12 md:col-span-5'
    };
    return positionMap[position] || 'col-span-12';
  };

  // Función helper para obtener las clases del contenedor de fila
  const getRowClasses = (position) => {
    const topPositions = ['top-left', 'top-right'];
    const bottomPositions = ['bottom-left', 'bottom-right'];
    
    if (topPositions.includes(position)) {
      return 'grid grid-cols-12 gap-6 mb-6';
    } else if (bottomPositions.includes(position)) {
      return 'grid grid-cols-12 gap-6';
    }
    return 'grid grid-cols-12 gap-6';
  };

  // Agrupar servicios por fila
  const topRowServices = services.filter(service => 
    service.position === 'top-left' || service.position === 'top-right'
  );
  
  const bottomRowServices = services.filter(service => 
    service.position === 'bottom-left' || service.position === 'bottom-right'
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
          {/* Fila superior */}
          <div className={getRowClasses('top-left')}>
            {topRowServices.map((service) => (
              <div key={service.id} className={getPositionClasses(service.position)}>
                <Card className={`overflow-hidden border-0 shadow-lg h-64 relative ${
                  service.featured ? 'bg-orange-primary' : 'bg-white'
                }`}>
                  <CardContent className="p-0 h-full">
                    <div 
                      className={`h-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat ${
                        service.featured 
                          ? 'flex items-start justify-start p-6' 
                          : 'bg-gradient-to-br from-gray-100 to-gray-200'
                      }`}
                      style={{ backgroundImage: `url(${service.backgroundImage})` }}
                    >
                      {/* Overlay solo si no es featured */}
                      {!service.featured && service.overlay && (
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.overlay}`}></div>
                      )}
                      
                      <div className={`relative z-10 ${
                        service.featured ? 'text-white' : 'text-center px-4'
                      }`}>
                        <h3 className={`text-xl font-semibold mb-2 ${
                          service.featured ? 'mb-4' : 'text-gray-800 mb-2'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm ${
                          service.featured ? 'leading-relaxed' : 'text-gray-600'
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

          {/* Fila inferior */}
          <div className={getRowClasses('bottom-left')}>
            {bottomRowServices.map((service) => (
              <div key={service.id} className={getPositionClasses(service.position)}>
                <Card className={`overflow-hidden border-0 shadow-lg h-64 relative ${
                  service.featured ? 'bg-orange-primary' : 'bg-white'
                }`}>
                  <CardContent className="p-0 h-full">
                    <div 
                      className={`h-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat ${
                        service.featured 
                          ? 'flex items-start justify-start p-6' 
                          : 'bg-gradient-to-br from-gray-100 to-gray-200'
                      }`}
                      style={{ backgroundImage: `url(${service.backgroundImage})` }}
                    >
                      {/* Overlay solo si no es featured */}
                      {!service.featured && service.overlay && (
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.overlay}`}></div>
                      )}
                      
                      <div className={`relative z-10 ${
                        service.featured ? 'text-white' : 'text-center px-4'
                      }`}>
                        <h3 className={`text-xl font-semibold mb-2 ${
                          service.featured ? 'mb-4' : 'text-gray-800 mb-2'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm ${
                          service.featured ? 'leading-relaxed' : 'text-gray-600'
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
        <div className="text-center pt-12 my-12 w-full">
          <Card className="relative bg-orange-light border-0 shadow-lg w-[100%] h-56 mx-auto rounded-3xl">
            <div className="absolute bottom-0 left-0 flex flex-row items-center justify-center">
              <Image src="/doctor1.png" alt="Doctor1" className="relative left-20 scale-x-[-1]" width={200} height={110} />
              <Image src="/doctor2.png" alt="Doctor2" className="relative left-10 -bottom-1" width={185} height={105} />
            </div>
            <CardContent className="p-8 text-center w-80 flex flex-col items-center absolute right-[15%]">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 pt-5">
                ¿No sabes cuál es tu tratamiento ideal?
              </h3>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 mt-2 rounded-xl">
                Solicita tu evaluación gratuita
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          
        </div>
      </div>
    </section>
  );
}
