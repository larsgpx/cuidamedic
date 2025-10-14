"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from 'react-infinite-logo-slider'


export function BrandsSection() {
  const brands = [
    "/marcas/skinFill.png",
    "/marcas/botox.png", 
    "/marcas/lanluma.png",
    "/marcas/profhilo.webp",
    "/marcas/pbserum.webp",
    "/marcas/esthemax.webp",
    "/marcas/ellanse.png",
  ];

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
          {[...brands, ...brands].map((brand, index) => (
            <Slider.Slide>
                <img src={brand} alt={`Marca ${index + 1}`} className='w-36' />
            </Slider.Slide>
            ))}
        </Slider>
        </div>
      </div>
    </section>
  );
}
