// Tech.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useNavigate } from "react-router-dom";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTechs = isMobile ? technologies.slice(0, 5) : technologies;
  // We duplicate the items so the marquee can scroll infinitely.
  // 2 copies ensures it moves from -50% to 0% seamlessly!
  const marqueeTechs = [...visibleTechs, ...visibleTechs];

  return (
    <>
      <motion.div className="w-full text-center py-10">
        <p className={styles.sectionSubText}>What I Use to Build</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-5 relative">
        <div className="flex w-max animate-marqueeRight space-x-10 px-5 hover:[animation-play-state:paused] py-5">
          {marqueeTechs.map((tech, index) => (
            <div className="sm:w-36 w-28 h-28 sm:h-36 flex-shrink-0" key={`tech-${index}`}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}

          {isMobile && (
            <div
              onClick={() => navigate("/all-technologies")}
              className="sm:w-36 w-28 h-28 sm:h-36 rounded-full border border-dashed border-[#915eff] flex items-center justify-center cursor-pointer hover:bg-[#915eff]/10 text-[#915eff] text-sm font-medium transition flex-shrink-0"
            >
              + More
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
