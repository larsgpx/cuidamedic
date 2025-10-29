import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/Layout";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useEffect, useRef } from 'react';
import { TreatmentCardEspecial } from "@/components/TreatmentCardEspecial";

export function InternaTratamientoEspecial({ data, title }) {
    const titleRef = useRef(null);
    const info = data?.Interna || data?.Contenido;
    const handleNavigate = (url) => {
        if (!url) return;
        
        // Si la URL es una ruta interna (empieza con /)
        if (url.startsWith('/')) {
          router.push(url);
        } 
        // Si es una URL externa (http/https)
        else if (url.startsWith('http://') || url.startsWith('https://')) {
          window.open(url, '_blank');
        } 
        // Si es una URL relativa, asumimos que es interna
        else {
          router.push(`/${url}`);
        }
      };

      useEffect(() => {
        if (info?.Titulo) {
          const titleText = info?.Titulo.trim();
          const words = titleText.split(' ');
          
          // Solo aplicar la lógica si hay más de una palabra
          if (words.length > 1) {
            const lastWord = words[words.length - 1];
            const otherWords = words.slice(0, -1).join(' ');
            
            titleRef.current.innerHTML = `
              ${otherWords} <strong class="font-medium text-color-orange">${lastWord}</strong>
            `;
          } else {
            // Si solo hay una palabra, dejar el texto original
            titleRef.current.innerHTML = titleText;
          }
        }
      }, [data]);

      console.log('📊 data:', data);
    return (
        <Layout>
            <div className="min-h-screen">
             {/* Estandar Section */}
             <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 ref={titleRef} className="text-4xl font-semibold text-gray-600 mb-8">{title}</h2>
                    {data?.Subtitulo && (
                        <p className="text-lg text-gray-600 mb-8">{data?.Subtitulo}</p>
                    )}
                </div>
                </div>
            </section>
            
            {data?.Tratamientos?.map((treatment, index) => (
                <TreatmentCardEspecial
                key={index}
                title={treatment.Titulo}
                tabs={treatment.Tabs}
                isEven={index % 2 !== 0} // Índices impares (1, 3) tendrán background naranja
                img={treatment.Imagen?.url ? `${process.env.NEXT_PUBLIC_BASE_URL}${treatment.Imagen.url}` : undefined}
                boton={treatment.UrlBoton}
                />
            ))} 
            </div>
        </Layout>
    );
}
