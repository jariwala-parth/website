import Link from 'next/link';
import { FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { socialLinks } = profile;
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Parth Jariwala. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 md:mr-8">
              <Link 
                href="#home"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="#about"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link 
                href="#experience"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Experience
              </Link>
              <Link 
                href="#contact"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
            
            <div className="flex space-x-4">
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FiLinkedin className="text-xl" />
              </Link>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FiGithub className="text-xl" />
              </Link>
              <Link
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              >
                <FiInstagram className="text-xl" />
              </Link>
              <Link
                href="mailto:theparthjariwala@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                <FiMail className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 