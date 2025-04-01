const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

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