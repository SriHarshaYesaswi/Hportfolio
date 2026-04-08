import { motion } from "framer-motion";
import { styles } from "../styles";
import { testimonials } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div className="bg-black-200 p-8 rounded-3xl w-[320px] md:w-[400px] flex-shrink-0 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-none hover:shadow-card group border border-white/5 whitespace-normal">
    <p className="text-white font-black text-[48px] absolute top-2 right-6 opacity-20">"</p>
    <p className="text-white tracking-wider text-[16px] leading-[1.6]">{testimonial}</p>

    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col pt-2">
        <p className="text-white font-bold text-[16px]">
          {name}
        </p>
        <p className="mt-1 text-secondary text-[14px]">
          {designation} of {company}
        </p>
      </div>
      <img src={image} alt={`feedback-by-${name}`} className="w-12 h-12 rounded-full object-cover border border-secondary" />
    </div>
  </div>
);

const Feedbacks = () => {
  // Duplicate the array many times so it doesn't run out during the infinite scroll translation
  const row1 = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] pb-14 min-h-[500px] flex flex-col justify-center overflow-hidden">
      <div className={`${styles.padding} bg-transparent w-full`}>
        <motion.div variants={textVariant()} className="text-center mb-10 w-full flex flex-col items-center">
          <h2 className={styles.sectionHeadText}>What <span className="italic font-light">Customers Say</span></h2>
          <p className={`${styles.sectionSubText} mt-4 max-w-3xl mx-auto normal-case`}>
            Discover how my services have helped them achieve their goals and surpass their expectations.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-6 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mt-4">
        {/* Top Marquee (moves from left to right) */}
        <div className="flex w-max animate-marqueeRight space-x-6 px-3 hover:[animation-play-state:paused]">
          {row1.map((testimonial, index) => (
            <FeedbackCard key={`top-${index}`} {...testimonial} />
          ))}
        </div>

        {/* Bottom Marquee (moves from right to left) */}
        <div className="flex w-max animate-marqueeLeft space-x-6 px-3 hover:[animation-play-state:paused]">
          {row2.map((testimonial, index) => (
            <FeedbackCard key={`bottom-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks);
