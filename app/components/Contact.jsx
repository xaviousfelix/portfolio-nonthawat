"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

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

export default function Contact() {
  return (
    <section id="contact" className="grid grid-cols-1 sm:grid-cols-2 gap-20">
      <form className="mt-10 flex flex-col dark:text-black">
        <h2 className="text-5xl font-medium capitalize mb-8 text-left pr-10">
          My Socials
        </h2>
        <span className="justify-start pr-5">
          ผมกำลังมองหาโอกาสใหม่ๆ แบบฟอร์มของผมเปิดอยู่เสมอ! ไม่ว่าคุณจะมีคำถาม
          หรือแค่อยากทักทาย ผมจะพยายามตอบกลับให้เร็วที่สุด!
        </span>
        <div className="flex justify-start pr-8">
          {SocialIcons.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 rounded-lg transition-all"
            >
              <div className="flex items-center justify-center mb-2">
                {category.Social.map((icons, iconsIndex) => (
                  <div
                    key={iconsIndex}
                    className="flex flex-col items-center p-1 rounded-lg transition-all duration-300 hover:scale-125"
                    
                  >
                    <div className="flex items-center justify-center mb-2 h-full w-full">
                      <Link href={icons.pathURL} target="_blank">
                        <Image
                          src={icons.src}
                          alt={icons.name}
                          width={64}
                          height={64}
                          className="h-auto w-auto"
                          priority={true}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </form>

      <form className="flex flex-col justify-center gap-4">
        <h2 className="text-5xl font-medium capitalize mb-8 text-center">
          Contact me
        </h2>

        {/* เบอร์โทร */}
        <div className="flex items-center mt-2 justify-center pr-8">
          <Image
            src="/images/telephone.png"
            alt="Telephone"
            width={25}
            height={20}
            className="h-auto w-auto invert"
            priority={true}
          />
          <span className="pl-2">: 🇹🇭 (+66)97-232-6055</span>
        </div>

        {/* ลิงก์ Gmail ที่คลิกได้ */}
        <a
          href="mailto:nonthawat2554963@gmail.com"
          className="flex items-center mt-2 justify-center pr-8 cursor-pointer hover:text-blue-500 transition-colors"
        >
          <Image
            src="/images/email.png"
            alt="Email"
            width={25}
            height={20}
            className="h-auto w-auto invert"
            priority={true}
          />
          <span className="pl-2">: nonthawat2554963@gmail.com</span>
        </a>
      </form>
    </section>
  );
}
