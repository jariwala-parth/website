'use client';

import { useState, useEffect } from 'react';

const TestDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    // Initial check
    checkDarkMode();
    
    // Set up an observer to check when the class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="fixed top-6 left-6 z-50 p-4 rounded-lg shadow-lg bg-white dark:bg-black text-black dark:text-white">
      Dark Mode: {isDark ? 'On' : 'Off'}
    </div>
  );
};

export default TestDarkMode; 