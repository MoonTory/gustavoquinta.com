import React from "react";
import { motion, useAnimation, AnimationDefinition } from "framer-motion";

type Props = {
  delay?: number;
} & React.PropsWithChildren;

export const FloatingIcon: React.FC<Props> = ({ children, delay = 0 }) => {
  const duration = 3;
  const controls = useAnimation();
  const animation: AnimationDefinition = {
    y: ["2px", "-1px", "2px"],
    transition: {
      repeat: Infinity,
      duration,
      times: [0, 0.5, 1],
      ease: "easeInOut",
      delay: delay,
      damping: 500,
      bounce: 20,
    },
  };

  const handleHoverStart = () => {
    controls.stop();
  };

  const handleHoverEnd = () => {
    controls.start({
      ...animation,
      transition: { ...animation.transition, delay: 0 },
    } as any);
  };

  React.useEffect(() => {
    controls.start(animation);
  }, []);

  return (
    <motion.div
      // initial={{ y: "0px" }}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
        {children}
      </div>
    </motion.div>
  );
};
