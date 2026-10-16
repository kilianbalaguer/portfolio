import React from "react";
import type { StaticImageData } from "next/image";
import { FaFileCode } from "react-icons/fa6";
import { GrAndroid } from "react-icons/gr";
import { SiMacos } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { SiXcode } from "react-icons/si";
import { FaPlane, FaRobot, FaBriefcase } from "react-icons/fa";
import ovraImg from "@/public/Ovra.png";
import voltaireImg from "@/public/voltaire-screenshot.png";
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
  {
    icon: React.createElement(FaPlane),
    index: 7,
  },
  {
    icon: React.createElement(FaRobot),
    index: 8,
  },
  {
    icon: React.createElement(FaBriefcase),
    index: 9,
  },
] as const;

export const projectsData: {
  id: "ovra" | "voltaire";
  tags: string[];
  imageUrl: StaticImageData;
  githubUrl: string;
  liveUrl: string;
}[] = [
  {
    id: "ovra",
    tags: ["Swift", "SwiftUI", "WebKit", "macOS"],
    imageUrl: ovraImg,
    githubUrl: "https://github.com/OvraBrowser/Ovra",
    liveUrl: "coming-soon",
  },
  {
    id: "voltaire",
    tags: ["Swift", "MLX", "iPhone", "iPad", "macOS", "Local AI"],
    imageUrl: voltaireImg,
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
