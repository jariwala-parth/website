import type { Metadata } from "next";

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