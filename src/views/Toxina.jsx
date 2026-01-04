'use client';
import { InternaTratamiento } from "@/views/InternaTratamiento";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

export function Toxina() {
  const API_TOXINA = '/api/toxina?populate[Contenido][populate][ImagenBanner]=true&populate[Contenido][populate][Tabs][populate]=*&populate[Contenido][populate][Imagen]=true&populate[Contenido][populate][Seo]=true&populate[Contenido][populate][preguntas]=true&populate[Contenido][populate][casosDeExito][populate]=*&populate[Contenido][populate][Servicios][populate]=*';
  const { data: dataToxinaAPI } = useAPI(API_TOXINA);
  const [dataToxina, setDataToxina] = useState(null);
  useEffect(() => {
    if (dataToxinaAPI) {
      setDataToxina(dataToxinaAPI?.data);
    }
  }, [dataToxinaAPI]);

  useSEO({
    title: dataToxina?.Contenido?.Seo?.titulo || 'Toxina - Cuidamedic',
    description: dataToxina?.data?.Seo?.descripcion || 'Descubre los beneficios de la toxina botulínica y los cuidados esenciales que debes seguir después del tratamiento para obtener los mejores resultados.',
    keywords: dataToxina?.data?.Seo?.keywords || 'toxina, botulínica, cuidados, tratamiento, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/tratamientos/toxina',
  });

  console.log('dataToxina', dataToxina);
return <InternaTratamiento data={dataToxina} title='Tratamientos Faciales' />
}
