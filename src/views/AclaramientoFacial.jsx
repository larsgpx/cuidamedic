'use client';
import { InternaTratamiento } from "@/views/InternaTratamiento";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

export function AclaramientoFacial() {
  const API_TOXINA = '/api/aclaramiento-facial?populate[Interna][populate][ImagenBanner]=true&populate[Interna][populate][Tabs][populate]=*&populate[Interna][populate][Imagen]=true&populate[Interna][populate][Seo]=true&populate[Interna][populate][preguntas]=true&populate[Interna][populate][casosDeExito][populate]=*&populate[Interna][populate][Servicios][populate]=*';
  const { data: dataToxinaAPI } = useAPI(API_TOXINA);
  const [dataToxina, setDataToxina] = useState(null);
  useEffect(() => {
    if (dataToxinaAPI) {
      setDataToxina(dataToxinaAPI?.data);
    }
  }, [dataToxinaAPI]);

  useSEO({
    title: dataToxina?.Contenido?.Seo?.titulo || 'Toxina - Cuidamedic',
    description: dataToxina?.data?.Seo?.metaDescription || 'Descubre los beneficios de la toxina botulínica y los cuidados esenciales que debes seguir después del tratamiento para obtener los mejores resultados.',
    keywords: dataToxina?.data?.Seo?.keywords || 'toxina, botulínica, cuidados, tratamiento, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/tratamientos/toxina',
  });

  //console.log('dataToxina', dataToxina);
return <InternaTratamiento data={dataToxina} title='Tratamientos Faciales' />
}
