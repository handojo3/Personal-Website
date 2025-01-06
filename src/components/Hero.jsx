import { HERO } from "../constants";
import carlImg from "../assets/dojo.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full md:w-1/2 text-white"
      >
        <motion.h2
          className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          {HERO.name}
        </motion.h2>
        <motion.p
          className="p-2 text-3xl tracking-tighter lg:text-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          {HERO.greet}
        </motion.p>
        <motion.p
          className="mb-8 p-2 text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
        >
          {HERO.description}
        </motion.p>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={carlImg}
            width={550}
            height={550}
            alt="Ethan Handojo"
            className="rounded-3xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
