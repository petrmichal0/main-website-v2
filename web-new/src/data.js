import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

import { FiFileText, FiUser } from "react-icons/fi";

import Work1 from "./assets/symbol.jpg";

import Theme1 from "./assets/blue.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },
  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },
  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Petr",
  },
  {
    id: 2,
    title: "Last Name : ",
    description: "Michal",
  },
  {
    id: 3,
    title: "Age : ",
    description: "38",
  },
  {
    id: 4,
    title: "Nationality : ",
    description: "Czech",
  },
  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },
  {
    id: 6,
    title: "Address : ",
    description: "Tunis",
  },
  {
    id: 7,
    title: "Phone : ",
    description: "+420 111 222 333",
  },
  {
    id: 8,
    title: "Email : ",
    description: "batman@gmail.com",
  },
  {
    id: 9,
    title: "Skype : ",
    description: "batman.forever",
  },
  {
    id: 10,
    title: "Langages : ",
    description: "Czech, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "15+",
    title: "Years of Experience",
  },
  {
    id: 2,
    no: "97+",
    title: "Completed Projects",
  },
  {
    id: 3,
    no: "81+",
    title: "Happy Customers",
  },
  {
    id: 4,
    no: "15+",
    title: "Years of Experience",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "25",
  },
  {
    id: 2,
    title: "Javascript",
    percentage: "50",
  },
  {
    id: 3,
    title: "Css",
    percentage: "60",
  },
  {
    id: 4,
    title: "Html",
    percentage: "25",
  },
  {
    id: 5,
    title: "Html",
    percentage: "25",
  },
  {
    id: 6,
    title: "Html",
    percentage: "25",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer <span>Envato</span>",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer <span>Envato</span>",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer <span>Envato</span>",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - PRESENT",
    title: "Web Developer <span>Envato</span>",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - PRESENT",
    title: "Web Developer <span>Envato</span>",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - PRESENT",
    title: "Web Developer <span>Envato</span>",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - PRESENT",
    title: "Web Developer <span>Envato</span>",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },
  {
    id: 2,
    img: Work1,
    title: "Website design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },
  {
    id: 3,
    img: Work1,
    title: "Testing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },
  {
    id: 4,
    img: Work1,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },
  {
    id: 5,
    img: Work1,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },
  {
    id: 6,
    img: Work1,
    title: "Landing Page 2",
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252,35%, 51%)",
  },
  {
    id: 2,
    img: Theme1,
    color: "hsl(4,93%, 54%)",
  },
  {
    id: 3,
    img: Theme1,
    color: "hsl(271,76%, 53%)",
  },
  {
    id: 4,
    img: Theme1,
    color: "hsl(225,73%, 57%)",
  },
  {
    id: 5,
    img: Theme1,
    color: "hsl(43,74%, 49%)",
  },
  {
    id: 6,
    img: Theme1,
    color: "hsl(339,81%, 66%)",
  },
  {
    id: 7,
    img: Theme1,
    color: "hsl(80,61%, 50%)",
  },
  {
    id: 8,
    img: Theme1,
    color: "hsl(19,96%, 52%)",
  },
  {
    id: 9,
    img: Theme1,
    color: "hsl(88,65%, 43%)",
  },
  {
    id: 10,
    img: Theme1,
    color: "hsl(252,35%, 51%)",
  },
];
