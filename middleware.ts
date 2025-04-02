import { NextRequest, NextResponse } from 'next/server';

// List of known routes that should not be redirected
const validRoutes = ['', 'about', 'skills', 'projects', 'contact', 'experience'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    pathname.includes('.') // Skip files with extensions (e.g., .jpg, .ico)
  ) {
    return NextResponse.next();
  }

  // Get the path without leading slash
  const path = pathname.slice(1);

  // If path is not in validRoutes, redirect to home
  if (path && !validRoutes.includes(path)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Configure the middleware to match all routes
export const config = {
  matcher: '/:path*',
}; 