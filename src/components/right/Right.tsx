import { Dispatch, SetStateAction, useContext } from 'react';
import { Education } from './Education';
import { Projects } from './Projects';
import Misc from './misc/Misc';
import { Work } from './Work';
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
