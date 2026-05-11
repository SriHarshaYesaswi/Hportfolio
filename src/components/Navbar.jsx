import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { FiMenu, FiX } from "react-icons/fi";

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
        <a
          href="#"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/");
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
        </a>

        <ul className="list-none hidden text-nowrap sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${active === link.title
                  ? "text-white bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-purple-400/50 shadow-lg shadow-purple-500/30"
                  : "text-[#ffffff90]"
                  } flex items-center justify-center hover:text-white hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-pink-500/50 hover:scale-110 hover:drop-shadow-xl text-[18px] font-medium cursor-pointer transition-all duration-300 ease-in-out px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 hover:border hover:border-purple-400/60 relative overflow-hidden`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(link.title);
                  const element = document.getElementById(link.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", `#${link.id}`);
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {toggle ? (
              <FiX className="w-[28px] h-[28px] text-white" />
            ) : (
              <FiMenu className="w-[28px] h-[28px] text-white" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#050816] shadow-lg transition-transform duration-300 z-40 ${toggle ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-8 p-6">
          <div className="w-full flex items-center justify-end">
            <FiX
              className="w-[24px] h-[24px] text-white cursor-pointer hover:text-purple-400 transition-colors"
              onClick={() => setToggle(false)}
            />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(link.title);
                setToggle(false);
                const element = document.getElementById(link.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", `#${link.id}`);
                }
              }}
              className={`${active === link.title
                ? "text-white bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-purple-400/50 shadow-lg shadow-purple-500/30"
                : "text-[#ffffffb0]"
                } flex items-center text-[22px] mt-2 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-pink-500/50 hover:scale-105 font-medium cursor-pointer transition-all duration-300 ease-in-out px-6 py-4 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 hover:backdrop-blur-sm hover:border hover:border-purple-400/60 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{link.title}</span>
            </a>
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
