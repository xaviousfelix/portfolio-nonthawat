"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Net-Zero",
    description:
      "เว็บไซต์ที่ช่วยให้สามารถจัดการการใช้พลังงาน เพื่อให้การปล่อยก๊าซเรือนกระจกเป็นศูนย์และใช้พลังงานหมุนเวียนอย่างมีประสิทธิภาพ",
    image: "/images/project1.png",
    techStack: [
      "Vue.js",
      "Strapi.js",
      "TailwindCSS",
      "Spring Boot",
      "PostgreSQL",
    ],
    link: "https://test1netzero.netlify.app/",
  },
  {
    title: "CampingWorkShop",
    description:
      "เว็บไซต์ที่ช่วยให้ผู้ใช้สามารถค้นหาและจองสถานที่ตั้งแคมป์ได้อย่างง่ายดาย",
    image: "/images/Campingwebsite.png",
    techStack: [
      "Next.js",
      "Shadcn UI",
      "TailwindCSS",
      "Clerk",
      "Zod",
      "Prisma",
      "Supabase",
    ],
    link: "https://camping-swart.vercel.app/",
  },
];

export default function Project() {
  const { scrollYProgress } = useScroll({
    offset: ["0 2", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="flex flex-col items-center space-y-8 px-4">
      <h2 className="text-center text-3xl sm:text-5xl font-bold mb-8 text-white">
        My Projects
      </h2>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className="group mb-3 sm:mb-8 flex justify-center pointer-events-none w-full"
        >
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto"
          >
            <section
              id="projects"
              className="bg-base-200 w-full max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-base-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 pointer-events-auto bg-opacity-75 flex flex-col sm:block"
            >
              <div className="relative w-full h-48 sm:hidden">
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-cover"
                />
              </div>

              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-xl sm:text-2xl font-semibold text-left text-white">
                  {project.title}
                </h3>
                <p className="mt-2 leading-relaxed text-white text-left text-sm sm:text-base">
                  {project.description}
                </p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {project.techStack.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="text-white rounded-full badge badge-neutral text-xs sm:text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={project.image}
                width={500}
                height={500}
                alt={project.title}
                quality={95}
                className="absolute hidden sm:block top-11 -right-40 w-[30.25rem] rounded-xl shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
                priority={true}
              />
            </section>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
