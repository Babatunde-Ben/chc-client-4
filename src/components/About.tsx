import { motion } from "framer-motion";
import { data } from "../lib/data";

const About = () => {
  return (
    <section className="my-10 lg:py-12">
      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="text-2xl font-bold text-center text-primary-500 mb-3 md:text-3xl md:mb-5 "
      >
        About
      </motion.p>
      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="text-center md:w-2/3 md:mx-auto text-secondary-900"
      >
        {data.about}
      </motion.p>
    </section>
  );
};

export default About;
