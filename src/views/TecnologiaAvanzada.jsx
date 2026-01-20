'use client';
import { Header } from "@/components/Header";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";
import { Footer } from "@/components/Footer";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect, useRef } from "react";
import { useSEO } from "@/hooks/useSEO";
import { InternaTratamientoEspecial } from "@/views/InternaTratamientoEspecial";
import { ServicesSectionEstetica } from "@/components/ServicesSectionEstetica";

export function TecnologiaAvanzada() {
  const API_EXION = '/api/tecnologia-avanzada?populate[Banner]=true&populate[Tratamientos][populate]=Imagen&populate[Tratamientos][populate]=Tabs&populate[Seo]=true&populate[Tratamientos][populate][Tabs][populate]=*&populate[Tratamientos][populate][Servicios]=true&populate[Tratamientos][populate][Imagen]=true';
  const { data: dataTecnologiaAPI } = useAPI(API_EXION);
  const [dataTecnologia, setDataTecnologia] = useState(null);
  const API_ESTETICA = `/api/otros-servicios?populate[Imagen]=true`;
  const { data: dataEsteticaAPI } = useAPI(API_ESTETICA);
  const [dataEstetica, setDataEstetica] = useState(null);
  const [titleOtherServices, setTitleOtherServices] = useState('Servicios que podrian interesarte');
  const titleOtherServicesRef = useRef(null);
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

  useEffect(() => {
    if (dataTecnologiaAPI) {
      setDataTecnologia(dataTecnologiaAPI?.data);
    }

    if (dataEsteticaAPI) {
        if (dataEsteticaAPI.data && dataTecnologia?.Titulo) {
          const mainTitle = normalizeText(dataTecnologia?.Titulo);
          
          // Filtrar servicios excluyendo los que tengan el mismo título (normalizado)
          const filteredServicios = dataEsteticaAPI?.data.filter(
              (serv) => {
                  const servicioTitle = normalizeText(serv?.Titulo);
                  return servicioTitle !== mainTitle;
              }
          );

          setDataEstetica(filteredServicios);
      } else {
          // Si no hay título para comparar, usar todos los servicios
          setDataEstetica(dataEsteticaAPI.data);
      }
    }


    const titleText = dataEstetica?.tituloOtrosServicios?.trim() || titleOtherServices;
    const words = titleText.split(' ');
    
    // Solo aplicar la lógica si hay más de una palabra
    if (words.length > 1) {
      const lastWord = words[words.length - 1];
      const otherWords = words.slice(0, -1).join(' ');
      
      titleOtherServicesRef.current.innerHTML = `
        ${otherWords} <strong class="font-medium text-color-orange">${lastWord}</strong>
      `;
    }
  }, [dataTecnologiaAPI, dataEsteticaAPI]);

  useSEO({
    title: dataTecnologia?.Interna?.Seo?.titulo || 'Tecnologia Avanzada - Cuidamedic',
    description: dataTecnologia?.data?.Seo?.descripcion || 'Descubre los beneficios de la tecnologia avanzada y los cuidados esenciales que debes seguir después del tratamiento para obtener los mejores resultados.',
    keywords: dataTecnologia?.data?.Seo?.keywords || 'tecnologia, avanzada, cuidados, tratamiento, Cuidamedic', 
    url: process.env.NEXT_PUBLIC_URL + '/tratamientos/tecnologia-avanzada',
  });

  //console.log('dataTecnologia', dataTecnologia);
 
  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentHeroBanner 
        title={dataTecnologia?.TituloBanner}
        subtitle={dataTecnologia?.SubtituloBanner}
        backgroundImage={dataTecnologia?.Banner?.url ? `${dataTecnologia.Banner.url.includes('http') ? dataTecnologia.Banner.url : process.env.NEXT_PUBLIC_BASE_URL}${dataTecnologia.Banner.url}` : undefined}
      />
      
      <InternaTratamientoEspecial data={dataTecnologia} title={dataTecnologia?.Titulo} />

      <section className="py-2 bg-white mt-6">
          <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                  <h2 ref={titleOtherServicesRef} className="text-4xl font-bold text-gray-600 mb-5 text-center title-orange">{dataEstetica?.tituloOtrosServicios}</h2>
              </div>
              <ServicesSectionEstetica servicesData={dataEstetica} />
          </div>
      </section>

      <Footer />
    </div>
  );
}
