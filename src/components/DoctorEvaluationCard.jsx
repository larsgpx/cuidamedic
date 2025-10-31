'use client';
import { Card, CardContent } from "@/components/ui/card";
import { useAPI } from "@/hooks/useAPI";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export function DoctorEvaluationCard() {
  const API_GLOBAL = '/api/global';
  const { data } = useAPI(API_GLOBAL);
  const router = useRouter();
  const [dataGlobal, setDataGlobal] = useState(null);
  useEffect(() => {
    if (data) {
      setDataGlobal(data?.data);
    }
  }, [data]);
  
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

  console.log('dataGlobal', dataGlobal);
  return (
    <div className="container  mx-auto px-4 text-center pt-12 my-10 w-full">
      <Card className="relative bg-orange-light border-0 shadow-lg w-[100%] md:w-[75%] md:h-56 h-110 mx-auto rounded-3xl">
        <div className="absolute bottom-0 left-0 flex flex-row items-center justify-center">
          <Image src="/doctor1.png" alt="Doctor1" className="relative md:left-20 left-5 scale-x-[-1]" width={200} height={110} />
          <Image src="/doctor2.png" alt="Doctor2" className="relative md:left-10 left-0 -bottom-1" width={185} height={105} />
        </div>
        <CardContent className="p-8 text-center md:w-80 flex flex-col items-center absolute md:right-[15%] right-[0%]">
          <h3 className="text-2xl font-semibold text-gray-600 mb-4 pt-5">
            {dataGlobal?.TextoEvaluacionGratuita}
          </h3>
          <Button onClick={() => handleNavigate(dataGlobal?.UrlEvaluacionGratuita)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 mt-2 rounded-xl">
            Solicita tu evaluación gratuita
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
