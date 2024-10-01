import React from "react";
import { motion } from "framer-motion";

export default function Name() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}>
    <motion.h1
      initial="initial"
      animate={{ opacity: 1, y: 0 }}
      whileHover="hovered"
      className="relative overflow-hidden text-3xl font-black tracking-normal uppercase pointer-events-auto md:text-7xl lg:text-9xl text-neutral-100"
    >
      <div>
        {"QWERTY UIOP".split("").map((l, i) => {
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
        {"QWERTY UIOP".split("").map((l, i) => {
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
    </motion.div>
  );
}
