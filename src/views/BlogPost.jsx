'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAPI } from "@/hooks/useAPI";
import { useSEO } from "@/hooks/useSEO";
import { useState, useEffect } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useRouter } from "next/navigation";

export function BlogPost({ postId }) {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [dataBlogs, setDataBlogs] = useState(null);
  // Construir la URL del API para obtener el artículo específico por slug o ID
  const API_BLOG = (process.env.NEXT_PUBLIC_API_BLOGS || '/api/articles') + `?filters[slug][$eq]=${postId}&populate=*`;
  const API_BLOGS = (process.env.NEXT_PUBLIC_API_BLOGS || '/api/articles') + '?populate[cover]=true&pagination[limit]=3&filters[slug][$ne]=' + postId;

  console.log('📊 API_BLOG:', API_BLOG);
  const { data: dataAPI } = useAPI(API_BLOG); //single blog
  const { data: dataBlogsAPI } = useAPI(API_BLOGS); //related blogs
  useEffect(() => {
    if (dataAPI) {
      setData(dataAPI?.data[0]);
      setDataBlogs(dataBlogsAPI?.data);
    }
  }, [dataAPI, dataBlogsAPI]);
  console.log('📊 postId recibido:', postId);
  console.log('📊 dataBlogsAPI:', dataBlogsAPI?.data);

  useSEO({
    title: data?.title || 'Blog - Cuidamedic',
    description: data?.resumen || 'Descubre los últimos artículos y noticias sobre medicina estética en Cuidamedic.',
    keywords: data?.title || 'blog, medicina estética, noticias, Cuidamedic',
    url: process.env.NEXT_PUBLIC_URL + '/blog/' + postId,
  });
  


  if (!data) {
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
      <div className="bg-gray-50 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-yellow-600">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-600 hover:text-yellow-600">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">{data?.title}</span>
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
                {data?.category?.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {data?.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {data?.author?.name || data?.author || 'Autor'}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                {new Date(data?.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
              </div>
            </div>

            {/* Featured Image */}
            {data?.cover?.url && (
              <div className="mb-8">
                <img 
                  src={`${data.cover.url.includes('http') ? data.cover.url : process.env.NEXT_PUBLIC_BASE_URL}${data.cover.url}`} 
                  alt={data.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {data?.description?.length > 0 && (
              <div className="prose prose-lg max-w-none">
                <BlocksRenderer content={data?.description} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-600 text-center mb-12">
            Artículos <span className="highlight">Relacionados</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
            {/* Placeholder for related articles */}
            {dataBlogs?.map((blog) => (
              <div className="cursor-pointer bg-white p-4 rounded-lg shadow-md" key={blog.id} onClick={() => router.push(`/blog/${blog.slug}`)}>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${blog.cover?.url.includes('http') ? blog.cover.url : process.env.NEXT_PUBLIC_BASE_URL}${blog.cover.url})` }}>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">{blog.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{blog.resumen}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
