import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { socialLinks } from "../constants";
import SocmedCardButton from "./SocmedCardButton";

const ContactSocials = () => {
  return (
    <div className="flex justify-center gap-4 mt-8 flex-wrap">
      <SocmedCardButton href={socialLinks.github || "#"} Icon={FaGithub} label="GitHub" color="#333333" />
      <SocmedCardButton href={socialLinks.linkedin || "#"} Icon={FaLinkedin} label="LinkedIn" color="#0A66C2" />
      <SocmedCardButton href={socialLinks.instagram || "#"} Icon={FaInstagram} label="Instagram" color="#E1306C" />
      <SocmedCardButton href={socialLinks.twitter || "#"} Icon={FaTwitter} label="X / Twitter" color="#1DA1F2" />
    </div>
  );
};

export default ContactSocials;
