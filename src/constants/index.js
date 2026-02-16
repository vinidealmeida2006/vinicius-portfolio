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
  tailwind,
  nodejs,
  c,
  unity,
  githubwhite,
  github,
  figma,
  ostengames,
  QUByte,
  gambirace,
  stolenshadow,
  eukaryoteMail,
  agir,
  slaptower,
  baseEstelar,
  threejs,
  link,
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
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Interactive Interfaces",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "UNITY",
    icon: unity,
  },
  {
    name: "C#",
    icon: c,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Game Developer & Game Designer",
    company_name: "FIAP · Osten Games",
    icon: ostengames,
    iconBg: "#383E56",
    date: "March 2024 – November 2024",
    points: [
      "Developed a complete game prototype using Unity and C#, handling both gameplay programming and game design decisions.",
      "Designed and implemented core gameplay mechanics, and interaction systems.",
      "Worked on an industry-based academic project in partnership with Osten Games, following real-world requirements and constraints.",
      "Participated in iterative development cycles, refining mechanics and systems based on technical and gameplay feedback.","Awarded 3rd place at Next FIAP 2024, recognizing the project’s quality, design, and technical execution.",
    ],
  },
  {
    title: "Game Developer & Game Designer",
    company_name: "FIAP · QUByte Interactive",
    icon: QUByte,
    iconBg: "#E6DEDD",
    date: "March 2025 – November 2025",
    points: [
      "Developed Gambirace, a local multiplayer party game where every match presents a unique chaotic challenge and requires creative strategy.",
      "Designed and implemented multiple engaging minigames such as Eco Conta, Pteroloop, Pitcross and Spray Scrap, each with distinct objectives and mechanics to encourage replayability.",
      "Built a dynamic vehicle assembly system where players collect parts to customize and race absurd cars, encouraging creative play.",
      "Programmed accessible gameplay with vibrant visuals, chaotic physics, and support for up to 4 controllers in local multiplayer.",
      "Collaborated throughout the full development cycle simulating real production scenarios, managing systems with Unity and C#.",
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
    name: "Gambirace",
    description:
      "A chaotic local multiplayer party game built with Unity, where players compete in creative minigames to earn vehicle parts and assemble absurd cars for physics-driven races. Supports up to 4 players.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "partygame",
        color: "green-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    image: gambirace,
    source_code_link: "https://vinialmeida.itch.io/gambirace",
  },
  {
    name: "Stolen Shadow",
    description:
      "A dark and atmospheric game developed in Unity, focused on stealth and environmental interaction. Players must navigate through shadows, avoid threats, and uncover hidden paths using strategy and careful movement.",
    tags: [
      {
        name: "puzzle",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    image: stolenshadow,
    source_code_link: "https://vinialmeida.itch.io/stolen-shadow",
  },
  {
    name: "Eukaryote Mail",
    description:
      "A creative and fast-paced experience developed in Unity during a game jam, where players take on the role of a cellular messenger navigating dynamic environments. Combines arcade-style mechanics with a unique biological theme.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    image: eukaryoteMail,
    source_code_link: "https://gasgamedesign.itch.io/eukaryote-mail",
  },
  {
    name: "A.G.I.R",
    description:
      "A.G.I.R. proposes an interactive experience that combines entertainment and awareness, using narrative puzzles to address themes such as natural disasters, technological prevention, and social reconstruction.",
    tags: [
      {
        name: "raisingawareness",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    image: agir,
    source_code_link: "https://gasgamedesign.itch.io/agir",
  },
  {
    name: "Slap Tower",
    description:
      "A fast-paced arcade game developed in Unity during a game jam. Focused on timing and precision, the project was built under tight deadlines, emphasizing rapid prototyping, core mechanics, and engaging gameplay.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    image: slaptower,
    source_code_link: "https://gasgamedesign.itch.io/slap-tower",
  },
  {
    name: "Base Estelar",
    description:
      "Base Estelar was developed in partnership with Osten Games as a university project exploring blockchain integration in games. The result is a hypercasual experience where players strategically cut ropes to guide spaceship parts to the astronaut and earn stars.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    image: baseEstelar,
    source_code_link: "https://vinialmeida.itch.io/base-estelar",
  },
];

export { services, technologies, experiences, testimonials, projects };