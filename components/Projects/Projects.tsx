"use client";
import React from "react";
import { projects } from "./data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { techIcons } from "./data";
import NextImage from "next/image";

export default function Projects() {
  return (
    <div className="section ">
      <p className="section-header">Projects</p>
      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <Link
            href={project.href}
            key={idx}
            className="flex flex-col gap-2 w-full group bg-neutral-50 hover:border-neutral-200 border-2 border-white rounded-xl p-6"
          >
            <div className="flex items-center gap-2">
              <p className="text-title text-black dark:text-black group-hover:underline">{project.name}</p>
              <div className="text-neutral-600 group-hover:pl-2 transition-all duration-200">
                <ArrowUpRight size={15} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2">
              <div className="text-xs md:text-sm flex flex-wrap gap-2 items-center text-muted-foreground">
                {project.stack.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2 py-1 bg-neutral-100 rounded-full flex items-center gap-1.5"
                  >
                    {techIcons[tech] && (
                      <NextImage
                        src={techIcons[tech]}
                        alt={`${tech} icon`}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    )}
                    {tech}
                  </span>
                ))}
              </div>
              <p className="date-text">{project.date}</p>
            </div>
            <p className="date-text">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
