'use client';

import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FiCalendar, FiBriefcase } from 'react-icons/fi';

const Projects = () => {
  const { projects } = profile;

  return (
    <section id="projects" className="py-20">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of the interesting projects I've worked on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                {project.duration && (
                  <div className="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <FiCalendar className="mr-2" />
                    <span>{project.duration}</span>
                  </div>
                )}
                
                {project.association && (
                  <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <FiBriefcase className="mr-2" />
                    <span>{project.association}</span>
                  </div>
                )}
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 