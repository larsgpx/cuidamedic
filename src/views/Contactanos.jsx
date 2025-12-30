'use client';
import { Layout } from "@/components/Layout";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import GoogleMapReact from 'google-map-react';
import Marker from '@/components/Marker';
import { LocationsSection } from "@/components/LocationsSection";
import { useAPI } from "@/hooks/useAPI";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Contactanos() {
  const API_CONTACTANOS = (process.env.NEXT_PUBLIC_API_CONTACTO || '/api/contacto') + '?populate[Seo]=true';
  const API_SUCURSALES = '/api/sucursales?populate=*';
  const { data } = useAPI(API_CONTACTANOS);
  const { data: dataSucursalesAPI } = useAPI(API_SUCURSALES);
  const [dataSucursales, setDataSucursales] = useState(null);
  useEffect(() => {
    if (dataSucursalesAPI) {
      setDataSucursales(dataSucursalesAPI?.data);
    }
  }, [dataSucursalesAPI]);

  useSEO({
    title: data?.data?.Seo?.title || 'Contáctanos - Cuidamedic',
    description: data?.data?.Seo?.descripcion || 'Contáctanos en Cuidamedic. Ubicados en Miraflores, Surco y Lince. Horarios de atención y agendamiento de citas. Medicina estética de calidad.',
    keywords: data?.data?.Seo?.keywords || 'contacto, ubicaciones, Miraflores, Surco, Lince, agendar cita, horarios de atención',
    url: process.env.NEXT_PUBLIC_URL + '/contactanos',
  });

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horario",
      content: [
        data?.data?.Horario,
        data?.data?.Horario2
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefonos",
      content: [
        data?.data?.Telefono,
        data?.data?.Telefono2
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Correo",
      content: [data?.data?.Correo]
    }
  ];


  const handleApiLoaded = (map, maps) => {
    // Configurar el estilo del mapa para que sea más limpio
    if (maps) {
      const styles = [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ];
      map.setOptions({ styles });
    }
  };

  const handleNavigate = (url) => {
    if (!url) return;
    window.open(url, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-start">
        <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="relative z-10 text-left container mx-auto">
          <h1 className="text-5xl md:text-5xl font-semibold text-gray-600">
            Contacto
          </h1>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Information Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 title-orange">
            ¿Donde nos <span>Ubicamos</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-orange-light rounded-4xl p-4 text-center shadow-lg flex flex-row items-center ">
                <div className="w-12 h-12 bg-orange-dark rounded-full flex items-center justify-center mx-auto text-white mr-4 flex-none">
                  {item.icon}
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <div className="space-y-0">
                    {item.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-600 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="container mx-auto">
          
          <div className="max-w-6xl mx-auto">
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 w-full">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyCAOfyRIHd1EKkGTXVYb2-IdGMeiSUgjkY' }}
                  defaultCenter={{ lat: -12.1104, lng: -77.0295 }} // Centro de Lima
                  defaultZoom={13}
                  yesIWantToUseGoogleMapApiInternals
                  onGoogleApiLoaded={(props) => props && handleApiLoaded(props.map, props.maps)}
                >
                  {dataSucursales?.map((branch, index) => (
                    <Marker
                      key={index}
                      lat={branch.latitud}
                      lng={branch.longitud}
                      text={`${branch.Lugar} - ${branch.Direccion}`}
                      onClick={() => handleNavigate(`https://www.google.com/maps/dir/?api=1&destination=${branch.latitud},${branch.longitud}`)}
                    />
                  ))}
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Branches Section */}
      <LocationsSection />
    </Layout>
  );
}
