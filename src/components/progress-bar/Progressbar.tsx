import React from 'react';

import { useScroll, useSpring, motion } from 'framer-motion';

export const Progressbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </>
  );
};

export const MemoizedProgressbar = React.memo(Progressbar, () => true);
