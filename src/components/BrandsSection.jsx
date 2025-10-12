"use client";

import { useEffect, useRef } from "react";

export function BrandsSection() {
  const brands = [
    "SkinFill", "LENISNA", "Rejeunesse", "Botox", "HYACORP",
    "Juvederm", "Restylane", "Radiesse", "Sculptra", "Belotero"
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 1;

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
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="mx-auto bg-orange-light py-10">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Marcas con las que <span className="highlight font-semibold">Trabajamos</span>
        </h2>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-12 items-center overflow-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Duplicate brands for infinite scroll effect */}
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={`${brand}-${index}`}
              className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-20 bg-orange-100 rounded-lg"
            >
              <span className="text-gray-600 font-semibold text-lg">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
