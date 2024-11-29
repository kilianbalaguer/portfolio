import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaRegFileCode } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa6";
import { GrAndroid } from "react-icons/gr";
import { SiMacos } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { SiWindows11 } from "react-icons/si";
import { SiXcode } from "react-icons/si";
import ScribblelabImg from "@/public/Scribblelab.png";
import permissionmasterImg from "@/public/permissionmaster.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
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
    title: "Learning Front-End Development",
    location: "Rijnsburg, Netherlands",
    description:
      "At 11, I started learning HTML, JavaScript, and CSS on my own using online resources.",
    icon: React.createElement(FaFileCode),
    date: "2021",
  },  
  {
    title: "Learning Next.js for Front-End Development",
    location: "Rijnsburg, Netherlands",
    description:
      "At 12, I started learning Next.js for front-end development and upgrade my skills at web development.",
    icon: React.createElement(FaFileCode),
    date: "2022",
  },
  {
    title: "Learning Kotlin.",
    location: "Rijnsburg, Netherlands",
    description:
      "At 12, I started learning Kotlin for Android Development that came in handy for my future projects like ScribbleLab (as co-owner/founder).",
    icon: React.createElement(GrAndroid),
    date: "2022 - 2023",
  },
  {
    title: "Learning Swift, C and Storyboard",
    location: "Rijnsburg, Netherlands",
    description:
      "At 12, I started learning Swift, C and Storyboard for Apple Development that came in handy for my future projects like ScribbleLab (as co-owner/founder).",
    icon: React.createElement(SiXcode),
    date: "2022 - 2023",
  },
  {
    title: "Learning C# (also known as C Sharp) and expanding my XML knowledge",
    location: "Rijnsburg, Netherlands",
    description:
      "At 12, I started learning C# (also known as C Sharp) for general and WinUI 3 (Windows) programming and expanding my XML knowledge for WinUI 3.",
    icon: React.createElement(SiWindows11),
    date: "2022 - 2023",
  },
  {
    title: "Met a developer online called Nevio Hirani",
    location: "Rijnsburg, Netherlands",
    description:
      "At 13, I met a developer online called Nevio Hirani. He was the owner of ScribbleLab and I contributed to the app as a co-owner/founder.",
    icon: React.createElement(FaUserFriends),
    date: "2023",
  },
  {
    title: "Upgraded my Apple Development skills",
    location: "Rijnsburg, Netherlands",
    description:
      "At 13, After meeting Nevio Hirani, I upgraded my Apple Development skills from Swift and Storyboard to SwiftUI which is a mix of Swift and UIKit, i needed this for the project called ScribbleLab.",
    icon: React.createElement(SiXcode),
    date: "2023 - 2024",
  },
  {
    title: "Made my first Hackintosh",
    location: "Rijnsburg, Netherlands",
    description:
      "At 14 I made my first Hackintosh. It was a success and I learned a lot from it.",
    icon: React.createElement(SiMacos),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "ScribbleLab App",
    description:
      "A powerful notetaking app that’s features goes way beyond - Developed by students for students (Copyright goes to the owner Nevio Hirani)",
    tags: ["Swift", "TypeScript", "C", "JavaScript", "MDX"],
    imageUrl: ScribblelabImg,
    url: "https://github.com/ScribbleLabApp", // Add the URL here
  },
  {
    title: "PermissionMaster",
    description:
      "(Please NOTE That this project is Archived and no longer gets any updates also NOTE that this is my old account) PermissionMaster is a macOS app that simplifies the management of app permissions on your system.",
    tags: ["Swift", "Storyboard"],
    imageUrl: permissionmasterImg,
    url: "https://github.com/kilian-balaguer/PermissionMaster", // Add the URL here
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Kotlin",
  "Swift",
  "C",
  "C#",
  "XML",
  "SwiftUI",
  "WinUI 3",
] as const;
