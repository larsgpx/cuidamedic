'use client';
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { BrandsSection } from "@/components/BrandsSection";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

export function Nosotros() {
  useSEO(SEO_CONFIGS.nosotros);
  return (
    <Layout>
      
      {/* Hero Banner Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="relative container z-10 text-left">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-600 mb-4 text-left">
            Sobre <b className="font-semibold text-color-orange text-left">Nosotros</b>
          </h1>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Three-Column Feature Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Card */}
            <div className="bg-white relative rounded-lg shadow-lg p-8 text-center">
              <div className="absolute -top-7 md:-top-10 justify-center mx-auto left-0 right-0 w-16 h-16 bg-[#DC9F25] p-3 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src="/icons/quality.svg" alt="Calidad" width={64} height={64} />
              </div>
              <h3 className="text-gray-600 leading-relaxed pt-4 font-medium text-color-orange">Excelencia médica y tecnología avanzada</h3>
              <p className="text-gray-600 leading-relaxed pt-4">
                En CUIDAMEDIC, garantizamos tratamientos de medicina estética con tecnología de última generación y productos certificados para ofrecer resultados seguros y efectivos.
              </p>
            </div>

            {/* Middle Card */}
            <div className="bg-white relative mt-10 md:mt-0 rounded-lg shadow-lg p-8 text-center">
              <div className="absolute -top-7 md:-top-10 justify-center mx-auto left-0 right-0 w-16 h-16 bg-[#DC9F25] p-3 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image src="/icons/expert.svg" alt="Calidad" width={64} height={64} />
              </div>
              <h3 className="text-gray-600 leading-relaxed pt-4 font-medium text-color-orange">Experiencia profesional y resultados naturales</h3>
              <p className="text-gray-600 leading-relaxed pt-4">
                Nuestros médicos estéticos cuentan con experiencia y dominio en todos nuestros procedimientos, asegurando resultados precisos y armónicos a nuestros pacientes.
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-white relative mt-10 md:mt-0 rounded-lg shadow-lg p-8 text-center">
              <div className="absolute -top-7 md:-top-10 justify-center mx-auto left-0 right-0 w-16 h-16 bg-[#DC9F25] p-3 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src="/icons/heart.svg" alt="Calidad" width={64} height={64} />
              </div>
              <h3 className="text-gray-600 leading-relaxed pt-4 font-medium text-color-orange">Compromiso con tu bienestar</h3>
              <p className="text-gray-600 leading-relaxed pt-4 ">
                La pasión por el bienestar de nuestros pacientes nos impulsa a ofrecer una atención cálida, profesional y personalizada, cuidando cada detalle de tu experiencia estética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "¿Quiénes somos?" Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="w-full h-80 bg-gray-200 rounded-4xl flex items-center justify-center">
                <span className="text-gray-500 text-lg">Imagen del Producto</span>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="pb-4">
                  <TabsTrigger className="data-[state=active]:bg-[#DC9F25] rounded-xl" value="account">¿Quienes Somos?</TabsTrigger>
                  <TabsTrigger className="data-[state=active]:bg-[#DC9F25] rounded-xl" value="password">Historia</TabsTrigger>
                </TabsList>
                <TabsContent value="account">{/* Main Title */}
                  <h2 className="text-3xl font-semibold text-gray-600 mb-6">
                    ¿Quiénes <b className="font-semibold text-color-orange">somos</b>?
                  </h2>

                  {/* Text Content */}
                  <div className="text-sm space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
              </TabsContent>
                <TabsContent value="password">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-color-orange">
                    Historia
                  </h2>

                  {/* Text Content */}
                  <div className="text-sm space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>

                </TabsContent>
              </Tabs>

              
            </div>
          </div>
        </div>
      </section>

      {/* "Nuestro equipo" Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestro <b className="text-color-orange">equipo</b>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Dra. Gianina Romero */}
            <div className="text-center flex flex-col items-center justify-center mx-auto">
              <Image src="/gianina-romero.png" alt="Dra. Gianina Romero" width={350} height={450} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dra. Gianina Romero</h3>
                <p className="text-gray-600 font-medium text-color-orange mb-2">Directora Médica | Médico Cirujano</p>
                <p className="text-gray-500 text-sm">
                  especialidad en Medicina Estética y Antiaging por la Universidad Complutense de Madrid, España
                </p>
              </div>
            </div>

            {/* Dra. Fiorella Gervassi */}
            <div className="text-center flex flex-col items-center justify-center mx-auto">
              <Image src="/fiorella-gervassi.png" alt="Dra. Fiorella Gervassi" width={350} height={450} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dra. Fiorella Gervassi</h3>
                <p className="text-gray-600 font-medium text-color-orange mb-2">Médico Cirujano</p>
                <p className="text-gray-500 text-sm">
                  cuenta con Máster en Medicina Estética y Antiaging por la UDIMA de Madrid - AMIR, España
                </p>
              </div>
            </div>

            {/* Dra. Melissa Guzmán */}
            <div className="text-center flex flex-col items-center justify-center mx-auto">
              <Image src="/melissa-guzman.png" alt="Dra. Melissa Guzmán" width={350} height={450} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dra. Melissa Guzmán</h3>
                <p className="text-gray-600 font-medium text-color-orange mb-2">Médico Cirujano</p>
                <p className="text-gray-500 text-sm">
                  especialidad en Medicina Estética y Antiaging por la Universidad Complutense de Madrid, España
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Marcas" Section */}
      <section className="bg-white">
        <BrandsSection />
      </section>
    </Layout>
  );
}
