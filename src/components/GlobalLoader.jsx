'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Ocultar el loader después de 2 segundos con fade out
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      
      // Remover el elemento del DOM después de la animación
      const removeTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Duración de la animación fade out
      
      return () => clearTimeout(removeTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Spinner */}
      <div className="flex flex-col items-center justify-center">
        {/* Logo o texto opcional */}
        <div className="mt-6">
          <div className="text-2xl font-bold text-orange-500 animate-pulse">
            <Image src="/logo-mini.webp" alt="Cuidamedic" width={100} height={100} className="w-20 h-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

