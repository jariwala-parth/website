'use client';

import { ReactNode } from 'react';
import { useScrollSnap } from '../hooks/useScrollSnap';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Use the scroll snap hook
  useScrollSnap();
  
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 