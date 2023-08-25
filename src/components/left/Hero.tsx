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
        <div className="flex-auto text-center sm:text-left">
          <h1
            style={josefin.style}
            className="uppercase tracking-widest text-5xl lg:text-6xl leading-tight lg:leading-tight font-thin"
          >
            Gustavo Quinta<span className="text-brand">.</span>
          </h1>
          <h2
            style={josefin.style}
            className="text-1xl lg:text-2xl tracking-widest text-brand align-bottom mt-4"
          >
            SOFTWARE ENGINEER
          </h2>
        </div>
      </div>
      <hr className="mb-2" />
      <p className="font-light leading-7">
        For countless moons, I've deciphered{' '}
        <span className="text-brand font-bold">
          <Typewriter words={words1} />
        </span>{' '}
        and engaged in the{' '}
        <span className="text-brand font-bold">
          <Typewriter words={words2} />
        </span>{' '}
        that energize the universe of the internet. While the web often mirrors sorcery, my
        expertise and perseverance equip me to craft almost anything
      </p>
    </div>
  );
}
