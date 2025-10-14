'use client';

import { useEffect } from 'react';

/**
 * Custom hook para manejar SEO dinámico por vista
 * @param {Object} seoConfig - Configuración de SEO
 * @param {string} seoConfig.title - Título de la página
 * @param {string} seoConfig.description - Descripción de la página
 * @param {string} seoConfig.keywords - Palabras clave separadas por comas
 * @param {string} seoConfig.image - URL de la imagen para redes sociales
 * @param {string} seoConfig.url - URL canónica de la página
 * @param {string} seoConfig.type - Tipo de página (website, article, etc.)
 */
export const useSEO = (seoConfig) => {
  useEffect(() => {
    // Verificar que estamos en el cliente
    if (typeof window === 'undefined') return;

    // Actualizar título de la página
    if (seoConfig?.title) {
      document.title = seoConfig.title;
    }

    // Crear o actualizar meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Meta tags básicos
    if (seoConfig?.description) {
      updateMetaTag('description', seoConfig.description);
    }

    if (seoConfig?.keywords) {
      updateMetaTag('keywords', seoConfig.keywords);
    }

    // Open Graph tags
    if (seoConfig?.title) {
      updateMetaTag('og:title', seoConfig.title, true);
    }

    if (seoConfig?.description) {
      updateMetaTag('og:description', seoConfig.description, true);
    }

    if (seoConfig?.image) {
      updateMetaTag('og:image', seoConfig.image, true);
    }

    if (seoConfig?.url) {
      updateMetaTag('og:url', seoConfig.url, true);
    }

    updateMetaTag('og:type', seoConfig?.type || 'website', true);
    updateMetaTag('og:site_name', 'Cuidamedic', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    
    if (seoConfig?.title) {
      updateMetaTag('twitter:title', seoConfig.title);
    }

    if (seoConfig?.description) {
      updateMetaTag('twitter:description', seoConfig.description);
    }

    if (seoConfig?.image) {
      updateMetaTag('twitter:image', seoConfig.image);
    }

    // URL canónica
    if (seoConfig?.url) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', seoConfig.url);
    }

    // Meta tags adicionales para SEO
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Cuidamedic');

  }, [seoConfig]);

  return null;
};

/**
 * Configuraciones predefinidas de SEO para diferentes vistas
 */
export const SEO_CONFIGS = {
  home: {
    title: "Cuidamedic - Tratamientos Médicos Estéticos de Calidad | Evaluación Gratuita",
    description: "Descubre los mejores tratamientos médicos estéticos en Cuidamedic. Más de 3200 pacientes satisfechos. Marcas seguras y médicos expertos. Solicita tu evaluación gratuita.",
    keywords: "tratamientos médicos estéticos, medicina estética, evaluación gratuita, dermatología, cirugía estética, Cuidamedic",
    image: "/bg1.jpg",
    url: "https://www.cuidamedic.com",
    type: "website"
  },
  services: {
    title: "Servicios de Medicina Estética - Cuidamedic",
    description: "Conoce todos nuestros servicios de medicina estética: tratamientos faciales, corporales, dermatológicos y más. Resultados garantizados.",
    keywords: "servicios medicina estética, tratamientos faciales, tratamientos corporales, dermatología",
    image: "/bg2.jpg",
    url: "https://www.cuidamedic.com/servicios",
    type: "website"
  },
  nosotros: {
    title: "Sobre Nosotros - Cuidamedic",
    description: "Conoce más sobre Cuidamedic, nuestro equipo de médicos expertos y nuestra experiencia en medicina estética.",
    keywords: "sobre nosotros, médicos expertos, experiencia, medicina estética",
    image: "/bg3.jpg",
    url: "https://www.cuidamedic.com/nosotros",
    type: "website"
  }
};
