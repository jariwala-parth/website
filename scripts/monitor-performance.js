const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox'],
  });

  const options = {
    logLevel: 'info',
    output: 'json',
    port: chrome.port,
    onlyCategories: ['performance'],
    throttling: {
      rttMs: 150,
      throughputKbps: 1638.4,
      cpuSlowdownMultiplier: 2,
    },
  };

  const runnerResult = await lighthouse(url, options);
  const reportJson = runnerResult.report;

  // Save the report
  const reportPath = path.join(process.cwd(), 'lighthouse-report.json');
  fs.writeFileSync(reportPath, reportJson);

  // Extract key metrics
  const metrics = JSON.parse(reportJson).audits;
  const keyMetrics = {
    'First Contentful Paint': metrics['first-contentful-paint'].numericValue,
    'Largest Contentful Paint': metrics['largest-contentful-paint'].numericValue,
    'Time to Interactive': metrics['interactive'].numericValue,
    'Total Blocking Time': metrics['total-blocking-time'].numericValue,
    'Speed Index': metrics['speed-index'].numericValue,
  };

  console.log('Performance Metrics:');
  console.log(keyMetrics);

  await chrome.kill();
  return keyMetrics;
}

// Run the performance check
runLighthouse('http://localhost:3000').catch(console.error); 