import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar({ hidden, activeSection }) {
  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className={`fixed w-full z-[99] items-center flex duration-[5ms] ease-in-out py-2 ${
        activeSection === "home"
          ? "text-white backdrop-blur-[1px]"
          : "text-[#061AD1] backdrop-blur-[1px]"
      }`}
    >
      <div
        className={`sm:flex-1 flex w-full sm:w-[87%] justify-between
`} /* ${activeSection !== "home" ? "backdrop-blur-[1px]" : "backdrop-blur-none"} */
      >
        <button className="btn btn-ghost md:btn-wide hover:bg-transparent normal-case text-3xl font-Poppins hover:scale-105 duration-500 ease-in-out ">
          NEXGEN
        </button>
      </div>
      {/* DESKTOP NAV */}
      <ul className="text-xl sm:flex hidden ">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            className="btn btn-ghost hover:bg-transparent normal-case text-xl font-Poppins font-medium  hover:scale-105 duration-300 ease-in-out "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-50}
            className="btn btn-ghost hover:bg-transparent normal-case text-xl font-Poppins font-medium hover:scale-105 duration-300 ease-in-out "
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            className="btn btn-ghost hover:bg-transparent normal-case text-xl font-Poppins font-medium hover:scale-105 duration-300 ease-in-out "
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="btn btn-ghost hover:bg-transparent normal-case text-xl font-Poppins font-medium hover:scale-105 duration-300 ease-in-out "
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* MOBILE NAV */}
      <motion.div
        variants={{ visible: { y: 0 }, hidden: { y: "-700%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ delay: 0.35, duration: 0.35, ease: "easeInOut" }}
        className="dropdown dropdown-end dropdown-bottom sm:hidden mr-2 "
      >
        <label tabIndex={0} className="flex p-2">
          <AiOutlineMenu size={24} />
        </label>
        <ul
          tabIndex={0}
          className={`dropdown-content rounded-sm z-[1] w-40 menu bg-white p-2 shadow    ${
            activeSection !== "home" ? "text-black" : "text-black"
          }`}
          /* className="dropdown-content z-[1] mt-6 w-40 menu bg-zinc-950/95 p-2 shadow  rounded-box " */
        >
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-50}
              className="btn btn-ghost hover:bg-transparent normal-case text-xl hover:scale-105 duration-300 ease-in-out hover:text-[#ef3131] "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-50}
              className="btn btn-ghost hover:bg-transparent normal-case text-xl hover:scale-105 duration-300 ease-in-out hover:text-[#ef3131]"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              className="btn btn-ghost hover:bg-transparent normal-case text-xl hover:scale-105 duration-300 ease-in-out hover:text-[#ef3131]"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="btn btn-ghost hover:bg-transparent normal-case text-xl hover:scale-105 duration-300 ease-in-out hover:text-[#ef3131]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
