import React from "react";
import Navbar from "../Components/Navbar";
import HomeSection from "../Components/HomeSection";
import TitlePage from "../Components/TitlePage";
import ProjectSection from "../Components/ProjectSection";
import TechnicalTools from "../Components/TechnicalTools";
import { Element } from "react-scroll";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      {/* Mobile Navbar */}
      <Navbar isMobile={true} />

      {/* Large Screen Navbar */}
      <Navbar isMobile={false} />

      <div className="flex w-full flex-col lg:flex-row justify-center gap-12 bg-black xl:px-40 lg:px-12 font-serif">
        {/* Left Side */}
        <div>
          <TitlePage />
        </div>

        {/* Right Side (Scrollable Content) */}
        <div
          id="scroll-container"
          className="lg:max-h-screen h-auto w-full flex flex-col gap-32 overflow-y-auto py-16 sm:h-auto hide-scrollbar"
        >
          <Element name="home">
            <HomeSection />
          </Element>
          <Element name="project">
            <ProjectSection />
          </Element>
          <Element name="tools">
            <TechnicalTools />
          </Element>
          <Element name="edit">
            <div>Edit Section</div>
          </Element>
        </div>
      </div>
    </>
  );
}

export default HomePage;