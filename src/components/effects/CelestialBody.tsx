// import React, { useContext } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { ThemeContext } from '~/context';

// function ImageComponentMemo({ dark, delay = 0 }: { dark: boolean; delay: number }) {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 12000], [0, -750]);

//   const key = dark ? 'moon' : 'sun';
//   const src = dark ? '/images/moon.png' : '/images/sun.png';

//   return (
//     <>
//       <motion.img
//         key={key}
//         src={src}
//         style={{ y }}
//         exit={{ opacity: 0 }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           opacity: {
//             delay,
//             duration: 1,
//             ease: 'easeInOut'
//           }
//         }}
//         className="absolute inset-0 w-full h-full"
//       />
//     </>
//   );
// }

// const ImageComponent = React.memo(ImageComponentMemo, () => {
//   return true;
// });

// export const MoonSun = () => {
//   const { dark } = useContext(ThemeContext);

//   return (
//     <div className="w-[350px] h-[350px] rounded-full fixed top-[80vh] right-[calc(50%_-_25px)] z-0">
//       {dark ? (
//         <AnimatePresence mode="wait">
//           <ImageComponent dark={dark} delay={0.1} />
//         </AnimatePresence>
//       ) : (
//         <AnimatePresence mode="wait">
//           <ImageComponent dark={dark} delay={0.2} />
//         </AnimatePresence>
//       )}
//     </div>
//   );
// };

import React, { useContext } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from '~/context';

function CelestialImage({ dark, delay = 0 }: { dark: boolean; delay: number }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 12000], [0, -750]);

  const key = dark ? 'moon' : 'sun';
  const src = dark ? '/images/moon.png' : '/images/sun.png';

  return (
    <motion.img
      key={key}
      src={src}
      style={{ y }}
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
      className="absolute inset-0 w-full h-full"
    />
  );
}

const MemoizedCelestialImage = React.memo(CelestialImage, (prevProps, nextProps) => {
  return prevProps.dark === nextProps.dark;
});

export const CelestialBody = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="w-[350px] h-[350px] rounded-full fixed top-[75vh] right-[calc(50%_-_25px)] z-0">
      <AnimatePresence mode="wait">
        <MemoizedCelestialImage dark={dark} delay={0.1} />
      </AnimatePresence>
    </div>
  );
};
