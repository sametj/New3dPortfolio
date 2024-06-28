import React from "react";
import { motion } from "framer-motion";
import splitStringUsingRegex from "./splitStringUsingRegex";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const AnimatedText = ({ text }) => {
  const characters = splitStringUsingRegex(text);

  return (
    <motion.span
      transition={{ staggerChildren: 0.05 }}
      initial="hidden"
      whileInView="reveal"
      viewport={{ once: true }}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          transition={{ duration: 0.5 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
