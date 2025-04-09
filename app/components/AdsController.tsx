'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdsController() {
  useEffect(() => {
    try {
      // Initialize adsbygoogle if it hasn't been
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  // No div needed as Google will place ads automatically
  return null;
} 