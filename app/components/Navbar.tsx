'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'about', href: '#about' },
  { name: 'experience', href: '#experience' },
  { name: 'impact', href: '#impact' },
  { name: 'stack', href: '#stack' },
  { name: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = navItems
      .map((i) => document.querySelector(i.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'bg-bg/85 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6">
        <Link href="#home" className="font-mono text-sm text-fg">
          <span className="text-accent">~/</span>parth<span className="text-subtle">.jariwala</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={active === item.href ? 'location' : undefined}
              className={`rounded-md px-3 py-1.5 font-mono text-[13px] transition-colors ${
                active === item.href ? 'text-accent' : 'text-muted hover:text-fg'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <span className="mx-2 h-5 w-px bg-line" />
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg px-4 py-3">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 py-2.5 font-mono text-sm text-muted hover:text-fg"
            >
              <span className="text-subtle">0{i + 1}</span>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
