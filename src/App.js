import "./App.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

function App() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest < 700) {
      setActiveSection("home");
    } else if (latest < 1000) {
      setActiveSection("services");
    } else if (latest < 1500) {
      setActiveSection("about");
    } else {
      setActiveSection("contact");
    }
  });
  return (
    <div className="App mx-auto bg-white">
      <Navbar hidden={hidden} activeSection={activeSection} />
      <Element name="home">
        <Home />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
