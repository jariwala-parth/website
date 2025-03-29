'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { profile } from '../data/profile';
import { FiBriefcase, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Experience = () => {
  const { experience } = profile;
  const [showAll, setShowAll] = useState(false);
  
  // Show only the two most recent experiences initially
  const visibleExperiences = showAll ? experience : experience.slice(0, 2);

  return (
    <section id="experience" className="py-20">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {visibleExperiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-blue-600 last:border-transparent"
            >
              <div className="absolute -left-[11px] top-0 bg-blue-600 rounded-full p-2">
                <FiBriefcase className="text-white" />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <span className="text-sm text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full">
                    {job.duration}
                  </span>
                </div>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{job.company}</h4>
                {job.location && (
                  <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <FiMapPin className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                )}
                <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
              </div>
            </motion.div>
          ))}
          
          {experience.length > 2 && (
            <div className="flex justify-center mt-2">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors"
              >
                {showAll ? (
                  <>
                    Show Less <FiChevronUp />
                  </>
                ) : (
                  <>
                    Show More <FiChevronDown />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience; 