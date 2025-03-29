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
              className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                <FiLinkedin className="text-2xl md:text-3xl" />
              </div>
              <span className="mt-2 text-sm">LinkedIn</span>
            </Link>
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                <FiGithub className="text-2xl md:text-3xl" />
              </div>
              <span className="mt-2 text-sm">GitHub</span>
            </Link>
            <Link
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors group"
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                <FiInstagram className="text-2xl md:text-3xl" />
              </div>
              <span className="mt-2 text-sm">Instagram</span>
            </Link>
            <Link
              href="mailto:theparthjariwala@gmail.com"
              className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors group"
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                <FiMail className="text-2xl md:text-3xl" />
              </div>
              <span className="mt-2 text-sm">Email</span>
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