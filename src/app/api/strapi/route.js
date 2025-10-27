import { NextResponse } from 'next/server';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://refined-candy-35961bcadd.strapiapp.com';
const API_TOKEN = process.env.API_TOKEN;

export async function GET(request) {
  try {
    // Obtener el endpoint de los query params
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get('endpoint');


    if (!endpoint) {
      return NextResponse.json(
        { error: 'Endpoint parameter is required' },
        { status: 400 }
      );
    }

    // Construir la URL completa
    const url = `${BASE_API_URL}${endpoint}`;

    // Hacer la petición a Strapi con el token seguro en el servidor
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      cache: 'no-store', // Paraobu que siempre obtenga datos frescos
    });


    if (!response.ok) {
      const errorText = await response.text();
      console.error('🔍 API Route - Error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('❌ API Route - Error fetching data from Strapi:', error);
    console.error('❌ API Route - Error details:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: error.message, details: error.stack },
      { status: 500 }
    );
  }
}
