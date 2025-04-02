import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
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
  title: 'Parth Jariwala',
  description: 'Personal website of Parth Jariwala - Software Engineer, Tech Enthusiast, and Problem Solver',
  keywords: ['Parth Jariwala', 'Software Engineer', 'Web Development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Parth Jariwala' }],
  creator: 'Parth Jariwala',
  publisher: 'Parth Jariwala',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theparthjariwala.com',
    siteName: 'Parth Jariwala',
    title: 'Parth Jariwala - Software Engineer',
    description: 'Personal website of Parth Jariwala - Software Engineer, Tech Enthusiast, and Problem Solver',
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
    description: 'Personal website of Parth Jariwala - Software Engineer, Tech Enthusiast, and Problem Solver',
    images: ['https://theparthjariwala.com/og-image.jpg'],
    creator: '@parthjariwala',
  },
  verification: {
    google: 'your-google-site-verification',
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
    <html lang="en">
      <head>
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
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
