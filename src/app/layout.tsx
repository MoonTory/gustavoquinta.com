"use client";
import "./globals.css";
import React from "react";
import { Recursive } from "next/font/google";
import { ThemeProvider, ThemeContext } from "~/context";

const recursive = Recursive({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ state }) => (
          <html
            lang="en"
            className={`${state.dark ? "dark " : ""} ${recursive.className}`}
          >
            <body className="bg-white dark:bg-dusty scroll-smooth text-white min-h-screen">
              {children}
            </body>
          </html>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
