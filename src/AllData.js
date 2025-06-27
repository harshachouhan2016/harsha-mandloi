import React, { useEffect } from "react";
import Projects from "./components/projects";
import SkillsSection from "./components/skills";
import ExperienceData from "./components/experience";
import HeroData from "./components/hero";
import EducationData from "./components/education";
import FooterData from "./components/footer";
import HeaderData from "./components/header";

function AllData() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const moveCursor = (e) => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="scroll-smooth text-slate-900 selection:text-orange-600 font-sans xs:bg-none main-bg ">
      <div className="cursor"></div>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
      {/* Sidebar Navigation */}
      <HeaderData />
      {/* Main Content */}
      <main className="md:pl-80 sm:pl-80 xs:px-8 xs:pt-0 w-full border-l border-orange-100 md:p-10">
        <HeroData />
        <SkillsSection />
        <Projects />
        <ExperienceData />
        <EducationData />
        <FooterData />
      </main>
    </div>
  );
}

export default AllData;
