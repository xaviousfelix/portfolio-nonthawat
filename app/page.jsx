"use client";

import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import StackSkills from "./components/StackSkills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // จำลองการโหลดข้อมูล (ให้แสดงผล Loading 2 วินาที)
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);


  return (
    <main className="flex min-h-screen flex-col" data-theme="business">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
      ) : (
        <div className="container mt-24 mx-auto px-12 py-4 relative">
          <HeroSection />
          <StackSkills />
          <Contact />
        </div>
      )}
      <Footer />
    </main>
  );
}