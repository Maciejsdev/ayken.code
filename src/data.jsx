import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: "01", href: "#home", text: "home" },
  { id: "02", href: "#skills", text: "skills" },
  { id: "03", href: "#about", text: "about" },
  { id: "04", href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "I'm proficient in HTML and CSS, diligently creating visually appealing and responsive websites to enhance user experiences",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "I have expertise in JavaScript, specializing in building interactive and dynamic web applications with a strong focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "I am currently learning React and focusing on developing front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.ibb.co/bKScd0x/image.png",
    url: "https://wondrous-lamington-2a3cb9.netlify.app/",
    github: "https://github.com/Maciejsdev/test-store",
    title: "Store app",
    text: "Complex store app with many features.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/LCttPcR/image.png",
    url: "https://clever-rugelach-7ac8d5.netlify.app/",
    github: "https://github.com/Maciejsdev/redux-cart",
    title: "Redux cart",
    text: "Case of redux usage in app.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/19qjY9r/mixmaster.png",
    url: "https://taupe-blini-5acd35.netlify.app/",
    github: "https://github.com/Maciejsdev/AraAra-cocktail",
    title: "MixMaster",
    text: "Simple SPA project which allows users to search cocktail recipes.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/Ydy5dBg/image.png",
    url: "https://tangerine-heliotrope-5dbb75.netlify.app/",
    github: "https://github.com/Maciejsdev/projects",
    title: "Contentful CMS",
    text: "A headless CMS project fetching data from contentful.com",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/09N0cfS/image.png",
    url: "https://symphonious-tanuki-5cda0b.netlify.app/",
    github: "https://github.com/Maciejsdev/search-engine",
    title: "Image Search Engine",
    text: "App that lets the user search graphic results by a phrase, fetching data from Unsplash Images.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/Bn7yK04/image.png",
    url: "https://jazzy-heliotrope-915ec2.netlify.app/",
    github: "https://github.com/Maciejsdev/cart",
    title: "Cart component",
    text: "useReducer based on cart component.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/pvyrZV1/image.png",
    url: "https://tourmaline-cendol-4676ed.netlify.app/",
    github: "https://github.com/Maciejsdev/strapi",
    title: "Strapi navbar",
    text: "Strapi like navbar component, nothing more nothing less.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/VHTn98r/image.png",
    url: "https://cool-dieffenbachia-053aef.netlify.app/",
    github: "https://github.com/Maciejsdev/grocery-bud",
    title: "Grocery Bud",
    text: "Make your own shopping list.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/3F29fmn/image.png",
    url: "https://astounding-granita-4eb3c4.netlify.app/",
    github: "https://github.com/Maciejsdev/Color-Generator",
    title: "Color palette",
    text: "App that lets you choose a color and in return gives u shades of it.",
  },
];
