import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, title, issuer, date, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px] font-bold">{title}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {issuer}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {date}
          </p>
        </div>
      </div>
      {description && (
        <p className="text-secondary text-[14px] mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] relative z-10">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Recognition and Achievement</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>

      <div className={`sm:-mt-20 mt-0 pb-14 ${styles.paddingX}`}>
        {certificates && certificates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.title}
                variants={fadeIn("up", "spring", idx * 0.15, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full"
              >
                <CertificateCard index={idx} {...cert} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full bg-black-200 p-6 rounded-2xl text-secondary">No certificates available.</div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");