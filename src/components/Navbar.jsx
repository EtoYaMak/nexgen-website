import React from "react";
import { Link } from "react-scroll";

import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar fixed bxsh3 bg-zinc-950/80 z-50 backdrop-blur-sm items-center">
      <div className="sm:flex-1 flex w-[87%] justify-between">
        <button className="btn btn-ghost md:btn-wide hover:bg-transparent normal-case text-3xl hover:scale-105 duration-500 ease-in-out hover:text-[#f2f2f2]">
          NEXGEN
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu hidden sm:menu-horizontal text-xl gap-3">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-50}
              className="btn btn-ghost hover:bg-transparent normal-case text-xl hover:scale-105 duration-300 ease-in-out hover:text-[#f2f2f2]"
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
              className="btn btn-ghost hover:bg-transparent normal-case text-xl hover:scale-105 duration-300 ease-in-out hover:text-[#f2f2f2]"
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
              className="btn btn-ghost hover:bg-transparent normal-case text-xl hover:scale-105 duration-300 ease-in-out hover:text-[#f2f2f2]"
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
              className="btn btn-ghost hover:bg-transparent normal-case text-xl hover:scale-105 duration-300 ease-in-out hover:text-[#f2f2f2]"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="dropdown dropdown-end dropdown-bottom sm:hidden ">
          <label tabIndex={0} className="flex p-2">
            <AiOutlineMenu size={24} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] mt-6 w-40 menu bg-zinc-950/95 p-2 shadow  rounded-box "
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
