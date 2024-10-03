import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";

export default function Status() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="text-sm italic font-extrabold tracking-wide text-white md:text-xl"
    >
      <TypeWriter />
    </motion.div>
  );
}
