// data/experience.js
import {
  SiNextdotjs,
  SiCloudinary,
  SiFirebase,
  SiTailwindcss,
  SiReact,
  SiVercel,
} from "react-icons/si";
import { cld } from "./constants";

export const PROJECT_STATUS = {
  LIVE: "Live",
  COMPLETED: "Completed",
};

/** Gallery photos from the internship, sized consistently via cld(). */
export const internshipImages = [
  { id: 1, image: cld("v1779974971/working1_gcbtvp.png") },
  { id: 2, image: cld("v1779974970/working2_lqheu9.jpg") },
  { id: 3, image: cld("v1779974970/working3_c8gfxm.jpg") },
];

/**
 * Each project has a `slug` — use it for dynamic routes
 * (matches the Intercepting/Parallel Routes pattern already used in Qeducato)
 * instead of matching on `title` at render time.
 */
export const internshipProjects = [
  {
    slug: "uomo-ui",
    title: "Uomo Ui",
    image: cld("v1779943297/work2_f5rijd.png"),
    imageAlt: "Uomo Ui — Next.js frontend platform homepage",
    live: "https://uomo-ui.vercel.app/",
    github: null,
    category: "Frontend",
    types: ["Frontend", "Next.js", "Tailwind"],
    status: PROJECT_STATUS.COMPLETED,
    description:
      "A modern and scalable UI platform built with Next.js and Tailwind CSS, focused on clean component architecture, responsive layouts, optimized performance, and smooth user experience.",
    tech: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Cloudinary", Icon: SiCloudinary },
      { name: "Firebase", Icon: SiFirebase },
    ],
  },
  {
    slug: "educate-ecommerce",
    title: "Educate Ecommerce",
    image: cld("v1779868816/eduact_kllduz.png"),
    imageAlt: "Educate Ecommerce — responsive ecommerce storefront",
    live: "https://ebt-eduact.vercel.app/",
    github: null,
    category: "Frontend",
    types: ["Frontend", "Next.js", "React"],
    status: PROJECT_STATUS.LIVE,
    description:
      "A fully responsive ecommerce platform for educational products, developed with Next.js and Firebase, featuring modern UI design, dynamic product sections, optimized performance, and seamless user interaction across devices.",
    tech: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Tailwind", Icon: SiTailwindcss },
    ],
  },
  {
    slug: "cit-promotion",
    title: "Cit Promotion",
    image: cld("v1779868766/profile2_kme5er.jpg"),
    imageAlt: "Cit Promotion — institute promotional website",
    live: "https://cit-pro.vercel.app/",
    github: null,
    category: "Frontend",
    types: ["Frontend", "React", "Tailwind"],
    status: PROJECT_STATUS.LIVE,
    description:
      "A modern promotional website for CIT Institute designed with React and Tailwind CSS, featuring responsive layouts, engaging visual presentation, smooth navigation, and performance-focused frontend development.",
    tech: [
      { name: "React", Icon: SiReact },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "Vercel", Icon: SiVercel },
    ],
  },
];
