"use client";

export default function Logo({ className }) {
  return (
    <svg
      viewBox="0 0 135 135"
      xmlns="http://www.w3.org/2000/svg"
      className={` text-accent ${className}`}
    >
      <path
        d="M13.5 0H48L110.5 62.5V0H135V121.726L13.5 0L0 13.5L122 135H87L24.5 72.5V135H0V13.5L13.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
