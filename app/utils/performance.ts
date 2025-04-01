export const reportWebVitals = (metric: any) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Replace with your analytics service
    const analyticsEndpoint = '/api/analytics';
    
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      id: metric.id,
      delta: metric.delta,
      entries: metric.entries,
      navigationType: metric.navigationType,
      timestamp: new Date().toISOString(),
    });

    // Use sendBeacon for better performance
    if (navigator.sendBeacon) {
      navigator.sendBeacon(analyticsEndpoint, body);
    } else {
      fetch(analyticsEndpoint, {
        body,
        method: 'POST',
        keepalive: true,
      });
    }
  }
};

// Helper function to measure performance
export const measurePerformance = (name: string, callback: () => void) => {
  if (typeof window !== 'undefined' && window.performance) {
    const start = performance.now();
    callback();
    const end = performance.now();
    const duration = end - start;
    
    console.log(`${name} took ${duration}ms`);
    return duration;
  }
  return 0;
};

// Helper function to check if the page is being unloaded
export const isPageUnloading = () => {
  return document.visibilityState === 'hidden';
};

// Helper function to check if the page is in the background
export const isPageBackground = () => {
  return document.hidden;
}; 