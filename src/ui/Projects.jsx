import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridBackGround from "../components/GridBackGround";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../components/LinkButton";

export default function Projects() {
  return (
    <section className="relative w-full font-poppins">
      <GridBackGround />
      <div className="absolute inset-0 z-10 w-[90%] mx-auto text-center pointer-events-none">
        <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-5xl lg:text-5xl">
          PROJECTS
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-3/4 h-auto p-6 mt-10 space-y-5 text-white border border-white pointer-events-auto border-1 md:w-1/2 bg-neutral-950">
            <div className="font-semibold text-left">
              <h1>Weather App</h1>
            </div>
            <img
              src="src\assets\images\weatherapp.png"
              alt=""
              className="transition-all duration-500 hover:scale-105"
            />
            <p className="text-left">
              A simple weather app that provides the user with an ability to
              search for the current weather of any city by just typing the name
              of a city. It retrieves data on the weather by connecting to the
              OpenWeatherMap API and displays the following information to the
              user: temperature, humidity, pressure, and condition.
            </p>
            <div className="gap-5 sm:flex">
              <LinkButton icon={faGithub} href={"https://github.com/jjustinlovell/Weather-App"}>Github</LinkButton>
              <LinkButton icon={faLink} href={"https://weather-app-jstn.vercel.app/"}>Live Website</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
