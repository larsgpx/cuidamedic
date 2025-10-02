import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-pink-100/80 to-purple-100/80 bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwIiB5MT0iMCIgeDI9IjEyMDAiIHkyPSI4MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjgiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZGRkZGIiBzdG9wLW9wYWNpdHk9IjAuOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=')"
             }}>
        </div>
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            En{" "}
            <span className="text-yellow-500">cuidamedic</span>{" "}
            Diseñamos los mejores tratamientos médicos estéticos{" "}
            <span className="text-yellow-500">para ti</span>
          </h1>

          {/* Sub-text */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Statistics/Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">+3200</div>
              <div className="text-sm font-semibold text-gray-800">Pacientes Satisfechos</div>
              <div className="text-xs text-gray-600 mt-1">Resultados comprobados</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-sm font-semibold text-gray-800">Marcas Seguras</div>
              <div className="text-xs text-gray-600 mt-1">y de Prestigio</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">15+</div>
              <div className="text-sm font-semibold text-gray-800">Médicos Expertos</div>
              <div className="text-xs text-gray-600 mt-1">y Garantizados</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">✓</div>
              <div className="text-sm font-semibold text-gray-800">Consultas</div>
              <div className="text-xs text-gray-600 mt-1">Gratuitas</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg rounded-full">
              Solicita tu evaluación gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
