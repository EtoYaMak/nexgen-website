import React from "react";
import { Link } from "react-scroll";
import { TbArrowNarrowRight } from "react-icons/tb";
import { motion } from "framer-motion";
import { BsWindowFullscreen, BsPhone } from "react-icons/bs";
import { BsShieldPlus } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

function Home() {
  return (
    <motion.div className="min-h-screen  mx-auto select-none">
      <span className="background-stock absolute max-h-[75vh]" />
      <span className="z-50 gap-2 flex flex-col justify-evenly items-center relative h-[78vh] w-full">
        {/* TITLE & DESC */}
        <span className="mx-4 backdrop-blur-[2px] p-2 rounded-3xl relative top-10">
          <h1 className="text-[3rem] md:text-[4.2rem] font-bold uppercase font-Open text-white text-center">
            Empowering Tomorrow
          </h1>

          <p className="text-xl font-Open max-w-3xl text-center text-white font-medium">
            Crafters of Innovation at NEXGEN. Elevate your digital presence with
            cutting-edge Mobile App and Web Development, Social Media
            Management, and Cyber Security solutions.
          </p>
        </span>
        {/* BUTTOn */}
        <span className=" flex max-w-3xl w-full justify-center items-center gap-x-5 ">
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-50}
            className="px-5 sm:px-10 pr-4 sm:pr-8 py-3 bg-[#0693e3] hover:bg-transparent text-white uppercase rounded-[2rem] tracking-widest text-[14px] font-Poppins font-normal border-2 border-transparent hover:border-white flex gap-1 justify-center items-center duration-200 ease-in-out backdrop-blur-0 hover:backdrop-blur-[1px]"
          >
            Services <TbArrowNarrowRight size={20} />
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="px-5 sm:px-10 pr-4 sm:pr-8 py-3 bg-[#cf2e2e] hover:bg-transparent text-white uppercase rounded-[2rem] tracking-widest text-[14px] font-Poppins font-normal border-2 border-transparent hover:border-white flex gap-1 justify-center items-center duration-200 ease-in-out backdrop-blur-0 hover:backdrop-blur-[1px]"
          >
            Get in Touch <TbArrowNarrowRight size={20} />
          </Link>
        </span>
      </span>
      {/* Highlights */}
      <span className="flex flex-col min-[728px]:flex-row  gap-4 md:gap-10 md:max-w-5xl mx-auto justify-between items-center p-4 mt-10">
        <span className="text-black flex  text-[16px] font-Poppins group ">
          <span className="w-[75px]">
            <span className="mask mask-circle">
              <img
                src="./social-media.png"
                alt="img"
                className="p-[0.65em] bg-transparent"
              />
            </span>
          </span>
          <p className="font-medium font-Poppins text-black/80 flex flex-col leading-5 items-center justify-center px-2">
            Social Media <br />
            Management
          </p>
        </span>
        <span className="text-black flex text-[16px] font-Poppins group">
          <span className="w-[80px]  ">
            <span className="mask mask-circle">
              <img
                src="./webdev.png"
                alt="img"
                className="p-[0.65em] bg-transparent"
              />
            </span>
          </span>
          <p className="font-medium font-Poppins text-black/80 flex flex-col leading-5 items-center justify-center px-2">
            Mobile App & <br /> Website Development
          </p>
        </span>

        <span className="text-black flex  text-[16px] font-Poppins group">
          <span className="w-[80px] ">
            <span className="mask mask-circle">
              <img
                src="./cyber-security.png"
                alt="img"
                className="p-[0.65em] bg-transparent"
              />
            </span>
          </span>
          <p className="font-medium font-Poppins text-black/80 flex flex-col leading-5 items-center justify-center px-2">
            Cyber Security
          </p>
        </span>
      </span>
    </motion.div>
  );
}

export default Home;
