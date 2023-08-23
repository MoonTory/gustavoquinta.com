import { Dispatch, SetStateAction, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '../Card';
import { useState } from 'react';

export default function Projects({
  setSection
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  const [vidOne, setVidOne] = useState(false);
  const [vidTwo, setVidTwo] = useState(false);
  const [vidThree, setVidThree] = useState(false);

  useEffect(() => {
    inView && setSection('projects');
  }, [inView, setSection]);

  const renderTags = (tech: string[]) => {
    return (
      <div className="flex flex-wrap items-center justify-start -mb-2">
        {tech.map((tag) => {
          return (
            <span className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand" key={tag}>
              {tag}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section ref={ref} className="mb-16" id="projects">
      <h2 className="font-bold text-3xl mb-2">Projects</h2>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">First Project</h3>
          <div>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          Here I&apos;ll describe in a paragraph or so what my project is, what it does, and
          most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it
          for. If you worked on a team, say which parts that you built. I like to add a video
          of how it works like the one below so people don&apos;t have to sign up if they
          don&apos;t want to.
        </p>
        {renderTags([
          'iOS',
          'Android',
          'React (Next JS)',
          'React Native',
          'Node',
          'GCP',
          'Firebase',
          'Serverless'
        ])}
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={() => setVidOne((pv) => !pv)}
            className="bg-brand hover:bg-brand/90 transition-colors px-4 py-2 w-full rounded-sm text-white"
          >
            Video Demo
          </button>
          {vidOne && (
            <video preload="metadata" className="mt-4" width="300" height="auto" controls>
              <source src="/wips/preview.mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Second Project</h3>
        <p className="font-light leading-7 mb-6">
          Here I&apos;ll describe in a paragraph or so what my project is, what it does, and
          most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it
          for. If you worked on a team, say which parts that you built. I like to add a video
          of how it works like the one below so people don&apos;t have to sign up if they
          don&apos;t want to.
        </p>
        {renderTags([
          'React (CRA)',
          'Node',
          'Express',
          'Postgres',
          'Knex JS',
          'Heroku',
          'Web Sockets'
        ])}

        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={() => setVidTwo((pv) => !pv)}
            className="bg-brand hover:bg-brand/90 transition-colors px-4 py-2 w-full rounded-sm text-white"
          >
            Video Demo
          </button>
          {vidTwo && (
            <video preload="metadata" className="mt-4" width="100%" height="auto" controls>
              <source src="/wips/preview.mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Third project</h3>
        <p className="font-light leading-7 mb-6">
          Here I&apos;ll describe in a paragraph or so what my project is, what it does, and
          most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it
          for. If you worked on a team, say which parts that you built. I like to add a video
          of how it works like the one below so people don&apos;t have to sign up if they
          don&apos;t want to.
        </p>
        {renderTags(['React (Next JS)', 'TypeScript', 'Node', 'Express', 'Web Audio'])}
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={() => setVidThree((pv) => !pv)}
            className="bg-brand hover:bg-brand/90 transition-colors px-4 py-2 w-full rounded-sm text-white"
          >
            Video Demo
          </button>
          {vidThree && (
            <video preload="metadata" className="mt-4" width="100%" height="auto" controls>
              <source src="/wips/preview.mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Card>
    </section>
  );
}
