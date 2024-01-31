import { motion } from "framer-motion";
import { data } from "../lib/data";

const Gallery = () => {
  return (
    <section className="my-16">
      <div className="grid grid-flow-row-dense  justify-center items-center gap-5 px-10 sm:grid-cols-2 md:px-20 ">
        {data.gallery.map((item, index) => (
          <motion.div
            initial={{
              scale: 1,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden"
          >
            <img src={item} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
