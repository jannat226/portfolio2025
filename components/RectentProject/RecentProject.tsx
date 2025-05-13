"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../data";
import { PinContainer } from "../ui/pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="section pb-6">
      <p className="section-header">Recent Projects</p>
      <div className="flex flex-wrap items-center justify-start gap-10">
  {projects.map((item, index) => (
    <div
      className={`lg:min-h-[22rem] h-[16rem] flex items-center justify-center sm:w-96 w-[80vw] ${
        index < projects.length - 1 ? "mb-10" : "" /* Adds space between rows */
      }`}
      key={item.id}
    >
            <PinContainer title="Projects" href="https://github.com/jannat226">
              {/* Image Container with Proper Sizing */}
              <div className="relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden h-[18vh] lg:h-[22vh] mb-2">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" layout="fill" objectFit="cover" />
                </div>
                {/* Fix Image Fit Issue */}
                {/* <Image
                  src={item.img}
                  alt="cover"
                  layout="fill"
                  objectFit="cover"
                  className="z-10 absolute bottom-0 w-full h-full"
                /> */}
              </div>

              <h1 className="section-header mt-2">{item.title}</h1>

              <p className="main-color" style={{ color: "#BEC1DD", margin: "0.5vh 0" }}>
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-2 mb-1">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                      style={{ transform: `translateX(-${4 * index + 2}px)` }}
                    >
                      <Image src={icon} alt="icon" width={24} height={24} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-purple"
                  >
                    Check Source Code
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
