import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-10 text-center text-4xl font-semibold tracking-tighter"
      >
        Projects
      </motion.h2>

      {/* Project Grid */}
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
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-6"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="group relative overflow-hidden rounded-3xl shadow-lg bg-black"
          >
            {/* Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 backdrop-blur-md opacity-0 transition-all duration-500 group-hover:opacity-100"
            >
              <h3 className="mb-2 text-2xl font-semibold">{project.name}</h3>
              <p className="mb-6 px-4 text-sm">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-5 py-2 text-black hover:bg-gray-300 flex items-center"
              >
                <span className="mr-2">View on GitHub</span>
                <MdArrowOutward />
              </a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
