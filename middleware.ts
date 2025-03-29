import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware will handle requests to undefined routes and redirect them to the homepage
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;
  
  // Don't redirect Next.js internal routes and API routes
  if (pathname.startsWith('/_next') || 
      pathname.startsWith('/api') ||
      pathname === '/favicon.ico' ||
      pathname === '/') {
    return NextResponse.next();
  }
  
  // Redirect all other paths to the homepage
  return NextResponse.redirect(new URL('/', request.url));
}

// Run the middleware on all paths except static files and Next.js internals
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|_next/data|favicon.ico).*)',
  ],
}; 