import React from 'react';
import { motion } from 'framer-motion';

const Card: React.FC<{} & React.PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.25 }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: 50, scale: 0.8 }
      }}
      className="transition-colors duration-1000 w-full bg-light-200/90 dark:bg-mixed-200/75 backdrop-blur p-6 mb-6 rounded-sm"
    >
      {children}
    </motion.div>
  );
};

export default Card;
