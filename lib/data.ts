import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaRegFileCode } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa6";
import { GrAndroid } from "react-icons/gr";
import { SiMacos } from "react-icons/si";
import { FaUserFriends, FaWindows } from "react-icons/fa";
import { SiXcode } from "react-icons/si";
import notiqImg from "@/public/Notiq.png";
import permissionmasterImg from "@/public/permissionmaster.png";
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
    icon: React.createElement(FaUserFriends),
    index: 5,
  },
  {
    icon: React.createElement(SiXcode),
    index: 6,
  },
  {
    icon: React.createElement(SiMacos),
    index: 7,
  },
] as const;

export const projectsData = [
  {
    id: "notiq",
    tags: ["React", "Next.js", "TypeScript", "SwiftUI"],
    imageUrl: notiqImg,
    githubUrl: "https://github.com/NotiqTeam/NotiqApp",
    liveUrl: "coming-soon",
  },
  {
    id: "studyhub",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
    imageUrl: "coming-soon",
    githubUrl: "coming-soon",
    liveUrl: "coming-soon",
  },
  {
    id: "aerobrowser",
    tags: ["Swift", "SwiftUI", "macOS", "iOS"],
    imageUrl: areobrowserImg,
    githubUrl: "https://github.com/AeroBrowser-Official/AeroBrowser",
    liveUrl: "coming-soon",
  },
  {
    id: "codeconnect",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    imageUrl: "coming-soon",
    githubUrl: "coming-soon",
    liveUrl: "coming-soon",
  },
] as const;

export const skillsData = [
  // Languages
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Swift",
  "Kotlin",
  "C",
  "C++",
  "C#",
  "Objective-C",
  "HTML",
  "CSS",
  "XML",
  "Lua",
  
  // Frameworks & Libraries
  "React",
  "Next.js",
  "SwiftUI",
  "Flutter",
  "WinUI 3",
  
  // Tools & Platforms
  "Unreal Engine",
  "Unity",
  "Xcode",
  "Android Studio",
  "VS Code",
  "Visual Studio",
  "Figma",
  "Notion",
  "GitHub",
  "GitHub Copilot",
] as const;
