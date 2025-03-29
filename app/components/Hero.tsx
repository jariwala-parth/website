'use client';

import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import Link from 'next/link';

const Hero = () => {
  const { name, title, about, socialLinks } = profile;

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center py-20 md:py-0">
      {/* Subtle background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container px-6 py-12 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Hi, I'm <span className="text-blue-600">{name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              {title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8"
          >
            {about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center space-x-6"
          >
            <Link 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link group"
              aria-label="LinkedIn"
            >
              <div className="social-icon bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                <FiLinkedin className="text-blue-600 dark:text-blue-400" />
              </div>
            </Link>
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link group"
              aria-label="GitHub"
            >
              <div className="social-icon bg-gray-50 dark:bg-gray-800/40 group-hover:bg-gray-100 dark:group-hover:bg-gray-800/60">
                <FiGithub className="text-gray-800 dark:text-gray-300" />
              </div>
            </Link>
            <Link
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link group"
              aria-label="Instagram"
            >
              <div className="social-icon bg-pink-50 dark:bg-pink-900/20 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30">
                <FiInstagram className="text-pink-600 dark:text-pink-400" />
              </div>
            </Link>
            <Link
              href="mailto:theparthjariwala@gmail.com"
              className="social-icon-link group"
              aria-label="Email"
            >
              <div className="social-icon bg-red-50 dark:bg-red-900/20 group-hover:bg-red-100 dark:group-hover:bg-red-900/30">
                <FiMail className="text-red-600 dark:text-red-400" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10"
          >
            <Link 
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-7 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 