import { NextRequest, NextResponse } from 'next/server';

// All valid routes including potential subpaths
const validRoutes = [
  '', // root
  'about', 
  'skills',
  'projects',      // Allows /projects/any-subpath
  'contact',
  'experience',
  'ads.txt',       // Allow AdSense verification
  'google-site-verification' // Explicitly allow verification files
];

// Comprehensive bot detection regex
const BOT_REGEX = /(googlebot|adsbot-google|mediapartners-google|bingbot|yandex|baiduspider|facebot|twitterbot|duckduckbot)/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = BOT_REGEX.test(userAgent.toLowerCase());

  // 1. Bypass middleware for verified crawlers and static files
  if (
    isBot ||
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    pathname.includes('.') ||          // All files with extensions
    pathname.startsWith('/google-site-verification') // Verification files
  ) {
    return NextResponse.next();
  }

  // 2. Validate routes (including subpaths)
  const isValidRoute = validRoutes.some(route => 
    pathname === `/${route}` || 
    pathname.startsWith(`/${route}/`)
  );

  if (!isValidRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 3. Set cache headers only for non-bot traffic
  const response = NextResponse.next();
  if (!isBot && !pathname.includes('.')) {
    response.headers.set('Cache-Control', 'no-store, max-age=0');
    response.headers.set('Pragma', 'no-cache');
  }

  return response;
}

export const config = {
  matcher: '/:path*',
}; 