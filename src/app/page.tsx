import React from 'react';
import { Metadata } from 'next';
import { Left, Right, Navbar, Sidebar, Progressbar, Starwheel } from '~/components';
import { Clouds, Stars, CelestialBody } from '~/components/effects';

export const metadata: Metadata = {
  title: 'Gustavo Quinta | MoonTory',
  description: 'Portfolio &  Blog',
  icons: ['/favicon.ico']
};

export default function Home() {
  return (
    <div>
      <Clouds />
      <Stars />
      <CelestialBody />
      <Starwheel />

      <Navbar />
      <Progressbar />
      <Sidebar />

      <main id="homescreen" className="flex-1 sm:pl-5 md:pl-10 pt-[64px]">
        <div className="h-screen p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2 overflow-y">
          <Left />
          <Right />
        </div>
      </main>
    </div>
  );
}
