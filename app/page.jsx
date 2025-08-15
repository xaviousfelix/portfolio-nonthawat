"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import StackSkills from "./components/Stackskills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full" data-theme="dark">
      <div>
        <Header />
        <div
          className="
        container
        mx-auto
        mt-20 px-4 py-4
        sm:mt-28 sm:px-6
        md:mt-32 md:px-12
      "
          suppressHydrationWarning
        >
          <HeroSection />
          <About />
          <Project />
          <StackSkills />
          <Contact />
        </div>

        <Footer />
      </div>
    </main>
  );
}
