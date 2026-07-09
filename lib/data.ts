import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaRegFileCode } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa6";
import { GrAndroid } from "react-icons/gr";
import { SiMacos } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { SiXcode } from "react-icons/si";
import rmtdevImg from "@/public/rmtdev.png";
import areobrowserImg from "@/public/AeroBrowser.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    icon: React.createElement(FaFileCode),
    index: 0,
  },  
  {
    icon: React.createElement(FaFileCode),
    index: 1,
  },
  {
    icon: React.createElement(GrAndroid),
    index: 2,
  },
  {
    icon: React.createElement(SiXcode),
    index: 3,
  },
  {
    icon: React.createElement(FaWindows),
    index: 4,
  },
  {
    icon: React.createElement(SiXcode),
    index: 5,
  },
  {
    icon: React.createElement(SiMacos),
    index: 6,
  },
] as const;

export const projectsData = [
  {
    id: "aerobrowser",
    tags: ["Swift", "SwiftUI", "macOS", "iOS"],
    imageUrl: areobrowserImg,
    githubUrl: "https://github.com/AeroBrowser-Official/AeroBrowser",
    liveUrl: "coming-soon",
  },
  {
    id: "voltaire",
    tags: ["Swift", "MLX", "iPhone", "iPad", "macOS", "Local AI"],
    imageUrl: "coming-soon",
    githubUrl: "https://github.com/kilianbalaguer/Voltaire?tab=readme-ov-file",
    liveUrl: "coming-soon",
  },
];

export const skillsData = [
  "C++",
  "C#",
  "C",
  "Python",
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "Kotlin",
  "Node.js",
  "Next.js",
  "Swift",
  "Lua",
  "XML",
  "React",
  "Java",
] as const;
