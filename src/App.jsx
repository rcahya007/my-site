import React from "react";
import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import Collab from "./sections/Collab";
import ContactMe from "./sections/ContactMe";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section
        className="mx-auto flex h-screen max-w-screen-2xl items-center justify-center border border-black px-[16px] py-[40px] sm:p-20 xl:px-20 xl:pb-0 xl:pt-20"
        id="home"
      >
        <Hero />
      </section>
      <section
        className="flex h-screen items-center border border-black px-[16px] py-[40px] sm:p-20"
        id="about"
      >
        <AboutMe />
      </section>
      <section className="border border-black px-[16px] py-[60px] " id="skills">
        <Skills />
      </section>
      <section
        className="border border-black px-[16px] py-[80px] "
        id="eksperience"
      >
        <Experience />
      </section>
      <section
        className="border border-black px-[16px] py-[80px] "
        id="projects"
      >
        <Project />
      </section>
      <section className="border border-black px-[16px] py-[80px] " id="collab">
        <Collab />
      </section>
      <section
        className="flex h-screen items-center border border-black px-[16px] py-[40px]"
        id="contact"
      >
        <ContactMe />
      </section>
    </main>
  );
};

export default App;
