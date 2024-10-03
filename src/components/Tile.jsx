import { motion } from "framer-motion";

export default function Tile() {
  return (
    <motion.div 
    whileHover={{
      zIndex : 1,
      backgroundColor : "#2dba4e"
    }}
    transition={{
      duration : 2,
      ease : "easeOut"
    }}
    className="aspect-square bg-neutral-950 border-neutral-900" />
  );
}