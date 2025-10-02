import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              ¿Por qué{" "}
              <span className="text-yellow-500">Elegirnos</span>?
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
      featured: false
    },
    {
      id: 2,
      title: "Medicina Estética",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "bg-gradient-to-br from-blue-200 to-cyan-200",
      featured: false
    },
    {
      id: 3,
      title: "Tratamiento Ocular",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "bg-gradient-to-br from-green-200 to-emerald-200",
      featured: false
    },
    {
      id: 4,
      title: "Tratamiento Premium",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "bg-yellow-500",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Nuestros Servicios
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className={`overflow-hidden ${service.featured ? 'bg-yellow-500' : 'bg-white'} border-0 shadow-lg`}>
              <CardContent className="p-0">
                <div className={`h-64 ${service.image} flex items-center justify-center relative`}>
                  {!service.featured && (
                    <div className="absolute inset-0 bg-black/20"></div>
                  )}
                  <div className={`text-center ${service.featured ? 'text-white' : 'text-gray-600'}`}>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm px-4">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Doctors Section */}
        <div className="text-center mb-12">
          <div className="w-full max-w-2xl mx-auto h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-8">
            <span className="text-gray-600 text-lg">Imagen de Doctores</span>
          </div>
          
          <Card className="bg-gray-100 border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                ¿No sabes cuál es tu tratamiento ideal?
              </h3>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full">
                Solicita tu evaluación gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
