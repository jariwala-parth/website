import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
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
  },
  other: {
    'preconnect': ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
    'preload': '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <Script id="theme-script" strategy="beforeInteractive">
          {`
          (function() {
            try {
              let defaultTheme = "${process.env.DEFAULT_THEME || 'dark'}";
              if (!['dark', 'light'].includes(defaultTheme)) {
                defaultTheme = 'dark';
              }
              
              let theme = localStorage.getItem('theme') || defaultTheme;
              if (!['dark', 'light'].includes(theme)) {
                theme = defaultTheme;
              }
              
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {
              let defaultTheme = "${process.env.DEFAULT_THEME || 'dark'}";
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
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful');
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
