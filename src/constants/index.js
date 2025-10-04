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
  { id: "about", title: "About" },
  { id: "work", title: "experience" },
  { id: "skills", title: "skills" },
  { id: "contact", title: "Contact" },
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
    description:"Achieved Diamond League in Google Cloud Skill Boost, demonstrating expertise in cloud technologies including APIs, Cloud Storage, Compute Engine, and Buckets. Recognized for hands-on skills in designing, deploying, and managing scalable cloud solutions.",
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
];

const experiences = [
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
    title: "Vizag Volunteer",
    company_name: "F9 technologies",
    icon: freelance,
    iconBg: "#FF7A59",
    date: "April 2025 - Present",
    points: [
      "Volunteered in community service initiatives organized by Vizag Volunteer Association to support local causes and events."
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Kalam Dream Labs",
    icon: shopify,
    iconBg: "#D38312",
    date: "March 2025 - July 2025",
    points: [
      "Worked on data analysis and machine learning projects to gain hands-on experience in data science methodologies."
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
  }
];

const socialLinks = {
  github: "https://github.com/SriHarshaYesaswi",
  linkedin: "https://www.linkedin.com/in/ventrapragada-sri-harsha-3b6054316/",
  instagram: "https://www.instagram.com/_.mr_harsha._07/",
};

export { technologies, skills, certificates, experiences, testimonials, projects, socialLinks };