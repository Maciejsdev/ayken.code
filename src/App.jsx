import { useEffect, useState } from "react";
import About from "./components/About";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default App;
