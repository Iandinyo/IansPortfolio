
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI Tools Expertise",
    company_name: "Personal Development",
    icon: github,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Leveraging AI tools like GitHub Copilot and ChatGPT to enhance development workflows",
      "Generating responsive layout templates and solving layout bugs with AI assistance",
      "Improving UI/UX quality through AI-powered design suggestions",
      "Implementing real-time accessibility and performance optimizations using AI",
      "Building web applications faster and more efficiently with AI integration",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ian's work is exceptional. He has a keen eye for detail and always delivers projects ahead of schedule.",
    name: "Carlos",
    designation: "Project Manager",
    company: "Tech Solutions",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Working with Ian was a pleasure. His technical expertise and creative solutions exceeded our expectations.",
    name: "Joel",
    designation: "Business Owner",
    company: "Digital Marketing",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Ian's innovative approach to web development has transformed our online presence. Highly recommended!",
    name: "Ephraim",
    designation: "CEO",
    company: "Creative Agency",
    image: thirdTestimonial,
  },
  {
    testimonial:
      "After Ian optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Clutch Events Platform",
    description: "A modern web application for exploring, registering, and managing tech-related events hosted by Clutch.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "AI Tools",
        color: "green-text-gradient",
      },
    ],
    image: "/projects/Screenshot from 2025-05-21 20-19-06.png", // Project image in public/projects directory
    source_code_link: "https://github.com/", // Add your GitHub repository URL here
  },
];

export { services, technologies, experiences, testimonials, projects };
