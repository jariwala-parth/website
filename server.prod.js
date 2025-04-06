const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');

const app = next({ dev: false });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

// Define MIME types map
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
};

// Only log critical errors in production
const logError = (err) => {
  if (process.env.NODE_ENV === 'production') {
    // Log only critical errors to your logging service
    // You might want to use a proper logging service like Winston, Pino, etc.
    console.error('[Critical Error]:', err.message);
  } else {
    console.error(err);
  }
};

app.prepare().then(() => {
  createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;
      
      // Set proper MIME types for static files
      if (pathname.startsWith('/_next/static/')) {
        const staticPath = path.join(__dirname, '.next', pathname);
        if (fs.existsSync(staticPath)) {
          const stat = fs.statSync(staticPath);
          const ext = path.extname(staticPath).toLowerCase();
          const contentType = mimeTypes[ext] || 'application/octet-stream';
          
          res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Length': stat.size,
            'Cache-Control': 'public, max-age=31536000, immutable'
          });
          fs.createReadStream(staticPath).pipe(res);
          return;
        }
      }

      // Handle CSS files specifically
      if (pathname.endsWith('.css')) {
        const cssPath = path.join(__dirname, pathname);
        if (fs.existsSync(cssPath)) {
          const stat = fs.statSync(cssPath);
          res.writeHead(200, {
            'Content-Type': 'text/css',
            'Content-Length': stat.size,
            'Cache-Control': 'public, max-age=31536000, immutable'
          });
          fs.createReadStream(cssPath).pipe(res);
          return;
        }
      }

      // Let Next.js handle everything else
      handle(req, res, parsedUrl);
    } catch (err) {
      logError(err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(PORT, (err) => {
    if (err) {
      logError(err);
      process.exit(1);
    }
    // Only log startup in non-production
    if (process.env.NODE_ENV !== 'production') {
      console.log(`> Ready on port ${PORT}`);
    }
  });
}).catch(logError); 