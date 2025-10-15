import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LocationsSection() {
  const locations = [
    {
      id: 1,
      name: "Miraflores",
      address: "Calle Enrique Palacios 360, Of. 508",
      phone: "(+51) 992802065"
    },
    {
      id: 2,
      name: "Surco",
      address: "Calle Monte Rosa 284, Of. 403, Chacarilla",
      phone: "(+51) 951375222"
    },
    // {
    //   id: 3,
    //   name: "Lince",
    //   address: "Avenida Canevaro 116, Of. 602",
    //   phone: "(+51) 992802065"
    // }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 title-orange">
            Nuestras <span>Sucursales</span>
          </h2>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 px-4 max-w-6xl mx-auto">
          {locations.map((location) => (
            <div key={location.id}  className="flex flex-col gap-4 pt-4 md:pt-0 justify-center">
            <Card className="rounded-3xl bg-orange-light border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center relative">
                {/* Map Pin Icon */}
                <div className="flex justify-center mb-6 icon-map-pin absolute -top-5 left-0 right-0">
                  <div className="w-12 h-12 bg-orange-light rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#DC9F25]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                </div>

                {/* Location Image Placeholder */}
                <div className="w-full h-48 bg-gray-200 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Imagen de la Sucursal</span>
                </div>

                {/* Location Info */}
                <h3 className="text-lg font-semibold mb-2 text-left">{location.name}</h3>
                <p className="text-gray-600 text-xs  text-left">{location.address}</p>
              </CardContent>
              
            </Card>
            {/* CTA Button */}
            <Button className="cta-button w-fit bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl flex items-center justify-center space-x-2 px-8 mx-auto">
              <span>Agendar una cita</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
