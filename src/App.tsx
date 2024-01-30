import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ReactComponent as Location } from "./assets/svgs/location.svg";
import { ReactComponent as Star } from "./assets/svgs/star.svg";
import { ReactComponent as City } from "./assets/svgs/city.svg";
import { ReactComponent as Workspace } from "./assets/svgs/workspace.svg";
import { ReactComponent as Kitchen } from "./assets/svgs/kitchen.svg";
import { ReactComponent as Wifi } from "./assets/svgs/wifi.svg";
import { ReactComponent as CarPark } from "./assets/svgs/car-park.svg";

function App() {
  return (
    <AnimatePresence>
      <Navbar />
      <main className="bg-[#f3f7f7] px-5 pt-14 pb-10 sm:px-10 md:px-16 lg:px-40">
        <section>
          <h1 className="text-primary-500 text-2xl text-center font-bold mb-5 md:text-3xl md:mb-8">
            King Bed - Stylish, Bright & Cozy
          </h1>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="w-full bg-[#e4ecec] rounded-xl "
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ delay: 1, duration: 0.6 }}
              className="w-full rounded-lg relative overflow-hidden mb-10 md:w-2/3 md:mx-auto"
            >
              <img
                src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-17355559/original/9b28aa75-2404-4e76-bd24-f6d80486d03a.jpeg"
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
              transition={{ delay: 1, duration: 0.4 }}
            >
              <div className="text-secondary-900 flex gap-2 items-start">
                <Location className="w-5 h-5" />{" "}
                <div className="font-medium text-sm md:text-base">
                  <h2> Tampa, Florida, United States</h2>
                  <p className="font-normal">4 mins to Downtown</p>
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
              transition={{ delay: 1.3, duration: 0.4 }}
            >
              <p className="font-medium text-secondary-800 text-lg mb-2 sm:text-center">
                <span className="text-2xl font-semibold">$271</span> / Night
              </p>
              {/* <p className="text-secondary-900 font-medium text-center">5.0</p> */}
              <div className="text-primary-500 font-medium flex gap-1 items-center sm:justify-center  ">
                <span>(5.0)</span>
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </section>
        <motion.section
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex justify-center items-center flex-wrap gap-3 my-10 sm:gap-5"
        >
          <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
            <span className="font-semibold text-secondary-900">6</span>
            <span className="text-sm font-medium text-secondary-800">
              Guests
            </span>
          </div>
          <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
            <span className="font-semibold text-secondary-900">2</span>
            <span className="text-sm font-medium text-secondary-800">
              Bedrooms
            </span>
          </div>
          <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
            <span className="font-semibold text-secondary-900">2</span>
            <span className="text-sm font-medium text-secondary-800">Beds</span>
          </div>
          <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
            <span className="font-semibold text-secondary-900">2</span>
            <span className="text-sm font-medium text-secondary-800">
              Baths
            </span>
          </div>
        </motion.section>
        <motion.button
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ delay: 0.3, duration: 0.4 }}
          onClick={() =>
            window.open(
              "https://www.airbnb.com/rooms/17355559?source_impression_id=p3_1706610286_V5a72yW7w2BSAwHQ",
              "_blank"
            )
          }
          className="bg-primary-500 outline-none px-10 py-3 rounded-md text-white font-semibold transition duration-150 block mx-auto hover:bg-primary-600"
        >
          Book Now{" "}
        </motion.button>

        <section className="my-10 lg:py-12">
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ delay: 0.2, duration: 0.4 }}
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
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-center md:w-2/3 md:mx-auto text-secondary-900"
          >
            Discover the perfect blend of style, comfort, and convenience at our
            3BR 3Bath Tampa Heights Oasis, a gem nestled in the city's heart,
            just minutes from Downtown Tampa. This vibrant neighborhood boasts
            excellent restaurants, shops, attractions, and landmarks, making it
            an ideal base for your Tampa getaway.
          </motion.p>
        </section>
        <section className="my-10 ">
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ delay: 0.2, duration: 0.4 }}
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
        <section className="my-16">
          <div className="grid grid-flow-row-dense  justify-center items-center gap-5 px-10 sm:grid-cols-2 md:px-20 ">
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
              transition={{ delay: 0.4, duration: 0.4 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-17355559/original/da7f2674-bd14-40fe-b1c4-f5906f301ad5.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
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
              transition={{ delay: 0.4, duration: 0.4 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-17355559/original/c90928fb-5c50-4f48-8ea6-7d56b93ef26a.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
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
              transition={{ delay: 0.4, duration: 0.4 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-17355559/original/1fd78880-c084-49af-b4c4-05fa5b3956ae.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
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
              transition={{ delay: 0.4, duration: 0.4 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-17355559/original/2293d6c0-930d-4a6b-b25a-bb57554c86a6.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </AnimatePresence>
  );
}

export default App;
