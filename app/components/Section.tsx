'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, index, label, title, intro, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 border-t border-line ${className}`}>
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-10 md:mb-14 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-wider text-accent mb-3">
            {index} <span className="text-subtle">/</span> {label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
          {intro && <p className="mt-4 text-muted leading-relaxed">{intro}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
