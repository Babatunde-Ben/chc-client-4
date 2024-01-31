import { motion } from "framer-motion";
import { ReactComponent as City } from "../assets/svgs/city.svg";
import { ReactComponent as Workspace } from "../assets/svgs/workspace.svg";
import { ReactComponent as Kitchen } from "../assets/svgs/kitchen.svg";
import { ReactComponent as Wifi } from "../assets/svgs/wifi.svg";
import { ReactComponent as CarPark } from "../assets/svgs/car-park.svg";

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
        <div className="bg-[#e4ecec] rounded-full px-7 py-3 w-full inline-flex justify-center gap-3 items-center text-secondary-900 sm:w-fit">
          <City />
          <span>City skyline view</span>
        </div>
        <div className="bg-[#e4ecec] rounded-full px-7 py-3 w-full inline-flex justify-center gap-3 items-center text-secondary-900 sm:w-fit">
          <Kitchen />
          <span>Kitchen</span>
        </div>
        <div className="bg-[#e4ecec] rounded-full px-7 py-3 w-full inline-flex justify-center gap-3 items-center text-secondary-900 sm:w-fit">
          <Wifi />
          <span>Fast wifi – 634 Mbps</span>
        </div>
        <div className="bg-[#e4ecec] rounded-full px-7 py-3 w-full inline-flex justify-center gap-3 items-center text-secondary-900 sm:w-fit">
          <Workspace />
          <span>Dedicated workspace</span>
        </div>
        <div className="bg-[#e4ecec] rounded-full px-7 py-3 w-full inline-flex justify-center gap-3 items-center text-secondary-900 sm:w-fit">
          <CarPark />
          <span>Free parking on premises</span>
        </div>
      </div>
      <button
        onClick={() =>
          window.open(
            "https://www.airbnb.com/rooms/17355559?source_impression_id=p3_1706610286_V5a72yW7w2BSAwHQ",
            "_blank"
          )
        }
        className="text-secondary-900 outline-none font-semibold text-center mt-10 border border-secondary-900 rounded-lg px-8 py-3 transition duration-150 block mx-auto hover:bg-[#edf3f3]"
      >
        See all amenities
      </button>
    </section>
  );
};

export default Amenities;
