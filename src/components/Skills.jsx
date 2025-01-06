import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="pt-20" id="skills">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-10 text-center text-4xl font-semibold tracking-tighter"
      >
        Skills
      </motion.h2>

      {/* Skill Grid with Staggered Animations */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
        className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 px-6"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center rounded-lg p-6 shadow-lg transform transition-transform"
          >
            {/* Skill Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mb-4 text-4xl"
            >
              {skill.icon}
            </motion.div>

            {/* Skill Name */}
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
