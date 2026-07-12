// data/index.js
// Barrel export so existing imports like `import { featured } from "@/helper/data"`
// keep working after the split — no need to touch consumer components.

export { heroImage, socials } from "./social";
export { featured, secondary, SKILL_TIER } from "./skills";
export { internshipImages, internshipProjects, PROJECT_STATUS } from "./experience";
export { testimonials } from "./testimonials";
export { faqData } from "./faq";