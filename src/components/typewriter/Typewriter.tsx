import React from 'react';
import { colors } from '~/utils';
import { Cursor } from './Cursor';
import { useTypewriter } from './useTypewriter.effect';

type Props = {
  words: string[];
  cursorColor?: string;
};

export const Typewriter: React.FC<Props> = ({
  words,
  cursorColor = colors.brand as string
}) => {
  const [text] = useTypewriter({
    words,
    loop: 0,
    delaySpeed: 7500
  });

  return (
    <>
      {text}
      <Cursor cursorColor={cursorColor} />
    </>
  );
};
