import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";

const Home = () => {
  return (
    <div className="relative z-0 bg-[#050816]">
      {/* TEMP DEBUG BANNER - remove after confirming mount */}
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Skills />
      <Certificates />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;
