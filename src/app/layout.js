import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalLoader } from "@/components/GlobalLoader";
import Image from "next/image";
import FacebookPixel from "@/components/FacebookPixel";
import { Suspense } from "react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cuidamedic - Medicina Estética de Calidad",
  description: "Tratamientos médicos estéticos profesionales. Más de 3200 pacientes satisfechos. Evaluación gratuita.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=1228635979396741&ev=PageView&noscript=1`}
            alt="facebook-pixel"
          />
        </noscript>
        <GlobalLoader />
        {children}

        <div className="fixed bottom-4 right-4 z-50">
          <a href="https://wa.me/51992802065" target="_blank">
            <Image src="/icons/whatsapp-logo.webp" alt="Cuidamedic" width={60} height={60} className="w-20 h-20" />
          </a>
        </div>
      </body>
    </html>
  );
}
