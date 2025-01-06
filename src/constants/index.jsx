import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";


import jpmc from "../assets/jpmc.jpeg"
import cf from "../assets/cf.jpeg"
import uiuc from "../assets/uiuc.jpeg"

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiPython, SiJavascript, SiPostman, SiKubernetes} from "react-icons/si";
import { DiRedis,DiCss3 } from "react-icons/di";
import { IoLogoTableau, IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs, FaJava, FaHtml5, FaAws, FaAngular, FaJira } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { CgCPlusPlus } from "react-icons/cg";
import { VscAzure } from "react-icons/vsc";
import { GrDocker } from "react-icons/gr";



export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  // { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  // { label: "Photos", href: "#photos"},
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ETHAN HANDOJO",
  greet: "Hello there! 👋🏻",
  description:
    "I am currently a senior at the University of Illinois at Urbana-Champaign (UIUC), pursuing a degree in Statistics and Computer Science with a strong interest in Software Development, Machine Learning, and Data Science. Starting in late July, I will be a Software Engineer at JPMorgan Chase & Co.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Insure-it",
    description:
      "Insure-it is an engaging 2D Retro Arcade Game powered by the GDevelop framework. It features three levels focused on crop, medical and car insurance for a farmer.",
    image: projectImage1,
    githubLink: "https://github.com/handojo3/Insure-It?tab=readme-ov-file",
  },
  {
    id: 2,
    name: "Vocabify",
    description:
      "A Next-based web app that creates flashcards to review complex, polysyllabic words from online lecture material using AI",
    image: projectImage2,
    githubLink: "https://github.com/handojo3/Vocabify",
  },
  {
    id: 3,
    name: "PHM Attendance App",
    description:
      "Developing a React Native Mobile Application for efficient attendance tracking, including QR code scanning and member profile tracking",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
];

export const SKILLS = [
  {
    icon: <SiPython className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Python",
  },
  {
    icon: <FaJava className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Java",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
  },
  {
    icon: <CgCPlusPlus className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "C++",
  },
  {
    icon: <IoLogoTableau  className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Tableau",
  },
  {
    icon: <FaHtml5  className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "HTML",
  },
  {
    icon: <DiCss3  className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "CSS",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <FaAngular className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Angular",
  },
  {
    icon: <TbBrandReactNative className="text-4xl text-white lg:text-5xl" />,
    name: "React Native",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-white lg:text-5xl" />,
    name: "TailwindCSS",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
  },
  {
    icon: <FaJira className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Jira",
  },
  {
    icon: <FaAws className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Aws",
  },
  {
    icon: <VscAzure className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Azure",
  },
  {
    icon: <SiPostman className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Postman",
  },
  {
    icon: <FaSquareGithub className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Github",
  },
  {
    icon: <GrDocker className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Docker",
  },
  {
    icon: <SiKubernetes className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Kubernetes",
  },
  {
    icon: <IoLogoFirebase className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Firebase",
  },
];

export const EXPERIENCES = [
  {
    title: "Software Engineer Intern",
    company: "JPMorgan Chase & Co",
    duration: "June 2024 - Aug 2024",
    description:
    "During my Summer Software Engineer Program Internship under the Corporate & Investment Banking LOB, I designed and implemented a real-time FNO Static Data Approval Workflow, reducing compliance risks by 30% and improving data accuracy by 25%. The approval workflow state machine processed over 10,000 data updates monthly, leveraging React, Spring Boot, Cassandra, and Kafka technologies for frontend, backend integration, and data management.",
    image: jpmc,
  },
  {
    title: "Software Developer Intern",
    company: "COUNTRY Financial",
    duration: "May 2023 - May 2024",
    description:
      "At COUNTRY Financial, I delivered innovative solutions to enhance efficiency and streamline operations. I developed full-stack applications with real-time tracking capabilities, automated data processing and reporting workflows, and created dynamic tools for visualizing complex processes. Additionally, I optimized deployment strategies for web applications, driving significant cost savings and operational improvements.",
    image: cf,
    },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Statistics & Computer Science",
    institution: "University of Illinois at Urbana-Champaign",
    duration: "August 2021 - May 2025",
    school: uiuc,
    relevantCourses: [
      "Data Structures",
      "Algorithms",
      "Data Science",
      "Computer Systems",
      "Machine Learning",
      "Artificial Intelligence",
      "Distributed Systems",
      "Natural Language Processing (NLP)", 
      "Database Systems"
    ],
    certifications: [
      "Aws Cloud Practitioner",
      "Data Science Certificate"
    ]
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/ethan.handojo",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/ethanhandojo/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/handojo3",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ethan-handojo-7a49251b4/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
