"use client"
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { src: "/images/react.png", name: "React" },
      { src: "/images/html.png", name: "HTML" },
      { src: "/images/css-3.png", name: "CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { src: "/images/nodejs.png", name: "Node.js" },
      { src: "/images/php.png", name: "PHP" },
    ],
  },
  {
    title: "Database",
    skills: [{ src: "/images/mysql.png", name: "MySQL"},
      {src: "/images/sql-server.png", name: "SQL Server"},

    ],
  },
  {
    title: "UI",
    skills: [
      { src: "/images/tailwindcss.png", name: "Tailwind" },
      { src: "/images/daisyui.png", name: "DaisyUI" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { src: "/images/vscode.png", name: "VSCode" },
      { src: "/images/npm.png", name: "npm" },
      { src: "/images/postman.png", name: "Postman" },
      { src: "/images/figma.png", name: "Figma" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { src: "/images/git.png", name: "Git" },
      { src: "/images/github.png", name: "GitHub" },
      { src: "/images/vercel.png", name: "Vercel" },
    ],
  },
  {
    title: "Languages",
    skills: [{ src: "/images/nextjs.png", name: "Next.js" }],
  },
];

export default function StackSkills() {
  return (
    <section id="StackSkills" className="my-16">
      <h2 className="text-center text-5xl font-bold mb-8 text-white">
        Tech Stack
      </h2>
      <Marquee pauseOnHover={true} speed={100}>
        <div className="flex space-x-6 gap-x-6 pr-12">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="card w-96 h-96 shadow-2xl hover:border-primary border-grey-500 my-12"
            >
              <div className="card-body">
                <h1 className="card-title flex justify-center pt-6">
                  {category.title}
                </h1>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-2 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <div className="flex items-center justify-center mb-2 ">
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={64}
                          height={64}
                          className="h-auto w-auto"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
