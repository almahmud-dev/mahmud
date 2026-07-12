// data/testimonials.js
import { cld } from "./constants";

/**
 * NOTE: If these are real client testimonials, keep as-is but make sure
 * each avatar/name/company is verifiable (recruiters do check LinkedIn).
 * If any are placeholder/sample data, either replace with real ones
 * or clearly avoid duplicate company+role combos (looks fabricated) —
 * e.g. two people both listed as "Product Lead, TechDhaka" below.
 */
export const testimonials = [
  {
    id: 1,
    name: "Md Anowar Hosan",
    role: "Founder",
    company: "WBB Trust",
    avatar: cld("v1779868910/testimonial1_c4x4or.png"),
    rating: 5,
    link: "https://www.linkedin.com/in/md-anowar-hosan-9b0a6521a/",
    text: "Excellent work. The code quality was clean and professional, the design was responsive, and everything worked perfectly. He was very cooperative, communicated clearly, and delivered the project on time. I’m really satisfied with the overall work and would highly recommend him to anyone looking for a skilled developer.Thank you for the great work",
  },
  {
    id: 2,
    name: "Md. Khaliduzzaman Tanoy",
    role: "Project Manager",
    company: "TechFilos",
    avatar: cld("v1779868910/testimonial2_v4lkpf.png"),
    rating: 5,
    link: "https://www.techfilos.com",
    text: "Working with Al Mahmud was a great experience. He quickly understood our requirements and translated them into a clean, modern website. Communication was always clear, deadlines were met, and the final result exceeded our expectations. I would gladly work with him again on future projects.",
  },
  {
    id: 3,
    name: "Rafiq Ahmed",
    role: "CEO",
    company: "DigitalBD",
    avatar: cld("v1779868911/testimonial3_noswlr.png"),
    rating: 5,
    text: "One thing that stood out immediately was how quickly he understood our vision. He transformed our ideas into a fast, elegant, and modern web experience that exceeded our expectations.",
  },
  {
    id: 4,
    name: "Sara Islam",
    role: "Product Lead",
    company: "TechDhaka",
    avatar: cld("v1779868913/testimonial4_hhcj9y.png"),
    rating: 5,
    text: "Al Mahmud combines creativity with technical precision. The animations, responsiveness, and overall UI quality he delivered brought a premium feel to the entire platform.",
  },
  {
    id: 5,
    name: "Jubeda Juo",
    role: "Frontend Consultant",
    company: "TechDhaka",
    avatar: cld("v1779868927/testimonial5_hxzdfp.png"),
    rating: 5,
    text: "Professional, reliable, and highly detail-oriented. He approached every task carefully and delivered a frontend experience that felt both modern and user-friendly.",
  },
];
