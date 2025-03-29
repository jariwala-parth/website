'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiInstagram } from 'react-icons/fi';
import { profile } from '../data/profile';
import Link from 'next/link';

const Contact = () => {
  const { socialLinks } = profile;

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-8 mb-10"
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
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Looking forward to hearing from you!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 