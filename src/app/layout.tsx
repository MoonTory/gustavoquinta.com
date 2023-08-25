'use client';
import './globals.scss';
import React from 'react';
import { Recursive } from 'next/font/google';
import { ThemeProvider, ThemeContext } from '~/context';

const recursive = Recursive({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ dark }) => (
          <html lang="en" className={`${dark ? 'dark ' : ''} ${recursive.className}`}>
            <body className="transition-colors duration-1000 bg-light-100 dark:bg-mixed-100 scroll-smooth text-black dark:text-white min-h-screen">
              {children}
            </body>
          </html>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
