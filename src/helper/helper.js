//About Section
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
export const heroImage =
  "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868606/image_fippda.jpg";

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

// ─── Skills data: featured (daily drivers) ar secondary (toolkit)
import { FaJs, FaReact, FaGitAlt, FaFigma } from "react-icons/fa6";
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
} from "react-icons/si";
import { MdOutlineSmartToy } from "react-icons/md";
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
// Testimonaials Section
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
