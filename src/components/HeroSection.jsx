"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Righteous } from "next/font/google";

export function HeroSection() {

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.cuidamedic.com/data");
      const data = await response.json();
      setData(data);
    };
    // fetchData();
    setData({
      title: "En Cuidamedic Diseñamos los mejores tratamientos médicos estéticos para ti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      btnUrl: "https://www.cuidamedic.com/evaluacion-gratuita",
      backgroundImage: "/bg1.jpg"
    });

  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{...style.banner, backgroundImage: `url(${data?.backgroundImage})` }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-pink-100/80 to-purple-100/80 bg-cover bg-center bg-no-repeat">
        </div>
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-2xl text-left">
          {/* Main Heading */}
          <h1 className="pt-20 md:pt-5 text-4xl md:text-5xl mb-6 font-semibold">
            {data?.title}
          </h1>

          {/* Sub-text */}
          <p className="text-lg text-gray-600 mb-8 mx-auto leading-relaxed font-regular">
            {data?.description}
          </p>
        </div>
          {/* Estadísticas/Características */}
          <div className="max-w-4xl flex self-end">
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
      <div className="absolute -bottom-2 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

const style = {
  banner: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
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