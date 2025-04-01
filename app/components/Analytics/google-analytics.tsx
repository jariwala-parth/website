"use client";
import { useEffect } from 'react';
import Script from 'next/script';

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Only run if gtag is available
    if (typeof window.gtag !== 'undefined') {
      // Set default consent
      window.gtag('consent', 'default', {
        'analytics_storage': 'denied'
      });

      // Initialize GA
      window.gtag('js', new Date().toISOString());
      window.gtag('config', `${process.env.NEXT_PUBLIC_GA_ID}`, {
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date().toISOString());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
};