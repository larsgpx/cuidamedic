export function TreatmentHeroBanner({ title, subtitle, backgroundImage }) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: backgroundImage || "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwIiB5MT0iMCIgeDI9IjEyMDAiIHkyPSI4MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjgiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZGRkZGIiBzdG9wLW9wYWNpdHk9IjAuOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=')"
          }}
        >
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8">
              {subtitle}
            </h2>
          )}
        </div>
      </div>
      <div className="absolute -bottom-2 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
