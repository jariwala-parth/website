"use client";

import CookieConsent from 'react-cookie-consent';
import { useEffect } from 'react';

export const CookieConsentBanner = () => {
  useEffect(() => {
    try {
      const hasConsent = localStorage.getItem('cookieConsent');
      if (hasConsent === 'true') {
        initializeGA();
      }
    } catch (error) {
      console.error('Error checking consent:', error);
    }
  }, []);

  const initializeGA = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="cookieConsent"
      enableDeclineButton
      style={{
        background: "#1a1a1a",
        color: "#ffffff",
        borderTop: "1px solid #333333",
        padding: "1rem",
        alignItems: "center",
        zIndex: 9999
      }}
      buttonStyle={{
        background: "#4f46e5",
        color: "#ffffff",
        fontSize: "14px",
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem"
      }}
      declineButtonStyle={{
        background: "#333333",
        color: "#ffffff",
        fontSize: "14px",
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem"
      }}
      expires={150} // Cookie expiry in days
      onAccept={() => {
        try {
          localStorage.setItem('cookieConsent', 'true');
          initializeGA();
        } catch (error) {
          console.error('Error accepting cookies:', error);
        }
      }}
      onDecline={() => {
        try {
          if (typeof window.gtag !== 'undefined') {
            window.gtag('consent', 'update', {
              'analytics_storage': 'denied'
            });
            localStorage.setItem('cookieConsent', 'false');
          }
        } catch (error) {
          console.error('Error declining cookies:', error);
        }
      }}
    >
      This website uses analytics cookies to enhance the user experience.{" "}
      <a href="/privacy-policy" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
        Privacy Policy
      </a>
    </CookieConsent>
  );
}; 