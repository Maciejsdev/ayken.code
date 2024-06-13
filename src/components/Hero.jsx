import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider text-emerald-300">
            I'm Matt
          </h1>
          <p className="mt-4 text-3xl text-slate-300 capitalize tracking-wide">
            In the world of code, every line tells a story.
          </p>
          <p className="mt-2 text-lg text-slate-400  tracking-wide">
            As a junior frontend developer, I craft digital experiences that
            turn ideas into reality. With a passion for creativity and
            precision, I'm here to build connections through intuitive design
            and seamless functionality."
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-white duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-white duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-white duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
