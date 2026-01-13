'use client';
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/Layout";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { CalendarDays, Clock, MessageSquareMore } from "lucide-react";
import { ServicesSectionEstetica } from "@/components/ServicesSectionEstetica";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { SingleSlider } from "@/components/ui/compareImageslider";
import { useAPI } from "@/hooks/useAPI";

export function InternaTratamiento({ data, title, typeEstetica = 'esteticas-facial' }) {
    const titleRef = useRef(null);
    const titleOtherServicesRef = useRef(null);
    const info = data?.Interna || data?.Contenido;
    const API_ESTETICA = `/api/${typeEstetica}?populate[Servicios][populate]=*&populate[Banner]=true&populate[Seo]=true`;
    const { data: dataEsteticaAPI } = useAPI(API_ESTETICA);
    const [dataEstetica, setDataEstetica] = useState(null);
    const [titleOtherServices, setTitleOtherServices] = useState('Servicios que podrian interesarte');
    const [otherServicesData, setOtherServicesData] = useState({});
    const [isDragging, setIsDragging] = useState(false);

    // Mapeo de iconos - Escalable para agregar más iconos en el futuro
    const iconosMap = {
        'Resultado': MessageSquareMore,
        'Tiempo': Clock,
        'Duracion': CalendarDays,
    };

    // Función helper para obtener el icono según el tipo
    const getIcono = (tipoIcono) => {
        // Normaliza el tipo a título (primera letra mayúscula, resto minúsculas)
        const tipoNormalizado = tipoIcono 
            ? tipoIcono.charAt(0).toUpperCase() + tipoIcono.slice(1).toLowerCase()
            : null;
        
        // Retorna el icono del mapeo o un icono por defecto
        const IconoComponente = iconosMap[tipoNormalizado] || MessageSquareMore;
        return IconoComponente;
    };

    // Función para normalizar el texto: elimina acentos, normaliza espacios y convierte a minúsculas
    const normalizeText = (text) => {
        if (!text) return '';
        return text
            .toString()
            .normalize("NFD")                                 // separa los acentos
            .replace(/[\u0300-\u036f]/g, "")                  // elimina los acentos
            .replace(/\s+/g, ' ')                             // reemplaza múltiples espacios con uno solo
            .trim()
            .toLowerCase();
    };
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
        if (dataEsteticaAPI?.data) {
            // Si hay servicios y un título para comparar, filtrar los servicios que coincidan
            if (dataEsteticaAPI.data.Servicios && info?.Titulo) {
                const mainTitle = normalizeText(info?.Titulo);
                
                // Filtrar servicios excluyendo los que tengan el mismo título (normalizado)
                const filteredServicios = dataEsteticaAPI.data.Servicios.filter(
                    (serv) => {
                        const servicioTitle = normalizeText(serv?.Titulo);
                        return servicioTitle !== mainTitle;
                    }
                );
                
                setDataEstetica({
                    ...dataEsteticaAPI.data,
                    Servicios: filteredServicios,
                });
            } else {
                // Si no hay título para comparar, usar todos los servicios
                setDataEstetica(dataEsteticaAPI.data);
            }
        }
        }, [dataEsteticaAPI, info?.Titulo]);

        useEffect(() => {
            const handleGlobalPointerUp = () => {
              setIsDragging(false);
            };
        
            // Escuchamos en window para que, si el usuario suelta el dedo fuera 
            // del slider, los labels reaparezcan correctamente.
            window.addEventListener('pointerup', handleGlobalPointerUp);
            
            return () => {
              window.removeEventListener('pointerup', handleGlobalPointerUp);
            };
          }, []);

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

            const titleText = info?.tituloOtrosServicios?.trim() || titleOtherServices;
            const words = titleText.split(' ');
            
            // Solo aplicar la lógica si hay más de una palabra
            if (words.length > 1) {
              const lastWord = words[words.length - 1];
              const otherWords = words.slice(0, -1).join(' ');
              
              titleOtherServicesRef.current.innerHTML = `
                ${otherWords} <strong class="font-medium text-color-orange">${lastWord}</strong>
              `;
            }
          
      }, [data]);

    return (
        <Layout>
            <div className="min-h-screen">
            {/* Hero Section */}
            <TreatmentHeroBanner 
                title={title}
                backgroundImage={ info?.ImagenBanner?.url ? `${info?.ImagenBanner?.url.includes('http') ? info?.ImagenBanner?.url : process.env.NEXT_PUBLIC_BASE_URL}${info?.ImagenBanner?.url}` : undefined}
            />
            
            {/* Estandar Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 ref={titleRef} className="text-4xl font-semibold text-gray-600 mb-8">{info?.Titulo}</h2>
                    {info?.Subtitulo && (
                        <p className="text-lg text-gray-600 mb-8">{info?.Subtitulo}</p>
                    )}
                </div>
                </div>
            </section>

            {/* Product/Benefits Section */}
            <section className="py-16 bg-orange-50">
                <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Product Image */}
                    <div className="lg:order-1">
                    <div className="w-full h-60 md:h-110 rounded-xl flex items-center justify-center shadow-lg" 
                        style={{
                            backgroundImage: `url(${info?.Imagen?.url ? `${info?.Imagen?.url.includes('http') ? info?.Imagen?.url : process.env.NEXT_PUBLIC_BASE_URL}${info?.Imagen?.url}` : '/bg1.jpg'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>
                    </div>
                    </div>

                    {/* Benefits Content */}
                    <div className="lg:order-2">
                    <div className="max-w-lg">
                        <Tabs defaultValue={0} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 tab-list-orange">
                            {
                                info?.Tabs?.map((tab, index) => (
                                    <TabsTrigger key={index} value={index}>{tab.Titulo}</TabsTrigger>
                                ))
                            }
                        </TabsList>
                        <div className="flex flex-row gap-16 mt-4 justify-start">
                            {info?.Servicios?.map((service, index) => {
                                const IconoComponente = getIcono(service.Iconos);
                                return (
                                <span key={index} className="text-gray-600 leading-relaxed flex flex-col gap-0 items-center text-sm">
                                    <IconoComponente strokeWidth={1} size={30} />
                                        <b className="mb-0 pb-0">{service.Titulo}</b>
                                        {service.Contenido}
                                </span>
                                );
                            })}
                        </div>
                        {
                            info?.Tabs?.map((tab, index) => (
                                <TabsContent key={index} className="mt-6 pb-4" value={index}>
                                    {tab?.descripcion && (
                                        <BlocksRenderer content={tab?.descripcion} />
                                    )}
                                    {tab?.Checklist && (
                                        <div className="space-y-2 text-gray-600 leading-relaxed mb-8">
                                        {tab?.Checklist?.map((item) => {
                                            return (
                                            <div key={item.id} className="flex items-center space-x-2">
                                                <Image src='/icons/check.svg' alt={'check'} width={20} height={20} className="inline-block align-middle mx-1" />
                                                <span>{item.Texto}</span>
                                            </div>
                                            )})
                                        }
                                        </div>
                                    )}

                                </TabsContent>
                            ))
                        }                
                        </Tabs>

                        {/* CTA Button */}
                        <Button onClick={() => handleNavigate(info?.UrlBoton)} className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-8 py-3 flex items-center space-x-2 text-md">
                        Agendar cita
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Before & After Images Section */}
            {info?.casosDeExito?.length > 0 && (
            <section className="container mx-auto px-4 pt-16 pb-2 bg-white">
                <div className="w-full relative md:-top-10 top-0 lg:ml-8">
                <h2 className="text-4xl font-bold text-gray-600 my-12 text-center title-orange">Casos de <span>Éxito</span></h2>
                    <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
                        {info?.casosDeExito?.map((caseItem, index) => (
                        <div key={index} className="w-full md:w-[calc(50%-1.25rem)] md:max-w-md">
                            <Card className="overflow-hidden border-0 shadow-lg">
                                <CardContent className="h-86 p-0">
                                <div className={`relative`}>
                                    {/* Before/After Slider Effect */}
                                    {
                                        caseItem?.antes?.url && caseItem?.despues?.url && (
                                            <SingleSlider 
                                            beforeImg={`${caseItem?.antes?.url?.includes('http') ? caseItem?.antes.url : process.env.NEXT_PUBLIC_BASE_URL}${caseItem?.antes.url}`}
                                            afterImg={`${caseItem?.despues?.url?.includes('http') ? caseItem?.despues.url : process.env.NEXT_PUBLIC_BASE_URL}${caseItem?.despues.url}`}
                                            beforeLabel="Antes" 
                                            afterLabel="Después" 
                                          />
                                        )
                                    }
                                </div>
                                </CardContent>
                            </Card>
                            {/* Label */}
                            <div className="relative top-4 shadow-lg">
                                <div className="bg-[#DC9E26] backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                                <strong className="text-sm font-semibold text-white">{caseItem.titulo}</strong>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            )}
            {/* Preguntas Frecuentes Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-600 mb-12 text-center title-orange">Preguntas <span>Frecuentes</span></h2>
                    
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {info?.preguntas?.map((pregunta, index) => (
                            <AccordionItem key={index} value={`pregunta-${index + 1}`} className="px-6 border-gray-200">
                                <AccordionTrigger className="text-lg font-bold text-gray-800 hover:no-underline">
                                    {pregunta.pregunta}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pt-4">
                                    {pregunta.respuesta}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                </div>
            </section>

            <section className="py-2 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 ref={titleOtherServicesRef} className={`text-4xl font-bold text-gray-600 mb-12 text-center title-orange ${dataEstetica?.Servicios ? '' : 'hidden'}`}>{info?.tituloOtrosServicios}</h2>
                        
                    </div>
                    {dataEstetica?.Servicios && 
                    <ServicesSectionEstetica servicesData={dataEstetica?.Servicios} />
                    }
                </div>
            </section>
            </div>
        </Layout>
    );
}
