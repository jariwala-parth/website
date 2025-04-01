import { NextRequest, NextResponse } from 'next/server';

const IP_REQUESTS: Record<string, { count: number; timestamp: number }> = {};
const LIMIT = 10; // Max requests per minute per IP
const TIME_FRAME = 60 * 1000; // 1 minute in milliseconds

// This middleware will handle requests to undefined routes and redirect them to the homepage
export function middleware(req: NextRequest) {
  // Skip rate limiting for static files and certain paths
  const path = req.nextUrl.pathname;
  if (
    path.startsWith('/_next') || 
    path.startsWith('/static') ||
    path.includes('.') // Likely a static file
  ) {
    return NextResponse.next();
  }

  const ip = req.headers.get("x-forwarded-for")?.split(',')[0] || 
             req.headers.get("x-real-ip") ||
             "unknown";
  
  if (ip === "unknown") {
    return NextResponse.json({ error: "No IP detected" }, { status: 429 });
  }

  const currentTime = Date.now();
  const requestInfo = IP_REQUESTS[ip] || { count: 0, timestamp: currentTime };

  if (currentTime - requestInfo.timestamp < TIME_FRAME) {
    requestInfo.count += 1;
  } else {
    requestInfo.count = 1;
    requestInfo.timestamp = currentTime;
  }

  IP_REQUESTS[ip] = requestInfo;

  if (requestInfo.count > LIMIT) {
    console.log(`Rate limit exceeded for IP: ${ip}`);
    return new NextResponse("Too many requests. Please try again after 1 minute.", { 
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain'
      }
    });
  }

  return NextResponse.next();
}

// Run the middleware on all paths except static files and Next.js internals
export const config = {
  matcher: [
    '/((?!api/health|_next/static|_next/image|favicon.ico).*)',
  ],
}; 