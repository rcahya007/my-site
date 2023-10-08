import React from "react";
import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="flex h-screen items-center border border-black px-[16px] py-[40px]">
        <Hero />
      </section>
      <section className="flex h-screen items-center border border-black px-[16px] py-[40px] ">
        <AboutMe />
      </section>
      <section className="border border-black px-[16px] py-[40px] ">
        <Skills />
      </section>
      <section className="border border-black px-[16px] py-[40px] ">
        <Experience />
      </section>
      <section className="border border-black px-[16px] py-[40px] ">
        <Project />
      </section>
      <section className="border border-black px-[16px] py-[40px] ">
        <Contact />
      </section>
    </main>
  );
};

export default App;
