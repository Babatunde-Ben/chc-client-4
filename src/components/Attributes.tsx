import { motion } from "framer-motion";
import { data } from "../lib/data";

const Attributes = () => {
  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="flex justify-center items-center flex-wrap gap-3 my-10 sm:gap-5"
      >
        <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
          <span className="font-semibold text-secondary-900">
            {data.no_of_guests}
          </span>
          <span className="text-sm font-medium text-secondary-800">Guests</span>
        </div>
        <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
          <span className="font-semibold text-secondary-900">
            {data.no_of_bedrooms}
          </span>
          <span className="text-sm font-medium text-secondary-800">
            Bedrooms
          </span>
        </div>
        <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
          <span className="font-semibold text-secondary-900">
            {data.no_of_beds}
          </span>
          <span className="text-sm font-medium text-secondary-800">Beds</span>
        </div>
        <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
          <span className="font-semibold text-secondary-900">
            {data.no_of_baths}
          </span>
          <span className="text-sm font-medium text-secondary-800">Baths</span>
        </div>
      </motion.section>
      <motion.button
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ delay: 0.2, duration: 0.3 }}
        onClick={() => window.open(data.airbnb_link, "_blank")}
        className="bg-primary-500 outline-none px-10 py-3 rounded-md text-white font-semibold transition duration-150 block mx-auto hover:bg-primary-600"
      >
        Book Now{" "}
      </motion.button>
    </>
  );
};

export default Attributes;
