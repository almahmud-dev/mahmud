// data/constants.js
// Central place for image config so no consumer hardcodes Cloudinary transforms.

export const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dlqvctrgm/image/upload";

/**
 * Builds a Cloudinary URL with sensible auto-format/quality defaults.
 * Keeps individual data files free of long transform strings.
 */
export function cld(publicIdPath, { width = 1200 } = {}) {
  return `${CLOUDINARY_BASE}/f_auto,q_auto,w_${width}/${publicIdPath}`;
}
