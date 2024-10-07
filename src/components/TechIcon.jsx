import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

export default function TechIcon({
  icon: IconComponent,
  color,
  isFontAwesome,
}) {
  return (
    <motion.div
      className="pointer-events-auto"
      whileHover={{
        scale: 1.1,
      }}
      transition={{ type: "spring" }}
    >
      {isFontAwesome ? (
        <FontAwesomeIcon
          icon={IconComponent}
          size="lg"
          color={color}
          className="text-3xl sm:text-5xl md:text-[110px]"
        />
      ) : (
        <IconComponent
          color={color}
          className="text-3xl sm:text-5xl md:text-[110px]"
        />
      )}
    </motion.div>
  );
}
