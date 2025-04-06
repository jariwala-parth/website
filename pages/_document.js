import { Html, Head, Main, NextScript } from 'next/document';
import crypto from 'crypto';

export default function Document() {
  // Generate a nonce value for this request
  const nonce = crypto.randomBytes(16).toString('base64');
  
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
        
        {/* Properly handle CSS MIME types */}
        <meta httpEquiv="Content-Style-Type" content="text/css" />
        <meta httpEquiv="Content-Script-Type" content="text/javascript" />
        
        {/* Content Security Policy with nonce */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            default-src 'self'; 
            style-src 'self' 'unsafe-inline'; 
            script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com 'nonce-${nonce}'; 
            img-src 'self' data: https: https://www.google-analytics.com; 
            font-src 'self'; 
            connect-src 'self' https://www.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://stats.g.doubleclick.net
          `.replace(/\s+/g, ' ').trim()}
        />
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
} 