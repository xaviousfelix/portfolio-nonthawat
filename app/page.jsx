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
    <main className="flex min-h-screen flex-col sm-col-span-12" data-theme="dark" >
      <div>
        <Header />
        <div className="container mt-24 mx-auto px-12 py-4 sm:mt-32 sm:px-6" suppressHydrationWarning>
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
