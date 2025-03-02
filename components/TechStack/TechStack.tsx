"use client";
import React, { useEffect, useState } from "react";
import { techIcons } from "./data";
import NextImage from "next/image";

export default function TechStack() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return (
    <div className="section">
      <p className="section-header">Tech Stack</p>
      <div className={`border-2 rounded-xl p-6 flex flex-wrap justify-center gap-4 transition-all ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-neutral-50 border-white"}`}>
        {Object.entries(techIcons).map(([tech, iconPath], idx) => (
          <div key={idx} className={`flex items-center gap-2 rounded-full px-3 py-2 transition-all ${theme === "dark" ? "bg-gray-800 text-white" : "bg-neutral-100 text-black"}`}>
            <NextImage src={iconPath} alt={`${tech} icon`} width={20} height={20} className="w-5 h-5" />
            <p className="text-sm">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}