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

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // Handle static files
      if (pathname.startsWith('/_next/static/')) {
        const staticPath = path.join(__dirname, '.next', pathname);
        if (fs.existsSync(staticPath)) {
          const stat = fs.statSync(staticPath);
          res.writeHead(200, {
            'Content-Type': 'application/javascript',
            'Content-Length': stat.size,
            'Cache-Control': 'public, max-age=31536000, immutable'
          });
          fs.createReadStream(staticPath).pipe(res);
          return;
        }
      }

      // Handle public files
      if (pathname.startsWith('/public/')) {
        const publicPath = path.join(__dirname, pathname);
        if (fs.existsSync(publicPath)) {
          const stat = fs.statSync(publicPath);
          const ext = path.extname(publicPath);
          const contentType = {
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.svg': 'image/svg+xml',
          }[ext] || 'application/octet-stream';

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