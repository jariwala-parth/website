'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Parth Jariwala
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="flex flex-col py-4 px-8 space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 