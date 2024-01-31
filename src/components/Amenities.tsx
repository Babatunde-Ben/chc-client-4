import { motion } from "framer-motion";
import { data } from "../lib/data";

const Amenities = () => {
  return (
    <section className="my-10 ">
      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="text-2xl font-bold text-center text-primary-500 mb-10 md:text-3xl "
      >
        Amenities
      </motion.p>

      <div className="flex flex-wrap gap-5 sm:justify-center md:gap-4 lg:px-14">
        {data.amenities.map((item) => (
          <div
            key={item.id}
            className="bg-[#e4ecec] rounded-full px-7 py-3 w-full inline-flex justify-center gap-3 items-center text-secondary-900 sm:w-fit"
          >
            <item.icon />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <button
        onClick={() => window.open(data.airbnb_link, "_blank")}
        className="text-secondary-900 outline-none font-semibold text-center mt-10 border border-secondary-900 rounded-lg px-8 py-3 transition duration-150 block mx-auto hover:bg-[#edf3f3]"
      >
        See all amenities
      </button>
    </section>
  );
};

export default Amenities;
