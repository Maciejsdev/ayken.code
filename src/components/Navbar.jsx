import { useState, useEffect } from "react";
import Logo from "./Logo";
import { links } from "../data";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setShowNavbar(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${showNavbar ? "navbar block" : "navbar hidden"}`}>
      <div className="nav mx-auto max-w-9xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <Logo />
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a key={id} href={href}>
                <button className="capitalize text-lg tracking-wide text-emerald-300">
                  <span>{id}. </span>
                  <span className="text-slate-300 hover:text-emerald-300 duration-300">
                    {text}
                  </span>
                </button>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
