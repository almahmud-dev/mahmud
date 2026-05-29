import { FaInstagram, FaLinkedinIn, FaGithub, FaJs, FaReact, FaGitAlt, FaFigma } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiFramer,
  SiRedux,
  SiVercel,
  SiCloudinary,
  SiOpenai,
  SiReact,
} from "react-icons/si";
import { MdOutlineSmartToy } from "react-icons/md";

//About Section
export const heroImage =
  "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_800/v1779868606/image_fippda.jpg";

export const socials = [
  {
    key: "instagram",
    label: "Instagram",
    Icon: FaInstagram,
    href: (p) => p.social?.instagram || "#",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
    href: (p) => p.social?.linkedin || "#",
  },
  {
    key: "github",
    label: "GitHub",
    Icon: FaGithub,
    href: (p) => p.social?.github || "#",
  },
];

// ============ Skills data ==============
// featured (daily drivers) ar secondary (toolkit)
export const featured = [
  {
    name: "React",
    icon: <FaReact />,
    color: "#61dafb",
    tier: "Expert",
    year: "2 yrs",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: null,
    tier: "Expert",
    year: "1 yrs",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#f0c000",
    tier: "Expert",
    year: "1+ yrs",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178c6",
    tier: "Proficient",
    year: "1 yr",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06b6d4",
    tier: "Expert",
    year: "2 yrs",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#e34f26",
    tier: "Expert",
    year: "2 yrs",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#1572b6",
    tier: "Expert",
    year: "2 yrs",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    color: null,
    tier: "Proficient",
    year: "1 yr",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "#ffca28",
    tier: "Proficient",
    year: "1 yr",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "#764abc",
    tier: "Proficient",
    year: "1 yr",
  },
];

export const secondary = [
  { name: "Vercel", icon: <SiVercel />, color: null },
  { name: "Cloudinary", icon: <SiCloudinary />, color: "#3448c5" },
  { name: "Figma", icon: <FaFigma />, color: "#f24e1e" },
  { name: "AI Tools", icon: <SiOpenai />, color: null },
  { name: "Prompt Eng", icon: <MdOutlineSmartToy />, color: "#f59e0b" },
];

// ============ Experience Section ===============
export const internshipImages = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779974971/working1_gcbtvp.png",
  },

  {
    id: 2,
    image:
      "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779974970/working2_lqheu9.jpg",
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779974970/working3_c8gfxm.jpg",
  },
];
export const internshipProjects = [
  {
    title: "Uomo Ui",
    image:
      "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779943297/work2_f5rijd.png",
    live: "https://uomo-ui.vercel.app/",
    github: null,
    category: "Frontend",
    types: ["Frontend", "Next.js", "Tailwind"],
    status: "Completed",
    description:
      "A modern and scalable UI platform built with Next.js and Tailwind CSS, focused on clean component architecture, responsive layouts, optimized performance, and smooth user experience.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Educate Ecommerce",
    image:
      "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868816/eduact_kllduz.png",
    live: "https://ebt-eduact.vercel.app/",
    github: null,
    category: "Frontend",
    types: ["Frontend", "Next.js", "React"],
    status: "Live",
    description:
      "A fully responsive ecommerce platform for educational products, developed with Next.js and Firebase, featuring modern UI design, dynamic product sections, optimized performance, and seamless user interaction across devices.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Cit Promotion",
    image:
      "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868766/profile2_kme5er.jpg",
    live: "https://cit-pro.vercel.app/",
    github: null,
    category: "Frontend",
    types: ["Frontend", "React", "Tailwind"],
    status: "Live",
    description:
      "A modern promotional website for CIT Institute designed with React and Tailwind CSS, featuring responsive layouts, engaging visual presentation, smooth navigation, and performance-focused frontend development.",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

// ============ Testimonaials Section ============
const testimonials1 =
  "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868910/testimonial1_c4x4or.png";
const testimonials2 =
  "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868910/testimonial2_v4lkpf.png";
const testimonials3 =
  "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868911/testimonial3_noswlr.png";
const testimonials4 =
  "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868913/testimonial4_hhcj9y.png";
const testimonials5 =
  "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868927/testimonial5_hxzdfp.png";
export const testimonials = [
  {
    id: 1,
    name: "Hasnm Uddin",
    role: "Founder",
    company: "WBB Trust",
    avatar: testimonials1,
    rating: 5,
    text: "Working with Al Mahmud was an excellent experience from start to finish. He pays attention to every detail, communicates clearly, and genuinely cares about delivering quality work. The final frontend felt smooth, modern, and incredibly polished.",
  },
  {
    id: 2,
    name: "Jihad Mia",
    role: "Project Manager",
    company: "EBT",
    avatar: testimonials2,
    rating: 5,
    text: "Al Mahmud consistently delivered clean, responsive, and well-structured interfaces throughout our project. His problem-solving mindset and focus on user experience made a noticeable difference in the final product.",
  },
  {
    id: 3,
    name: "Rafiq Ahmed",
    role: "CEO",
    company: "DigitalBD",
    avatar: testimonials3,
    rating: 5,
    text: "One thing that stood out immediately was how quickly he understood our vision. He transformed our ideas into a fast, elegant, and modern web experience that exceeded our expectations.",
  },
  {
    id: 4,
    name: "Sara Islam",
    role: "Product Lead",
    company: "TechDhaka",
    avatar: testimonials4,
    rating: 5,
    text: "Al Mahmud combines creativity with technical precision. The animations, responsiveness, and overall UI quality he delivered brought a premium feel to the entire platform.",
  },
  {
    id: 5,
    name: "Jubeda Juo",
    role: "Product Lead",
    company: "TechDhaka",
    avatar: testimonials5,
    rating: 5,
    text: "Professional, reliable, and highly detail-oriented. He approached every task carefully and delivered a frontend experience that felt both modern and user-friendly.",
  },
];

// =========== FAQ Section ============
export const faqData = [
  {
    question: "What technologies do you work with?",
    answer:
      "I build modern, responsive, and high-performance frontend applications using React.js, Next.js, JavaScript, and TypeScript. I also work with tools like Firebase for authentication and backend services, Cloudinary for image optimization, and Tailwind CSS for building clean and responsive user interfaces. My main focus is creating smooth user experiences with mobile-first and performance-focused development.",
  },

  {
    question: "Do you take on freelance projects?",
    answer:
      "Yes, I’m available for freelance projects ranging from landing pages to complete frontend applications. I enjoy working on modern web experiences where performance, responsiveness, and clean UI design are important.",
  },

  {
    question: "How can we start a project together?",
    answer:
      "You can contact me through the contact form or email me directly. Once I understand your project goals and requirements, we can discuss the workflow, timeline, and the best approach to bring your idea to life.",
  },

  {
    question: "Are you open to full-time remote opportunities?",
    answer:
      "Yes, I’m open to full-time remote opportunities where I can contribute to modern frontend projects, collaborate with creative teams, and continue improving my skills while building meaningful user experiences.",
  },

  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines depend on the overall scope and complexity. Smaller landing pages usually take around 1–2 weeks, while larger frontend applications may take several weeks depending on features, revisions, and integrations.",
  },
];
