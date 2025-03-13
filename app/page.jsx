import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StackSkills from "./components/StackSkills";

export default function Page() {
  return (
    <main>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <StackSkills />
        {/* <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}