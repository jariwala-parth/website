// Simulate different network conditions
export const simulateNetworkCondition = async (
  condition: 'fast' | 'slow' | 'offline' = 'fast',
  callback: () => Promise<void>
) => {
  const conditions = {
    fast: { latency: 0, bandwidth: 1000 },
    slow: { latency: 100, bandwidth: 100 },
    offline: { latency: 0, bandwidth: 0 },
  };

  const { latency, bandwidth } = conditions[condition];

  // Simulate network latency
  if (latency > 0) {
    await new Promise(resolve => setTimeout(resolve, latency));
  }

  // Simulate bandwidth
  if (bandwidth > 0) {
    const start = performance.now();
    await callback();
    const end = performance.now();
    const duration = end - start;
    const simulatedDuration = (duration * 1000) / bandwidth;
    await new Promise(resolve => setTimeout(resolve, simulatedDuration - duration));
  }
};

// Test responsive design
export const testResponsiveDesign = () => {
  const breakpoints = {
    mobile: 375,
    tablet: 768,
    desktop: 1024,
    large: 1440,
  };

  return Object.entries(breakpoints).map(([device, width]) => ({
    device,
    width,
    height: device === 'mobile' ? 667 : 768,
  }));
};

// Example usage:
// await simulateNetworkCondition('slow', async () => {
//   await loadPage();
// }); 