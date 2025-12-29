import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className="relative w-full   h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 sm:top-[70px] top-[90px] absolute max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#915eff]">Sri Harsha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I'm a Front-end Developer,<br className="sm:block hidden" />{" "}
             UI Designer.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
