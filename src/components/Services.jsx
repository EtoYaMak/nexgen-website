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
            <img
              src="https://banizzo.codexup.com/wp-content/uploads/2023/09/1.png"
              alt="img"
              className="w-full rounded-full p-3 bg-transparent border-2 border-[#061AD1]/70"
            />
          </span>
          <div className="font-Poppins text-black flex flex-col gap-4">
            <h1 className="font-semibold uppercase flex flex-col tracking-[0.020em] leading-5 ">
              Web <span>Development</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa.
            </p>
          </div>
        </div>
        <div className="customCard flex flex-row gap-5 max-w-[400px] h-full">
          <span className="w-[155px] px-1 pt-[2px]">
            <img
              src="https://banizzo.codexup.com/wp-content/uploads/2023/09/1.png"
              alt="img"
              className="w-full rounded-full p-3 bg-transparent border-2 border-[#061AD1]/70"
            />
          </span>
          <div className="font-Poppins text-black flex flex-col gap-4">
            <h1 className="font-semibold uppercase flex flex-col tracking-[0.020em] leading-5 ">
              Web <span>Development</span>
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa.
            </p>
          </div>
        </div>
        <div className="customCard flex flex-row gap-5 max-w-[400px] h-full">
          <span className="w-[155px] px-1 pt-[2px]">
            <img
              src="https://banizzo.codexup.com/wp-content/uploads/2023/09/1.png"
              alt="img"
              className="w-full rounded-full p-3 bg-transparent border-2 border-[#061AD1]/70"
            />
          </span>
          <div className="font-Poppins text-black flex flex-col gap-4">
            <h1 className="font-semibold uppercase flex flex-col tracking-[0.020em] leading-5 ">
              Web <span>Development</span>
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
