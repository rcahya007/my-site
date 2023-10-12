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
        className="mx-auto flex h-screen max-w-screen-2xl items-center justify-center border border-black px-[16px] py-[40px] sm:p-20 xl:h-full xl:p-0"
        id="home"
      >
        <Hero />
      </section>
      <section
        className="flex h-screen items-center border border-black px-[16px] py-[40px] sm:p-20 xl:mx-auto xl:h-full xl:max-w-screen-2xl xl:p-0"
        id="about"
      >
        <AboutMe />
      </section>
      <section
        className="border border-black px-[16px] py-[80px] sm:flex sm:h-screen sm:items-center sm:p-20 xl:mx-auto xl:h-full xl:max-w-screen-2xl xl:p-0"
        id="skills"
      >
        <Skills />
      </section>
      <section
        className="h-screen border border-black px-[16px] py-20 sm:p-24 xl:mx-auto xl:h-full xl:max-w-screen-2xl xl:p-0"
        id="eksperience"
      >
        <Experience />
      </section>
      <section
        className="border border-black px-[16px] py-[80px] xl:mx-auto xl:h-full xl:max-w-screen-2xl xl:p-0"
        id="projects"
      >
        <Project />
      </section>
      <section
        className="border border-black px-[16px] py-[80px] xl:mx-auto xl:h-full xl:max-w-screen-2xl xl:p-0"
        id="collab"
      >
        <Collab />
      </section>
      <section
        className="flex h-screen items-center border border-black px-[16px] py-[40px] xl:mx-auto xl:h-full xl:max-w-screen-2xl xl:p-0"
        id="contact"
      >
        <ContactMe />
      </section>
    </main>
  );
};

export default App;
