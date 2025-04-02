import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { metadata } from './metadata';

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

export { metadata };

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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
