'use client';
import { useEffect, useState } from 'react';

export const useScrollParallax = (maxScroll = 12000, maxTranslate = -950, scaleFactor = 1) => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newY = (scrollY / maxScroll) * maxTranslate * scaleFactor;
      setY(newY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [maxScroll, maxTranslate, scaleFactor]);

  return { y };
};
