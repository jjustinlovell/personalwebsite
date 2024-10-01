import GridBackGround from "../components/GridBackGround";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export default function Content() {
  return (
    <section className="relative w-full font-poppins">
      <GridBackGround />
      <div className="absolute inset-0 z-10 text-center uppercase pointer-events-none">
        <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-5xl lg:text-5xl">
          SKILLS
        </h1>
        <div className="flex flex-wrap justify-center w-2/3 mx-auto mt-24 gap-28">
          <motion.div
            className="pointer-events-auto"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring" }}
          >
            <FontAwesomeIcon
              icon={faHtml5}
              size="lg"
              color="darkorange"
              className="text-7xl md:text-[110px]"
            />
          </motion.div>

          <motion.div
            className="pointer-events-auto"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring" }}
          >
            <FontAwesomeIcon
              icon={faCss3}
              size="10x"
              color="blue"
              className="text-7xl md:text-[110px]"
            />
          </motion.div>
          <motion.div
            className="pointer-events-auto"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring" }}
          >
            <FontAwesomeIcon
              icon={faJs}
              size="10x"
              color="yellow"
              className="text-7xl md:text-[110px]"
            />
          </motion.div>
          <motion.div
            className="pointer-events-auto"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring" }}
          >
            <FontAwesomeIcon
              icon={faReact}
              size="10x"
              color="#61dbfb"
              className="text-7xl md:text-[110px]"
            />
          </motion.div>
          <motion.div
            className="pointer-events-auto"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring" }}
          >
            <SiTailwindcss
              className="text-7xl md:text-[160px] lg:text-[110px]"
              color="#06B6D4"
            />
          </motion.div>
          <motion.div
            className="pointer-events-auto"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring" }}
          >
            <FontAwesomeIcon
              icon={faNode}
              size="10x"
              color="white"
              className="text-7xl md:text-[110px]"
            />
          </motion.div>
          <motion.div
            className="pointer-events-auto"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring" }}
          >
            <SiExpress className="text-7xl md:text-[110px]" color="white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
