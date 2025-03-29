'use client';

import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FiMapPin, FiAward } from 'react-icons/fi';

const About = () => {
  const { location, education } = profile;

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover my professional journey and educational foundation that shaped my engineering perspective.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <div className="flex items-center mb-6">
              <FiMapPin className="text-blue-600 mr-2" />
              <span>{location}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm a software engineer with a passion for building scalable and efficient systems.
              With experience at leading tech companies, I've developed expertise in various technologies
              and enjoy solving complex problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <div className="flex items-center mb-6">
              <FiAward className="text-blue-600 mr-2" />
              <span className="font-medium">Education</span>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-lg mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.university}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{edu.duration}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 