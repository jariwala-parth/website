'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Skill } from '../types/profile';

// Define skill categories for better organization
const CATEGORIES = {
  CORE: 'Core Technologies',
  CLOUD: 'Cloud & DevOps',
  DATA: 'Data Technologies',
  SOFT: 'Leadership & Soft Skills',
};

const Skills = () => {
  const { skills } = profile;
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Helper function to safely get element position
  const getElementPosition = (elementName: string) => {
    const element = skillRefs.current[elementName];
    if (!element) return { top: 0, left: 0, width: 0 };
    
    try {
      const rect = element.getBoundingClientRect();
      return {
        top: rect?.bottom || 0,
        left: rect?.left || 0,
        width: element.offsetWidth || 0
      };
    } catch (e) {
      return { top: 0, left: 0, width: 0 };
    }
  };
  
  // Organize skills into meaningful categories
  const organizedSkills = useMemo(() => {
    // Define desired orders for each category
    const coreOrder = [
      'Java', 
      'Spring Boot', 
      'Microservices', 
      'Spring Framework', 
      'Data Structures', 
      'Concurrency & Multithreading', 
      'Design Patterns'
    ];
    
    const cloudOrder = [
      'AWS',
      'Kubernetes', 
      'Docker', 
      'DevOps', 
      'Terraform', 
      'Jenkins',
      'Helm'
    ];
    
    const dataOrder = [
      'Apache Kafka',
      'Redis',
      'PostgreSQL',
      'Systems Design',
      'MongoDB', 
      'MySQL',
      'Snowflake',
      'Event-Driven Architecture',
      'Sharding & Partitioning'
    ];
    
    const softOrder = [
      'Mentoring',
      'Team Leadership',
      'Code Reviews & Best Practices',
      'Git'
    ];
    
    // Function to sort skills by highlighted status and then by order in array
    const sortByHighlightAndOrder = (a: Skill, b: Skill, orderArray: string[]) => {
      // First priority: highlighted skills come first
      if (a.highlighted && !b.highlighted) return -1;
      if (!a.highlighted && b.highlighted) return 1;
      
      // Second priority: position in the order array
      return orderArray.indexOf(a.name) - orderArray.indexOf(b.name);
    };
    
    // Core programming skills (languages, frameworks)
    const coreSkills = skills.filter(skill => 
      coreOrder.includes(skill.name)
    ).sort((a, b) => sortByHighlightAndOrder(a, b, coreOrder));
    
    // Cloud and DevOps related skills
    const cloudSkills = skills.filter(skill => 
      cloudOrder.includes(skill.name)
    ).sort((a, b) => sortByHighlightAndOrder(a, b, cloudOrder));
    
    // Data technology skills
    const dataSkills = skills.filter(skill => 
      dataOrder.includes(skill.name)
    ).sort((a, b) => sortByHighlightAndOrder(a, b, dataOrder));
    
    // Soft skills and leadership
    const softSkills = skills.filter(skill => 
      softOrder.includes(skill.name)
    ).sort((a, b) => sortByHighlightAndOrder(a, b, softOrder));
    
    return {
      [CATEGORIES.CORE]: coreSkills,
      [CATEGORIES.CLOUD]: cloudSkills,
      [CATEGORIES.DATA]: dataSkills,
      [CATEGORIES.SOFT]: softSkills
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setExpandedSkill(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleExpand = (skillName: string) => {
    if (expandedSkill === skillName) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(skillName);
    }
  };

  // Get styling for skills - more uniform approach
  const getSkillStyles = (skill: Skill, category: string) => {
    const baseClasses = "px-4 py-2 rounded-full transition-all duration-300";
    const expandableClasses = skill.expandable ? 'cursor-pointer pr-8' : 'cursor-default';
    
    // Base styling for all skills
    const baseStyle = "bg-opacity-10 bg-white dark:bg-opacity-5 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border";
    
    // Highlighted skills use a consistent border style across all categories but with some differences
    if (skill.highlighted) {
      // Special styling for the most critical skills
      if (['Java', 'Spring Boot', 'Microservices', 'AWS', 'Kubernetes', 'Systems Design', 'Redis', 'PostgreSQL', 'Apache Kafka', 'Mentoring'].includes(skill.name)) {
        return `${baseClasses} ${expandableClasses} ${baseStyle} border-blue-500 dark:border-blue-400 hover:border-blue-400 dark:hover:border-blue-300 border-2 shadow-md font-semibold`;
      }
      
      return `${baseClasses} ${expandableClasses} ${baseStyle} border-blue-500 dark:border-blue-400 hover:border-blue-400 dark:hover:border-blue-300 border-2 shadow-sm hover:shadow`;
    }
    
    // Non-highlighted skills - consistent styling
    return `${baseClasses} ${expandableClasses} ${baseStyle} border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500`;
  };

  // Special styling for the AWS dropdown button
  const getDropdownStyles = (isExpanded: boolean) => {
    const baseStyle = "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-5 h-5 text-current";
    
    if (isExpanded) {
      return `${baseStyle} text-blue-400 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full`;
    }
    
    return `${baseStyle} text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full`;
  };

  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-medium mb-2">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I work with.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {Object.entries(organizedSkills).map(([category, categorySkills]) => (
            categorySkills.length > 0 && (
              <div key={category} className="mb-10">
                <h3 className="text-xl font-medium mb-6 text-gray-700 dark:text-gray-300 text-center pb-2 border-b border-gray-200 dark:border-gray-800">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {categorySkills
                    .map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="relative" 
                      ref={(el) => { 
                        skillRefs.current[skill.name] = el;
                        return undefined;
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.2 } }}
                        onClick={() => skill.expandable && toggleExpand(skill.name)}
                        className={getSkillStyles(skill, category)}
                      >
                        <span className="font-medium">
                          {skill.name}
                        </span>
                        
                        {skill.expandable && (
                          <span className={getDropdownStyles(expandedSkill === skill.name)}>
                            {expandedSkill === skill.name ? (
                              <FiChevronUp size={16} />
                            ) : (
                              <FiChevronDown size={16} />
                            )}
                          </span>
                        )}
                      </motion.div>
                      
                      {skill.expandable && expandedSkill === skill.name && (
                        <div 
                          className="fixed inset-0 z-10"
                          onClick={() => setExpandedSkill(null)}
                        >
                          <div
                            ref={popoverRef}
                            className="absolute z-20 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-[360px] border-2 border-blue-100 dark:border-blue-900"
                            style={{
                              top: `${getElementPosition(skill.name).top + 10}px`,
                              left: `${getElementPosition(skill.name).left + getElementPosition(skill.name).width / 2 - 180}px`
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white dark:bg-gray-800 border-t border-l border-blue-100 dark:border-blue-900"></div>
                            <h4 className="font-medium mb-3 text-blue-600 dark:text-blue-400 pb-2 border-b border-blue-50 dark:border-gray-700">
                              AWS Services
                            </h4>
                            
                            {/* Core AWS Services */}
                            <div className="mb-3">
                              <h5 className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                <span>Core Services</span>
                                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2"></div>
                              </h5>
                              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                                {[
                                  { name: 'AWS Lambda', desc: 'Serverless compute service' },
                                  { name: 'Amazon EC2', desc: 'Virtual servers in the cloud' },
                                  { name: 'Amazon S3', desc: 'Object storage service' },
                                  { name: 'AWS IAM', desc: 'Identity and access management' },
                                  { name: 'Amazon DynamoDB', desc: 'NoSQL database service' },
                                  { name: 'Amazon Cognito', desc: 'User authentication and authorization' }
                                ].map((service, i) => (
                                  <div 
                                    key={i} 
                                    className="flex items-start group relative"
                                  >
                                    <span className="text-blue-500 mr-1.5 mt-0.5 flex-shrink-0 text-xs">•</span>
                                    <span className="text-xs text-gray-700 dark:text-gray-300 cursor-help">
                                      {service.name.replace('Amazon ', '').replace('AWS ', '')}
                                      <span className="aws-tooltip">
                                        {service.desc}
                                      </span>
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Messaging Services */}
                            <div className="mb-3">
                              <h5 className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                <span>Messaging</span>
                                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2"></div>
                              </h5>
                              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                                {[
                                  { name: 'Amazon SQS', desc: 'Message queuing service' },
                                  { name: 'Amazon SNS', desc: 'Pub/Sub notification service' }
                                ].map((service, i) => (
                                  <div 
                                    key={i} 
                                    className="flex items-start group relative"
                                  >
                                    <span className="text-blue-500 mr-1.5 mt-0.5 flex-shrink-0 text-xs">•</span>
                                    <span className="text-xs text-gray-700 dark:text-gray-300 cursor-help">
                                      {service.name.replace('Amazon ', '').replace('AWS ', '')}
                                      <span className="aws-tooltip">
                                        {service.desc}
                                      </span>
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Other Services */}
                            <div>
                              <h5 className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                <span>Other Services</span>
                                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2"></div>
                              </h5>
                              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                                {[
                                  { name: 'Amazon ECR', desc: 'Container registry service' },
                                  { name: 'AWS Batch', desc: 'Batch computing service' },
                                  { name: 'AWS Secrets Manager', desc: 'Secrets management service' }
                                ].map((service, i) => (
                                  <div 
                                    key={i} 
                                    className="flex items-start group relative"
                                  >
                                    <span className="text-blue-500 mr-1.5 mt-0.5 flex-shrink-0 text-xs">•</span>
                                    <span className="text-xs text-gray-700 dark:text-gray-300 cursor-help">
                                      {service.name.replace('Amazon ', '').replace('AWS ', '')}
                                      <span className="aws-tooltip">
                                        {service.desc}
                                      </span>
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 