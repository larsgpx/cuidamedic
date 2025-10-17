import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { DoctorEvaluationCard } from "@/components/DoctorEvaluationCard";

export function Blog() {
  // Datos de ejemplo para los artículos del blog
  const blogPosts = [
    {
      id: "toxina-botulinica-beneficios",
      title: "Toxina Botulínica: Beneficios y Cuidados Post-Tratamiento",
      excerpt: "Descubre los beneficios de la toxina botulínica y los cuidados esenciales que debes seguir después del tratamiento para obtener los mejores resultados.",
      image: "Toxina Botulínica",
      author: "Dr. María González",
      date: "15 Dic 2024",
      category: "Tratamientos",
      readTime: 5
    },
    {
      id: "acido-hialuronico-guia-completa",
      title: "Ácido Hialurónico: Guía Completa para Principiantes",
      excerpt: "Todo lo que necesitas saber sobre el ácido hialurónico: tipos, aplicaciones, beneficios y qué esperar durante el procedimiento.",
      image: "Ácido Hialurónico",
      author: "Dra. Ana Martínez",
      date: "12 Dic 2024",
      category: "Tratamientos",
      readTime: 7
    },
    {
      id: "cuidados-piel-invierno",
      title: "Cuidados Esenciales para tu Piel en Invierno",
      excerpt: "Conoce los mejores consejos y tratamientos para mantener tu piel hidratada y saludable durante los meses más fríos del año.",
      image: "Cuidados de Piel",
      author: "Dr. Carlos López",
      date: "10 Dic 2024",
      category: "Cuidados",
      readTime: 4
    },
    {
      id: "enzimas-recombinantes-novedad",
      title: "Enzimas Recombinantes: La Nueva Revolución en Medicina Estética",
      excerpt: "Explora las últimas innovaciones en enzimas recombinantes y cómo están transformando el campo de la medicina estética.",
      image: "Enzimas Recombinantes",
      author: "Dra. Laura Sánchez",
      date: "8 Dic 2024",
      category: "Innovación",
      readTime: 6
    },
    {
      id: "exosomas-regeneracion-celular",
      title: "Exosomas: El Futuro de la Regeneración Celular",
      excerpt: "Descubre cómo los exosomas están revolucionando la regeneración celular y sus aplicaciones en medicina estética.",
      image: "Exosomas",
      author: "Dr. Miguel Torres",
      date: "5 Dic 2024",
      category: "Innovación",
      readTime: 8
    },
    {
      id: "mesoterapia-beneficios",
      title: "Mesoterapia: Beneficios y Protocolos de Tratamiento",
      excerpt: "Conoce los beneficios de la mesoterapia, los diferentes protocolos disponibles y qué resultados puedes esperar.",
      image: "Mesoterapia",
      author: "Dra. Patricia Ruiz",
      date: "3 Dic 2024",
      category: "Tratamientos",
      readTime: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-left max-w-4xl pt-10">
            <h1 className="text-4xl md:text-5xl title-orange mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubre las últimas tendencias en medicina estética, consejos de cuidado de la piel 
              y novedades en tratamientos para mantenerte informado sobre tu bienestar.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pt-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                author={post.author}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>
      <DoctorEvaluationCard />
      <Footer />
    </div>
  );
}
