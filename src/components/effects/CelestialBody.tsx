'use client';
import React, { useContext } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from '~/context';

import './celestial-body.css';

function CelestialImage({ dark, delay = 0 }: { dark: boolean; delay: number }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 12000], [0, -500]);

  const key = dark ? 'moon' : 'sun';
  const src = dark ? '/images/moon.png' : '/images/sun.png';

  if (!dark) return null;

  return (
    <motion.img
      key={key}
      src={src}
      style={{ y }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: {
          delay,
          duration: 1.2,
          ease: 'easeInOut'
        }
      }}
      className="celestial-image"
    />
  );
}

export const CelestialBody = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="w-[350px] h-[350px] rounded-full fixed top-[95vh] right-[calc(50%_-_25px)] z-0">
      <AnimatePresence mode="wait">
        <CelestialImage dark={dark} delay={0.1} />
      </AnimatePresence>
    </div>
  );
};
