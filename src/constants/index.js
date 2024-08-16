import {
  //mobile,
  backend,
  //creator,
  web,
  javascript,
  //typescript,
  html,
  css,
  reactjs,
  //redux,
  tailwind,
  nodejs,
  SQL,
  github1,
  //figma,
  docker,
  java,
  mm,
  HH,
  aa,
  aspnet,
  ss,
  //tripguide,
  threejs,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
 /* {
    title: "",
    icon: ,
  },*/
  {
    title: "Backend Developer",
    icon: backend,
  },
 /* {
    title: "",
    icon: ,
  },*/
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
 /* {
    name: "",
    icon: ,
  },*/
  {
    name: "React JS",
    icon: reactjs,
  },
/*  {
    name: "",
    icon: ,
  },*/
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "github1",
    icon: github1,
  },
  /*{
    name: "",
    icon: ,
  },*/
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Book Shop Website",
    project_name: "ASP.NET",
    icon: mm,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      ".NET Core (.NET 8): Proficient in fundamentals and application deployment.",
      "MVC & Razor Pages: Experienced in building and enhancing web applications.",
      "Entity Framework Core: Skilled in data access and manipulation.",
      "Repository Pattern: Implemented for improved code maintainability.",
      "Data Management: Proficient with ViewBag, ViewData, and TempData.",
      "UI Enhancements: Utilized Toastr and Sweet Alerts for user notifications.",
      "Data Presentation: Integrated Datatables for advanced data handling.",
      "Problem-solving: Effective troubleshooting and error resolution.",

    ],
  },
  {
    title: "Shoe Website",
    project_name: "HTML and CSS",
    icon: HH,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "Portfolio Website",
    project_name: "React",
    icon: aa,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Three.js: 3D model rendering, lighting, and camera positioning.",
      "React Three Fiber: Integrating Three.js with React for scalable 3D web apps.",
      "Tailwind CSS: Utility-first styling for responsive web design.",
      "Framer Motion: Animations in React for enhanced user experience.",
      "Responsive Design: Ensuring cross-device compatibility and performance optimisation.",
      "Email Integration: Implementing email functionality in web forms",
    ],
  },
  {
    title: "Tic Tac Toe ",
    project_name: "Java",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Java Programming: Implementing game logic, data structures, and user input handling.",
      "Problem-solving: Designing an efficient algorithm to check for winning conditions.",
      "Object-Oriented Design: Creating classes for the game board, players, and moves.",
      
    ],
  },
];



const projects = [
  {
    name: "BookShop_MVC",
    description:
      "",
    tags: [
      {
        name: "ASP.Net",
        color: "blue-text-gradient",
      },
      {
        name: "Microsoft sql server",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "red-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: aspnet,
    source_code_link: "https://github.com/aminmasli/BookShop_MVC.git",
  },
  {
    name: "Shoe Website	",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ss,
    source_code_link: "https://github.com/aminmasli/front-end.git",
  },
  /*{
    name: "",
    description:
      "",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },*/
];

export { services, technologies, experiences, projects };
