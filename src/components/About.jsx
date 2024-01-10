import React from "react";
import { FaXTwitter, FaGooglePlusG } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
/* Nexgen Blue 061AD1 */
function About() {
  //
  return (
    <div className="bg-transparent min-h-screen max-w-7xl mx-auto">
      <div className="header py-10 flex flex-col gap-8 text-center ">
        <h1 className="text-2xl uppercase font-Open text-black font-semibold">
          Our Team
        </h1>
        <h2 className="text-[2.5rem] uppercase font-Poppins flex flex-row gap-3 font-semibold tracking-[0.020em] text-[#3e3e3e] justify-center">
          meet the
          <span className="text-[#061AD1]/90">talent</span>
        </h2>
      </div>
      <div className="personCards flex flex-col md:flex-row items-center py-4 px-2 gap-8 md:gap-4 justify-evenly md:h-[60vh] mx-auto w-full">
        <div
          className="personCard group w-full md:w-[286px] h-1/6 md:h-[450px] bg-transparent flex md:flex-col justify-evenly items-center
          shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
        hover:shadow-[rgba(13,_38,_76,_0.33)_0px_9px_20px] hover:-translate-y-3 duration-[300ms] ease-in-out hover:text-white rounded-md hover:bg-[#061AD1]/90 "
        >
          <span>
            <img
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-3-team-img-2.png"
              alt="person"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] min-w-fit"
            />
          </span>
          <span className="text-black group-hover:text-white duration-200 max-w-[200px] text-center w-full space-y-3">
            <h1 className="name font-Poppins text-xl font-medium">John Doe</h1>
            <h2 className="role font-Poppins text-sm font-normal">
              Web Designer
            </h2>
            <span className="socials flex gap-4 items-center justify-center">
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <FaGooglePlusG />
              </a>
              <a href="">
                <MdAlternateEmail />
              </a>
            </span>
          </span>
        </div>
        <div className="personCard group w-full md:w-[286px] h-1/6 md:h-[450px] bg-transparent flex md:flex-col justify-evenly items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(13,_38,_76,_0.33)_0px_9px_20px] hover:-translate-y-3 duration-[300ms] ease-in-out hover:text-white rounded-md hover:bg-[#061AD1]/90 ">
          <span>
            <img
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-3-team-img-2.png"
              alt="person"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] min-w-fit"
            />
          </span>
          <span className="text-black group-hover:text-white duration-200 max-w-[200px] text-center w-full space-y-3">
            <h1 className="name font-Poppins text-xl font-medium">John Doe</h1>
            <h2 className="role font-Poppins text-sm font-normal">
              Web Designer
            </h2>
            <span className="socials flex gap-4 items-center justify-center">
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <FaGooglePlusG />
              </a>
              <a href="">
                <MdAlternateEmail />
              </a>
            </span>
          </span>
        </div>
        <div className="personCard group w-full md:w-[286px] h-1/6 md:h-[450px] bg-transparent flex md:flex-col justify-evenly items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(13,_38,_76,_0.33)_0px_9px_20px] hover:-translate-y-3 duration-[300ms] ease-in-out hover:text-white rounded-md hover:bg-[#061AD1]/90 ">
          <span>
            <img
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-3-team-img-2.png"
              alt="person"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] min-w-fit"
            />
          </span>
          <span className="text-black group-hover:text-white duration-200 max-w-[200px] text-center w-full space-y-3">
            <h1 className="name font-Poppins text-xl font-medium">John Doe</h1>
            <h2 className="role font-Poppins text-sm font-normal">
              Web Designer
            </h2>
            <span className="socials flex gap-4 items-center justify-center">
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <FaGooglePlusG />
              </a>
              <a href="">
                <MdAlternateEmail />
              </a>
            </span>
          </span>
        </div>
        <div className="personCard group w-full md:w-[286px] h-1/6 md:h-[450px] bg-transparent flex md:flex-col justify-evenly items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(13,_38,_76,_0.33)_0px_9px_20px] hover:-translate-y-3 duration-[300ms] ease-in-out hover:text-white rounded-md hover:bg-[#061AD1]/90 ">
          <span>
            <img
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-3-team-img-2.png"
              alt="person"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] min-w-fit"
            />
          </span>
          <span className="text-black group-hover:text-white duration-200 max-w-[200px] text-center w-full space-y-3">
            <h1 className="name font-Poppins text-xl font-medium">John Doe</h1>
            <h2 className="role font-Poppins text-sm font-normal">
              Web Designer
            </h2>
            <span className="socials flex gap-4 items-center justify-center">
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <FaGooglePlusG />
              </a>
              <a href="">
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
