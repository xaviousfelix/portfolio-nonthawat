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
    <main className="flex min-h-screen flex-col" data-theme="dark" >
      <div>
        <Header />
        <div className="container mt-24 mx-auto px-12 py-4">
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
