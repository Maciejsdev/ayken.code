import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Links = () => {
  return (
    <div className="hidden fixed bottom-0 left-0 xl:flex flex-col items-center pl-2">
      <div className="grid gap-2 mb-4">
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
      <div className="h-32 border-r-2 border-emerald-300"></div>
    </div>
  );
};

export default Links;
