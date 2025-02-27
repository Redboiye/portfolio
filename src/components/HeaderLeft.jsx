import React from "react";
import {
  BiRightArrowAlt,
  BiHome,
  BiBriefcase,
  BiCode,
  BiMailSend,
} from "react-icons/bi";

const HeaderLeft = () => {
  return (
    <div className="md:flex-[1]">
      <div className="top-0 hidden min-h-screen items-center justify-center bg-teal-800 text-white md:sticky md:flex">
        <ul className="flex flex-col gap-10">
          {["home", "experience", "projects", "contact"].map((item) => (
            <li
              key={item}
              className="group flex cursor-pointer items-center justify-start font-medium transition-all duration-200 sm:text-lg md:text-xl xl:text-3xl"
            >
              <BiRightArrowAlt className="-translate-x-5 transform text-4xl opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
              <a
                href={`#${item}`}
                className="transition-all duration-200 hover:translate-x-3"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-teal-600 p-5 text-white md:hidden">
        <a href="#home" className="flex flex-col items-center">
          <BiHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </a>
        <a href="#experience" className="flex flex-col items-center">
          <BiBriefcase className="text-2xl" />
          <span className="text-xs">Experience</span>
        </a>
        <a href="#projects" className="flex flex-col items-center">
          <BiCode className="text-2xl" />
          <span className="text-xs">Projects</span>
        </a>
        <a href="#contact" className="flex flex-col items-center">
          <BiMailSend className="text-2xl" />
          <span className="text-xs">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
