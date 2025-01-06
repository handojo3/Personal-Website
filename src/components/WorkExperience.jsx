import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">
      {/* Animated Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Work Experience
      </motion.h2>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="space-y-8 p-10"
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4 flex flex-col md:flex-row items-center gap-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Animated Image */}
            <motion.img
              src={experience.image}
              alt={experience.company}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 0.2,
              }}
              className="w-24 h-24 object-cover rounded-full shadow-lg"
            />

            {/* Animated Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1"
            >
              <h3 className="text-2xl font-semibold">{experience.title}</h3>
              <p className="text-xl">{experience.company}</p>
              <p className="text-sm text-stone-300">{experience.duration}</p>
              <p className="mt-2 text-base">{experience.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;
