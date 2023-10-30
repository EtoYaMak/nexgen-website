import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar fixed bxsh3 bg-zinc-950/80 z-50 backdrop-blur-sm">
      <div className="flex-1">
        <button className="btn btn-ghost btn-wide hover:bg-transparent normal-case text-3xl hover:scale-105 duration-500 ease-in-out hover:text-[#f2f2f2]">
          NEXGEN
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-xl gap-3">
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
      </div>
    </div>
  );
}

export default Navbar;
