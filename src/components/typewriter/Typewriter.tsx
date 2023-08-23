import React from "react";
import { Cursor } from "./cursor";
import { useTypewriter } from "./useTypewriter.effect";

type Props = {
  words: string[];
  cursorColor?: string;
};

export const Typewriter: React.FC<Props> = ({
  words,
  cursorColor = "#1a1625",
}) => {
  const [text] = useTypewriter({
    words,
    loop: 0,
  });

  return (
    <>
      {text}
      <Cursor cursorColor={cursorColor} />
    </>
  );
};
