import React from "react";
import { experiences } from "./data";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="section">
      <p className="section-header">Experience</p>
      <div className="flex flex-col gap-8">
        {experiences.map((experience, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <div className="relative border rounded-sm bg-neutral-400 overflow-hidden aspect-square w-8">
                <Image
                  src={experience.logo}
                  alt="company logo"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-title">{experience.title}</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="company-name">{experience.company}</p>
              <div
                className={`${
                  // As long as the word current is included in the date property, you will see the highlighted date.
                  experience.date?.includes("Current")
                    ? "current-date"
                    : "text-neutral-600 dark:text-neutral-400"
                }`}
              >
                {experience.date?.includes("Current") && (
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                )}
                {experience.date}
              </div>
            </div>
            <p className="date-text">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
