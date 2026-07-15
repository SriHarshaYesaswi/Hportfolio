import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    const mqWidth = window.matchMedia("(max-width: 768px)");
    const mqTouch = window.matchMedia("(hover: none) and (pointer: coarse)");
    return mqWidth.matches || mqTouch.matches;
  });

  useEffect(() => {
    const mqWidth = window.matchMedia("(max-width: 768px)");
    const mqTouch = window.matchMedia("(hover: none) and (pointer: coarse)");

    const handler = () => setIsMobile(mqWidth.matches || mqTouch.matches);

    if (typeof mqWidth.addEventListener === "function") {
      mqWidth.addEventListener("change", handler);
      mqTouch.addEventListener("change", handler);
    } else {
      mqWidth.addListener(handler);
      mqTouch.addListener(handler);
    }

    return () => {
      if (typeof mqWidth.removeEventListener === "function") {
        mqWidth.removeEventListener("change", handler);
        mqTouch.removeEventListener("change", handler);
      } else {
        mqWidth.removeListener(handler);
        mqTouch.removeListener(handler);
      }
    };
  }, []);

  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <Navbar />
      <div className="relative z-0">
        {!isMobile && (
          <div className="absolute inset-0 z-[-1] pointer-events-none">
            <iframe src="/tt.html" className="w-full h-full border-none" title="Background" />
          </div>
        )}
        <Hero isMobile={isMobile} />
      </div>
      <About />
      <Experience />
      <Tech />
      <Skills />
      <Certificates />
      <Works />
      <div className="relative z-0">
        <Contact />
        {!isMobile && <StarsCanvas />}
      </div>
    </div>
  );
};

export default Home;
