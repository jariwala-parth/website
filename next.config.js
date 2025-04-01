/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    DEFAULT_THEME: (['dark', 'light'].includes(process.env.DEFAULT_THEME)) ? process.env.DEFAULT_THEME : 'dark'
  },
  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
    unoptimized: true, // Let Cloudflare handle image optimization
  },
  // Enable compression
  compress: true,
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Enable React strict mode
  reactStrictMode: true,
  // Production optimizations
  poweredByHeader: false,
  generateEtags: true,
  // Add security headers and CDN caching directives
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable, stale-while-revalidate=31536000, s-maxage=31536000'
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable, stale-while-revalidate=31536000, s-maxage=31536000'
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable, stale-while-revalidate=31536000, s-maxage=31536000'
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable, stale-while-revalidate=31536000, s-maxage=31536000'
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      }
    ]
  }
};

module.exports = nextConfig; 