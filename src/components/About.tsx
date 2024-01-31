import { motion } from "framer-motion";

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
        Discover the perfect blend of style, comfort, and convenience at our 3BR
        3Bath Tampa Heights Oasis, a gem nestled in the city's heart, just
        minutes from Downtown Tampa. This vibrant neighborhood boasts excellent
        restaurants, shops, attractions, and landmarks, making it an ideal base
        for your Tampa getaway.
      </motion.p>
    </section>
  );
};

export default About;
