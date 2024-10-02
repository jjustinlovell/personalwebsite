import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="fixed top-0 z-20 flex mx-5 my-10 space-x-8">
      <a
        href="https://www.linkedin.com/in/justin-lovell-a185b3284/"
        target="_blank"
        className="transition-all duration-300 text-slate-50 hover:text-slate-300"
      >
        <FontAwesomeIcon icon={faGithub} className="text-2xl md:text-4xl" />
      </a>
      <a
        href="https://github.com/jjustinlovell"
        target="_blank"
        className="transition-all duration-300 text-slate-50 hover:text-slate-300"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-2xl md:text-4xl"/>
      </a>
    </div>
  );
}
