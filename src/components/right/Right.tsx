'use client';
import { useContext } from 'react';
import { Work } from './Work';
import Misc from './misc/Misc';
import { Projects } from './Projects';
import { Education } from './Education';
import { AppContext } from '~/context';

export function Right() {
  const { setSection } = useContext(AppContext);

  return (
    <div className="grid-span-1">
      <Work setSection={setSection} />
      <Projects setSection={setSection} />
      <Education setSection={setSection} />
      <Misc setSection={setSection} />
    </div>
  );
}
