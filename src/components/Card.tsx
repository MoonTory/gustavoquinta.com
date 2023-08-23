import React from "react";
import { motion } from "framer-motion";

const Card = ({ children }: { children: JSX.Element[] }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.25 }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: 50, scale: 0.8 },
      }}
      className="w-full bg-dusty/75 backdrop-blur p-6 mb-6"
    >
      {children}
    </motion.div>
  );
};

export default Card;
