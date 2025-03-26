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
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    senderSubject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "loading", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ senderName: "", senderEmail: "", senderSubject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

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
        <div className="flex mt-4 justify-start pr-8">
          <Image
            src="/images/telephone.png"
            alt="Telephone"
            width={25}
            height={20}
            className="h-auto w-auto invert"
            priority={true}
          />
          <span className="pl-2"> : 🇹🇭 (+66)97-232-6055</span>
        </div>
        <div className="flex mt-4 justify-start pr-8">
          <Image
            src="/images/email.png"
            alt="Email"
            width={25}
            height={20}
            className="h-auto w-auto invert"
            priority={true}
          />
          <span className="pl-2">: nonthawat2554963@gmail.com</span>
        </div>
        <span className="mt-6 justify-start pr-8 ">Social Links</span>
        <div className="flex  justify-start pr-8">
          {SocialIcons.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 rounded-lg transition-all"
            >
              <div className="flex items-center justify-center mb-2 ">
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
                          width={30}
                          height={30}
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
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-5xl font-medium capitalize mb-8 text-center">
          Contact me
        </h2>
        <input
          className="h-10 px-4 rounded-lg border border-gray-500 focus:border-gray-300 transition-all outline-none"
          name="senderName"
          type="text"
          required
          placeholder="ชื่อ"
          value={formData.senderName}
          onChange={handleChange}
        />

        <input
          className="h-10 px-4 rounded-lg border border-gray-500 focus:border-gray-300 transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          placeholder="name@example.com"
          value={formData.senderEmail}
          onChange={handleChange}
        />

        <input
          className="h-10 px-4 rounded-lg border border-gray-500 focus:border-gray-300 transition-all outline-none"
          name="senderSubject"
          type="text"
          required
          placeholder="เรื่อง..."
          value={formData.senderSubject}
          onChange={handleChange}
        />

        <textarea
          className="h-32 p-4 rounded-lg border border-gray-500 focus:border-gray-300 transition-all outline-none"
          name="message"
          required
          placeholder="พิมพ์ข้อความที่นี่..."
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={`mt-2 flex items-center justify-center gap-2 h-12 w-full text-white rounded-lg transition-all
            ${status === "loading" ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Submit"}
          <FaPaperPlane />
        </button>

        {status === "success" && <p className="text-green-600 text-center">ส่งอีเมลสำเร็จ ✅</p>}
        {status === "error" && <p className="text-red-600 text-center">เกิดข้อผิดพลาด ❌</p>}
      </form>
    </section>
  );
}
