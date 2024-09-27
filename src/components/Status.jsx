import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";

export default function Status() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="text-xl italic font-semibold tracking-wide text-white"
    >
      <TypeWriter />
    </motion.div>
  );
}
