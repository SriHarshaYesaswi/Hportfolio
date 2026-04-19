import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* 3D Canvas — fills the entire section behind text */}
      <ComputersCanvas />

      {/* Fixed left vertical line (keeps left marker visible on all sizes) */}
      <div className="fixed left-[24px] top-[70px] flex flex-col items-center z-20 pointer-events-none">
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient mt-2" />
      </div>

      {/* Text overlay — positioned on top of the canvas */}
      <div
        className={`${styles.paddingX} absolute inset-0 sm:top-[70px] top-[90px] max-w-7xl mx-auto flex sm:flex-row flex-col sm:items-start items-center gap-5 z-10 pointer-events-none`}
      >
        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white break-words`}>
            Hi, I'm <span className="text-[#915eff]">Sri Harsha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white text-center sm:text-left`}>
            I'm a Front-end Developer,<br className="sm:block hidden" /> UI Designer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
