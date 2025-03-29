'use client';

import { useEffect } from 'react';

export function useScrollSnap(options = {}) {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTop = 0;
    let scrollDirection = 'none';
    
    // Only consider sections with IDs for snap targeting
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (sections.length === 0) return;
    
    const handleScroll = () => {
      // Clear timeout if it exists
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      // Determine scroll direction
      const st = window.scrollY;
      scrollDirection = st > lastScrollTop ? 'down' : 'up';
      lastScrollTop = st;
      
      // Set isScrolling flag
      isScrolling = true;
      
      // Set a timeout to determine when scrolling stops
      scrollTimeout = setTimeout(() => {
        if (!isScrolling) return;
        
        // Only snap when user is scrolling down
        if (scrollDirection === 'down') {
          // Find which section to snap to based on visibility
          const viewportHeight = window.innerHeight;
          let targetSection = null;
          let maxVisibility = 0.3; // Require at least 30% visibility to snap
          
          sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Calculate how much of the section is visible
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const percentVisible = visibleHeight / rect.height;
            
            // If more visible than our current best candidate and at least 30% visible
            if (percentVisible > maxVisibility) {
              maxVisibility = percentVisible;
              targetSection = section;
            }
          });
          
          // Only snap if we have a target section and it's different from current
          if (targetSection) {
            const currentVisible = document.elementFromPoint(
              window.innerWidth / 2, 
              window.innerHeight / 2
            );
            
            // Only snap if we're not already in the target section
            if (!targetSection.contains(currentVisible)) {
              targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        }
        
        isScrolling = false;
      }, 150); // Wait 150ms after scrolling stops
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);
} 