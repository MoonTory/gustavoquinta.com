import { Education } from './Education';
import { Projects } from './Projects';
import Misc from './misc/Misc';
import { Work } from './Work';

export function Right({
  setSection
}: {
  setSection: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="grid-span-1">
      <Work setSection={setSection} />
      <Projects setSection={setSection} />
      <Education setSection={setSection} />
      <Misc setSection={setSection} />
    </div>
  );
}
