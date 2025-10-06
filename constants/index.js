import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
// import bigcrmImg from "./../public/assets/projects/bigcrm-image.png"
// import cratorsFlameImg from "./../public/assets/projects/creatorsflame-image.png"
// import ecomImg from "./../public/assets/projects/e-commerce.png"
// import sgtuImg from "../public/assets/projects/SGTU-APK - Copy.png"

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Application Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    // {
    //   name: "TypeScript",
    //   icon: "/assets/tech/typescript.svg",
    //   link: "https://www.typescriptlang.org/",
    // },
    {
      name: "C#",
      icon: "/assets/tech/csharp-new.png",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    // {
    //   name: "Python",
    //   icon: "/assets/tech/python.svg",
    //   link: "https://www.python.org/",
    // },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Expo",
      icon: "/assets/tech/expo.png",
      link: "https://expo.dev/",
    },
    {
      name: "ASP.NET",
      icon: "/assets/tech/asp.net.png",
      link: "https://learn.microsoft.com/en-us/aspnet/web-forms/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    // {
    //   name: "Three.js",
    //   icon: "/assets/tech/threejs.svg",
    //   link: "https://threejs.org/",
    // },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    // {
    //   name: "Framer-motion",
    //   icon: "/assets/tech/framer.svg",
    //   link: "https://www.framer.com/motion/",
    // },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    // {
    //   name: "Redux/Redux-toolkit",
    //   icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    //   link: "https://redux.js.org",
    // },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    // {
    //   name: "Prisma",
    //   icon: "/assets/tech/prisma.svg",
    //   link: "https://www.prisma.io/",
    // },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    // {
    //   name: "Figma",
    //   icon: "/assets/tech/figma.svg",
    //   link: "https://www.figma.com/",
    // },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "IIS",
      icon: "/assets/tech/iss-new.png",
      link: "https://learn.microsoft.com/en-us/iis/get-started/introduction-to-iis/iis-web-server-overview",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  
  {title: "Web Developer Intern",
    company_name: "PeakScale Technologies Private Limited",
    icon: "/assets/company/peakscale.jpg", // Replace with your icon
    iconBg: "#E6DEDD",
    date: "June 2024 - February 2025",
    points: [
      "Worked as a Web Developer Intern, gaining hands-on experience in web development projects.",
      "Contributed to frontend and backend development using React, Node.js, and modern web technologies.",
      "Collaborated with the team to design, implement, and optimize responsive and dynamic web applications.",
    ],
  },
  {
     title: "Web Developer (Freelancing)",
    company_name: "Freelancing",
    icon: "/assets/company/freelance.png", // You can replace with your icon
    iconBg: "#E6DEDD",
    date: "December 2023 - 2024",
    points: [
      "Coded websites using HTML, CSS, JavaScript, and jQuery.",
      "Developed responsive, dynamic user interfaces using React with reusable components.",
      "Integrated APIs, managed state with Redux or Context API, and optimized performance through efficient component structuring and virtual DOM manipulation.",
    ],
  },
  {
    title: "Data Entry Operator",
    company_name: "Freelancing / Contract Work",
    icon: "/assets/company/dataentry.png", // Replace with your icon
    iconBg: "#E6DEDD",
    date: "January 2023 - December 2023",
    points: [
      "Accurately entered, updated, and maintained data in various systems/databases, ensuring high levels of data integrity and confidentiality.",
      "Verified and reviewed data for errors or inconsistencies, correcting them to ensure seamless workflow.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Electronic E-commerce",
    description:
      "An elegant and responsive e-commerce website built to showcase and sell a range of electronic audio accessories including headphones, earphones, neckbands, and earbuds. Designed to provide users with a smooth browsing and shopping experience, the platform highlights modern UI/UX and product-focused design.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "E-commerce", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: "/projects/electronic-ecommerce.png",
    source_code_link: "https://github.com/jeeshan77",
    deployed_link: "https://hearwithjee.netlify.app/",
  },
  {
    name: "Japanese Food Store",
    description:
      "A Japanese food ordering website with a minimal and elegant UI, perfect for restaurants and online delivery services.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "Food", color: "pink-text-gradient" },
    ],
    image: "/projects/pj4.png",
    source_code_link: "https://github.com/jeeshan77",
    deployed_link: "https://sushi-landing.netlify.app/",
  },
  {
    name: "Dark Theme Portfolio",
    description:
      "A sleek dark-themed portfolio website built to highlight creative work with animations and responsive design.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Framer Motion", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: "/projects/pj2.png",
    source_code_link: "https://github.com/jeeshan77",
    deployed_link: "https://portfolio-3js.netlify.app/",
  },
  {
    name: "Tech Company",
    description:
      "A tech solutions site with modern animations and responsive sections for services and case studies.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "GSAP", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: "/projects/pj12.png",
    source_code_link: "https://github.com/jeeshan77",
    deployed_link: "https://eduardocruzpalacios.github.io/corporate-theme-css-javascript/#figures",
  },
  {
    name: "Travel Website",
    description:
      "Wanderly is a modern travel website designed to inspire and guide travelers in discovering the world’s most beautiful destinations. It features curated travel spots, weekly offers, and destination guides with a clean, responsive design for a seamless experience on any device.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "Travel", color: "pink-text-gradient" },
    ],
    image: "/projects/travelwebsitelogo.png",
    source_code_link: "https://github.com/jeeshan77",
    deployed_link: "https://gowanderly.netlify.app/",
  },
  
  {
    name: "Apple Store Clone",
    description:
      "An Apple Store-inspired e-commerce clone showcasing modern UI patterns, responsive layouts, and smooth interactions.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: "/projects/pj3.png",
    source_code_link: "https://github.com/jeeshan77",
    deployed_link: "https://app-iphone.netlify.app/",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/jeeshan77",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/jeeshan-gosain/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/jeeshan7704",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/jaanu_._.7/#",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
