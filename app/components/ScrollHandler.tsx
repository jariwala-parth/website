'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    // Reset scroll position on page load if no hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    // Add smooth scrolling only after initial load
    const html = document.documentElement;
    
    // Preserve dark mode class, only add smooth-scroll
    if (!html.classList.contains('smooth-scroll')) {
      html.classList.add('smooth-scroll');
    }

    // Handle link clicks to ensure smooth scrolling for hash links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.pathname === window.location.pathname) {
        e.preventDefault();
        
        // Get the target element
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          // Scroll to the element with smooth behavior
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Update the URL without triggering scroll
          history.pushState(null, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
      html.classList.remove('smooth-scroll');
    };
  }, []);

  return null;
} 