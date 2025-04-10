"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="About"
      className="flex flex-col lg:flex-row items-center gap-10 sm:my-40 scroll-mt-28 lg:my-60 text-white"
    >
      {/* รูปภาพ */}
      <div className="w-[1000px] h-[1000px] md:w-[700px] md:h-[700px] ">
        <Image
          src="/images/imagemyself1.jpg"
          alt="hero image"
          className="mask mask-parallelogram-2 "
          width={1000}
          height={1000}
          priority
        />
      </div>

      {/* เนื้อหา */}
      <div className="flex flex-col flex-1">
        {/* แสดงข้อมูลตามปุ่มที่เลือก */}
        <div className="text-left">
          <div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-stone-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="my-8">
              สวัสดีครับ! ผมเป็นนักศึกษาชั้นปีที่ 4
              จากมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี คณะวิทยาศาสตร์และเทคโนโลยี
              สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล
              <br />
              <br />
              ผมมีประสบการณ์ในการพัฒนาเว็บไซต์ E-Commerce ระหว่างการฝึกงาน
              โดยใช้เทคโนโลยีต่างๆ เช่น **HTML, Node.js, MS SQL และ PHP**
              ซึ่งช่วยให้ผมเข้าใจการพัฒนา Full-Stack Web ได้ดีขึ้น
              <br />
              <br />
              ผมชอบการอ่าน Code และการเรียนรู้เพื่อพัฒนาทักษะทางสายงาน Developer
              โดยมุ่งหวังที่จะเป็นนักพัฒนาเว็บไซต์แอพพลิเคชั่นที่สามารถสร้างสรรค์ระบบที่มีคุณภาพ
              และเป็นที่ต้องการขององค์กร
              <br />
              <br />
              หากสนใจร่วมงานหรือพูดคุยเกี่ยวกับโปรเจกต์ สามารถติดต่อผมได้ที่ปุ่ม
              Contact ครับ |
            </p>
          </div>
          {/* ปุ่มเลือกแท็บ */}
          <div className="flex flex-wrap gap-4 mb-6 pt-4">
  <span
    onClick={() => setActiveTab("education")}
    className={`px-4 py-2 relative cursor-pointer transition-all duration-300 ease-in-out
      ${activeTab === "education" ? "text-white" : "text-gray-400"}
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
      after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left
      hover:after:scale-x-100
      ${activeTab === "education" ? "after:scale-x-100" : ""}
    `}
  >
    Education
  </span>

  <span
    onClick={() => setActiveTab("experience")}
    className={`px-4 py-2 relative cursor-pointer transition-all duration-300 ease-in-out
      ${activeTab === "experience" ? "text-white" : "text-gray-400"}
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
      after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left
      hover:after:scale-x-100
      ${activeTab === "experience" ? "after:scale-x-100" : ""}
    `}
  >
    Experience
  </span>
</div>


          {/* แสดงข้อมูลตามแท็บที่เลือก */}
          <div className="min-h-[150px]">
          {activeTab === "education" && (
        <div className="animate-fade-up">
          <ul>
            <li className="mt-4 font-semibold text-white"> วิทยาศาสตร์บัณฑิต (สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล)</li>
            <li className="ml-px">มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี | 5 กรกฎาคม 2564 - ปัจจุบัน</li>
            <li className="ml-2">คณะวิทยาศาสตร์และเทคโนโลยี</li>
            <li className="ml-4">GPA 3.4</li>
          </ul>
        </div>
      )}

      {activeTab === "experience" && (
        <div className="animate-fade-up">
          <ul>
            <li className="mt-4 font-semibold text-white">Front-end Developer (Intern)</li>
            <li className="ml-px">Kratos innotech co., ltd. | 9 เมษายน - 31 ตุลาคม 2567 (7 เดือน)</li>
            <li className="ml-2">หน้าที่ : ออกแบบหน้าเว็บไซต์ E-commerce และ Dashboard Admin</li>
          </ul>
        </div>
      )}
          </div>
        </div>
      </div>
    </section>
  );
}
