import { delay, motion } from "framer-motion";
import Tile from "./components/Tile";
import TypewriterComponent from "typewriter-effect";

function App() {
  return (
    <main className="w-full relative">
      <section className="w-full grid grid-cols-20 h-screen overflow-y-clip">
        {Array.from(Array(20 * 12), (i) => (
          <Tile key={i} />
        ))}
      </section>
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mb-10 font-poppins">
        <motion.h1
          initial="initial"
          animate={{ opacity: 1, y: 0 }}
          whileHover="hovered"
          className="pointer-events-auto text-3xl md:text-7xl lg:text-9xl text-neutral-100 font-black uppercase tracking-normal overflow-hidden relative"
        >
          <div>
            {"Justin Lovell".split("").map((l, i) => {
              return (
                <motion.span
                  variants={{
                    initial: {
                      y: 0,
                    },
                    hovered: {
                      y: "-100%",
                    },
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    delay: 0.025 * i,
                  }}
                  className="inline-block"
                  key={i}
                >
                  {l === " " ? "\u00A0" : l}
                </motion.span>
              );
            })}
          </div>
          <div className="absolute inset-0">
            {"Justin Lovell".split("").map((l, i) => {
              return (
                <motion.span
                  variants={{
                    initial: {
                      y: "100%",
                    },
                    hovered: {
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    delay: 0.025 * i,
                  }}
                  className="inline-block"
                  key={i}
                >
                  {l === " " ? "\u00A0" : l}
                </motion.span>
              );
            })}
          </div>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-white text-xl tracking-wide font-semibold italic"
        >
          <TypewriterComponent
            options={{
              strings: ["Frontend Developer", "Student at BINUS"],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
      </div>
    </main>
  );
}

export default App;
