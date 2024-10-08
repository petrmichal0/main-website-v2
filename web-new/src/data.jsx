import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

import Work1 from "./assets/11.png";
import Work2 from "./assets/22.png";
import Work3 from "./assets/33.png";
import Work4 from "./assets/44.png";
import Work5 from "./assets/55.png";
import Work6 from "./assets/66.png";
import Work7 from "./assets/77.png";
import Work8 from "./assets/88.png";

import Theme1 from "./assets/1.png";
import Theme2 from "./assets/2.png";
import Theme3 from "./assets/3.png";
import Theme4 from "./assets/4.png";
import Theme5 from "./assets/5.png";
import Theme6 from "./assets/6.png";
import Theme7 from "./assets/7.png";
import Theme8 from "./assets/8.png";
import Theme9 from "./assets/9.png";
import Theme10 from "./assets/10.png";

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
    title: "Web Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - PRESENT",
    title: "Web Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - PRESENT",
    title: "Web Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - PRESENT",
    title: "Web Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - PRESENT",
    title: "Web Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem odio ab vel quis placeat, consectetur similique delectus. Adipisci, nisi?",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Eat Split",
    text: "lorem dsjf hdsj fldsj fkdsj kfdsj fkdjs kf dsk fjsdklf j dsfd fds d gfdgj kjsfdg djlkg jdfgj ",
    iconGitHub: <BsGithub />,
    linkGitHub: "https://github.com/petrmichal0/Eat-split.git",
    iconGlobe: <FaGlobe />,
    linkGlobe: "https://billsplitfriends.netlify.app/",
  },
  {
    id: 2,
    img: Work2,
    title: "Calculater",
    text: "lorem dsjf hdsj fldsj fkdsj kfdsj fkdjs kf dsk fjsdklf j dsfd fds d gfdgj kjsfdg djlkg jdfgj ",
    iconGitHub: <BsGithub />,
    linkGitHub: "https://github.com/petrmichal0/Calculater_.git",
    iconGlobe: <FaGlobe />,
    linkGlobe: "https://calculater-v1.netlify.app",
  },
  {
    id: 3,
    img: Work3,
    title: "Movies",
    text: "lorem dsjf hdsj fldsj fkdsj kfdsj fkdjs kf dsk fjsdklf j dsfd fds d gfdgj kjsfdg djlkg jdfgj ",
    iconGitHub: <BsGithub />,
    linkGitHub: "https://github.com/petrmichal0/Movies.git",
    iconGlobe: <FaGlobe />,
    linkGlobe: "https://v1-movies.netlify.app/",
  },
  {
    id: 4,
    img: Work4,
    title: "Flash cards",
    text: "lorem dsjf hdsj fldsj fkdsj kfdsj fkdjs kf dsk fjsdklf j dsfd fds d gfdgj kjsfdg djlkg jdfgj ",
    iconGitHub: <BsGithub />,
    linkGitHub: "https://github.com/petrmichal0/FlashCard.git",
    iconGlobe: <FaGlobe />,
    linkGlobe: "https://flashcards-v1.netlify.app",
  },
  {
    id: 5,
    img: Work5,
    title: "Traveling",
    text: "lorem dsjf hdsj fldsj fkdsj kfdsj fkdjs kf dsk fjsdklf j dsfd fds d gfdgj kjsfdg djlkg jdfgj ",
    iconGitHub: <BsGithub />,
    linkGitHub: "https://github.com/petrmichal0/Traveling.git",
    iconGlobe: <FaGlobe />,
    linkGlobe: "https://travelinglist.netlify.app",
  },
  {
    id: 6,
    img: Work6,
    title: "Tic tac toe",
    text: "lorem dsjf hdsj fldsj fkdsj kfdsj fkdjs kf dsk fjsdklf j dsfd fds d gfdgj kjsfdg djlkg jdfgj ",
    iconGitHub: <BsGithub />,
    linkGitHub: "https://github.com/petrmichal0/Tic_tac_toe.git",
    iconGlobe: <FaGlobe />,
    linkGlobe: "https://tic-tac-toe-v11.netlify.app",
  },
  {
    id: 7,
    img: Work7,
    title: "Magic cards",
    text: "lorem dsjf hdsj fldsj fkdsj kfdsj fkdjs kf dsk fjsdklf j dsfd fds d gfdgj kjsfdg djlkg jdfgj ",
    iconGitHub: <BsGithub />,
    linkGitHub: "https://github.com/petrmichal0/memory_cards.git",
    iconGlobe: <FaGlobe />,
    linkGlobe: "https://memory-cards-v1.netlify.app",
  },
  {
    id: 8,
    img: Work8,
    title: "Quiz",
    text: "lorem dsjf hdsj fldsj fkdsj kfdsj fkdjs kf dsk fjsdklf j dsfd fds d gfdgj kjsfdg djlkg jdfgj ",
    iconGitHub: <BsGithub />,
    linkGitHub: "https://github.com/petrmichal0/Quiz_final.git",
    iconGlobe: <FaGlobe />,
    linkGlobe: "https://v1-quiz.netlify.app",
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
    img: Theme2,
    color: "hsl(4,93%, 54%)",
  },
  {
    id: 3,
    img: Theme3,
    color: "hsl(271,76%, 53%)",
  },
  {
    id: 4,
    img: Theme4,
    color: "hsl(225,73%, 57%)",
  },
  {
    id: 5,
    img: Theme5,
    color: "hsl(43,74%, 49%)",
  },
  {
    id: 6,
    img: Theme6,
    color: "hsl(339,81%, 66%)",
  },
  {
    id: 7,
    img: Theme7,
    color: "hsl(80,61%, 50%)",
  },
  {
    id: 8,
    img: Theme8,
    color: "hsl(19,96%, 52%)",
  },
  {
    id: 9,
    img: Theme9,
    color: "hsl(88,65%, 43%)",
  },
  {
    id: 10,
    img: Theme10,
    color: "hsl(185,90%, 52%)",
  },
];
