import React from "react";

function Services() {
  return (
    <div className="bg-[#020202] background-svg-flux justify-center items-center flex flex-col space-y-10 px-4 py-8 sm:min-h-screen select-none">
      <h1 className="text-5xl text-center text-[#f2f2f2] underline underline-offset-4 decoration-[#f2f2f2] ">
        Our Expertise
      </h1>
      <p className="text-[#f2f2f2] opacity-90 text-xl sm:text-2xl text-center max-w-xl p-2">
        At NexGen Cyber Solutions, we offer a comprehensive suite of services to
        meet your technological requirements. We specialize in the following
        areas
      </p>
      <div className="mx-auto w-fit p-4 flex sm:flex-row flex-wrap gap-4 ">
        <div className="group   hover:scale-[102%] duration-500 ease-in-out  bg-zinc-950 shadow-sm shadow-[#ef3131] mx-auto py-4 rounded-tl-3xl rounded-br-3xl max-w-md gap-4 overflow-hidden ">
          <h1 className="text-3xl text-center text-[#f2f2f2] pb-2 bg-[transparent] group-hover:bg-[#ef3131]  duration-500 ease-in-out">
            Cyber Security
          </h1>
          <p className=" text-xl text-center text-[#f2f2f2] opacity-80  p-4 bg-zinc-950/20 backdrop-blur-[2px] ">
            Your digital assets are invaluable. Our cyber security solutions are
            designed to protect your data, networks, and systems from threats,
            ensuring your peace of mind.
          </p>
        </div>
        <div className="group shadow-sm hover:scale-[102%] duration-500 ease-in-out shadow-[#ef3131] mx-auto bg-zinc-950 py-4 rounded-tl-3xl rounded-br-3xl max-w-md gap-4 overflow-hidden">
          <h1 className="text-3xl text-center text-[#f2f2f2] pb-2 bg-[transparent] group-hover:bg-[#ef3131]  duration-500 ease-in-out">
            Development
          </h1>
          <p className=" text-xl text-center text-[#f2f2f2] opacity-80  p-4 bg-zinc-950/20 backdrop-blur-[2px] ">
            We turn your ideas into reality. Our team of skilled developers
            creates innovative and user-friendly software and mobile apps
            tailored to your needs.
          </p>
        </div>
        <div className="group  hover:scale-[102%] duration-500 ease-in-out shadow-sm shadow-[#ef3131] mx-auto bg-zinc-950 py-4 rounded-tl-3xl rounded-br-3xl max-w-md gap-4 overflow-hidden">
          <h1 className="text-3xl text-center text-[#f2f2f2] pb-2 bg-[transparent] group-hover:bg-[#ef3131]  duration-500 ease-in-out">
            Social Media
          </h1>
          <p className="text-xl text-center text-[#f2f2f2] opacity-80  p-4 bg-zinc-950/20 backdrop-blur-[2px]">
            Stay ahead in the digital landscape. Our social media management
            services help you connect with your audience and drive engagement on
            popular platforms
          </p>
        </div>
      </div>
      <h1 className=" text-center text-lg sm:text-2xl text-[#f2f2f2] opacity-90">
        Explore our services and let us be your trusted technology partner.
      </h1>
    </div>
  );
}

export default Services;
