'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');
  
  // Initialize theme on mount
  useEffect(() => {
    // If theme already exists in localStorage, use it
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark theme if no preference exists
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);
  
  // Apply theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all text-3xl"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? (
        <FiSun className="text-yellow-400" />
      ) : (
        <FiMoon className="text-blue-700" />
      )}
    </button>
  );
};

export default ThemeToggle; 