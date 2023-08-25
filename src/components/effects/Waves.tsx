import React from 'react';
import { AnimationDefinition } from 'framer-motion';
import { AnimatedImage } from '~/components/AnimatedImage';

const AnimatedWave: React.FC<React.ImgHTMLAttributes<{}> & { delay?: number }> = ({
  src,
  alt,
  style,
  delay = 0,
  className
}) => {
  const animation: AnimationDefinition = {
    y: ['2px', '-3px', '2px'],
    x: ['13px', '-5px', '13px'],
    transition: {
      delay,
      bounce: 20,
      duration: 4,
      damping: 500,
      repeat: Infinity,
      ease: 'easeInOut',
      times: [0, 0.5, 1]
    }
  };

  return (
    <AnimatedImage
      src={src}
      alt={alt}
      style={style}
      animation={animation}
      className={className}
    />
  );
};

const MemoizedAnimatedWave = React.memo(AnimatedWave, () => true);

const AnimatedWavesMemo: React.FC<{} & React.PropsWithChildren> = () => {
  const waveSources = [
    '/svg/waves_blue_1.svg',
    '/svg/waves_blue_2.svg',
    '/svg/waves_blue_3.svg',
    '/svg/waves_blue_4.svg'
  ];

  return (
    <React.Fragment>
      {waveSources.map((src, idx) => (
        <MemoizedAnimatedWave
          key={idx}
          src={src}
          delay={idx * 1.33}
          className="fixed bottom-0 w-[100%] scaleup-200 sm:scaleup-115"
          alt="A flat image of waves in the horizon"
        />
      ))}
    </React.Fragment>
  );
};

export const Waves = React.memo(AnimatedWavesMemo, () => true);
