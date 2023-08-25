import { Dispatch, SetStateAction, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '~/components/Card';
import { education } from '~/constants';

export interface Education {
  school: string;
  url?: string;
  content: string[];
}

export const EducationCard: React.FC<{ education: Education }> = ({ education }) => {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">{education.school}</h3>

      {
        education.content.map((content, idx) => (
          <p key={idx} className="font-light leading-7 mb-6">
            {content}
          </p>
        )) as any
      }

      <div className="mt-6">
        <a
          target="_blank"
          rel="noreferrer"
          href={education.url ? education.url : '#'}
          className="text-brand text-sm underline"
        >
          Website
        </a>
      </div>
    </Card>
  );
};

type Props = {
  setSection: (...args: any[]) => void;
};

export const Education: React.FC<Props> = ({ setSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    inView && setSection('education');
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="education">
      <h2 className="font-bold text-3xl mb-2 text-brand z-80">~ Education</h2>

      {education.map((education, idx) => (
        <EducationCard key={idx} education={education} />
      ))}
    </section>
  );
};
