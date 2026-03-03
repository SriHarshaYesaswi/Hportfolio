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
  carrent,
  threejs,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "experience" },
  { id: "skills", title: "skills" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "Frontend Developer", icon: web },
];

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
    issuer: "Competition",
    date: "June 2024",
    description: "A user-friendly hub that bridges the gap for both literate and illiterate homemakers, providing learning resources, guided navigation, and tools for personal growth and re-entry into the workforce."
  },
  {
    title: "Hands On With AI: From Concept To Creation",
    issuer: "GDG on Campus REC",
    date: "Nov 2024",
    description: "Hands-on with AI: From Concept to Creation was a workshop by GDG on Campus REC where participants went from ideation to building AI models and deploying real-world solutions."
  },
  {
    title: "GDG Vizag's DevFest 2024",
    issuer: "Google Developer Groups",
    date: "Dec 2024",
    description: "Volunteered at DevFest Vizag 2024, supporting event operations, audience engagement, and session coordination for a large-scale tech conference."
  },
  {
    title: "Git and GitHub Essentials",
    issuer: "GitHub",
    date: "2024",
    description: "Version control fundamentals and collaborative development practices."
  },
    {
    title: "GDG On Campus REC",
    issuer: "Google Developer Groups",
    date: "September 2024 - July 2025",
    description: "Active member of GDG On Campus REC, contributing to community building and organizing tech events."
  },
  {
    title: "TVS Credit EPIC 7.0 - IT Challenge",
    issuer: "Unstop",
    date: "Sept 2025",
    description: "Participated in TVS Credit EPIC 7.0 - IT Challenge."
  },
  {
    title: "Google Student Ambassador Program",
    issuer: "Google",
    date: "June 2025 - Dec 2025",
    description: "Selected as a Google Student Ambassador, representing Google on campus and leading initiatives to promote technology and community engagement."
  },
  {
    title: "Full Stack Web Development",
    issuer: "Robo Couplers",
    date: "July 2025 - Nov 2025",
    description: "Completed a comprehensive full stack web development course covering frontend and backend technologies, database management, and deployment strategies."
  },
  {
    title: "Google DevFest 2K26",
    issuer: "Google Developer Groups",
    date: "Nov 2025",
    description: "Volunteered at Google DevFest 2K26, assisting with event logistics, session coordination, and attendee engagement for a major tech conference."   
  },
  {
    title: "Idea Sprint - National Innovation Challenge",
    issuer: "IIC Tirupathi",
    date: "Jan 2026",
    description: "Participated in the Idea Sprint organized by IIC Tirupathi, where I developed and pitched innovative solutions to real-world problems, demonstrating creativity and problem-solving skills."
  },
  {
    title: "DIGITAL SKILLS: USER EXPERIENCE",
    issuer: "Accenture",
    date: "March 2026",
    description: "Completed the Digital Skills: User Experience course by Accenture, gaining knowledge in UX design principles, user research, wireframing, and prototyping to create user-centered digital experiences."
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "MacBook Pro",
    description:
      "An interactive and sleek recreation of the Apple MacBook Pro website, showcasing the device with responsive design, smooth animations, and detailed product features for an immersive user experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "three.js", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/gitswastik08/macbook_landingpage",
    live_website_link: "https://macbookpro3d.netlify.app/",
  },
  {
    name: "Falverra Redesign",
    description:
      "A sleek and animated website redesign for Falverra, combining a clean layout with smooth transitions to deliver an engaging, modern browsing experience that highlights the brand's visual identity and message.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "multi-page", color: "green-text-gradient" },
    ],
    image: falverra,
    source_code_link: "https://github.com/gitswastik08/falverra-redesign",
    live_website_link: "https://falverra-recode.netlify.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    live_website_link: "https://app.netlify.com/teams/gitswastik08/projects",
  },
];

export { services, technologies, skills, certificates, experiences, testimonials, projects };
