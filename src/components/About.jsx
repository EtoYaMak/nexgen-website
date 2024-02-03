import React from "react";
import { FaXTwitter, FaGooglePlusG } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
/* Nexgen Blue 061AD1 */
function About() {
  //
  return (
    <div className="bg-transparent min-h-screen max-w-7xl mx-auto">
      <div className="header pt-10 pb-4 flex flex-col gap-10 text-center ">
        <h1 className="text-2xl uppercase font-Open text-black font-semibold flex flex-col justify-center items-center">
          Our Team
          <span className="text-[15px] mt-6 leading-4 text-black/80 normal-case">
            NEXGEN's growth-driven services and tailored consultations propel
            your business forward, guided by a dedicated team committed to
            client satisfaction.
          </span>
        </h1>

        <h2 className="text-[2.5rem] uppercase font-Poppins flex flex-row gap-3 font-semibold tracking-[0.020em] text-[#3e3e3e] justify-center">
          meet the
          <span className="text-[#061AD1]/90">talent</span>
        </h2>
      </div>
      <p className="text-center text-black font-Poppins">
        Our behind-the-scenes team transforms your dreams into reality.
      </p>
      <div className="personCards flex flex-col md:flex-row items-center py-4 px-2 gap-8 md:gap-4 justify-evenly md:h-[60vh] mx-auto w-full">
        <div
          className="personCard py-2 group w-full md:w-[286px] h-1/6 md:h-[450px] bg-transparent flex md:flex-col justify-evenly items-center
          shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
        hover:shadow-[rgba(13,_38,_76,_0.33)_0px_9px_20px] hover:-translate-y-3 duration-[300ms] ease-in-out hover:text-white rounded-md hover:bg-[#061AD1]/90 "
        >
          <span>
            <img
              src="./picBlank.png"
              alt="person"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] mask mask-circle "
            />
          </span>
          <span className="text-black group-hover:text-white duration-200 max-w-[200px] text-center w-full space-y-3">
            <h1 className="name font-Poppins text-xl font-medium">Harkamal</h1>
            <h2 className="role font-Poppins text-sm font-normal">
              Managing Director
            </h2>
            <span className="socials flex gap-4 items-center justify-center">
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <FaXTwitter />
              </a>
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <FaGooglePlusG />
              </a>
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <MdAlternateEmail />
              </a>
            </span>
          </span>
        </div>
        <div className="personCard py-2 group w-full md:w-[286px] h-1/6 md:h-[450px] bg-transparent flex md:flex-col justify-evenly items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(13,_38,_76,_0.33)_0px_9px_20px] hover:-translate-y-3 duration-[300ms] ease-in-out hover:text-white rounded-md hover:bg-[#061AD1]/90 ">
          <span>
            <img
              src="./mak.jpg"
              alt="person"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] mask mask-circle"
            />
          </span>
          <span className="text-black group-hover:text-white duration-200 max-w-[200px] text-center w-full space-y-3">
            <h1 className="name font-Poppins text-xl font-medium">Muhammed</h1>
            <h2 className="role font-Poppins text-sm font-normal">
              Lead Developer
            </h2>
            <span className="socials flex gap-4 items-center justify-center">
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <FaXTwitter />
              </a>
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <FaGooglePlusG />
              </a>
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <MdAlternateEmail />
              </a>
            </span>
          </span>
        </div>
        <div className="personCard py-2 group w-full md:w-[286px] h-1/6 md:h-[450px] bg-transparent flex md:flex-col justify-evenly items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(13,_38,_76,_0.33)_0px_9px_20px] hover:-translate-y-3 duration-[300ms] ease-in-out hover:text-white rounded-md hover:bg-[#061AD1]/90 ">
          <span>
            <img
              src="./picBlank.png"
              alt="person"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] mask mask-circle "
            />
          </span>
          <span className="text-black group-hover:text-white duration-200 max-w-[200px] text-center w-full space-y-3">
            <h1 className="name font-Poppins text-xl font-medium">Emad</h1>
            <h2 className="role font-Poppins text-sm font-normal">
              Chief Inofmration Security Officer
            </h2>
            <span className="socials flex gap-4 items-center justify-center">
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <FaXTwitter />
              </a>
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <FaGooglePlusG />
              </a>
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <MdAlternateEmail />
              </a>
            </span>
          </span>
        </div>
        <div className="personCard py-2 group w-full md:w-[286px] h-1/6 md:h-[450px] bg-transparent flex md:flex-col justify-evenly items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(13,_38,_76,_0.33)_0px_9px_20px] hover:-translate-y-3 duration-[300ms] ease-in-out hover:text-white rounded-md hover:bg-[#061AD1]/90 ">
          <span>
            <img
              src="./picBlank.png"
              alt="person"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] mask mask-circle "
            />
          </span>
          <span className="text-black group-hover:text-white duration-200 max-w-[200px] text-center w-full space-y-3">
            <h1 className="name font-Poppins text-xl font-medium">Fahad</h1>
            <h2 className="role font-Poppins text-sm font-normal">
              Business Development Manager
            </h2>
            <span className="socials flex gap-4 items-center justify-center">
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <FaXTwitter />
              </a>
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <FaGooglePlusG />
              </a>
              <a
                href=""
                className="hover:text-red-500 ease-in-out duration-100"
              >
                <MdAlternateEmail />
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
