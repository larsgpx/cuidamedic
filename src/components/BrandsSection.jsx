"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from 'react-infinite-logo-slider'


export function BrandsSection({ brandsData }) {
  // Base URL de Strapi
  const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  
  // Marcas por defecto
  const defaultBrands = [
    "/marcas/skinFill.png",
    "/marcas/botox.png", 
    "/marcas/lanluma.png",
    "/marcas/profhilo.webp",
    "/marcas/pbserum.webp",
    "/marcas/esthemax.webp",
    "/marcas/ellanse.png",
  ];

  // Usar datos de Strapi si existen, sino usar datos por defecto
  const brandsToUse = brandsData && Array.isArray(brandsData) && brandsData.length > 0
    ? brandsData.map((brand) => ({
        id: brand.id || brand.documentId,
        nombre: brand?.nombre,
        imagen: brand?.imagen?.url 
          ? `${STRAPI_BASE_URL}${brand?.imagen?.url}` 
          : `/marcas/${brand?.nombre?.toLowerCase()}`
      }))
    : defaultBrands;

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      container.scrollLeft = scrollPosition;
      
      // Reset scroll position when it reaches the end
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-5 md:py-16 bg-white w-full overflow-hidden">
      <div className="mx-auto bg-orange-light py-5 md:py-10">
        <h2 className="text-3xl font-semibold text-center pt-5 md:pt-0 mb-0">
          Marcas con las que <span className="highlight font-semibold">Trabajamos</span>
        </h2>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-12 items-center overflow-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
          
          {[...brandsToUse, ...brandsToUse].map((brand, index) => (
            <Slider.Slide key={brand.id || index}>
                <img 
                  src={typeof brand === 'string' ? brand : brand.imagen} 
                  alt={typeof brand === 'string' ? `Marca ${index + 1}` : brand.nombre} 
                  className='w-36 h-auto object-contain' 
                />
            </Slider.Slide>
          ))}
        </Slider>

        {/* <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
          
        {brandsData && brandsData.map((brand) => (
            <Slider.Slide>
              <img src={process.env.NEXT_PUBLIC_BASE_URL + brand.Imagen.url} alt={`Marca ${brand.id}`} className='w-36' />
            </Slider.Slide>
        ))}
        </Slider> */}
        </div>
      </div>
    </section>
  );
}
