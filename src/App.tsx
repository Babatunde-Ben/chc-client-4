import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import { ReactComponent as Location } from "./assets/svgs/location.svg";
import { ReactComponent as Star } from "./assets/svgs/star.svg";

function App() {
  return (
    <AnimatePresence>
      <main className="bg-[#f3f7f7] px-5 py-10 sm:px-10 md:px-16 lg:px-40">
        {/* <section className="h-[calc(100vh-100px)] w-full relative">
        <img
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-17355559/original/9b28aa75-2404-4e76-bd24-f6d80486d03a.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute bg-black/30 top-0 left-0 z-1 w-full h-full flex flex-col justify-center items-center p-5">
          <h1 className="font-extrabold text-white text-2xl text-center mb-5 capitalize md:w-1/2">
            Entire townhouse in Tampa, Florida, United States
          </h1>
          <motion.button
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="bg-primary-500 px-10 py-3 rounded-md text-white font-semibold transition duration-150 hover:bg-primary-600"
          >
            Book Now{" "}
          </motion.button>
        </div>
      </section> */}

        <section>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="w-full bg-[#e4ecec] rounded-lg  "
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
          <div className="flex flex-col gap-5 sm:flex-row justify-between ">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              <h1 className="text-primary-500 text-lg font-semibold mb-3">
                King Bed - Stylish, Bright & Cozy
              </h1>
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
              <p className="font-semibold text-secondary-800 text-lg mb-2 sm:text-center">
                $271 Night
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
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex justify-center items-center flex-wrap gap-3 my-10 sm:gap-5"
        >
          <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
            <span className="font-semibold">6</span>
            <span className="text-sm font-medium">Guests</span>
          </div>
          <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
            <span className="font-semibold">2</span>
            <span className="text-sm font-medium">Bedrooms</span>
          </div>
          <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
            <span className="font-semibold">2</span>
            <span className="text-sm font-medium">Beds</span>
          </div>
          <div className="p-3 border border-secondary-900 rounded-lg flex flex-col gap-1  items-center w-[90px]">
            <span className="font-semibold">2</span>
            <span className="text-sm font-medium">Baths</span>
          </div>
        </motion.section>
        <motion.button
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onClick={() =>
            window.open(
              "https://www.airbnb.com/rooms/17355559?source_impression_id=p3_1706610286_V5a72yW7w2BSAwHQ",
              "_blank"
            )
          }
          className="bg-primary-500 px-10 py-3 rounded-md text-white font-semibold transition duration-150 block mx-auto hover:bg-primary-600"
        >
          Book Now{" "}
        </motion.button>
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
              transition={{ delay: 0.7, duration: 0.4 }}
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
              transition={{ delay: 1, duration: 0.4 }}
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
              transition={{ delay: 1.3, duration: 0.4 }}
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
        <section className="my-10">
          <div className="mb-10">
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-xl font-bold text-center text-primary-500 mb-2 md:text-2xl md:mb-5 lg:text-3xl"
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
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-center md:w-2/3 md:mx-auto"
            >
              Discover the perfect blend of style, comfort, and convenience at
              our 3BR 3Bath Tampa Heights Oasis, a gem nestled in the city's
              heart, just minutes from Downtown Tampa. This vibrant neighborhood
              boasts excellent restaurants, shops, attractions, and landmarks,
              making it an ideal base for your Tampa getaway.
            </motion.p>
          </div>
          {/* <div>
            <p className="text-xl font-bold text-center text-primary-500 mb-2">
              Amenities
            </p>

            <div className="flex gap-3 items-center mb-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span>City skyline view</span>
            </div>
            <div className="flex gap-3 items-center mb-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span>Fast wifi - 634 Mbps</span>
            </div>
          </div> */}
        </section>
      </main>
      <Footer />
    </AnimatePresence>
  );
}

export default App;
