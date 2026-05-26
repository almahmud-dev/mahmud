import {
  FaNodeJs, FaReact,
} from "react-icons/fa6";
import {
  SiNextdotjs, SiTailwindcss, SiRedux, SiGsap, SiReact, SiFirebase, SiCloudinary, SiVercel, SiTypescript, SiReactquery ,
  SiThreedotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// Custom Lenis icon
const LenisIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 315 336" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M312.612 124.618L159.947 277.283H129.301C128.305 277.283 127.331 276.987 126.502 276.433C125.674 275.879 125.029 275.092 124.648 274.171C124.268 273.251 124.169 272.238 124.364 271.261C124.559 270.284 125.04 269.386 125.746 268.683L168.89 225.509C172.283 222.109 174.188 217.502 174.187 212.698V84.7975C174.187 84.1351 174.318 83.4792 174.572 82.8674C174.826 82.2557 175.198 81.7 175.667 81.2324L198.982 57.9181C203.767 57.9527 208.344 59.8778 211.715 63.2737C215.087 66.6696 216.979 71.2607 216.979 76.0459V112.452C216.98 114.04 216.668 115.612 216.061 117.079C215.455 118.546 214.565 119.879 213.443 121.003L210.13 124.316L210.745 125.122L267.313 68.5833V0.392893H266.306V25.4193C266.302 26.0667 266.09 26.6958 265.702 27.2138C265.313 27.7317 264.768 28.1112 264.148 28.2962C263.527 28.4813 262.864 28.462 262.255 28.2414C261.646 28.0208 261.125 27.6104 260.767 27.0708C257.11 21.4418 252.105 16.8159 246.206 13.6131C240.307 10.4103 233.701 8.73232 226.989 8.73166H179.656L138.264 50.2743L122.15 66.3878C121.446 67.0904 120.549 67.5684 119.572 67.7614C118.596 67.9545 117.584 67.854 116.665 67.4725C115.746 67.0911 114.961 66.4458 114.408 65.6182C113.855 64.7906 113.56 63.8178 113.56 62.8227V0.382812H112.553V29.2663C112.554 29.9546 112.32 30.6226 111.889 31.1598C111.459 31.697 110.858 32.0711 110.186 32.2202C109.514 32.3694 108.812 32.2847 108.195 31.9801C107.577 31.6756 107.083 31.1694 106.792 30.5454C98.7355 13.2535 86.3986 8.7115 86.3986 8.7115L28.6417 65.8037L29.3469 66.5187L31.8946 64.001C42.5094 53.5373 60.5768 59.6201 62.581 74.3942C63.0117 77.6425 63.2202 80.9165 63.2052 84.1932V271.07L0 334.275L0.714997 334.99L3.19241 332.512C6.58217 329.113 11.1821 327.197 15.9827 327.185H198.72L298.301 226.999C301.698 223.601 303.607 218.994 303.609 214.189V142.413C303.61 137.609 305.519 133.001 308.916 129.603L313.196 125.323L312.612 124.618Z" />
  </svg>
);
const ZustandIcon = () => (
  <svg
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="64" cy="64" r="58" fill="#18181B" />
    
    <circle
      cx="64"
      cy="64"
      r="56"
      stroke="#fff"
      strokeWidth="4"
      opacity="0.9"
    />

    <circle cx="64" cy="68" r="34" fill="#3B2F2F" />

    <circle cx="42" cy="42" r="10" fill="#3B2F2F" />
    <circle cx="86" cy="42" r="10" fill="#3B2F2F" />

    <circle cx="42" cy="42" r="5" fill="#D89A7A" />
    <circle cx="86" cy="42" r="5" fill="#D89A7A" />

    <path
      d="M50 60 Q54 56 58 60"
      stroke="#111"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <path
      d="M70 60 Q74 56 78 60"
      stroke="#111"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <ellipse cx="64" cy="72" rx="8" ry="6" fill="#D89A7A" />

    <path
      d="M60 70 Q64 76 68 70"
      stroke="#111"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M48 90 L82 90 L54 112 L84 112"
      stroke="#A855F7"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const projects = [
  {
    title: "Uomo UI Ecommerce",
    image: "/image/uomo.png",
    live: "https://uomo-uim.vercel.app/",
    github: "https://github.com/almahmud-dev/uomo-uim",
    category: "Frontend",
    types: ["Frontend", "Tailwind", "Next.js",],
    status: "Completed",
    description: "A modern e-commerce platform with smooth UI, product browsing and structured layout for better user experience.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Firebase", icon: <SiFirebase  /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
    ],
  },
  {
    title: "Bazardor",
    image: "/image/bazardor.png",
    live: "https://bazar-dor-taupe.vercel.app/",
    github: "https://github.com/almahmud-dev/BazarDor",
    category: "React",
    types: ["React", "Tailwind",],
    status: "Completed",
    description: "A real-time Bangladeshi market price tracker for everyday essentials like oil, gas, meat, vegetables, poultry, and more. Built with React and Zustand for smooth, efficient state management.",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Zustand", icon: <ZustandIcon /> },
      { name: "Lenis", icon: <LenisIcon /> },
    ],
  },
  {
    title: "Audira",
    image: "/image/audira.jpg",
    live: "https://audira-gsap.vercel.app/",
    github: "https://github.com/almahmud-dev/audira",
    category: "Animation",
    types: ["Frontend", "Tailwind", "Next.js"],
    status: "Completed",
    description: "High-end animated landing page focusing on scroll animations and modern UI transitions.",
    tech: [
      { name: "GSAP", icon: <SiGsap /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Lenis", icon: <LenisIcon /> },
    ],
  },
  {
    title: "Bitox Business Consulting",
    image: "/image/bitox.png",
    live: "https://bitox-business-consulting-website.vercel.app/",
    github: "",
    category: "Client Work",
    types: ["Client Work", "Frontend", "Tailwind", "React"],
    status: "Completed",
    description: "Contributed to the homepage UI of a multi-page client website. Worked on initial implementation and UI fixes before final deployment.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Tanstack", icon: <TbBrandReactNative  /> },
      { name: "Vercel", icon: <SiVercel   /> },
    ],
  },
   {
    title: "3D Portfolio",
    image: "/image/3DPortfolio.png",
    live: "https://3-d-website-olive.vercel.app/",
    github: "https://github.com/almahmud-dev/3D_Website",
    category: "TypeScript",
    types: ["TypeScript", "Tailwind", "Next.js"],
    status: "Improving",
    description: "Three.js 3D Scene A real-time 3D environment with a glowing sphere, orbital rings, particle systems, and a star field. Built with pure Three.js showcasing advanced geometry, lighting, and scene management.",
    tech: [
      { name: "Three.js", icon: <SiThreedotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "GSAP", icon: <SiGsap /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    title: "HK Estate",
    image: "/image/hkestate.jpg",
    live: "https://hkestate.vercel.app/",
    github: "https://github.com/almahmud-dev/HKestate",
    category: "Animation",
    types: ["Frontend", "Tailwind", "React"],
    status: "Completed",
    description: "SVG Animated landing page with modern UI transitions and smooth interaction for real-world estate buying experience.",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "GSAP", icon: <SiGsap /> },
    ],
  },
  {
    title: "Velvet Pour",
    image: "/image/velvetpour.png",
    live: "https://cocktail-blush.vercel.app/",
    github: "https://github.com/almahmud-dev/velvet-pour",
    category: "Animation",
    types: ["Frontend", "Tailwind", "React"],
    status: "In Progress",
    description: "Stylish beverage themed landing page focusing on premium UI design and smooth visual experience.",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "GSAP", icon: <SiGsap /> },
    ],
  },
  {
    title: "SWE Domain",
    image: "/image/sweDomain.png",
    live: "https://nextjs-landingpage-lyart.vercel.app/",
    github: "https://github.com/almahmud-dev/Nextjs-landingpage",
    category: "Next.js",
    types: ["Animation", "Tailwind", "Next.js"],
    status: "Improving",
    description: "A fast and simple domain registration platform built for Bangladeshi developers and businesses. Search, claim, and register your .swe.bd domain in seconds powered by Next.js and Framer Motion",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Tanstack", icon: <TbBrandReactNative /> },
    ],
  },
   {
    title: "Air Assistant",
    image: "/image/airassistant.png",
    live: "https://airbnb-assistant-landing.vercel.app/",
    github: "",
    category: "Client Work",
    types: ["Client Work", "Frontend", "Tailwind", "Next.js"],
    status: "Contributed",
    description: "Contributed to the homepage UI of a multi-page client website. Worked on initial implementation and UI fixes before final deployment.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Tanstack", icon: <TbBrandReactNative /> },
    ],
  },
  {
    title: "EBT Eduact Ecommerce",
    image: "/image/eduact.png",
    live: "https://ebt-eduact.vercel.app/",
    github: "https://github.com/almahmud-dev/ebt-eduact",
    category: "Frontend",
    types: ["Frontend", "Tailwind", "React"],
    status: "Improving",
    description: "Educational platform UI with multiple sections and structured content for better learning experience.",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Lenis", icon: <LenisIcon /> },
      { name: "Tanstack", icon: <TbBrandReactNative /> },
    ],
  },
];
