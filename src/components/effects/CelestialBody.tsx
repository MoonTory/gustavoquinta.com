'use client';
import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '~/context';

import './celestial-body.css';
import { useScrollParallax } from '~/utils';

function CelestialImage({ dark, delay = 0 }: { dark: boolean; delay: number }) {
  const ref = useScrollParallax<HTMLImageElement>(20000);

  const key = dark ? 'moon' : 'sun';
  const src = dark ? '/images/moon.png' : '/images/sun.png';

  if (!dark) return null;

  return (
    <motion.img
      ref={ref}
      key={key}
      src={src}
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

const MemoizedCelestialImage = React.memo(CelestialImage, (prevProps, nextProps) => {
  return prevProps.dark === nextProps.dark;
});

export const CelestialBody = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="w-[350px] h-[350px] rounded-full fixed top-[95vh] right-[calc(50%_-_25px)] z-0">
      <AnimatePresence mode="wait">
        <MemoizedCelestialImage dark={dark} delay={0.1} />
      </AnimatePresence>
    </div>
  );
};
