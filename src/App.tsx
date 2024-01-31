import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Amenities from "./components/Amenities";
import About from "./components/About";
import Hero from "./components/Hero";
import Attributes from "./components/Attributes";
import Gallery from "./components/Gallery";

function App() {
  return (
    <AnimatePresence>
      <Navbar />
      <main className="bg-[#f3f7f7] px-5 pt-14 pb-10 sm:px-10 md:px-16 lg:px-40">
        <Hero />
        <Attributes />

        <About />
        <Amenities />
        <Gallery />
      </main>
      <Footer />
    </AnimatePresence>
  );
}

export default App;
