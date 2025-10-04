import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { socialLinks } from "../constants";

const ContactSocials = () => {
  return (
    <div className="flex justify-center gap-8 mt-8">
      <a href={socialLinks.github || "#"} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-purple-500 text-3xl">
        <FaGithub />
      </a>
      <a href={socialLinks.linkedin || "#"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-blue-600 text-3xl">
        <FaLinkedin />
      </a>
      <a href={socialLinks.instagram || "#"} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-pink-500 text-3xl">
        <FaInstagram />
      </a>
    </div>
  );
};

export default ContactSocials;
