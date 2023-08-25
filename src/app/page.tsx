'use client';
import Head from 'next/head';
import { useState } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';

import { Left, Right, Navbar, Sidebar } from '~/components';
import { Clouds, Stars, CelestialBody, Waves } from '~/components/effects';

export default function Home() {
  const [section, setSection] = useState('work');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      <Head>
        <title>Gustavo Quinta | MoonTory</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio & Blog" />
      </Head>

      <Clouds />
      <Stars />
      <CelestialBody />
      <Waves />

      <Navbar />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Sidebar section={section} />

      <main id="homescreen" className="flex-1 sm:ml-5 md:ml-10 mt-[64px]">
        <div className="h-screen p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2">
          <Left />
          <Right setSection={setSection} />
        </div>
      </main>
    </div>
  );
}
