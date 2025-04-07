import { NextRequest, NextResponse } from 'next/server';

// List of known routes that should not be redirected
const validRoutes = ['', 'about', 'skills', 'projects', 'contact', 'experience'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  const isGooglebot = userAgent.toLowerCase().includes('googlebot');

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    pathname.includes('.') // Skip files with extensions (e.g., .jpg, .ico)
  ) {
    // Special handling for CSS files accessed by Googlebot
    if (isGooglebot && pathname.endsWith('.css')) {
      // Redirect CSS requests from Googlebot to our proxy
      const url = new URL(request.url);
      url.pathname = '/api/proxy/css';
      url.searchParams.set('url', pathname);
      return NextResponse.redirect(url);
    }
    
    return NextResponse.next();
  }

  // Get the path without leading slash
  const path = pathname.slice(1);

  // If path is not in validRoutes, redirect to home
  if (path && !validRoutes.includes(path)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const response = NextResponse.next();

  // For HTML pages (main routes), prevent caching to avoid scroll issues
  if (!pathname.includes('.')) {
    response.headers.set('Cache-Control', 'no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  // Set correct content-type headers for CSS files
  if (pathname.endsWith('.css') || pathname.includes('/css/') || pathname.includes('/_next/static/css/')) {
    response.headers.set('Content-Type', 'text/css; charset=utf-8');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    
    // Return special headers to prevent content type confusion
    response.headers.set('X-Content-Script-Type', 'text/css');
    response.headers.set('Content-Script-Type', 'text/css');
    response.headers.set('Content-Style-Type', 'text/css');
    response.headers.delete('Content-Security-Policy');
    
    // Set stricter headers for CSS files
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
  }

  // Set correct content-type headers for JS files
  if (pathname.endsWith('.js')) {
    response.headers.set('Content-Type', 'application/javascript; charset=utf-8');
    response.headers.set('X-Content-Type-Options', 'nosniff');
  }

  return response;
}

// Configure the middleware to match all routes
export const config = {
  matcher: '/:path*',
}; 