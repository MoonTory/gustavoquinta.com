'use client';
import React from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';
import { useIsMobile } from '~/utils';

export const Progressbar = () => {
  const { isMobile } = useIsMobile();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: isMobile ? undefined : scaleX }} />
    </>
  );
};

export const MemoizedProgressbar = React.memo(Progressbar, () => true);
