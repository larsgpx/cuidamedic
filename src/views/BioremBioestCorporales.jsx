'use client';
import { InternaTratamiento } from "@/views/InternaTratamiento";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

export function BioremBioestCorporales() {
  const API_ENZIMAS = '/api/biorem-corporal?populate[Interna][populate][ImagenBanner]=true&populate[Interna][populate][Tabs][populate]=*&populate[Interna][populate][Imagen]=true&populate[Interna][populate][Seo]=true&populate[Interna][populate][preguntas]=true';
  const { data: dataEnzimaAPI } = useAPI(API_ENZIMAS);
  const [dataEnzima, setDataEnzima] = useState(null);
  useEffect(() => {
    if (dataEnzimaAPI) {
      setDataEnzima(dataEnzimaAPI?.data);
    }
  }, [dataEnzimaAPI]);

  useSEO({
    title: dataEnzima?.Interna?.Seo?.titulo || 'Biorem Bioest - Cuidamedic',
    description: dataEnzima?.data?.Seo?.descripcion || 'Descubre los beneficios de la toxina botulínica y los cuidados esenciales que debes seguir después del tratamiento para obtener los mejores resultados.',
    keywords: dataEnzima?.data?.Seo?.keywords || 'biorem, bioest, cuidados, tratamiento, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/tratamientos/biorem-bioest',
  });
return <InternaTratamiento data={dataEnzima} title='Tratamientos Estéticos Corporales' typeEstetica='esteticas-corporal' />
}
