"use client";

export default function Logo({ className }) {
  return (
    <svg
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <path
        d="
          M80 65
          L150 125
          L220 65
          L220 245
          L185 215
          L185 140
          L150 170
          L115 140
          L115 215
          L80 245
          Z
        "
        fill="url(#grad)"
      />

      <path
        d="
          M120 165
          L150 190
          L180 165
          L180 195
          L150 220
          L120 195
          Z
        "
        fill="url(#grad)"
      />

      <defs>
        <linearGradient
          id="grad"
          x1="80"
          y1="65"
          x2="220"
          y2="245"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B14DFF" />
          <stop offset="1" stopColor="#6C2BD9" />
        </linearGradient>
      </defs>
    </svg>
  );
}