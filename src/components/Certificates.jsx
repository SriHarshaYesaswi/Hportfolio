import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CertificateCard = ({ index, title, issuer, date, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true, amount: 0.05 }}
    className="bg-black-200 p-8 rounded-3xl w-full"
  >
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px] font-bold">{title}</p>
      <div className="mt-4 flex justify-between items-center gap-1">
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

      <div className={`mt-4 pb-14 ${styles.paddingX}`}>
        {certificates && certificates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <CertificateCard key={cert.title + idx} index={idx} {...cert} />
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
