import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BlogPost({ postId }) {
  // Datos de ejemplo para los artículos del blog
  const blogPosts = {
    "toxina-botulinica-beneficios": {
      id: "toxina-botulinica-beneficios",
      title: "Toxina Botulínica: Beneficios y Cuidados Post-Tratamiento",
      excerpt: "Descubre los beneficios de la toxina botulínica y los cuidados esenciales que debes seguir después del tratamiento para obtener los mejores resultados.",
      image: "Toxina Botulínica",
      author: "Dr. María González",
      date: "15 Dic 2024",
      category: "Tratamientos",
      readTime: 5,
      content: `
        <h2>¿Qué es la Toxina Botulínica?</h2>
        <p>La toxina botulínica es una neurotoxina producida por la bacteria Clostridium botulinum que, cuando se aplica en pequeñas dosis controladas, tiene efectos terapéuticos y estéticos muy beneficiosos.</p>
        
        <h2>Beneficios Principales</h2>
        <ul>
          <li><strong>Reducción de arrugas:</strong> Suaviza las líneas de expresión en frente, entrecejo y patas de gallo</li>
          <li><strong>Prevención:</strong> Ayuda a prevenir la formación de nuevas arrugas</li>
          <li><strong>Resultados naturales:</strong> Mantiene la expresión facial natural</li>
          <li><strong>Duración:</strong> Los efectos pueden durar entre 3 a 6 meses</li>
        </ul>
        
        <h2>Cuidados Post-Tratamiento</h2>
        <p>Después de recibir toxina botulínica, es importante seguir estos cuidados:</p>
        <ul>
          <li>Evitar acostarse durante las primeras 4 horas</li>
          <li>No realizar ejercicio intenso en las primeras 24 horas</li>
          <li>Evitar masajear la zona tratada</li>
          <li>No consumir alcohol en las primeras 24 horas</li>
          <li>Evitar la exposición solar directa</li>
        </ul>
        
        <h2>¿Cuándo Ver los Resultados?</h2>
        <p>Los primeros efectos de la toxina botulínica suelen aparecer entre 3 a 7 días después del tratamiento, alcanzando su máximo efecto alrededor de las 2 semanas.</p>
        
        <h2>Contraindicaciones</h2>
        <p>La toxina botulínica no es recomendada para:</p>
        <ul>
          <li>Mujeres embarazadas o en período de lactancia</li>
          <li>Personas con enfermedades neuromusculares</li>
          <li>Pacientes con alergias conocidas al producto</li>
          <li>Personas con infecciones activas en la zona a tratar</li>
        </ul>
      `
    },
    "acido-hialuronico-guia-completa": {
      id: "acido-hialuronico-guia-completa",
      title: "Ácido Hialurónico: Guía Completa para Principiantes",
      excerpt: "Todo lo que necesitas saber sobre el ácido hialurónico: tipos, aplicaciones, beneficios y qué esperar durante el procedimiento.",
      image: "Ácido Hialurónico",
      author: "Dra. Ana Martínez",
      date: "12 Dic 2024",
      category: "Tratamientos",
      readTime: 7,
      content: `
        <h2>¿Qué es el Ácido Hialurónico?</h2>
        <p>El ácido hialurónico es una sustancia natural que se encuentra en nuestro cuerpo, especialmente en la piel, articulaciones y ojos. En medicina estética, se utiliza para rellenar, hidratar y rejuvenecer la piel.</p>
        
        <h2>Tipos de Ácido Hialurónico</h2>
        <ul>
          <li><strong>Bajo peso molecular:</strong> Para hidratación profunda</li>
          <li><strong>Medio peso molecular:</strong> Para volumen y relleno</li>
          <li><strong>Alto peso molecular:</strong> Para estructura y contorno</li>
        </ul>
        
        <h2>Aplicaciones Principales</h2>
        <ul>
          <li>Relleno de labios</li>
          <li>Rinomodelación</li>
          <li>Corrección de ojeras</li>
          <li>Proyección de pómulos</li>
          <li>Definición de mentón</li>
          <li>Hidratación facial</li>
        </ul>
        
        <h2>Beneficios</h2>
        <ul>
          <li>Resultados inmediatos</li>
          <li>Procedimiento reversible</li>
          <li>Bajo riesgo de alergias</li>
          <li>Duración de 6 a 18 meses</li>
          <li>Estimula la producción de colágeno</li>
        </ul>
        
        <h2>Proceso del Tratamiento</h2>
        <p>El procedimiento con ácido hialurónico es relativamente rápido y puede realizarse en consulta:</p>
        <ol>
          <li>Evaluación y marcado de la zona</li>
          <li>Aplicación de anestesia tópica</li>
          <li>Inyección del producto</li>
          <li>Moldeado y ajuste</li>
          <li>Cuidados post-tratamiento</li>
        </ol>
      `
    }
  };

  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
          <Link href="/blog">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Volver al Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-yellow-600">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-600 hover:text-yellow-600">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category */}
            <div className="mb-4">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {post.author}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                {post.date}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {post.readTime} min de lectura
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">{post.image}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Interesado en este tratamiento?
            </h2>
            <p className="text-gray-600 mb-8">
              Agenda una consulta gratuita con nuestros especialistas para evaluar 
              si este tratamiento es adecuado para ti.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg">
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Artículos Relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for related articles */}
            <div className="text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Artículo Relacionado 1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Título del Artículo</h3>
              <p className="text-gray-600 text-sm">Descripción breve del artículo...</p>
            </div>
            <div className="text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Artículo Relacionado 2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Título del Artículo</h3>
              <p className="text-gray-600 text-sm">Descripción breve del artículo...</p>
            </div>
            <div className="text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Artículo Relacionado 3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Título del Artículo</h3>
              <p className="text-gray-600 text-sm">Descripción breve del artículo...</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
