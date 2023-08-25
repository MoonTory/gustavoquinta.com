import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ThemeContext } from '~/context';

const Card: React.FC<{} & React.PropsWithChildren> = ({ children }) => {
  const controls = useAnimation();
  const { dark } = React.useContext(ThemeContext);

  React.useEffect(() => {
    if (dark) controls.start('dark');
    else controls.start('light');
  }, [dark]);

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
      className=""
    >
      <motion.div
        className="w-full backdrop-blur p-6 mb-6 rounded-sm"
        animate={controls}
        variants={{
          light: { backgroundColor: 'rgb(225 229 231 / 0.9)' },
          dark: { backgroundColor: 'rgb(47 53 55 / 0.75)' }
        }}
        transition={{
          backgroundColor: {
            duration: 1
          }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Card;
