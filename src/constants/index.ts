import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

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
  docker,
  threejs,
  goquant,
  indux,
  code,
  zerodha,
  jobPortal,
  latency
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer Intern",
    companyName: "Indux Technology",
    icon: indux,
    iconBg: "#383E56",
    date: "Aug 2025 - Present",
    points: [
      "Worked on full stack web applications using MERN stack.",
      "Developed REST APIs using Node.js and Express.",
      "Integrated React frontend with backend services.",
      "Implemented CRUD operations and managed MongoDB databases.",
    ],
  },
  {
    title: "Frontend Developer (Assessment)",
    companyName: "GoQuant",
    icon: goquant,
    iconBg: "#E6DEDD",
    date: "July 2025",
    points: [
      "Developed Latency Topology Visualizer using React and Next.js.",
      "Implemented 3D visualization using Three.js and Mapbox GL.",
      "Visualized latency data across global cloud regions.",
      "Built interactive UI for network visualization.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Personal Projects",
    icon: code,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Built multiple full stack projects using MERN stack.",
      "Developed Zoom-like Video Conferencing platform using WebRTC.",
      "Created Stock Trading Dashboard with live chart data.",
      "Built scalable APIs and responsive frontend applications.",
    ],
  },
];
const achievements = [
  {
    title: "200+ Problems Solved",
    description: "Solved 200+ DSA problems on LeetCode improving problem solving skills.",
  },
  {
    title: "100+ Problems on GeeksforGeeks",
    description: "Practiced data structures and algorithms through consistent coding challenges.",
  },
  {
    title: "5+ Full Stack Projects",
    description: "Built multiple MERN stack projects including Job Portal and Stock Trading Dashboard.",
  },
  {
    title: "Full Stack Internship",
    description: "Worked as a Full Stack Developer Intern at Indux Technology using MERN stack.",
  },
];

const projects: TProject[] = [
  {
    name: "Stock Trading Dashboard",
    description:
      "Zerodha-inspired stock trading simulator that allows users to track stocks, simulate trades, and visualize market data using interactive charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: zerodha,
    sourceCodeLink: "https://github.com/sahilGidwani-26/Zerodha-Clone",
  },
  {
  name: "Job Portal",
  description:
    "Full stack MERN job portal where recruiters can post job openings and manage applications, while users can search jobs, apply easily, and track their applications. The platform includes secure authentication, role-based access (Recruiter/User), and a responsive dashboard for job management.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
  ],
  image: jobPortal,
  sourceCodeLink: "https://github.com/sahilGidwani-26",
},
 {
    name: "Latency Topology Visualizer",
    description:
      "Interactive 3D visualization tool that displays latency between global cloud regions using Three.js and Mapbox GL for real-time network monitoring.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "mapbox",
        color: "pink-text-gradient",
      },
    ],
    image: latency,
    sourceCodeLink: "https://github.com/sahilGidwani-26/latency-visualizer",
  },
];

export { services, technologies, experiences, achievements, projects };
