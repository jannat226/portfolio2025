import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    // Only check localStorage on the client side
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // Default theme before hydration
  });

  // Ensuring the theme is applied after hydration
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-2 rounded-full shadow-lg z-50 flex items-center gap-6 transition-all duration-300">
      {/* Navigation Links */}
      <div className="flex gap-6">
        {["Home", "About", "Experience", "Projects", "Tech Stack"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="px-4 py-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </nav>
  );
}
