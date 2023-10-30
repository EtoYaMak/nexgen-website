import React from "react";
import { Link } from "react-scroll";
function Footer() {
  return (
    <footer className="footer p-10 bg-zinc-950 text-base-content z-99">
      <aside className="flex items-center select-none ">
        <img
          src="/nexgendesign.png"
          alt="Description of the image"
          width={80}
          className="pointer-events-none "
        />
        <p className="text-[#f2f2f2] opacity-70">
          Nexgen Cyber solutions.
          <br />
          Providing our services since 2023
        </p>
      </aside>
      <nav>
        <header className="footer-title opacity-80 text-[#ef3131]">
          Services
        </header>
        <a className="link link-hover text-[#f2f2f2]">Cyber Security</a>
        <a className="link link-hover text-[#f2f2f2]">Software</a>
        <a className="link link-hover text-[#f2f2f2]">Web & Mobile</a>
        <a className="link link-hover text-[#f2f2f2]">
          Social Media Management
        </a>
      </nav>
      <nav>
        <header className="footer-title text-[#ef3131] opacity-80">
          Company
        </header>
        <Link
          className="link link-hover text-[#f2f2f2]"
          to="about"
          smooth={true}
          duration={500}
          offset={-50}
        >
          About Us
        </Link>
        <Link
          className="link link-hover text-[#f2f2f2]"
          to="contact"
          smooth={true}
          duration={500}
          offset={-50}
        >
          Contact
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
