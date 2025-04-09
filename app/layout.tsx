import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import ScrollHandler from './components/ScrollHandler';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// Get GA4 ID from environment variable
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://theparthjariwala.com'),
  title: {
    default: 'Parth Jariwala - Software Engineer',
    template: '%s | Parth Jariwala'
  },
  description: 'Software Engineer specializing in Java, Spring, AWS and microservices. Building robust backend systems and APIs.',
  keywords: ['Parth Jariwala', 'Software Engineer', 'Java Developer', 'Spring', 'AWS', 'Microservices', 'Backend Developer', 'Surat', 'India'],
  authors: [{ name: 'Parth Jariwala' }],
  creator: 'Parth Jariwala',
  publisher: 'Parth Jariwala',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://theparthjariwala.com',
    siteName: 'Parth Jariwala',
    title: 'Parth Jariwala - Software Engineer',
    description: 'Software Engineer specializing in Java, Spring, AWS and microservices. Building robust backend systems and APIs.',
    images: [
      {
        url: 'https://theparthjariwala.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Parth Jariwala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parth Jariwala - Software Engineer',
    description: 'Software Engineer specializing in Java, Spring, AWS and microservices. Building robust backend systems and APIs.',
    images: ['https://theparthjariwala.com/og-image.jpg'],
    creator: '@parthjariwala',
  },
  verification: {
    google: 'google5debb082fcd5f3a6',
    other: {
      'google-site-verification': 'google5debb082fcd5f3a6',
    }
  },
  alternates: {
    canonical: 'https://theparthjariwala.com',
    languages: {
      'en-US': 'https://theparthjariwala.com',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'auto' }}>
      <head>
        {/* Google Search verification */}
        <meta name="google-site-verification" content="google5debb082fcd5f3a6" />
        
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-8748331446225704"/>
        
        {/* Content Security Policy for Google AdSense and Analytics */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://ep2.adtrafficquality.google https://*.google.com https://static.cloudflareinsights.com; img-src 'self' data: https: https://www.google-analytics.com https://pagead2.googlesyndication.com https://*.google.com https://*.googleusercontent.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://stats.g.doubleclick.net https://pagead2.googlesyndication.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://*.google.com https://static.cloudflareinsights.com; frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://pagead2.googlesyndication.com https://ep2.adtrafficquality.google https://www.google.com https://*.google.com"
        />
        
        {/* Explicitly tell browsers how to handle CSS */}
        <meta httpEquiv="Content-Style-Type" content="text/css" />
        
        {/* SEO - Explicitly set indexing */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href="https://theparthjariwala.com" />
        
        {/* Force scroll top on refresh script - important: must be first */}
        <Script 
          id="force-scroll-top" 
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
              });
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            `
          }}
        />
        
        {/* X-Content-Type-Options to prevent MIME sniffing */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {/* Schema.org JSON-LD */}
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="worker"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'Person',
              name: 'Parth Jariwala',
              jobTitle: 'Software Engineer',
              url: 'https://theparthjariwala.com',
              sameAs: [
                'https://www.linkedin.com/in/parth-jariwala/',
                'https://github.com/jariwala-parth',
                'https://www.instagram.com/theparthjariwala/'
              ]
            })
          }}
        />
        
        {/* Google AdSense */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8748331446225704"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        
        {/* AdBlock Detection */}
        <Script
          id="adblock-detection"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              function checkAdBlocker() {
                const adElement = document.createElement('div');
                adElement.innerHTML = '&nbsp;';
                adElement.className = 'adsbox';
                adElement.style.position = 'absolute';
                adElement.style.opacity = '0';
                document.body.appendChild(adElement);
                
                window.setTimeout(function() {
                  if (adElement.offsetHeight === 0) {
                    document.body.classList.add('adblock-detected');
                  }
                  adElement.remove();
                }, 100);
              }
              
              if (document.readyState === 'complete') {
                checkAdBlocker();
              } else {
                window.addEventListener('load', checkAdBlocker);
              }
            })();
          `
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ScrollHandler />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
