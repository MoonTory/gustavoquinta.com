import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { Typewriter } from "~/components/typewriter";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const words: string[] = [
  "a cool thing that I built",
  "a cool thing that I optimized",
];

export function Hero() {
  return (
    <div className="mb-6 sticky top-[7rem] mt-12 lg:mt-0">
      <h1
        style={josefin.style}
        className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black"
      >
        Hey, I&apos;m
        <br />
        Gustavo Quinta<span className="text-brand">.</span>
      </h1>
      <hr className="mb-1" />
      <p className="font-light leading-7">
        I&apos;m a software engineer based in Orlando, Florida. Here&apos;s a
        sentence about{" "}
        <Link href="#" className="text-brand font-bold hover:underline">
          <Typewriter words={words} cursorColor="#524fe3" />
        </Link>{" "}
        and the people it helps. This is about the type of person I am and what
        I like to do in my free time so you know I&apos;m not a robot.
        Here&apos;s one last interesting sentence so that you remember me a bit
        better.
      </p>
    </div>
  );
}
