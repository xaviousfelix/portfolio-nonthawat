"use client";

import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { saveAs } from "file-saver"; // ต้องติดตั้ง package file-saver

const SocialIcons = [
  {
    title: "Icons",
    Social: [
      {
        src: "/images/githubconnect.png",
        name: "GitHub",
        pathURL: "https://github.com/xaviousfelix",
      },
      {
        src: "/images/linkedin.png",
        name: "Linkedin",
        pathURL:
          "https://www.linkedin.com/in/nonthawat-wattanawiwatwach-2b8478356/",
      },
      {
        src: "/images/instagram.png",
        name: "Instagram",
        pathURL: "https://www.instagram.com/nnotr_/?hl=th",
      },
      {
        src: "/images/facebook.png",
        name: "Facebook",
        pathURL: "https://www.facebook.com/NotNTW46/?locale=th_TH",
      },
    ],
  },
];

const handleDownload = () => {
  saveAs("files/Nonthawat Resume.pdf", "Nonthawat Resume.pdf"); // โหลดไฟล์แล้วตั้งชื่อใหม่
};

export default function HeroSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);
  return (
    <section className="lg:py-16 md:py-12 sm:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-12 sm:justify-self-center items-center">
        {/* ข้อความบน */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-12 place-self-center text-center justify-self-center order-1 sm:order-1"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="bg-gradient-to-r from-green-400 to-stone-300 bg-clip-text text-transparent">
              สวัสดีครับ, ผม
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "น็อต",
                1000,
                "Junior Developer",
                1000,
                "UX/UI Designer",
                1000,
                "Software Engineer",
                1000,
                "FullStack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>

        {/* รูปภาพ อยู่ระหว่างกลางเมื่อเป็นมือถือ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-6 sm:col-span-4 place-self-center order-2 sm:order-3 mt-6 sm:mt-0"
        >
          <div className="mask mask-squircle md:mask-squircle-2xl w-3/4 lg:w-full mx-auto">
            <Image
              src="/images/newimage1.jpg"
              alt="hero image"
              width={500}
              height={500}
              priority
            />
          </div>
        </motion.div>

        {/* ข้อความล่าง */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 place-self-center text-center justify-self-center order-3 sm:order-2"
        >
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            ผมเป็นนักศึกษาจากมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
            ที่มีความสนใจและหลงใหลในการพัฒนาเว็บไซต์<br />และระบบแอปพลิเคชัน
            ปัจจุบันกำลังมองหาโอกาสทำงานในตำแหน่ง Front-End Developer, Back-End
            Developer <br />และ Full-Stack Developer มีทักษะด้านการเขียนโปรแกรมด้วย
            React, Next.js, HTML, CSS, Tailwind CSS, JavaScript, TypeScript,
            Node.js, PHP, MySQL และ MS SQL รวมถึงมีความเข้าใจด้านการออกแบบ
            UX/UI และการพัฒนาเว็บไซต์<br />ให้ใช้งานได้จริง
            มีความตั้งใจเรียนรู้เทคโนโลยีใหม่ ๆ
            และพร้อมพัฒนาทักษะเพื่อสร้างผลงานที่มีคุณภาพ
           <br />ผมเป็นคนที่ทำงานร่วมกับผู้อื่นได้ดี มีทักษะการสื่อสารที่ดี
            และมีความรับผิดชอบในงานที่ได้รับมอบหมาย
            <br />พร้อมที่จะนำความรู้และความสามารถมาช่วยพัฒนาโครงการให้ประสบความสำเร็จ
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
            {/* ปุ่มและไอคอน */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
