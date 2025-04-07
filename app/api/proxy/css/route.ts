import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  
  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 });
  }
  
  try {
    // Only allow proxying CSS files from this domain
    if (!url.startsWith('https://theparthjariwala.com/') && !url.startsWith('/')) {
      return new NextResponse('Invalid URL', { status: 400 });
    }
    
    // If it's a relative URL, make it absolute
    const fullUrl = url.startsWith('/') 
      ? `https://theparthjariwala.com${url}`
      : url;
    
    // Fetch the CSS content
    const response = await fetch(fullUrl);
    const cssContent = await response.text();
    
    // Return the CSS with proper headers
    return new NextResponse(cssContent, {
      headers: {
        'Content-Type': 'text/css; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Frame-Options': 'DENY',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Error proxying CSS:', error);
    return new NextResponse('Error fetching CSS', { status: 500 });
  }
} 