// data/social.js
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export const heroImage =
  "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_800/v1779868606/image_fippda.jpg";

/**
 * Social links config.
 * Icon is stored as a component reference (NOT rendered here),
 * so the consumer controls size/className/color:
 *   const { Icon } = social;
 *   <Icon size={20} className="text-primary" />
 */
export const socials = [
  {
    key: "instagram",
    label: "Instagram",
    Icon: FaInstagram,
    href: (profile) => profile?.social?.instagram || "#",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
    href: (profile) => profile?.social?.linkedin || "#",
  },
  {
    key: "github",
    label: "GitHub",
    Icon: FaGithub,
    href: (profile) => profile?.social?.github || "#",
  },
];
