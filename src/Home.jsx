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
      <div className="relative z-0">
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <iframe src="/tt.html" className="w-full h-full border-none" title="Background" />
        </div>
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
