"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Righteous } from "next/font/google";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState(null);

  // Datos para múltiples banners del carousel
  const carouselData = [
    {
      title: "En Cuidamedic Diseñamos los mejores tratamientos médicos estéticos para ti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      btnUrl: "https://www.cuidamedic.com/evaluacion-gratuita",
      backgroundImage: "/bg1.jpg"
    },
    {
      title: "Tratamientos de Vanguardia con Tecnología Avanzada",
      description: "Descubre nuestros tratamientos más innovadores con la última tecnología en medicina estética. Resultados naturales y duraderos para tu bienestar y confianza.",
      btnUrl: "https://www.cuidamedic.com/tratamientos",
      backgroundImage: "/bg2.jpg"
    },
    {
      title: "Médicos Expertos y Garantizados para tu Seguridad",
      description: "Nuestro equipo de profesionales certificados te brinda la máxima seguridad y los mejores resultados en cada tratamiento. Tu bienestar es nuestra prioridad.",
      btnUrl: "https://www.cuidamedic.com/nosotros",
      backgroundImage: "/bg3.jpg"
    }
  ];

  useEffect(() => {
    setData(carouselData);
  }, []);

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

  return (
    <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full transition-all duration-1000 ease-in-out bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${data[currentSlide]?.backgroundImage})`,
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
        <div className="max-w-2xl text-left">
          {/* Main Heading */}
          <h1 className="pt-20 md:pt-5 text-4xl md:text-5xl mb-6 font-semibold transition-all duration-500">
            {data[currentSlide]?.title}
          </h1>

          {/* Sub-text */}
          <p className="text-lg text-gray-600 mb-8 mx-auto leading-relaxed font-regular transition-all duration-500">
            {data[currentSlide]?.description}
          </p>

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
              <div className="text-xl text-gray-600 px-6">Marcas Seguras y de Prestigio</div>
            </div>
            
            <div className="text-center flex align-center flex-col self-center border-r border-gray-300">
              <div className="text-xl text-gray-600 px-6">Médicos Expertos y Garantizados</div>
            </div>
            
            <div className="text-center flex align-center flex-col self-center">
              <div className="text-xl text-gray-600 px-6">Consultas Gratuitas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation - Esquina inferior izquierda */}
      <div className="absolute hidden md:block bottom-6 left-20 z-20 flex space-x-2">
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

      {/* Gradient Bottom */}
      <div className="absolute -bottom-2 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
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