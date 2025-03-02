import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-2 rounded-full shadow-lg z-50 flex items-center justify-between md:justify-center gap-6 w-full max-w-screen-lg transition-all duration-300">
      {/* Mobile Menu Toggle (Hidden on Desktop) */}
      <button
        className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navigation Links (Always Visible on Desktop) */}
      <div
        className={`absolute md:static top-16 left-1/2 -translate-x-1/2 md:translate-x-0 bg-white dark:bg-gray-900 shadow-lg md:shadow-none px-6 py-4 md:p-0 rounded-lg md:rounded-none md:flex md:gap-6 transition-all ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {["Home", "About", "Experience", "Projects", "Tech Stack"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="block px-4 py-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
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
