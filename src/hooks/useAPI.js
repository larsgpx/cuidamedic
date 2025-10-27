'use client';
import { useState, useEffect } from 'react';

/**
 * Custom hook para consumir APIs de Strapi de manera segura
 * El token nunca se expone al cliente ya que se usa una API Route del servidor
 * 
 * @param {string} endpoint - El endpoint de Strapi (ej: '/api/home', '/api/articles')
 * @returns {{data: any, loading: boolean, error: string|null}} - Objeto con los datos, estado de carga y errores
 */
export function useAPI(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Llamar a nuestra API Route que protege el token
        const url = `/api/strapi?endpoint=${encodeURIComponent(endpoint)}`;
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });


        if (!response.ok) {
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const errorData = await response.json();
            errorMessage = errorData.error || errorMessage;
            console.error('🌐 useAPI - Error data:', errorData);
          } catch (e) {
            const errorText = await response.text();
            errorMessage = errorText || errorMessage;
            console.error('🌐 useAPI - Error text:', errorText);
          }
          throw new Error(errorMessage);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error('❌ useAPI - Error completo:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) {
      fetchData();
    }
  }, [endpoint]);

  return { data, loading, error };
}

