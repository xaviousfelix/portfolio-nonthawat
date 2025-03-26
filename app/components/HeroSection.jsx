"use client";

import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { saveAs } from "file-saver"; // ต้องติดตั้ง package file-saver

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
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="bg-gradient-to-r from-green-400 to-stone-300 bg-clip-text text-transparent">
              สวัสดีครับ, ผม{""}
            </span>
            <br />
            <TypeAnimation
              sequence={["น็อต", 1000, "Junior Developer", 1000, "UX/UI Designer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            ปัจจุบันเป็นนักศึกษาจาก มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
            คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล
            ชั้นปีที่ 4 มีประสบการณ์ในการทำเว็บไซต์ E-commerce ช่วงฝึกงาน
            โดยใช้เทคโนโลยี (Html, scss, css, Node.js, msSQL, PHP)
            ผมกำลังมองหาโอกาสในการทำงานในสายงาน Developer และ Designer ครับ |
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 
      bg-gradient-to-r from-green-500 to-stone-500 
      text-white transition-all duration-300 ease-in-out transform 
      hover:scale-105 hover:shadow-lg hover:from-green-400 hover:to-stone-400 
      active:scale-95"
            >
              Contact Me
            </Link>
            <button
              onClick={handleDownload}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-green-500 to-stone-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-green-900 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/imagemyself3.jpg"
              alt="hero image"
              className="mask mask-squircle"
              width={500}
              height={500}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
