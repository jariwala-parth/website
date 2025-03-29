import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
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
      </head>
      <body className="">
        {children}
      </body>
    </html>
  );
}
