import React from "react";
import { motion } from "framer-motion";
import { FADE } from "../../lib/framerMotionData";

function MotionDiv({ children }) {
  return (
    <motion.div
      key={Math.random().toString()}
      initial="hidden"
      exit="exit"
      animate="visible"
      variants={FADE}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
