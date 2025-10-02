import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection, ServicesSection } from "@/components/ServicesSection";
import { BrandsSection } from "@/components/BrandsSection";
import { SuccessCasesSection, TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <BrandsSection />
      <ServicesSection />
      <SuccessCasesSection />
      <TestimonialsSection />
      <LocationsSection />
      <Footer />
    </div>
  );
}
