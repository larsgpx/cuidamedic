'use client';
import { InternaTratamiento } from "@/views/InternaTratamiento";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

export function AH() {
  const API_AH = '/api/acido-hialurico?populate[Interna][populate][ImagenBanner]=true&populate[Interna][populate][Tabs][populate]=*&populate[Interna][populate][Imagen]=true&populate[Interna][populate][Seo]=true&populate[Interna][populate][preguntas]=true';
  const { data: dataAHAPI } = useAPI(API_AH);
  const [dataAH, setDataAH] = useState(null);
  useEffect(() => {
    if (dataAHAPI) {
      setDataAH(dataAHAPI?.data);
    }
  }, [dataAHAPI]);
  console.log('dataAH', dataAH);
  useSEO({
    title: dataAH?.Interna?.Seo?.titulo || 'AH - Cuidamedic',
    description: dataAH?.data?.Seo?.descripcion || 'Descubre los beneficios de la AH botulínica y los cuidados esenciales que debes seguir después del tratamiento para obtener los mejores resultados.',
    keywords: dataAH?.data?.Seo?.keywords || 'AH, botulínica, cuidados, tratamiento, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/tratamientos/AH',
  });
return <InternaTratamiento data={dataAH} title='Tratamientos Estéticos Faciales'  />
}
