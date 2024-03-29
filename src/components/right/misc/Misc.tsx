import React from 'react';
import { useInView } from 'react-intersection-observer';
import Contributions from './Contributions';
import Contact from './Contact';
import Tech from './Tech';

export default function Misc({ setSection }: { setSection: (...args: any[]) => void }) {
  const [ref, inView] = useInView({
    threshold: 0.3
  });

  React.useEffect(() => {
    inView && setSection('misc');
  }, [inView, setSection]);

  return (
    <section ref={ref} id="misc">
      <h2 className="font-bold text-3xl mb-2 text-brand">~ Misc</h2>

      <Contact />
      <Tech />
      <Contributions />
    </section>
  );
}
