import Link from 'next/link';
import { Josefin_Sans } from 'next/font/google';
import { Typewriter } from '~/components/typewriter';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700']
});

const words1: string[] = [
  'the hallowed glyphs',
  'the sacred inscriptions',
  'the divine symbols',
  'the revered runes',
  'the sanctified scripts',
  'the enigmatic markings'
];
const words2: string[] = [
  'mystical practices',
  'esoteric rites',
  'arcane rituals',
  'secret ceremonies',
  'enigmatic procedures',
  'occult traditions'
];

export function Hero() {
  return (
    <div className="mb-6 sticky top-[7rem] mt-12 lg:mt-0">
      <div className="flex items-center space-x-6 py-6">
        <img
          src="/profile-pic.jpeg"
          width="256"
          height="256"
          className="flex-none rounded-full object-cover border-white border-2"
        />
        <div className="flex-auto">
          <h1
            style={josefin.style}
            className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black"
          >
            Hey, I&apos;m
            <br />
            Gustavo Quinta<span className="text-brand">.</span>
          </h1>
          <h2
            style={josefin.style}
            className="text-1xl lg:text-2xl tracking-widest text-brand align-bottom mt-8"
          >
            SOFTWARE ENGINEER
          </h2>
        </div>
      </div>
      <hr className="mb-2" />
      <p className="font-light leading-7">
        For countless moons, I've deciphered{' '}
        <Link href="#" className="text-brand font-bold hover:underline">
          <Typewriter words={words1} />
        </Link>{' '}
        and engaged in the{' '}
        <Link href="#" className="text-brand font-bold hover:underline">
          <Typewriter words={words2} />
        </Link>{' '}
        that energize the universe of the internet. While the web often mirrors sorcery, my
        expertise and perseverance equip me to craft almost anything
      </p>
    </div>
  );
}
