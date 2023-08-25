'use client';
import React from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useIsMobile } from '~/utils';
import { AppContext } from '~/context';

export const SideLink: React.FC<{
  text: string;
  inView: boolean;
}> = ({ text, inView }) => {
  const controls = useAnimation();
  const [selected, setSelected] = React.useState(false);

  const animation: Variants = {
    selected: {
      backgroundColor: 'bg-brand',
      height: '32px',
      transition: {
        type: 'spring',
        stiffness: 150,
        duration: 1
      }
    },
    idle: {
      backgroundColor: 'bg-white',
      height: '16px'
    }
  };

  const onMouseEnter = () => {
    setSelected(true);
    controls.start('selected');
  };

  const onMouseLeave = () => {
    setSelected(false);
    controls.start('idle');
  };

  const navigate = () => {
    setSelected(true);
    controls.start('selected');
    const el = document.getElementById(text.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (inView) controls.start('selected');
    else controls.start('idle');
  }, [selected, inView]);

  return (
    <div
      onClick={navigate}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ writingMode: 'vertical-rl' }}
      className="pt-4 pb-4 ml-1 mr-2 cursor-pointer"
    >
      <motion.div
        initial="idle"
        animate={controls}
        variants={animation}
        className={`w-[1px] h-[16px] transition-colors ${
          selected || inView ? 'bg-brand' : 'bg-black dark:bg-white'
        }`}
      />
      <div
        className={`transition-colors ${
          selected || inView ? 'text-brand' : 'text-black dark:text-white'
        }`}
      >
        {text.toUpperCase()}
      </div>
    </div>
  );
};

export const Sidebar: React.FC<{}> = () => {
  const controls = useAnimation();
  const { isMobile } = useIsMobile();
  const { section } = React.useContext(AppContext);
  const links = ['work', 'projects', 'education', 'misc'];

  const animations: Variants = {
    hidden: {
      width: '0rem'
    },
    visible: {
      width: '2.5rem',
      transition: {
        damping: 40
      }
    }
  };

  React.useEffect(() => {
    if (isMobile) controls.start('hidden');
    else controls.start('visible');
  }, [isMobile]);

  return (
    <motion.aside
      initial="hidden"
      animate={controls}
      variants={animations}
      className="transition-all duration-1000 flex justify-between bg-light-300 dark:bg-mixed-100 text-white shadow-xl min-h-screen overflow-hidden w-12 fixed top-[80px] left-0 z-10"
    >
      <div>
        {links.map((link, idx) => (
          <SideLink key={idx} text={link} inView={section === link} />
        ))}
      </div>
    </motion.aside>
  );
};
