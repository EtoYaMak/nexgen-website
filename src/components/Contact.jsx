import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9d748ca1-3c5d-440a-a33a-6851ba790f8d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully. Our team will reach out soon.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center relative py-10">
      <span className="background-svg-ten max-h-[75vh] absolute top-0 opacity-60 z-[0]" />
      <span className="getin h-screen w-full absolute top-0 opacity-60 z-[1]" />
      <div className="flex flex-col justify-start items-center p-4 md:p-4 w-full h-full md:h-screen z-[10]">
        <span className="font-Poppins mb-6 flex flex-col md:max-w-[980px] w-full">
          <h1 className="text-[2rem] md:text-[3.5rem] font-medium text-[#061AD1]">
            Get In Touch
          </h1>
          <p className="text-black font-Open font-medium text-xl">
            Let us know how we can help.
          </p>
        </span>
        <div className="messageboard shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-w-[980px] md:max-h-[500px] h-full w-full relative items-center justify-between flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="flex flex-col justify-start h-full  md:p-8 md:max-w-[62%] w-full mb-16 sm:mb-4">
            <h1 className="text-2xl font-Poppins text-black font-normal w-fit sm:m-0 m-4">
              Send us a Message <br />
              {result && (
                <span className="text-sm text-green-600">{result}</span>
              )}
            </h1>

            <form
              onSubmit={onSubmit}
              autoComplete="off"
              className="font-Poppins flex flex-col w-full gap-4 px-4 md:px-2 relative text-black/80"
            >
              <div className="flex flex-col md:flex-row gap-2 ">
                <div className="flex flex-col w-full md:w-1/2">
                  <label htmlFor="name" className="font-Poppins font-normal">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    id="name"
                    className="input input-bordered bg-white ring-1 ring-black/20 focus:ring-blue-500 shadow-[0px_5px_8px_1px_#EDF2F7]"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <label htmlFor="Email" className="font-Poppins font-normal">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    autoComplete="off"
                    id="Email"
                    className="input input-bordered bg-white ring-1 ring-black/20 focus:ring-blue-500 shadow-[0px_5px_8px_1px_#EDF2F7]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="font-Poppins font-normal">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="input input-bordered bg-white ring-1 ring-black/20 focus:ring-blue-500 shadow-[0px_5px_8px_1px_#EDF2F7]"
                />
                <label htmlFor="message" className="font-Poppins font-normal">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="textarea textarea-bordered bg-white ring-1 ring-black/20 focus:ring-blue-500 h-32 px-2 py-1 text-[16px] font-medium resize-none shadow-[0px_5px_8px_1px_#EDF2F7]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#061AD1] p-2 rounded-full w-12 h-12 md:w-14 md:h-14 absolute -bottom-4 md:-right-4 right-0  group hover:bg-[#fff] hover:ring-2 ring-0 "
              >
                <FaPaperPlane
                  className="relative md:left-1 md:top-0 left-[2px]  text-white text-[1.4rem] md:text-[1.7rem] group-hover:text-[#061AD1] 
                  group-hover:rotate-12 animate-motion"
                />

                <p className="pointer-events-none font-Nothing text-black absolute md:-bottom-7 -left-14 text-lg -bottom-4 md:-left-4 md:text-xl font-medium">
                  Submit
                </p>
              </button>
            </form>
          </div>
          {/* RIGHT CONTENT */}
          <div className="font-Poppins flex flex-col justify-between items-center h-full md:max-w-[38%] w-full md:py-8 md:pb-[6%] my-14">
            <h1 className="text-2xl font-Poppins text-white font-normal w-full text-center mb-4">
              Contact Information
            </h1>
            <div className="flex flex-col items-center gap-4 text-white">
              <ContactInfo
                icon={<IoMailOutline size={28} />}
                info="info@nexgencybersolutions.co.uk"
              />
              <ContactInfo
                icon={<HiOutlinePhone size={28} />}
                info="0161 327 4017"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <SocialLink
                icon={
                  <FaInstagram
                    size={36}
                    className="hover:bg-gradient-to-bl hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 rounded-lg p-1"
                  />
                }
                href="https://www.instagram.com/nexgencybersolutions"
              />
              {/*               <SocialLink
                icon={
                  <FaWhatsapp
                    size={32}
                    className="hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 rounded-full "
                  />
                }
                href="#1"
              /> */}
              <SocialLink
                icon={
                  <FaXTwitter
                    size={36}
                    className="hover:bg-gradient-to-r hover:from-zinc-950 hover:to-zinc-900 rounded-full p-1"
                  />
                }
                href="https://twitter.com/nexgencybersol"
              />
              {/*               <SocialLink
                icon={
                  <FaFacebook
                    size={36}
                    className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded-full p-1"
                  />
                }
                href="#1"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactInfo = ({ icon, info }) => (
  <span className="flex items-center gap-2 font-Open">
    {icon}
    {info}
  </span>
);

const SocialLink = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    className="text-white/80 hover:scale-[104%] ease-in duration-200 hover:text-white"
  >
    {icon}
  </a>
);

export default Contact;
