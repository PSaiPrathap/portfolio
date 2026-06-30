import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Internship />
      <Certifications />
      <Languages />
      <Contact />
      <Footer />
    </>
  );
}

export default App;