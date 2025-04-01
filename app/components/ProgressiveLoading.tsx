'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgressiveLoadingProps {
  children: React.ReactNode;
  threshold?: number;
}

export const ProgressiveLoading: React.FC<ProgressiveLoadingProps> = ({
  children,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold]);

  return (
    <div ref={setRef} className="w-full">
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        ) : (
          <div className="w-full h-32 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg" />
        )}
      </AnimatePresence>
    </div>
  );
}; 