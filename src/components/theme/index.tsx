"use client";

import { useTheme } from "next-themes";

import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <FaSun size={20} /> : <MdDarkMode size={20} />}
    </button>
  );
}
