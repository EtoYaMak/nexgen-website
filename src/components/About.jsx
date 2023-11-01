import React from "react";

function About() {
  //
  return (
    <div className="min-h-screen background-svg-ref  py-8 px-4 mx-auto w-full flex justify-center items-center mt-[0%] select-none overflow-clip">
      <div className="flex flex-col sm:flex-row  mx-auto p-4">
        <div className="grid bxsh sm:w-1/4 justify-center items-center text-center w-full flex-wrap card  rounded-box bg-zinc-950/60 backdrop-blur-sm">
          <h1 className="flex justify-center items-center px-4 text-3xl h-24 sm:h-fit sm:text-4xl uppercase text-[#f2f2f2]">
            About NEXGEN
          </h1>
        </div>
        <div className="divider divider-vertical sm:divider-horizontal"></div>
        <div className="grid w-full boxshadow2 flex-grow card rounded-box  bg-zinc-950/60 place-items-center backdrop-blur-sm">
          <p className="text-center text-xl max-w-3xl p-8">
            <strong className="mr-1 text-blue-500">
              NexGen Cyber Solutions
            </strong>
            is a dynamic IT company specializing in cybersecurity, software
            development, and social media management. With a commitment to
            excellence and a passion for innovation, we have earned the trust of
            numerous clients. Our team comprises industry experts with a proven
            track record in delivering cutting-edge solutions. At NexGen, we
            pride ourselves on our customer-centric approach, understanding that
            your success is our success. Join us on this exciting journey toward
            a digitally secure and technologically advanced future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
