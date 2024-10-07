import GridBackGround from "../components/GridBackGround";
import { TechData } from "../data/TechData";
import TechIcon from "../components/TechIcon";

export default function Content() {
  return (
    <section className="relative w-full font-poppins">
      <GridBackGround />
      <div className="absolute inset-0 z-10 text-center uppercase pointer-events-none">
        <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-5xl lg:text-5xl">
          TECH
        </h1>
        <div className="flex flex-wrap justify-center w-3/4 mx-auto mt-24 md:w-2/3 w gap-28">
          {TechData.map((tech, index) => (
            <TechIcon
              key={index}
              icon={tech.icon}
              color={tech.color}
              isFontAwesome={tech.isFontAwesome}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
