import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-relaxed text-justify"
      >
        Hi, I'm Sri Harsha — an enthusiastic Full Stack Developer currently learning and building skills in modern web technologies. I'm focused on mastering frontend frameworks like React.js and CSS tools like Tailwind, as well as backend technologies like Node.js and MongoDB. I'm passionate about hands-on learning through personal projects and participating in hackathons, where I push myself to explore both my creativity and technical potential.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
