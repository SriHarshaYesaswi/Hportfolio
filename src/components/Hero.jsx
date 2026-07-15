import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = ({ isMobile }) => {
  const overlayClasses = `${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 ${
    isMobile ? "" : "pointer-events-none"
  }`;

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <ComputersCanvas isMobile={isMobile} />

      {/* Text overlay — interactive on mobile */}
      <div className={overlayClasses}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className={isMobile ? "pt-6" : ""}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Sri Harsha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Front-end Developer,
            <br className="sm:block hidden" /> UI Designer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
