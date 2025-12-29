import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ index, name, description }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="xs:w-[250px] w-full"
  >
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-white text-[20px] font-bold text-center">
          {name}
        </h3>
        <p className="text-secondary text-[14px] text-center mt-2">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I can do</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here are my key skills and competencies that I've developed through
        experience and continuous learning.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");