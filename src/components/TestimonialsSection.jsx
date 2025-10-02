import { Card, CardContent } from "@/components/ui/card";

export function SuccessCasesSection() {
  const cases = [
    {
      id: 1,
      title: "Bioestimulador de Colágeno",
      image: "bg-gradient-to-br from-pink-200 to-rose-200"
    },
    {
      id: 2,
      title: "Rinomodelación",
      image: "bg-gradient-to-br from-blue-200 to-indigo-200"
    },
    {
      id: 3,
      title: "Entrecejo",
      image: "bg-gradient-to-br from-green-200 to-emerald-200"
    },
    {
      id: 4,
      title: "Plasma Rico en Plaquetas",
      image: "bg-gradient-to-br from-purple-200 to-violet-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Casos de{" "}
            <span className="text-yellow-500">Éxito</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestros pacientes confían en nuestra precisión y dedicación para lograr 
            resultados naturales y satisfactorios que transforman vidas.
          </p>
        </div>

        {/* Syringe Image */}
        <div className="flex justify-center mb-12">
          <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center transform rotate-12">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 7h-3V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM10 6h4v1h-4V6zm8 13H6V9h12v10z"/>
            </svg>
          </div>
        </div>

        {/* Before & After Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cases.map((caseItem) => (
            <Card key={caseItem.id} className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className={`h-64 ${caseItem.image} relative`}>
                  {/* Before/After Slider Effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                      <span className="text-sm font-semibold text-gray-800">{caseItem.title}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Alexandra L.",
      text: "Excelente atención y resultados increíbles. El equipo de Cuidamedic es muy profesional y los tratamientos son de primera calidad."
    },
    {
      id: 2,
      name: "Giorgio B.",
      text: "Estoy muy satisfecho con los resultados obtenidos. La atención personalizada y el cuidado en cada detalle hacen la diferencia."
    },
    {
      id: 3,
      name: "Fiorella G.",
      text: "Recomiendo totalmente Cuidamedic. Los médicos son expertos y los tratamientos superaron mis expectativas completamente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Testimonios{" "}
            <span className="text-yellow-500">Reales</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-start mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="text-right">
                  <span className="text-gray-800 font-semibold">- {testimonial.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
