const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

// Create the Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

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

app.prepare().then(() => {
  createServer(async (req, res) => {
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

      // Handle public files
      if (pathname.startsWith('/public/')) {
        const publicPath = path.join(__dirname, pathname);
        if (fs.existsSync(publicPath)) {
          const stat = fs.statSync(publicPath);
          const ext = path.extname(publicPath).toLowerCase();
          const contentType = mimeTypes[ext] || 'application/octet-stream';

          res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Length': stat.size,
            'Cache-Control': 'public, max-age=31536000, immutable'
          });
          fs.createReadStream(publicPath).pipe(res);
          return;
        }
      }

      // Let Next.js handle everything else
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
}); 