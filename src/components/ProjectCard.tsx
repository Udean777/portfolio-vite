import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import {
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandMongodb,
  TbBrandPrisma,
} from "react-icons/tb";

const projects = [
  {
    id: 1,
    title: "My First Portfolio",
    imageSrc: "/project.jpeg",
    alt: "project1",
    href: "https://udean777.github.io/portfoliolama/",
    icon: [
      <FaBootstrap
        key="1"
        className="text-purple-600 p-1 rounded-full dark:bg-slate-50"
        size={90}
      />,
    ],
    description:
      "I made my first ever Portfolio using only Bootstrap & Vanilla JavaScript.",
  },
  {
    id: 2,
    title: "Clone Landing Page",
    imageSrc: "/projects2.png",
    alt: "project2",
    href: "https://jeketi-web.vercel.app/",
    icon: [
      <TbBrandTailwind
        key="1"
        className="text-blue-500 p-1 rounded-full dark:bg-slate-50"
        size={60}
      />,
      <FaReact
        key="2"
        className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
        size={60}
      />,
      <TbBrandNextjs
        key="3"
        className="text-slate-800 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
        size={60}
      />,
    ],
    description:
      "I made my a cloning landing page of JKT48 Official Website. Not responsive yet.",
  },
  {
    id: 3,
    title: "My Second Portfolio",
    imageSrc: "/project3.png",
    alt: "project3",
    href: "https://udean.vercel.app/",
    icon: [
      <TbBrandTailwind
        key="1"
        className="text-blue-500 p-1 rounded-full dark:bg-slate-50"
        size={60}
      />,
      <FaReact
        key="2"
        className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
        size={60}
      />,
      <TbBrandNextjs
        key="3"
        className="text-slate-800 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
        size={60}
      />,
    ],
    description: "I made my second Portfolio using React + Vite.",
  },
  {
    id: 4,
    title: "To Do List",
    imageSrc: "/unfinished.png",
    alt: "project4",
    href: "https://github.com/Udean777/todo-deploy",
    icon: [
      <TbBrandMongodb
        key="1"
        className="bg-green-600 p-1 rounded-full text-slate-50"
        size={45}
      />,
      <SiExpress
        key="2"
        className="bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
        size={45}
      />,
      <FaReact
        key="3"
        className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
        size={45}
      />,
      <FaNodeJs
        key="4"
        className="text-green-500 bg-slate-500 p-1 rounded-full"
        size={45}
      />,
    ],
    description:
      "I made a simple TodoList App using MERN Stack. But not yet deployed because there's an error.",
  },
  {
    id: 5,
    title: "CRUD w/NextJS",
    imageSrc: "/unfinished.png",
    alt: "project5",
    href: "https://github.com/Udean777/next-crud",
    icon: [
      <TbBrandMongodb
        key="1"
        className="bg-green-600 p-1 rounded-full text-slate-50"
        size={45}
      />,
      <TbBrandNextjs
        key="2"
        className="bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
        size={45}
      />,
      <FaReact
        key="3"
        className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
        size={45}
      />,
    ],
    description: "I made my a simple CRUD using NextJs, React & MongoDB.",
  },
  {
    id: 6,
    title: "Authentication w/NextAuth",
    imageSrc: "/project6.png",
    alt: "project5",
    href: "https://simplenextauthapp.vercel.app/",
    icon: [
      <TbBrandNextjs
        key="2"
        className="bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
        size={45}
      />,
      <TbBrandPrisma
        key="1"
        className="bg-slate-600 p-1 rounded-full text-slate-50"
        size={45}
      />,
      <FaReact
        key="3"
        className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
        size={45}
      />,
      <TbBrandMongodb
        key="1"
        className="bg-green-600 p-1 rounded-full text-slate-50"
        size={45}
      />,
    ],
    description:
      "I made a Login/Register Auth with NextJs & NextAuth, so you can login with social account such as google, github, etc.",
  },
];

export default projects;
