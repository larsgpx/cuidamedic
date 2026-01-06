import React, { useState, useEffect, useRef } from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const SingleSlider = ({ beforeImg, afterImg, beforeLabel = 'Antes', afterLabel = 'Después' }) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Definimos la función para soltar el click/dedo
    const handleGlobalPointerUp = () => {
      setIsDragging(false);
    };

    // Solo añadimos el evento global si este slider específico está siendo arrastrado
    if (isDragging) {
      window.addEventListener('pointerup', handleGlobalPointerUp);
    }

    return () => {
      window.removeEventListener('pointerup', handleGlobalPointerUp);
    };
  }, [isDragging]);

  return (
    <div className="slider-wrapper" style={{ marginBottom: '2rem' }}>
      <ImgComparisonSlider
        ref={sliderRef}
        className={`imgComparison ${isDragging ? 'isDraggable' : ''}`}
        onPointerDown={() => setIsDragging(true)}
      >
        <figure slot="first" className="beforeSlider">
          <img src={beforeImg} alt="Antes" />
          <figcaption>{beforeLabel}</figcaption>
        </figure>
        <figure slot="second" className="afterSlider">
          <img src={afterImg} alt="Después" />
          <figcaption>{afterLabel}</figcaption>
        </figure>
      </ImgComparisonSlider>
    </div>
  );
};

export {
    SingleSlider
}