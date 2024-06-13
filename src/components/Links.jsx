import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Links = () => {
  return (
    <div className="hidden fixed bottom-0 left-0 xl:flex flex-col items-center pl-2">
      <div className="grid gap-2 mb-4">
        <a href="https://github.com/Maciejsdev">
          <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-white duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/maciej-s%C5%82awek-45a821304/">
          <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-white duration-300" />
        </a>
      </div>
      <div className="h-44 border-r-2 border-emerald-300"></div>
    </div>
  );
};

export default Links;
