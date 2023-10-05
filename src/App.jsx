import React from "react";
import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="px-[16px] py-[40px] border border-black">
        <Hero />
      </section>
      <section className="px-[16px] py-[40px] border border-black">
        <AboutMe />
      </section>
      <section className="px-[16px] py-[40px] border border-black">
        <Skills />
      </section>
    </main>
  );
};

export default App;
