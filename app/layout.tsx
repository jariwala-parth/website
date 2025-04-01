import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { CookieConsentBanner } from './components/CookieConsent';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parth Jariwala | Software Engineer",
  description: "Personal portfolio website of Parth Jariwala, Software Engineer at Joveo",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '32x32'
      },
      {
        url: '/favicon.ico',
        type: 'image/x-icon', 
        sizes: '16x16'
      }
    ],
    apple: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '180x180',
      }
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
          (function() {
            try {
              // Get default theme from environment variable and validate
              let defaultTheme = "${process.env.DEFAULT_THEME || 'dark'}";
              // Ensure it's a valid option
              if (!['dark', 'light'].includes(defaultTheme)) {
                defaultTheme = 'dark';
              }
              
              // Check for saved theme preference or use the default theme
              let theme = localStorage.getItem('theme') || defaultTheme;
              // Validate the stored theme as well
              if (!['dark', 'light'].includes(theme)) {
                theme = defaultTheme;
              }
              
              // Apply the theme
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {
              // If localStorage is not available, use the default theme
              let defaultTheme = "${process.env.DEFAULT_THEME || 'dark'}";
              // Ensure it's a valid option
              if (!['dark', 'light'].includes(defaultTheme)) {
                defaultTheme = 'dark';
              }
              if (defaultTheme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            }
          })()
          `}
        </Script>
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                // This is important for EU users - sets initial state
                gtag('consent', 'default', {
                  'analytics_storage': 'denied'
                });

                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
