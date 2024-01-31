import { motion } from "framer-motion";
import { ReactComponent as Logo } from "../assets/svgs/CHC-logo.svg";
import { data } from "../lib/data";

const Navbar = () => {
  const navBarVariants = {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2 } },
  };
  return (
    <nav className="relative overflow-hidden flex justify-between items-center p-5 shadow-md md:gap-32 sm:px-10 md:px-16 lg:px-28 lg:gap-48  lg:max-w-[1500px] lg:mx-auto">
      <motion.span variants={navBarVariants} initial="hide" animate="show">
        {/* <img src={Logo} alt="Co-host Capital" className="w-40 bg-green-200" /> */}
        <Logo
          onClick={() => (window.location.href = "#")}
          className="w-10 h-10 cursor-pointer"
        />
      </motion.span>

      {/* <span
        onClick={() => setIsNavbarOpen(true)}
        className="cursor-pointer transition duration-150 lg:hidden hover:text-primary-500"
      >
        <HamburgerMenuIcon />
      </span> */}
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.3, duration: 0.4 }}
        onClick={() => window.open(data.airbnb_link, "_blank")}
        className="bg-primary-500 px-5  rounded-md text-white font-semibold transition duration-150 text-sm hover:bg-primary-600 md:px-6 py-3"
      >
        Book Now{" "}
      </motion.button>
    </nav>
  );
};

export default Navbar;
