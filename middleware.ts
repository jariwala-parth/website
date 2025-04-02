import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  
  // Skip for non-static files
  if (
    !path.startsWith('/_next/') && 
    !path.startsWith('/static') &&
    !path.match(/\.(jpg|jpeg|png|webp|avif|css|js)$/)
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Add cache control headers for static assets
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  return response;
}

// Run the middleware on all paths except static files and Next.js internals
export const config = {
  matcher: [
    '/((?!api/health|_next/static|_next/image|favicon.ico).*)',
  ],
}; 