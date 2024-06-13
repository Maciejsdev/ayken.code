import About from "./components/About";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Links />
      <Email />
      <Footer />
    </>
  );
};
export default App;
