'use client';
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { BrandsSection } from "@/components/BrandsSection";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import { useAPI } from "@/hooks/useAPI";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
export function Nosotros() {
  const API_NOSOTROS = (process.env.NEXT_PUBLIC_API_NOSOTROS || '/api/nosotros') + '?populate[highlights][populate][icon]=true&populate[Doctores][populate][Imagen]=true&populate[ImagenBanner]=true&populate[Imagen]=true';
  const { data, loading, error } = useAPI(API_NOSOTROS);

  console.log('📊 Datos de Nosotros desde Strapi:', data);

  useSEO(SEO_CONFIGS.nosotros);
  return (
    <Layout>
      
      {/* Hero Section */}
      <TreatmentHeroBanner 
            title={data?.data?.title}
            subtitle={data?.data?.subtitulo}
            backgroundImage={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.data?.ImagenBanner?.url || '/bg2.jpg'}`}
      />

      {/* Three-Column Feature Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">


            {data?.data?.highlights?.map((highlight) => (
               <div key={highlight.id} className="bg-white relative rounded-lg shadow-lg p-8 text-center">
                <div className="absolute -top-7 md:-top-10 justify-center mx-auto left-0 right-0 w-16 h-16 bg-[#DC9F25] p-3 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${highlight.icon?.url}`} alt={highlight.titulo} width={64} height={64} />
                </div>
                <h3 className="text-gray-600 leading-relaxed pt-4 font-medium text-color-orange">{highlight.titulo}</h3>
                <p className="text-gray-600 leading-relaxed pt-4">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "¿Quiénes somos?" Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className={`w-full h-80 rounded-4xl flex items-center justify-center ${data?.data?.Imagen ? 'bg-white' : 'bg-gray-200'}`}>
                {data?.data?.Imagen && (
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.data?.Imagen?.url}`} className="rounded-4xl" alt={data?.data?.Imagen?.alt} width={500} height={500} objectFit="cover" />
                )}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="pb-4">
                  <TabsTrigger className="data-[state=active]:bg-[#DC9F25] rounded-xl" value="account">¿Quienes Somos?</TabsTrigger>
                  <TabsTrigger className="data-[state=active]:bg-[#DC9F25] rounded-xl" value="password">Historia</TabsTrigger>
                </TabsList>
                <TabsContent value="account">{/* Main Title */}
                  <h2 className="text-3xl font-semibold text-gray-600 mb-6">
                    ¿Quiénes <b className="font-semibold text-color-orange">somos</b>?
                  </h2>

                  {/* Text Content */}
                  <div className="text-sm space-y-4 text-gray-600 leading-relaxed">
                    {data?.data?.quienesSomos && (
                      <BlocksRenderer content={data?.data?.quienesSomos} />
                    )}
                  </div>
              </TabsContent>
                <TabsContent value="password">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-color-orange">
                    Historia
                  </h2>

                  {/* Text Content */}
                  <div className="text-sm space-y-4 text-gray-600 leading-relaxed">
                    {data?.data?.Historia && (
                      <BlocksRenderer content={data?.data?.Historia} />
                    )}
                  </div>

                </TabsContent>
              </Tabs>

              
            </div>
          </div>
        </div>
      </section>

      {/* "Nuestro equipo" Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestro <b className="text-color-orange">equipo</b>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Dra. Gianina Romero */}
            {data?.data?.Doctores?.map((doctor) => (
              <div key={doctor.id} className="text-center flex flex-col items-center justify-center mx-auto">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${doctor.Imagen?.url}`} alt={doctor.nombre} width={350} height={450} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.nombre}</h3>
                  <p className="text-gray-600 font-medium text-color-orange mb-2">{doctor.puesto}</p>
                  <p className="text-gray-500 text-sm">{doctor.especialidad}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Marcas" Section */}
      <section className="bg-white">
        <BrandsSection />
      </section>
    </Layout>
  );
}
