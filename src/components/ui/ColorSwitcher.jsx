"use client";
import { useEffect, useState } from "react";

const themes = [
  { name: "theme-blue",    color: "#2563eb" },
  { name: "theme-rose",    color: "#e11d48" },
  { name: "theme-emerald", color: "#059669" },
  { name: "theme-violet",  color: "#7c3aed" },
  { name: "theme-amber",   color: "#d97706" },
  { name: "theme-cyan",    color: "#0891b2" },
];

const ColorSwitcher = () => {
  const [active, setActive] = useState("theme-violet");

  useEffect(() => {
    const saved = localStorage.getItem("accent-theme") ?? "theme-violet";
    applyTheme(saved);
    setActive(saved);
  }, []);

  const applyTheme = (themeName) => {
    const root = document.documentElement;
    root.classList.remove(...themes.map((t) => t.name));
    root.classList.add(themeName);
  };

  const handleChange = (themeName) => {
    applyTheme(themeName);
    localStorage.setItem("accent-theme", themeName);
    setActive(themeName);
    window.dispatchEvent(new Event("accent-change"));
  };

  return (
    <div className="grid grid-cols-6 gap-3 md:gap-x-3 md:gap-y-2">
      {themes.map(({ name, color }) => (
        <button
          key={name}
          onClick={() => handleChange(name)}
          className={`w-7 md:w-8 aspect-square rounded-full transition-all border ${
            active === name ? "scale-110 border-black dark:border-white" : "border-transparent"
          }`}
          style={{ backgroundColor: color }}
          title={name.replace("theme-", "")}
        />
      ))}
    </div>
  );
};

export default ColorSwitcher;