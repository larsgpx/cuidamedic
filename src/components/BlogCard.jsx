import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function BlogCard({ 
  id,
  title, 
  excerpt, 
  image, 
  author, 
  date, 
  category,
  readTime 
}) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        {/* Imagen del artículo */}
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">{image || "Imagen del Artículo"}</span>
          </div>
          {/* Categoría */}
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* Contenido del artículo */}
        <div className="p-6">
          {/* Título */}
          <Link href={`/blog/${id}`}>
            <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-yellow-600 transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>

          {/* Extracto */}
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>

          {/* Metadatos */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {author}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                {date}
              </span>
            </div>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {readTime} min
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
