"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center ">
      <div className="footer-container">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">Last updated on</p>
          <span className="current-date text-xs">January 22 2025</span>
        </div>
        <div className="flex gap-3 items-center">
          <Link
            href="https://github.com/jannat226/professional-portfolio"
            target="_blank"
            className="bg-neutral-800 text-white text-sm flex gap-1 px-3 py-1 hover:bg-neutral-700 transition-colors duration-200 rounded-full items-center"
          >
            <Github size={12} />
            Github repo
          </Link>
          <p className=" flex gap-1 text-muted-foreground text-sm">
            Made by
            <Link
              href="https://www.linkedin.com/in/jannat-chehal/"
               target="_blank"
              className="text-neutral-800 hover:underline "
            >
              Jannat
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
