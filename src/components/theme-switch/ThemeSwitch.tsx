import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import { ThemeContext } from '~/context';

import './switch.scss';

export const ThemeSwitch = () => {
  const { toggle, dark } = useContext(ThemeContext);

  return (
    <motion.div layout className="handle cursor-pointer hover:bg-brand" onClick={toggle}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.i
          className={`text-black z-50`}
          key={dark ? 'moon' : 'sun'}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {dark ? <FaSun /> : <FaMoon />}
        </motion.i>
      </AnimatePresence>
    </motion.div>
  );
};
