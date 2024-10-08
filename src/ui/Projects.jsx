import GridBackGround from "../components/GridBackGround";
import ProjectShowcase from "../components/ProjectShowcase";
import { ProjectData } from "../data/ProjectData";
import { useState } from "react";

export default function Projects() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative w-full font-poppins">
      <GridBackGround />
      <div className="absolute inset-0 z-10 w-full mx-auto text-center pointer-events-none">
        <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-5xl lg:text-5xl">
          PROJECTS
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {ProjectData.map((project, index) => (
            <ProjectShowcase
              key={index}
              title={project.title}
              description={project.description}
              imageLink={project.imageLink}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}

      
        </div>
      </div>
      <GridBackGround />
    </section>
  );
}
