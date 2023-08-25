'use client';
import React from 'react';
import { FaGoogle, FaGithubAlt, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { RESUME_FILENAME } from '~/constants';

import { ThemeSwitch } from '~/components/theme-switch';

export const Navbar = () => {
  const navigate = (url: string) => () => window.open(url, '_blank');

  const onResumeClick = () => {
    fetch(RESUME_FILENAME).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = RESUME_FILENAME;
        alink.click();
      });
    });
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 }
        }}
        className="transition-all duration-1000 bg-light-300/95 dark:bg-mixed-100/90 p-4 fixed w-full top-0 drop-shadow-xl z-50"
      >
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="handle text-black animate-floating cursor-pointer hover:pause hover:bg-brand mr-4 ">
              <FaGithubAlt onClick={navigate('https://github.com/MoonTory')} />
            </div>

            <div className="handle text-black mr-4 animate-floating-50 cursor-pointer hover:pause hover:bg-brand">
              <FaLinkedinIn onClick={navigate('https://www.linkedin.com/in/gustavo-quinta')} />
            </div>

            <div className="handle text-black animate-floating cursor-pointer hover:pause hover:bg-brand mr-4 ">
              <FaTwitter onClick={navigate('https://twitter.com/TheMoonTory')} />
            </div>

            <div className="handle text-black animate-floating cursor-pointer hover:pause hover:bg-brand mr-4 ">
              <a href="mailto:gustavoqnt40@gmail.com">
                <FaGoogle />
              </a>
            </div>

            <div className="animate-floating-200 hover:pause mr-4">
              <ThemeSwitch />
            </div>
          </div>

          <div>
            <button
              onClick={onResumeClick}
              className="px-6 h-12 uppercase font-semibold tracking-wider rounded-sm border-2 border-brand text-brand transition-all hover:text-black dark:hover:text-white hover:bg-brand"
            >
              Resume
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
