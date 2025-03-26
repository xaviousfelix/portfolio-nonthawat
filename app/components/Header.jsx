"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { title: "About", id: "About" },
  { title: "Projects", id: "projects" },
  { title: "Skills", id: "StackSkills" },
  { title: "Contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState(null);

  // ✅ ฟังก์ชัน Scroll ไปยัง Section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <header className="z-[999] relative ">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.0rem] w-full rounded-none border border-none border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:border-black/40 "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((navLink) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative cursor-pointer"
              key={navLink.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <span
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-black-300 transition hover:text-white",
                  {
                    "text-gray-950": activeSection === navLink.id,
                  }
                )}
                onClick={() => handleScroll(navLink.id)} // ✅ ใช้ onClick เพื่อ Scroll
              >
                {navLink.title}

                {navLink.id === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </span>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
