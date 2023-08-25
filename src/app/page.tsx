'use client';
import Head from 'next/head';
import React from 'react';
import { Left, Right, Navbar, Sidebar, Progressbar } from '~/components';
import { Clouds, Stars, CelestialBody, Waves } from '~/components/effects';

export default function Home() {
  const [section, setSection] = React.useState('work');
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
      <Progressbar />
      <Sidebar section={section} />

      <main id="homescreen" className="flex-1 sm:pl-5 md:pl-10 pt-[64px]">
        <div className="h-screen p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2 overflow-y">
          <Left />
          <Right setSection={setSection} />
        </div>
      </main>
    </div>
  );
}
