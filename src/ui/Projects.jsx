import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridBackGround from "../components/GridBackGround";
import ProjectShowcase from "../components/ProjectShowcase";
import { ProjectData } from "../data/ProjectData";
import { motion } from "framer-motion";
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
          {/* {ProjectData.map((project, index) => (
            <ProjectShowcase
              key={index}
              title={project.title}
              description={project.description}
              imageLink={project.imageLink}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))} */}
          <motion.div
            className="relative h-96 bg-no-repeat md:w-2/5 bg-cover bg-center pointer-events-auto bg-[url('src/assets/images/weatherapp.png')] bg-blur bg-slate-100"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
          >
            <motion.div
              initial={{ filter : "blur(0px)" }}
              animate={{ filter: hovered ? "blur(10px)" : "blur(0px)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 bg-[url('src/assets/images/weatherapp.png')] filter blur-xl bg-cover bg-center opacity-70"
            ></motion.div>

            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-black transition-all duration-500 scale-0 pointer-events-auto"
              initial={{ scale: 0 }}
              animate={{ scale: hovered ? 1 : 0 }}
              transition={{ duration: 0.1, ease: "easeIn" }}
            >
              <h1 className="mb-2 text-3xl font-bold">Weather App</h1>
              <a href="#" className="underline">
                Click Here
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <GridBackGround />
    </section>
  );
}
