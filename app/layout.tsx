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
              // Check for saved theme preference or default to dark mode
              const theme = localStorage.getItem('theme') || 'dark';
              
              // Apply the theme
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {
              // If localStorage is not available, default to dark mode
              document.documentElement.classList.add('dark');
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
