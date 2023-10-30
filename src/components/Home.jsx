import React from "react";

function Home() {
  return (
    <div className="hero min-h-screen background-svg-chaos select-none ">
      <div className="hero-overlay opacity-30"></div>
      <div className="hero-content  text-center text-neutral-content bg-zinc-950/80 backdrop-blur-sm rounded-3xl heroboxshadow ">
        <div className="min-w-fit max-w-4xl py-14 sm:py-12">
          <h1 className="mb-5 text-5xl font-bold uppercase">
            NexGen Cyber Solutions
          </h1>
          <p className="mb-5 text-lg">
            At NexGen Cyber Solutions, we are committed to safeguarding your
            digital world. We provide a wide range of services to keep your data
            secure and your business thriving. Our dedicated team of experts is
            at the forefront of technology, ensuring that your cybersecurity,
            software, and social media management needs are met with precision.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
