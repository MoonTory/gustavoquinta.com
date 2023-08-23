import React from 'react';
import { motion } from 'framer-motion';
import { FloatingIcon } from '~/components/FloatingIcon';

export const Navbar = () => {
  const navigate = (url: string) => () => window.open(url, '_blank');

  const onResumeClick = () => {
    // using Java Script method to get PDF file
    fetch('Gustavo_O_Quinta_CV_2023_ENG.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Gustavo_O_Quinta_CV_2023_ENG.pdf';
        alink.click();
      });
    });
  };

  return (
    <motion.nav
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.25 }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: -50, scale: 0.8 }
      }}
      className="bg-dusty/95 p-4 fixed w-full top-0 drop-shadow-xl z-50"
    >
      <div className="flex items-center justify-between">
        <div className="flex">
          <FloatingIcon>
            <img
              alt="github-svg"
              onClick={navigate('https://github.com/MoonTory')}
              src="/github.svg"
            />
          </FloatingIcon>

          <FloatingIcon delay={0.68}>
            <img
              alt="linkedin-svg"
              onClick={navigate('https://www.linkedin.com/in/gustavo-quinta')}
              src="/linkedin.svg"
            />
          </FloatingIcon>

          <FloatingIcon delay={1.03}>
            <img
              alt="twitter-svg"
              onClick={navigate('https://twitter.com/TheMoonTory')}
              src="/twitter.svg"
            />
          </FloatingIcon>

          <FloatingIcon delay={1.89}>
            <a href="mailto:gustavoqnt40@gmail.com">
              <img
                alt="google-svg"
                src="/google.svg"
                className="transition-opacity hover:opacity-70 cursor-pointer"
              />
            </a>
          </FloatingIcon>
        </div>

        <div>
          <button
            onClick={onResumeClick}
            className="px-6 h-12 uppercase font-semibold tracking-wider rounded-sm border-2 border-brand text-brand transition-all hover:text-black hover:bg-brand"
          >
            Resume
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
