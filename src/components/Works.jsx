import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ index, icon, name, description, technologies = [] }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.2, 0.75)} 
      className="w-full"
    >
      <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-4xl">{icon}</span>
          <h3 className="text-white font-semibold text-xl leading-tight flex-1">
            {name}
          </h3>
        </div>
        <p className="text-gray-300 text-base leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {technologies.map((tech, i) => (
            <span 
              key={`${tech}-${i}`} 
              className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* View Project button removed as requested */}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12">
          Featured Projects
        </h2>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
