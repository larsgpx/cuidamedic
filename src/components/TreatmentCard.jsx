import { Button } from "@/components/ui/button";

export function TreatmentCard({ 
  title, 
  description, 
  features = [], 
  isEven = false,
  imagePlaceholder = "Imagen del Producto"
}) {
  const backgroundColor = isEven ? "bg-orange-50" : "bg-white";
  const imageBackground = isEven ? "bg-orange-100" : "bg-gray-200";
  const isContentLeft = isEven;

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isContentLeft ? '' : 'lg:grid-flow-col-dense'
        }`}>
          
          {/* Imagen */}
          <div className={`${isContentLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className={`w-full h-80 ${imageBackground} rounded-lg flex items-center justify-center shadow-lg`}>
              <span className="text-gray-600 text-lg font-medium">{imagePlaceholder}</span>
            </div>
          </div>

          {/* Contenido */}
          <div className={`${isContentLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="max-w-lg">
              {/* Título */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                {title}
              </h2>

              {/* Descripción */}
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                {Array.isArray(description) ? (
                  description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{description}</p>
                )}
              </div>

              {/* Lista de características */}
              {features.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Botón CTA */}
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-8 py-3 flex items-center space-x-2 text-md">
                Agendar cita
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
