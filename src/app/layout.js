import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalLoader } from "@/components/GlobalLoader";
import Image from "next/image";

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
        <GlobalLoader />
        {children}

        <div className="fixed bottom-4 right-4 z-50">
          <a href="https://wa.me/51992802065" target="_blank">
            <Image src="/icons/whatsapp-icon.webp" alt="Cuidamedic" width={60} height={60} className="w-20 h-20" />
          </a>
        </div>
      </body>
    </html>
  );
}
