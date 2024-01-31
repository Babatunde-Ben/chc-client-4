import { motion } from "framer-motion";
import { ReactComponent as Location } from "../assets/svgs/location.svg";
import { ReactComponent as Star } from "../assets/svgs/star.svg";
import { data } from "../lib/data";

const Hero = () => {
  return (
    <section>
      <h1 className="text-primary-500 text-2xl text-center font-bold mb-5 md:text-3xl md:mb-8">
        {data.title}
      </h1>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="w-full bg-[#e4ecec] rounded-xl "
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="w-full rounded-lg relative overflow-hidden mb-10 md:w-2/3 md:mx-auto"
        >
          <img
            src={data.main_image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col gap-8 sm:gap-5 sm:flex-row justify-between ">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <div className="text-secondary-900 flex gap-2 items-start">
            <Location className="w-5 h-5" />{" "}
            <div className="font-medium text-sm md:text-base">
              <h2> {data.location}</h2>
              <p className="font-normal">{data.distance}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <p className="font-medium text-secondary-800 text-lg mb-2 sm:text-center">
            <span className="text-2xl font-semibold">{data.price}</span> /{" "}
            {data.period}
          </p>
          {/* <p className="text-secondary-900 font-medium text-center">5.0</p> */}
          <div className="text-primary-500 font-medium flex gap-1 items-center sm:justify-center  ">
            <span>{data.rating}</span>
            <Star className="w-4 h-4" />
            <Star className="w-4 h-4" />
            <Star className="w-4 h-4" />
            <Star className="w-4 h-4" />
            <Star className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
