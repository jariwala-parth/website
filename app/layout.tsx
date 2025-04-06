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
    google: 'INSERT_YOUR_GOOGLE_SITE_VERIFICATION_CODE_HERE',
    other: {
      'google-site-verification': 'INSERT_YOUR_GOOGLE_SITE_VERIFICATION_CODE_HERE',
    }
  },
  alternates: {
    canonical: 'https://theparthjariwala.com',
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
        
        {/* Content Security Policy */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; img-src 'self' data: https:; font-src 'self'; connect-src 'self'"
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
