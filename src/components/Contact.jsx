import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { socialLinks } from "../constants";
import { supabase } from "../supabaseClient";


// template_49jw5yq
// service_9gvq101
// 3lDtCP31mFt_52s7F

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    const { error } = await supabase
      .from("contacts")
      .insert([{ name: form.name, email: form.email, message: form.message }]);

    if (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } else {
      alert("Thank you! I will get back to you as soon as possible.");
      setform({ name: "", email: "", message: "" });
    }

    setloading(false);
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handlesubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handlechange}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handlechange}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              type="text"
              name="message"
              value={form.message}
              onChange={handlechange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-white font-medium mb-4">Connect with me:</p>
          <div className="flex gap-6">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a 
              href={socialLinks.twitter || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-sky-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "Contact");
