import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaPaperclip, FaImage, FaFileAudio, FaFileVideo, FaFileAlt, FaFileArchive, FaFile } from "react-icons/fa";
import { socialLinks } from "../constants";
import { supabase } from "../supabaseClient";


// template_49jw5yq
// service_9gvq101
// 3lDtCP31mFt_52s7F

const Contact = () => {
  const formRef = useRef();
  const fileInputRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const [file, setfile] = useState(null);
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [fileAccept, setFileAccept] = useState("*/*");

  const handleFileOptionClick = (type) => {
    let acceptStr = "*/*";
    if (type === 'image') acceptStr = "image/*";
    else if (type === 'audio') acceptStr = "audio/*";
    else if (type === 'video') acceptStr = "video/*";
    else if (type === 'doc') acceptStr = ".pdf,.doc,.docx,.txt,.xls,.xlsx";
    else if (type === 'binary') acceptStr = "application/octet-stream,.bin,.exe,.dat,.zip,.rar";
    else acceptStr = "*/*";
    
    setFileAccept(acceptStr);
    setShowFileOptions(false);
    setTimeout(() => {
      if (fileInputRef.current) fileInputRef.current.click();
    }, 50);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setfile(e.target.files[0]);
    }
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    let attachmentUrl = null;
    if (file) {
      // Uploading to Supabase Storage bucket named 'uploads'
      const fileName = `${Date.now()}_${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("uploads")
        .upload(fileName, file);

      if (!uploadError) {
        const { data: publicUrlData } = supabase.storage.from("uploads").getPublicUrl(fileName);
        attachmentUrl = publicUrlData?.publicUrl;
      } else {
        console.warn("File upload failed. Trying to proceed anyway:", uploadError);
      }
    }

    const { error } = await supabase
      .from("contacts")
      .insert([{
        name: form.name, 
        email: form.email, 
        message: form.message,
        file_url: attachmentUrl || null 
      }]);

    if (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } else {
      alert("Thank you! I will get back to you as soon as possible.");
      setform({ name: "", email: "", message: "" });
      setfile(null);
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

          {/* Attachment Section */}
          <div className="flex flex-col relative w-fit">
            <span className="text-white font-medium mb-4">Attachment (Optional)</span>
            
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowFileOptions(!showFileOptions)}
                className="bg-tertiary py-3 px-6 rounded-lg outline-none w-fit text-white font-medium flex items-center gap-2 hover:bg-[#2a234a] hover:shadow-lg transition-all"
              >
                <FaPaperclip /> {file ? "Change File" : "Attach File"}
              </button>
              {file && (
                <div className="flex items-center gap-2 text-secondary text-sm bg-tertiary py-2 px-4 rounded-lg">
                  <span className="truncate max-w-[200px]">{file.name}</span>
                  <button type="button" onClick={() => setfile(null)} className="text-red-400 hover:text-red-500 font-bold ml-2">✖</button>
                </div>
              )}
            </div>

            <AnimatePresence>
              {showFileOptions && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="bg-[#151030] border border-gray-600 rounded-lg flex flex-col gap-1 shadow-2xl overflow-hidden w-full max-w-sm"
                >
                  <button type="button" onClick={() => handleFileOptionClick('image')} className="text-left py-2 px-3 text-white hover:bg-[#2a234a] rounded flex items-center gap-3 transition-colors"><FaImage className="text-purple-400" /> Image (JPG, PNG...)</button>
                  <button type="button" onClick={() => handleFileOptionClick('audio')} className="text-left py-2 px-3 text-white hover:bg-[#2a234a] rounded flex items-center gap-3 transition-colors"><FaFileAudio className="text-blue-400" /> Audio (MP3, WAV...)</button>
                  <button type="button" onClick={() => handleFileOptionClick('video')} className="text-left py-2 px-3 text-white hover:bg-[#2a234a] rounded flex items-center gap-3 transition-colors"><FaFileVideo className="text-pink-400" /> Video (MP4, MKV...)</button>
                  <button type="button" onClick={() => handleFileOptionClick('doc')} className="text-left py-2 px-3 text-white hover:bg-[#2a234a] rounded flex items-center gap-3 transition-colors"><FaFileAlt className="text-green-400" /> Document (PDF, DOC...)</button>
                  <button type="button" onClick={() => handleFileOptionClick('binary')} className="text-left py-2 px-3 text-white hover:bg-[#2a234a] rounded flex items-center gap-3 transition-colors"><FaFileArchive className="text-yellow-400" /> Binary / Archive</button>
                  <button type="button" onClick={() => handleFileOptionClick('any')} className="text-left py-2 px-3 text-white hover:bg-[#2a234a] rounded flex items-center gap-3 transition-colors"><FaFile className="text-gray-400" /> Any Format</button>
                </motion.div>
              )}
            </AnimatePresence>

            <input
              type="file"
              ref={fileInputRef}
              accept={fileAccept}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
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
