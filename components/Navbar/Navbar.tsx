import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // Default theme before hydration
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-2 rounded-full shadow-lg z-50 flex items-center justify-between gap-6 w-full max-w-6xl">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
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

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Hamburger Menu Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu (Fixed Version) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      >
        {/* Menu Content */}
        <div
          className="bg-gray-900 text-white w-11/12 max-w-md p-6 rounded-lg shadow-lg flex flex-col justify-center gap-6 text-lg overflow-y-auto max-h-screen"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {["Home", "About", "Experience", "Projects", "Tech Stack"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="w-full text-center py-4 rounded-lg hover:bg-gray-700 transition"
              onClick={toggleMenu} // Close menu on click
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
