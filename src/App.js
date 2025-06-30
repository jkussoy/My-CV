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
      <About />
      <Skills />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
