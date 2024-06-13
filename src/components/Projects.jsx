import { useState } from "react";
import { projects } from "../data";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(visibleProjects + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects(Math.max(visibleProjects - 3, 3)); // Ensure minimum of 3 projects shown
  };

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
      <div className="text-center mt-4">
        {visibleProjects > 3 && (
          <button
            className="bg-slate-800 text-white px-6 py-3 rounded-md mr-4 transition duration-300 ease-in-out transform hover:scale-105 hover:text-emerald-300"
            onClick={showLessProjects}
          >
            Show Less
          </button>
        )}
        {visibleProjects < projects.length && (
          <button
            className="bg-slate-800 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-emerald-300"
            onClick={showMoreProjects}
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
