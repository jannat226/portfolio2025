"use client";
import { Linkedin, Github, FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import React, { useState, useEffect } from "react";

export default function Header() {
  // const [theme, setTheme] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem("theme") || "light";
  //   }
  //   return "light";
  // });

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-start gap-4">
        <div className="relative rounded-full bg-neutral-400 overflow-hidden aspect-square w-24">
          <Image
            src="/photo3.png"
            alt="My headshot/profile image"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full">
          <p className="text-lg text-neutral-800 dark:text-white">Jannat</p>
          <p className="text-muted-foreground dark:text-gray-300">
            Software Engineer
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="https://www.linkedin.com/in/jannat-chehal/" target="_blank" className="icons">
              <Linkedin size={18} />
              <p className="icon-text">LinkedIn</p>
            </Link>
            <Link href="https://github.com/jannat226/" target="_blank" className="icons">
              <Github size={18} />
              <p className="icon-text">GitHub</p>
            </Link>
            <Link href="mailto:jannatchehal09@gmail.com" className="icons">
              <Mail size={18} />
              <p className="icon-text">Email</p>
            </Link>
            <Link href="/Jannat_Professional_Resume.pdf" target="_blank" download="Jannat_Resume.pdf" className="icons">
              <FileText size={18} />
              <p className="icon-text">Resume</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Theme Toggle Button */}
      {/* <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button> */}
    </header>
  );
}
