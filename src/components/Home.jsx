import React from "react";
import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";

function Home() {
  return (
    <div className="min-h-screen  mx-auto select-none">
      <span className="background-stock absolute max-h-[75vh]" />
      <span className="z-50 gap-2 flex flex-col justify-evenly items-center relative h-[78vh] w-full ">
        {/* TITLE & DESC */}
        <span className="mx-4">
          <h1 className="text-[3rem] md:text-[4.2rem] font-bold uppercase font-Open text-white text-center ">
            Building the future
          </h1>

          <p className="text-xl font-Open max-w-3xl text-center text-white font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna.
          </p>
        </span>
        {/* BUTTOn */}
        <span className=" flex max-w-3xl w-full justify-center items-center gap-x-5 ">
          <Link className="px-10 pr-8 py-3 bg-[#0693e3] hover:bg-transparent text-white uppercase rounded-[2rem] tracking-widest text-[14px] font-Poppins font-normal border-2 border-transparent hover:border-white flex gap-1 justify-center items-center duration-200 ease-in-out backdrop-blur-0 hover:backdrop-blur-[1px]">
            Button <TbArrowNarrowRight size={20} />
          </Link>
          <Link className="px-10 pr-8 py-3 bg-[#cf2e2e] hover:bg-transparent text-white uppercase rounded-[2rem] tracking-widest text-[14px] font-Poppins font-normal border-2 border-transparent hover:border-white flex gap-1 justify-center items-center duration-200 ease-in-out backdrop-blur-0 hover:backdrop-blur-[1px]">
            Button <TbArrowNarrowRight size={20} />
          </Link>
        </span>
      </span>
      {/* Highlights */}
      <span className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto justify-center items-center p-4">
        <span className="text-black flex items-center gap-4 text-2xl">
          <BsCodeSlash size={32} />
          {/*           <img
            src={require("../assets/webIcon.png").default}
            alt="Web icon"
            className="w-12 h-12 text-xs"
          /> */}
          Service Highlight
        </span>
        <span className="text-black flex items-center gap-4 text-2xl">
          <BsCodeSlash size={32} /> Service Highlight
        </span>
        <span className="text-black flex items-center gap-4 text-2xl">
          <BsCodeSlash size={32} /> Service Highlight
        </span>
      </span>
    </div>
  );
}

export default Home;
