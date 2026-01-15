'use client';
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { BrandsSection } from "@/components/BrandsSection";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import { useAPI } from "@/hooks/useAPI";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export function Nosotros() {
  const [dataNosotros, setDataNosotros] = useState(null);
  const API_NOSOTROS = '/api/nosotros?populate[highlights][populate][icon]=true&populate[Doctores][populate][Imagen]=true&populate[imagenBanner]=true&populate[Imagen]=true&populate[Seo]=true';
  const { data, loading, error } = useAPI(API_NOSOTROS);
  
  useEffect(() => {
    if (data) {
      setDataNosotros(data?.data);
    }
  }, [data]);

  // Configuración del carousel
  const responsiveDoctors = {
    desktop: {
      breakpoint: { max: 2800, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const showCarousel = dataNosotros?.Doctores?.length > 3;

  useSEO({
      title: dataNosotros?.Seo?.title || 'Nosotros - Cuidamedic',
      description: dataNosotros?.Seo?.descripcion || 'Conoce más sobre Cuidamedic, nuestro equipo de médicos expertos y nuestra experiencia en medicina estética.',
      keywords: dataNosotros?.Seo?.keywords || 'sobre nosotros, médicos expertos, experiencia, medicina estética',
      url: process.env.NEXT_PUBLIC_URL + '/nosotros',
  });

  return (
    <Layout>
      
      {/* Hero Section */}
      <TreatmentHeroBanner 
            title={dataNosotros?.title}
            subtitle={dataNosotros?.subtitulo}
            backgroundImage={`${dataNosotros?.imagenBanner?.url.includes('http') ? dataNosotros?.imagenBanner?.url : process.env.NEXT_PUBLIC_BASE_URL}${dataNosotros?.imagenBanner?.url || '/bg2.jpg'}`}
      />


      {/* "¿Quiénes somos?" Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  max-w-6xl mx-auto">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className={`w-full h-70 md:h-110 rounded-4xl flex items-center justify-center bg-cover bg-center`} style={{ backgroundImage: `url(${dataNosotros?.Imagen?.url.includes('http') ? dataNosotros?.Imagen?.url : process.env.NEXT_PUBLIC_BASE_URL}${dataNosotros?.Imagen?.url})` }}>
                
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="pb-4">
                  <TabsTrigger className="data-[state=active]:bg-[#DC9E26] rounded-xl" value="account">¿Quienes Somos?</TabsTrigger>
                  <TabsTrigger className="data-[state=active]:bg-[#DC9E26] rounded-xl" value="password">Historia</TabsTrigger>
                </TabsList>
                <TabsContent value="account">{/* Main Title */}
                  <h2 className="text-3xl font-semibold text-gray-600 mb-6">
                    ¿Quiénes <b className="font-semibold text-color-orange">somos</b>?
                  </h2>

                  {/* Text Content */}
                  <div className="text-sm space-y-4 text-gray-600 leading-relaxed">
                    {dataNosotros?.quienesSomos && (
                      <BlocksRenderer content={dataNosotros?.quienesSomos} />
                    )}
                  </div>
              </TabsContent>
                <TabsContent value="password">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-color-orange">
                    Historia
                  </h2>

                  {/* Text Content */}
                  <div className="text-sm space-y-4 text-gray-600 leading-relaxed">
                    {dataNosotros?.Historia && (
                      <BlocksRenderer content={dataNosotros?.Historia} />
                    )}
                  </div>

                </TabsContent>
              </Tabs>

              
            </div>
          </div>
        </div>
      </section>

      {/* Three-Column Feature Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto">


            {dataNosotros?.highlights?.map((highlight) => (
               <div key={highlight.id} className="bg-white relative rounded-lg shadow-lg p-8 text-center">
                <div className="absolute -top-7 md:-top-10 justify-center mx-auto left-0 right-0 w-16 h-16 bg-[#DC9E26] p-3 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image src={`${highlight.icon?.url.includes('http') ? highlight.icon?.url : process.env.NEXT_PUBLIC_BASE_URL}${highlight.icon?.url}`} alt={highlight.titulo} width={64} height={64} />
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


      {/* "Nuestro equipo" Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestro <b className="text-color-orange">equipo</b>
          </h2>

          {showCarousel ? (
            <div className="max-w-6xl mx-auto">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsiveDoctors}
                ssr={false}
                infinite={false}
                keyBoardControl={true}
                removeArrowOnDeviceType={["mobile"]}
                sliderClass="gap-6"
                centerMode={false}
                partialVisible={false}
                containerClass="doctor-carousel-container"
              >
                {dataNosotros?.Doctores?.map((doctor) => (
                  <div key={doctor.id} className="text-center flex flex-col items-center justify-center mx-auto px-2">
                    <div className='w-full h-105 min-w-90 bg-gray-200 rounded-4xl mb-6 flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${doctor.Imagen?.url.includes('http') ? doctor.Imagen?.url : process.env.NEXT_PUBLIC_BASE_URL}${doctor.Imagen?.url})` }}>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.nombre}</h3>
                      <p className="text-gray-600 font-medium text-color-orange mb-2">{doctor.puesto}</p>
                      <p className="text-gray-500 text-sm">{doctor.especialidad}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {dataNosotros?.Doctores?.map((doctor) => (
                <div key={doctor.id} className="text-center flex flex-col items-center justify-center mx-auto">
                  <div className='w-full h-105 min-w-90 bg-gray-200 rounded-4xl mb-6 flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${doctor.Imagen?.url.includes('http') ? doctor.Imagen?.url : process.env.NEXT_PUBLIC_BASE_URL}${doctor.Imagen?.url})` }}>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.nombre}</h3>
                    <p className="text-gray-600 font-medium text-color-orange mb-2">{doctor.puesto}</p>
                    <p className="text-gray-500 text-sm">{doctor.especialidad}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* "Marcas" Section */}
      <section className="bg-white">
        <BrandsSection />
      </section>
    </Layout>
  );
}
