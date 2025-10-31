'use client';
import { Button } from "@/components/ui/button";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TabsTrigger } from "./ui/tabs";
import { Tabs, TabsList, TabsContent } from "./ui/tabs";

export function TreatmentCardEspecial({ 
  title, 
  tabs, 
  boton,
  isEven = false,
  img,
}) {
  const router = useRouter();
  const backgroundColor = isEven ? "bg-orange-50" : "bg-white";
  const imageBackground = isEven ? "bg-orange-100" : "bg-gray-200";
  const isContentLeft = isEven;
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

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isContentLeft ? '' : 'lg:grid-flow-col-dense'
        }`}>
          
          {/* Imagen */}
          <div className={`${isContentLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className={`w-full h-80 md:h-110 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${img})` }}
            >
            </div>
          </div>

          {/* Contenido */}
          <div className={`${isContentLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="max-w-lg">
              {/* Título */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                {title}
              </h2>
              <Tabs defaultValue={0} className="w-full">
                <TabsList className="grid w-full grid-cols-3 tab-list-orange">
                    {
                        tabs && tabs?.map((tab, index) => (
                            <TabsTrigger key={index} value={index}>{tab.Titulo}</TabsTrigger>
                        ))
                    }
                </TabsList>
                {
                    tabs?.map((tab, index) => (
                        <TabsContent key={index} className="mt-6 pb-4 description-treatment" value={index}>
                            {tab.descripcion && (
                                <BlocksRenderer content={tab.descripcion} />
                            )}
                            {tab.Checklist && (
                                <div className="space-y-2 text-gray-600 leading-relaxed mb-8 pt-4">
                                    {tab.Checklist.map((item) => {
                                        return (
                                            <div key={item.id} className="flex items-center space-x-2">
                                                <Image src='/icons/check.svg' alt={'check'} width={20} height={20} className="inline-block align-middle mx-1" />
                                                <span>{item.Texto}</span>
                                            </div>
                                        )})
                                    }
                                </div>
                            )}
                        </TabsContent>
                    ))
                }                
              </Tabs>



              {boton && (
                <Button onClick={() => handleNavigate(boton)} className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-8 py-3 flex items-center space-x-2 text-md">
                  Agendar cita
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
