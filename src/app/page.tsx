"use client";
import Head from "next/head";
import { useState } from "react";

import { Navbar } from "~/components";
import { Left } from "~/components/left";
import { Right } from "~/components/right";
import { Sidebar } from "~/components/sidebar/Sidebar";
import { Clouds, Moon, Stars, Waves } from "~/components/effects";

// const words: string[] = ["TypeScript", "Is", "Awesome"];

export default function Home() {
  const [section, setSection] = useState("work");
  return (
    <div>
      <Head>
        <title>MoonTory</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio & Blog" />
      </Head>

      <Moon />
      <Clouds />
      <Stars />
      <Waves />

      <Navbar />
      <Sidebar section={section} />

      <main id="homescreen" className="flex-1 ml-10 mt-[64px]">
        <div className="h-screen p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2">
          <Left />
          <Right setSection={setSection} />
        </div>
      </main>
    </div>
  );
}
