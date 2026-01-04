'use client';
import { InternaTratamiento } from "@/views/InternaTratamiento";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

export function HidratacionProfunda() {
  const API_HIDRATACION = '/api/hidratacion-profunda?populate[Interna][populate][ImagenBanner]=true&populate[Interna][populate][Tabs][populate]=*&populate[Interna][populate][Imagen]=true&populate[Interna][populate][Seo]=true&populate[Interna][populate][preguntas]=true&populate[Interna][populate][casosDeExito][populate]=*&populate[Interna][populate][Servicios][populate]=*';
  const { data: dataHidratacionAPI } = useAPI(API_HIDRATACION);
  const [dataHidratacion, setDataHidratacion] = useState(null);
  useEffect(() => {
    if (dataHidratacionAPI) {
      setDataHidratacion(dataHidratacionAPI?.data);
    }
  }, [dataHidratacionAPI]);

  useSEO({
    title: dataHidratacion?.Interna?.Seo?.titulo || 'Hidratacion Profunda - Cuidamedic',
    description: dataHidratacion?.Interna?.Seo?.descripcion || 'Descubre los beneficios de la hidratacion profunda y los cuidados esenciales que debes seguir después del tratamiento para obtener los mejores resultados.',
    keywords: dataHidratacion?.Interna?.Seo?.keywords || 'hidratacion profunda, cuidados, tratamiento, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/tratamientos/hidratacion-profunda',
  });

  console.log('dataHidratacion', dataHidratacion);
return <InternaTratamiento data={dataHidratacion} title='Tratamientos Faciales' />
}
