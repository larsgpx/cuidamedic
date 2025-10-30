'use client';
import { useEffect, useRef } from 'react';

export function TreatmentHeroBanner({ title, subtitle, backgroundImage }) {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && title) {
      const titleText = title.trim();
      const words = titleText.split(' ');
      
      // Solo aplicar la lógica si hay más de una palabra
      if (words.length > 1) {
        const lastWord = words[words.length - 1];
        const otherWords = words.slice(0, -1).join(' ');
        
        titleRef.current.innerHTML = `
          ${otherWords} <span class="font-medium text-color-orange">${lastWord}</span>
        `;
      } else {
        // Si solo hay una palabra, dejar el texto original
        titleRef.current.innerHTML = titleText;
      }
    }
  }, [title]);

  return (
    <section className={`relative h-[400px] bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-start`}>
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
      style={{
        backgroundImage: `url(${backgroundImage || '/bg1.jpg'})`
      }}
    ></div>
    <div className="relative z-10 text-left px-4 md:pl-0 container mx-auto">
      <h1 ref={titleRef} className="text-4xl md:text-5xl font-semibold text-gray-600 title-orange">
        {title}
      </h1>
      {subtitle && (
        <span className="text-sm md:text-lg font-medium mb-8">
          {subtitle}
        </span>
      )}
    </div>
    <div className="absolute -bottom-2 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
  </section>
  );
}
