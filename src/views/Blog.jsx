'use client';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { DoctorEvaluationCard } from "@/components/DoctorEvaluationCard";
import { useAPI } from "@/hooks/useAPI";
import { useSEO } from "@/hooks/useSEO";

export function Blog() {
  const API_BLOG = (process.env.NEXT_PUBLIC_API_BLOGS || '/api/articles') + '?populate[Seo]=true&populate[cover]=true&populate[author]=true&populate[category]=true';
  const { data } = useAPI(API_BLOG);
  
  useSEO({
    title: data?.data?.Seo?.title || 'Blog - Cuidamedic',
    description: data?.data?.Seo?.descripcion || 'Descubre los últimos artículos y noticias sobre medicina estética en Cuidamedic.',
    keywords: data?.data?.Seo?.keywords || 'blog, medicina estética, noticias, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/blog',
  });

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
      <section className="relative h-[400px] bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-start">
        <div className="absolute inset-0 bg-[url('/cuidamedic-blog.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="relative z-10 text-left container mx-auto">
          <h1 className="text-5xl md:text-5xl font-semibold text-gray-600">
            Contáctanos
          </h1>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pt-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.data?.length > 0 ? (
              data?.data?.map((post) => (
              <BlogCard
                key={post.id}
                id={post.slug}
                title={post.title}
                excerpt={post.resumen}
                image={ `${process.env.NEXT_PUBLIC_BASE_URL}${post.cover?.url}`}
                author={post.author.name}
                date={new Date(post.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                category={post.category.name}
              />
            ))) : (
              <div className="text-center text-gray-500">No hay artículos disponibles</div>
            )};
       
          </div>
        </div>
      </section>
      <DoctorEvaluationCard />
      <Footer />
    </div>
  );
}
