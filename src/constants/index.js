import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  { id: "About", title: "About" },
  { id: "Experience", title: "Experience" },
  { id: "Skills", title: "Skills" },
  { id: "Contact", title: "Contact" },
];

// Removed services array

const technologies = [
  { name: "React JS", icon: reactjs },
  { name: "JavaScript", icon: javascript },
  { name: "Node JS", icon: nodejs },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "git", icon: git },
];

const skills = [
  {
    name: "Problem Solving",
    description: "Able to analyze problems, break them down, and develop efficient solutions.",
  },
  {
    name: "Team Collaboration",
    description: "Work effectively in team environments, contributing ideas and supporting others.",
  },
  {
    name: "Leadership",
    description: "Experience leading teams, delegating tasks, and motivating peers.",
  },
  {
    name: "Communication",
    description: "Strong verbal and written communication skills for technical and non-technical audiences.",
  },
  {
    name: "Time Management",
    description: "Effectively manage multiple tasks and deadlines with prioritization.",
  },
  {
    name: "Technical",
    description: "Proficient in HTML, CSS, JavaScript and version control with Git.",
  },
];

const certificates = [
  {
    title: "Participant",
    issuer: "IIT tirupathi Idea Sprint - National Innovation Challenge",
    date: "Jan 2026",
    description: "Participated in the Idea Sprint organized by IIC Tirupathi, where I developed and pitched innovative solutions to real-world problems, demonstrating creativity and problem-solving skills.",
  },
  {
    title: "Ideathon 2.0",
    issuer: "IIC REC",
    date: "June 2024",
    description: "An inclusive platform bridging education gaps for homemakers, offering personalized content and tools to support growth, confidence, and workforce re-entry.",
  },
  {
    title: "Hands-on with AI : From Concept to Creation",
    issuer: "GDG On Campus REC",
    date: "Nov 2024",
    description: "Hands-on with AI: A structured workshop guiding participants from foundational concepts to the creation of practical AI applications.",
  },
  {
    title: "GDG Vizag's DevFest 2024",
    issuer: "GDG Vizag",
    date: "Dec 2024",
    description: "I was actively involved in event management, handling on-ground coordination and logistics. I helped ensure smooth execution of the event activities.",
  },
  {
    title: "AI Immersion Week Workshop",
    issuer: "CII-HP Centre for AI",
    date: "March 2025",
    description: "Participated in the AI Immersion Week Workshop conducted by CII-HP Centre for AI and upGrad Enterprise, focused on hands-on learning in Artificial Intelligence",
  },
  {
    title: "Data Science Intern",
    issuer: "Kalam Dream Labs",
    date: "March 2025 - July 2025",
    description: "Worked on data analysis, machine learning model development, and data visualization to derive insights and support business decisions.",
  },
  {
    title: "Google Cloud Skill Boost",
    issuer: "Google",
    date: "May 2025",
    description: "Achieved Diamond League in Google Cloud Skill Boost, demonstrating expertise in cloud technologies including APIs, Cloud Storage, Compute Engine, and Buckets. Recognized for hands-on skills in designing, deploying, and managing scalable cloud solutions.",
  },
  {
    title: "Outreach Co-ordinator",
    issuer: "GDG On Campus REC",
    date: "Oct 2024 - July 2025",
    description: "Coordinated outreach activities and campus engagement initiatives. Built relationships with student groups and supported event logistics and promotion.",
  },
  {
    title: "GEN-AI Hackathon",
    issuer: "Vignan Engineering College for Women Vizag GDG",
    date: "Sept 2025",
    description: "Participated in the Gen AI Hackathon conducted by Vignan engineering college for women vizag GDG.Worked on developing Chatbot for Agriculture which can also scan the crops and identify the diseases.",
  },
  {
    title: "Google Student Ambassador Program",
    issuer: "Google",
    date: "June 2025 - Dec 2025",
    description: "Selected as a Google Student Ambassador, representing Google on campus and leading initiatives to promote technology and community engagement.",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Robo Couplers",
    date: "July 2025 - Nov 2025",
    description: "Completed a comprehensive full stack web development course covering frontend and backend technologies, database management, and deployment strategies.",
  },
];

const experiences = [
  {
    title: "Participant",
    company_name: "IIT tirupathi Idea Sprint - National Innovation Challenge",
    icon: creator,
    iconBg: "#06B6D4",
    date: "Jan 2026",
    points: [
      "Participated in the Idea Sprint organized by IIC Tirupathi, where I developed and pitched innovative solutions to real-world problems, demonstrating creativity and problem-solving skills."
    ],
  },
  {
    title: "Participant",
    company_name: "Runway AI By RITH",
    icon: creator,
    iconBg: "#06B6D4",
    date: "Dec 2025",
    points: [
      "Participated in the Runway AI Hackathon organized by RITH, where I collaborated with a team to develop innovative AI solutions, showcasing creativity and technical skills in a competitive environment."
    ],
  },
  {
    title: "Volunteer",
    company_name: "Google DevFest 2K26",
    icon: freelance,
    iconBg: "#FF7A59",
    date: "Nov 2025",
    points: [
      "Volunteered at Google DevFest 2K26, assisting with event logistics, session coordination, and attendee engagement for a major tech conference."
    ],
  },
  {
    title: "Full Stack Web Development Intern",
    company_name: "Robo Couplers",
    icon: shopify,
    iconBg: "#D38312",
    date: "July 2025 - Nov 2025",
    points: [
      "Completed a comprehensive full stack web development internship covering frontend and backend technologies, database management, and deployment strategies."
    ],
  },
  {
    title: "Marketing and Strategy Lead",
    company_name: "GDG On Campus REC",
    icon: meta,
    iconBg: "#2A5FFF",
    date: "Sept 2025 - Present",
    points: [
      "Leading marketing and strategic initiatives to grow community engagement and event attendance.",
      "Planning campaigns, managing social media outreach, and coordinating partnerships with campus groups.",
    ],
  },
  {
    title: "Participant",
    company_name: "Gen AI Hackathon — Vignan engineering college for women vizag GDG",
    icon: creator,
    iconBg: "#06B6D4",
    date: "Sept 2025",
    points: [
      "Participated in the Gen AI Hackathon conducted by Vignan engineering college for women vizag GDG.",
    ],
  },
  {
    title: "Outreach Co-ordinator",
    company_name: "GDG On Campus REC",
    icon: meta,
    iconBg: "#2A5FFF",
    date: "Oct 2024 - July 2025",
    points: [
      "Coordinated outreach activities and campus engagement initiatives.",
      "Built relationships with student groups and supported event logistics and promotion.",
    ],
  },
  {
    title: "Volunteer",
    company_name: "GDG Vizag's DevFest 2024",
    icon: freelance,
    iconBg: "#FF7A59",
    date: "Dec 2024",
    points: [
      "Volunteered for DevFest Vizag 2024 for both on-stage and off-stage works.",
    ],
  },
  {
    title: "Smart India Hackathon Participant",
    company_name: "Smart India Hackathon 2024",
    icon: sheryians,
    iconBg: "#0EA5E9",
    date: "Aug 2024",
    points: [
      "Participated in the Smart India Hackathon 2024, contributing innovative solutions to real-world problems.",
      "Collaborated with a diverse team to develop and present technology-driven solutions within a competitive environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    icon: "🚜",
    name: "FarmDoc – Smart Farming and Health Assistance Platform",
    description:
      "An innovative platform that combines smart farming techniques with health monitoring for crops. Features include real-time chat-bot, weather predictions, and disease detection using AI.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Hugging Face"],
    link: "#"
  },
  {
    icon: "👩",
    name: "Women Empowerment Platform – IWD Hackathon Project",
    description:
      "A multi-featured web application built during the International Women's Day Hackathon to empower girls and women across four critical areas: safety, education, economic development, and healthcare.",
    technologies: ["HTML", "CSS", "Firebase", "javascript"],
    link: "#"
  },
  {
    icon: "⚖️",
    name: "LegalDocxVerifier - AI Contract Review System",
    description:
      "An AI chatbot built to help legal teams with slow and error-prone contract reviews. Using RAG, it extracts key clauses, detects risks, and generates clear summaries. The pipeline includes document ingestion, text chunking, embeddings, and vector search for context-based LLM responses.",
    technologies: ["Langchain", "Chroma DB", "Ollama", "RAG"],
    link: "https://github.com/SriHarshaYesaswi/LegalDocxVerifier.git"
  },
  {
    icon: "📦",
    name: "Robo Couplers Stock Management System",
    description:
      "A comprehensive web application designed for adding and updating Robo Couplers products. Users can efficiently track and manage item details, including product names, quantities, costs, and current stock status (in-stock or out-of-stock).",
    technologies: ["React", "PHP", "PostgreSQL"],
    link: "#"
  }
];

const socialLinks = {
  github: "https://github.com/SriHarshaYesaswi",
  linkedin: "https://www.linkedin.com/in/ventrapragada-sri-harsha-3b6054316/",
  instagram: "https://www.instagram.com/_.mr_harsha._07/",
  twitter: "https://x.com/harsha_yesaswi",
  // primary contact email
  email: "vshy0708@gmail.com",
};

export { technologies, skills, certificates, experiences, testimonials, projects, socialLinks };