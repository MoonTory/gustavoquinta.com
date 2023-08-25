import { Dispatch, SetStateAction, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { experience } from '~/constants';
import Card from '../Card';

export interface WorkExperience {
  position: string;
  company: string;
  type: 'full-time' | 'part-time';
  location: string;
  content: string[];
  startDate: string;
  endDate: string;
}

export const WorkCard: React.FC<{ work: WorkExperience }> = ({ work }) => {
  return (
    <Card>
      <h3 className="font-bold text-2xl">{work.position}</h3>

      <p className="font-light text-black/80 dark:text-white/80">
        <a href="#" rel="noreferrer" className="font-bold text-brand hover:underline">
          {work.company}
        </a>{' '}
        • {work.type} • {work.startDate} - {work.endDate}
      </p>

      <p className="font-light mb-4 text-black/80 dark:text-white/80">{work.location}</p>

      {
        work.content.map((content, idx, arr) => (
          <p className={`font-light leading-7 ${idx !== arr.length - 1 ? 'mb-4' : ''}`}>
            {content}
          </p>
        )) as any
      }
    </Card>
  );
};

type Props = {
  setSection: (...args: any[]) => void;
};

export const Work: React.FC<Props> = ({ setSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    inView && setSection('work');
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="work">
      <h2 className="font-bold text-3xl mb-2 text-brand z-10">~ Work</h2>
      {experience.map((work, idx) => (
        <WorkCard key={idx} work={work} />
      ))}
    </section>
  );
};
