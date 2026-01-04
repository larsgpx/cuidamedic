'use client';
import { Layout } from "@/components/Layout";
import { ServicesSectionEstetica } from "@/components/ServicesSectionEstetica";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect } from "react";
import { TreatmentHeroBanner } from "@/components/TreatmentHeroBanner";

export default function EsteticosFacialesPage() {
  // Obtener datos de la API de Strapi
  const API_ESTETICA = '/api/esteticas-facial?populate[Servicios][populate]=*&populate[Banner]=true&populate[Seo]=true';
  const { data } = useAPI(API_ESTETICA);
  const [dataEstetica, setDataEstetica] = useState(null);

  
  useEffect(() => {
    if (data) {
      setDataEstetica(data?.data);
    } 
  }, [data]);

  return (
    <Layout>
      <TreatmentHeroBanner title={dataEstetica?.Titulo} backgroundImage={dataEstetica?.Banner?.url} />
          {/* Título centrado absolutamente */}
          <div className="container mx-auto mt-10 px-4">
                  
            <h2 className="text-4xl font-semibold text-center mb-16">
              Nuestros <span className="highlight font-semibold">Servicios</span>
            </h2>
          </div>
      <ServicesSectionEstetica allServices={true} servicesData={dataEstetica?.Servicios} freeTreatment={true} />
    </Layout>
  );
}
