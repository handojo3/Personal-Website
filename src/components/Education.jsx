import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="py-20 bg-transparent" id="education">
      {/* Animated Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white"
      >
        Education
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mb-12 p-8"
          >
            <div className="flex items-center space-x-24">
              {/* Animated Image */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 150 }}
                className="flex-shrink-0"
              >
                <img
                  src={edu.school}
                  alt={edu.school}
                  className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-xl"
                />
              </motion.div>

              {/* Animated Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex-1"
              >
                <h3 className="text-3xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-2xl font-medium text-white mb-2">{edu.institution}</p>
                <p className="text-md text-stone-300 mb-6">{edu.duration}</p>

                {/* Relevant Courses with Staggered Animation */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  className="mt-8"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">Relevant Courses</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {edu.relevantCourses.map((course, i) => (
                      <motion.div
                        key={i}
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/10 p-6 rounded-xl text-center text-white border border-white/30 hover:border-white transition-all duration-300 shadow-md hover:bg-white/20"
                      >
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Certifications with Staggered Animation */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  className="mt-8"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">Certifications</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {edu.certifications.map((certification, i) => (
                      <motion.div
                        key={i}
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/10 p-6 rounded-xl text-center text-white border border-white/30 hover:border-white transition-all duration-300 shadow-md hover:bg-white/20"
                      >
                        {certification}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
