'use client';
import { useEffect, useRef } from 'react';

export const useScrollParallax = <T extends HTMLElement = HTMLElement>(
  maxScroll = 12000,
  maxTranslate = -950,
  scaleFactor = 1
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newY = (scrollY / maxScroll) * maxTranslate * scaleFactor;

      // Cancel any existing animation frame
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }

      // Request a new animation frame
      animationFrameId = requestAnimationFrame(() => {
        // Use ref to directly update the DOM element's style
        if (elementRef.current) {
          elementRef.current.style.transform = `translateY(${newY}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [maxScroll, maxTranslate, scaleFactor]);

  return elementRef;
};
