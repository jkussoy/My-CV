import logo from "./logo.svg";
import "./App.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  return (
    <div>
      <Intro />
      {/* ABOUT SECTION */}
      <About />
      {/* SKILLS SECTION */}
      <Skills />

      {/* TIMELINE SECTION */}
      <Timeline />
      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default App;
