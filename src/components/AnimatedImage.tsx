import React from 'react';
import { motion, AnimationDefinition, useAnimation } from 'framer-motion';

type Props = {
  delay?: number;
  animation: AnimationDefinition;
};

export const AnimatedImage: React.FC<React.ImgHTMLAttributes<{}> & Props> = ({
  src,
  alt,
  style,
  className,
  animation
}) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start(animation);
  }, []);

  return (
    <motion.img src={src} alt={alt} animate={controls} style={style} className={className} />
  );
};
