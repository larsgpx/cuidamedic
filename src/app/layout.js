import { Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
