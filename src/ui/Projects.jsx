import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridBackGround from "../components/GridBackGround";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <section className="relative w-full font-poppins">
      <GridBackGround />
      <div className="absolute inset-0 z-10 w-[90%] mx-auto text-center pointer-events-none">
        <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-5xl lg:text-5xl">
          PROJECTS
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-1/2 h-auto p-6 mt-10 text-white rounded-md shadow-md pointer-events-auto md:w-1/3 bg-neutral-950 shadow-green-50">
            <img src="src\assets\images\weatherapp.png" alt="" />
            <h1 className="pt-3 text-xl">Weather App</h1>
            <p className="pt-3 text-justify">
              A simple weather app that provides the user with an ability to
              search for the current weather of any city by just typing the name
              of a city. It retrieves data on the weather by connecting to the
              OpenWeatherMap API and displays the following information to the
              user: temperature, humidity, pressure, and condition.
            </p>
            <div className="mt-7">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
          </div>
          <div className="w-1/2 h-auto p-6 mt-10 text-white rounded-md shadow-md pointer-events-auto md:w-1/3 bg-neutral-950 shadow-green-50">
            <img src="src\assets\images\weatherapp.png" alt="" />
            <h1 className="pt-3 text-xl">Weather App</h1>
            <p className="pt-3 text-justify">
              A simple weather app that provides the user with an ability to
              search for the current weather of any city by just typing the name
              of a city. It retrieves data on the weather by connecting to the
              OpenWeatherMap API and displays the following information to the
              user: temperature, humidity, pressure, and condition.
            </p>
            <div className="mt-7">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
