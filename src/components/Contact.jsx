import React from "react";

import { FaInstagram } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
function Contact() {
  return (
    <div className=" min-h-screen flex background-svg-ten justify-center items-center">
      <div className="max-w-2xl mx-auto flex gap-4 flex-col justify-center items-center h-fit bg-zinc-950/40 backdrop-blur-sm rounded-3xl p-8">
        <h1 className="text-4xl text-[#f2f2f2] select-none">Get in Touch</h1>
        <p className="text-xl text-center text-[#f2f2f2] opacity-80 select-none">
          We're always here to assist you. Reach out to us with your inquiries,
          concerns, or project ideas. Our team is ready to provide expert
          guidance and support.
        </p>

        <div className="flex flex-col gap-8 w-3/4">
          <div className="collapse collapse-plus background-svg-surf bg-[#041ccb]/20 bxsh2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-center select-none text-[#f2f2f2] opacity-90">
              Contact Us!
            </div>
            <div className="collapse-content text-center bg-zinc-950 ">
              <div className="pt-4">
                <span className="flex justify-center items-center">
                  <p className="flex items-center gap-2 mb-2 tracking-wide text-[#f2f2f2] hover:underline hover:decoration-[#ef3131]  underline-offset-4">
                    <GoMail size={24} /> info@nexgencybersolutions.co.uk
                  </p>
                </span>

                <span className="flex justify-center items-center">
                  <p className="flex items-center gap-2 racking-wide text-[#f2f2f2] hover:underline hover:decoration-[#ef3131] underline-offset-4">
                    <LiaPhoneVolumeSolid size={24} /> 01613274017
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus background-svg-surf bg-[#041ccb]/20">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-center text-[#f2f2f2] opacity-90">
              Social Media
            </div>
            <div className="collapse-content text-center bg-zinc-950">
              <a
                href="https://www.instagram.com/nexgencybersolutions"
                target="_blank"
                className="text-white opacity-75 hover:text-[#f2f2f2] hover:opacity-100 flex justify-center gap-1 pt-4"
              >
                <FaInstagram size={26} className="text-white" /> NexGen Cyber
                Solutions
              </a>
            </div>
          </div>
        </div>

        <h1 className="text-center text-xl text-[#f2f2f2] opacity-80 select-none">
          Thank you for considering NexGen Cyber Solutions. We look forward to
          helping you achieve your digital goals.
        </h1>
      </div>
    </div>
  );
}

export default Contact;
