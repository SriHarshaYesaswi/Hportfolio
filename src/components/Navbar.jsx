import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      let currentSection = "";
      
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = navLinks.find(link => link.id === section.id)?.title || "";
          }
        }
      });
      
      // If we're at the top of the page, don't highlight any section
      if (window.scrollY < 100) {
        currentSection = "";
      }
      
      setActive(currentSection);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 z-20 bg-[#050a208e] fixed`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/SH2-removebg-preview.png"
            alt="Sri Harsha Logo"
            loading="lazy"
            className="w-10 h-10 object-contain hover:drop-shadow-lg transition-all duration-200"
            width={40}
            height={40}
          />
          <p className="text-white text-[18px] font-semibold cursor-pointer">
            <span className="sm:block font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Sri</span> 
            <span className="text-white">| Harsha</span>
          </p>
        </Link>

        <ul className="list-none hidden text-nowrap sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                  ? "text-white bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-purple-400/50 shadow-lg shadow-purple-500/30" 
                  : "text-[#ffffff90]"
              } hover:text-white hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-pink-500/50 hover:scale-110 hover:drop-shadow-xl text-[18px] font-medium cursor-pointer transition-all duration-300 ease-in-out px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 hover:border hover:border-purple-400/60 relative overflow-hidden`}
              onClick={() => setActive(link.title)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <a href={`#${link.id}`} className="relative z-10">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={`${(toggle ? close : menu)}${(toggle ? close : menu).includes("?") ? "&" : "?"}tr=f-auto`}
            alt="menu"
            loading="lazy"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            width={28}
            height={28}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#050816] shadow-lg transition-transform duration-300 z-40 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 p-6">
          <div className="w-full flex items-center justify-end">
            <img
              src={`${close}${close.includes("?") ? "&" : "?"}tr=f-auto`}
              alt="close"
              loading="lazy"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
              width={24}
              height={24}
            />
          </div>

          {navLinks.map((link) => (
            <span
              key={link.id}
              onClick={() => {
                setActive(link.title);
                setToggle(false);
              }}
              className={`${
                active === link.title 
                  ? "text-white bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-purple-400/50 shadow-lg shadow-purple-500/30" 
                  : "text-[#ffffffb0]"
              } text-[22px] mt-2 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-pink-500/50 hover:scale-105 font-medium cursor-pointer transition-all duration-300 ease-in-out px-6 py-4 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 hover:backdrop-blur-sm hover:border hover:border-purple-400/60 relative overflow-hidden` }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <a href={`#${link.id}`} className="relative z-10">{link.title}</a>
            </span>
          ))}
        </div>
      </div>

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
