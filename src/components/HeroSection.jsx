"use client";

import { useState, useEffect } from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export function HeroSection({ dataBanners }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState(null);

  // Base URL de Strapi para las imágenes
  const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


  useEffect(() => {
    // Si dataBanners existe (aunque esté vacío), intentar usarlo
    if (dataBanners !== undefined) {
      if (Array.isArray(dataBanners) && dataBanners.length > 0) {
        // Hay datos, transformarlos
        const transformedData = dataBanners.map((banner) => ({
          Titulo: banner.Titulo || banner.titulo,
          Subtitulo: banner.Subtitulo || banner.subtitulo,
          Banner: banner.Banner?.url ? `${banner.Banner.url.includes('http') ? banner.Banner.url : STRAPI_BASE_URL}${banner.Banner.url}` : banner.Banner?.data?.url ? `${banner.Banner.data.url.includes('http') ? banner.Banner.data.url : STRAPI_BASE_URL}${banner.Banner.data.url}` : banner.backgroundImage || '/bg1.jpg'
        }));
        
        setData(transformedData);
      }
    }
  }, [dataBanners]);

  // Auto-avance del carousel cada 5 segundos
  useEffect(() => {
    if (!data) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!data) return null;

  console.log('📊 dataBanners:', dataBanners[currentSlide]?.Banner);
  console.log('📊 data:', dataBanners);
  return (
    <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Carousel Container */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full transition-all duration-1000 ease-in-out bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${data[currentSlide]?.Banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/80 to-purple-100/80"></div>
          <div className="absolute inset-0 bg-white/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center w-full">
        <div className="max-w-1xl md:max-w-2xl text-left">
          {/* Main Heading */}
          <h1 className="pt-20 pr-4 md:pr-0 md:pt-5 text-4xl md:text-5xl mb-6 font-semibold transition-all duration-500 titulo-hero text-gray-600 [&>p>strong]:text-[#DC9F25]">
            {data[currentSlide]?.Titulo ? (
              <BlocksRenderer content={data[currentSlide].Titulo} />
            ) : (
              data[currentSlide]?.title
            )}
          </h1>

          {/* Sub-text */}
          <div className="text-lg mb-8 mx-auto leading-relaxed  transition-all duration-500">
            {data[currentSlide]?.Subtitulo ? (
              data[currentSlide].Subtitulo.toString()
            ) : (
              data[currentSlide]?.description
            )}
          </div>

          <div className="relative block md:hidden bottom-6 z-20 flex space-x-2">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-6 h-3 rounded-xl transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-orange-dark shadow-lg scale-110' 
                    : 'bg-[#f3d69a] hover:bg-orange-dark'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Estadísticas/Características - Fijas, no se ven afectadas por las transiciones */}
        <div className="max-w-4xl flex self-end statistic-data">
          <div
            className="grid grid-cols-2 md:grid-rows-1 grid-rows-2 md:grid-cols-4 gap-2 max-w-4xl mx-auto relative md:absolute"
            style={style.stats}
          >
            <div className="text-center flex align-center flex-col self-center border-r border-gray-300">
              <div className="text-2xl font-bold text-gray-600">+3200</div>
              <div className="text-xl text-gray-600 px-6">Pacientes Satisfechos</div>
            </div>
            
            <div className="text-center flex align-center flex-col self-center border-r-0 md:border-r border-gray-300">
              <div className="text-xl text-gray-600 px-6">Médicos Expertos y Certificados</div>
            </div>
            
            <div className="text-center flex align-center flex-col self-center border-r border-gray-300">
              <div className="text-xl text-gray-600 px-6">Marcas Seguras y de Prestigio</div>
            </div>
            
            <div className="text-center flex align-center flex-col self-center">
              <div className="text-xl text-gray-600 px-6">Consultas Personalizadas
              Gratuitas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation - Esquina inferior izquierda */}
      {data.length > 1 && (
      <div className="absolute hidden md:block bottom-6 left-20  flex space-x-2 z-1">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-6 h-3 rounded-xl transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-dark shadow-lg scale-110' 
                : 'bg-[#f3d69a] hover:bg-orange-dark'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
  )}
      {/* Gradient Bottom */}
      <div className="absolute -bottom-2 md:-bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

const style = {
  stats: {
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px 20px 0 0",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    justifySelf: "end",
    marginBottom: "-50px",
    padding: "20px",
    right: 0,
  }
}
