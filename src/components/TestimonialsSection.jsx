"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ReactCompareImage from 'react-compare-image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export function SuccessCasesSection() {
  const cases = [
    {
      id: 1,
      title: "Bioestimulador de Colágeno",
      image: "/bg1.jpg",
      afterImage: "/bg2.jpg"
    },
    {
      id: 2,
      title: "Rinomodelación",
      image: "/bg1.jpg",
      afterImage: "/bg2.jpg"
    },
    {
      id: 3,
      title: "Entrecejo",
      image: "/bg1.jpg",
      afterImage: "/bg2.jpg"
    },
    {
      id: 4,
      title: "Plasma Rico en Plaquetas",
      image: "/bg1.jpg",
      afterImage: "/bg2.jpg"
    }
  ];

  return (
    <section className="py-10 bg-white flex justify-center mx-auto">
      <div className="container grid md:grid-cols-[20%_80%] grid-cols-1 items-center justify-center px-4 gap-4">
        <div className="relative text-center md:text-left mb-16 w-full md:h-[36rem] h-[16rem] bg-orange-light rounded-3xl p-8 shadow-lg">
          <h2 className="text-4xl font-semibold mb-6">
            Casos de <b className="font-semibold text-yellow-500">Éxito</b>
          </h2>
          <p className="text-md text-gray-600 text-left max-w-3xl mx-auto">
          Pacientes que confiaron en nuestra precisión y dedicación logrando resultados naturales que reflejan lo mejor de ti.
          </p>
          <div className="relative md:top-90 top-35">
            <Image src="/inyection.png" alt="inyection" width={350} height={350} className="absolute block bottom-0 md:-right-30 right-25 mx-auto md:max-w-[350px] max-w-[150px] md:max-h-[350px] max-h-[150px]" />
          </div>
        </div>
        {/* Before & After Images */}
        <div className="w-full relative md:-top-10 top-0 md:ml-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {cases.map((caseItem) => (
              <Card key={caseItem.id} className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className={`h-64 ${caseItem.image} relative`}>
                    {/* Before/After Slider Effect */}
                    <ReactCompareImage leftImage={caseItem.image} rightImage={caseItem.afterImage} />
                    
                    {/* Label */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                        <span className="text-sm font-semibold text-gray-800">{caseItem.title}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  const testimonials = [
    {
      id: 1,
      name: "Alexandra L.",
      text: "Me encantó el trato y los resultados, mi piel luce renovada."
    },
    {
      id: 2,
      name: "Giorgio B.",
      text: "Excelente atención médica, resultados visibles y naturales."
    },
    {
      id: 3,
      name: "Fiorella G.",
      text: "Profesionales muy capacitados, recomiendo totalmente."
    },
    {
      id: 4,
      name: "María R.",
      text: "Profesionales muy capacitados, recomiendo totalmente.2"
    },
    {
      id: 5,
      name: "Carlos M.",
      text: "Profesionales muy capacitados, recomiendo totalmente."
    },
    {
      id: 6,
      name: "Ana S.",
      text: "Profesionales muy capacitados, recomiendo totalmente."
    }
  ];

  return (
    <section className="py-12 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6">
            Testimonios <b className="text-yellow-500 font-semibold">Reales</b>
          </h2>
        </div>

        <div className="mx-auto">
        <Carousel
         swipeable={true}
         draggable={false}
         showDots={true}
         responsive={responsive}
         ssr={true}
         infinite={false}
         keyBoardControl={true}
         removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
         sliderClass="gap-4 h-[300px]"
         centerMode={false}
         partialVisible={false}
        >
          {testimonials.map((testimonial, index) => (
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow max-h-[300px] bg-white">
                    <CardContent className="p-6 h-fit flex flex-col">
                      {/* Quote Icon */}
                      <div className="flex justify-start mb-6">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="text-right mt-auto">
                        <span className="text-gray-800 font-semibold">- {testimonial.name}</span>
                      </div>
                    </CardContent>
                  </Card>
              ))}
        </Carousel>
        </div>
      </div>
    </section>
  );
}
