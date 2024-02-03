import React from "react";
/* Nexgen Blue 061AD1 */
function Services() {
  return (
    <div className="Services min-h-[60vh] bg-[#fff] z-0 max-w-[1280px] mx-auto px-4">
      <div className="header py-10 flex flex-col gap-8 ">
        <h1 className="text-2xl uppercase font-Open text-black font-semibold w-fit">
          Our Services
        </h1>
        <h2 className="w-fit text-[2rem] md:text-[2.5rem] uppercase font-Poppins flex flex-col leading-9 font-semibold tracking-[0.020em] text-[#3e3e3e]">
          what services we're
          <span className="text-[#061AD1]/90">offering.</span>
        </h2>
      </div>
      <div className="customCards flex flex-wrap justify-center max-[850px]:justify-center min-[850px]:justify-between pt-4 pb-10 md:pt-10 md:pb-10 min-[850px]:gap-0 max-[850px]:gap-4">
        <div className="customCard flex flex-row gap-5 max-w-[400px] h-full">
          <span className="w-[155px] px-1 pt-[2px]">
            <span className="mask mask-circle">
              <img
                src="./social-media.png"
                alt="img"
                className="p-[0.65em] bg-transparent"
              />
            </span>
          </span>
          <div className="font-Poppins text-black flex flex-col gap-4">
            <h1 className="font-semibold uppercase flex flex-col tracking-[0.020em] leading-5 ">
              Social Media <span>Management</span>
            </h1>
            <ul className="gap-2 flex flex-col font-Poppins text-[14px]">
              <li className="leading-5 border-l-[3px] border-red-500 pl-1">
                Boost your reach by expanding social media presence and
                attracting new followers.
              </li>
              <li className="leading-5 border-l-[2px] border-red-500 pl-1">
                Elevate engagement with compelling content, turning interactions
                into lasting connections.
              </li>
              <li className="leading-5 border-l-[1px] border-red-500 pl-1">
                Uncover insights through analytics, understanding your
                audience's preferences for a brighter digital future.
              </li>
            </ul>
          </div>
        </div>
        <div className="customCard flex flex-row gap-5 max-w-[400px] h-full">
          <span className="w-[155px] px-1 ">
            <span className="mask mask-circle">
              <img
                src="./webdev.png"
                alt="img"
                className="p-[0.22em] bg-transparent"
              />
            </span>
          </span>
          <div className="font-Poppins text-black flex flex-col gap-4">
            <h1 className="font-semibold uppercase flex flex-col tracking-[0.020em] leading-5 ">
              Mobile App & Website<span>Development</span>
            </h1>
            <ul className="gap-2 flex flex-col font-Poppins text-[14px]">
              <li className="leading-5 border-l-[3px] border-red-500 pl-1">
                Get your business app or website crafted to perfection – just
                share your requirements, and we'll bring your vision to life.
              </li>
              <li className="leading-5 border-l-[2px] border-red-500 pl-1">
                Experience a seamless development process with interactive
                demos, allowing you to provide feedback and shape the product to
                your liking.
              </li>
              <li className="leading-5 border-l-[1px] border-red-500 pl-1">
                Save time and stay up-to-date with our maintenance service,
                ensuring your app or website evolves in sync with your business
                needs.
              </li>
            </ul>
          </div>
        </div>
        <div className="customCard flex flex-row gap-5 max-w-[400px] h-full">
          <span className="w-[155px] px-1 ">
            <span className="mask mask-circle">
              <img
                src="./cyber-security.png"
                alt="img"
                className="p-[0.4em] bg-transparent"
              />
            </span>
          </span>
          <div className="font-Poppins text-black flex flex-col gap-4">
            <h1 className="font-semibold uppercase flex flex-col tracking-[0.020em] leading-5 ">
              Cyber Security <span>Protect your business</span>
            </h1>
            <ul className="gap-2 flex flex-col font-Poppins text-[14px]">
              <li className="leading-5 border-l-[3px] border-red-500 pl-1">
                Safeguard against cyber threats with our comprehensive
                protection, ensuring your business remains secure.
              </li>
              <li className="leading-5 border-l-[2px] border-red-500 pl-1">
                Benefit from ongoing maintenance, shielding your data from
                unauthorized access, edits, or any potential harm.
              </li>
              <li className="leading-5 border-l-[1px] border-red-500 pl-1">
                Trust our expert team to fortify your defenses, providing robust
                security measures for peace of mind in the digital realm.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
