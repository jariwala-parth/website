declare global {
  interface Window {
    dataLayer: any[];
    gtag: (
      command: 'consent' | 'config' | 'event' | 'js',
      target: string,
      params?: {
        ad_storage?: 'granted' | 'denied';
        analytics_storage?: 'granted' | 'denied';
        functionality_storage?: 'granted' | 'denied';
        personalization_storage?: 'granted' | 'denied';
        security_storage?: 'granted' | 'denied';
        anonymize_ip?: boolean;
        cookie_flags?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export {}; // Important: marks this as an external module 