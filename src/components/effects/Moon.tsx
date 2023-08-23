import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function MoonMemo() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 12000], [0, -500]);

  return (
    <motion.div
      style={{ y }}
      className={`w-[300px] h-[300px] rounded-full bg-moon fixed top-[80vh] right-[calc(50%_-_275px)] z-0`}
    />
  );
}

export const Moon = React.memo(MoonMemo, () => {
  return true;
});
