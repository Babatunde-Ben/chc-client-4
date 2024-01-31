import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Amenities from "./components/Amenities";
import About from "./components/About";
import Hero from "./components/Hero";
import Attributes from "./components/Attributes";

function App() {
  return (
    <AnimatePresence>
      <Navbar />
      <main className="bg-[#f3f7f7] px-5 pt-14 pb-10 sm:px-10 md:px-16 lg:px-40">
        <Hero />
        <Attributes />

        <About />
        <Amenities />
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
              transition={{ delay: 0.3, duration: 0.3 }}
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
              transition={{ delay: 0.3, duration: 0.3 }}
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
              transition={{ delay: 0.3, duration: 0.3 }}
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
              transition={{ delay: 0.3, duration: 0.3 }}
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
