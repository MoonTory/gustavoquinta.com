import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '~/components/Card';
import { projects } from '~/constants';

export const Tag: React.FC<{ text: string }> = ({ text = 'Tag' }) => {
  return <span className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand">{text}</span>;
};

export const TechSection: React.FC<{ tech: string[] }> = ({ tech }) => {
  return (
    <div className="flex flex-wrap items-center justify-start -mb-2">
      {tech.map((tech) => {
        return <Tag key={tech} text={tech} />;
      })}
    </div>
  );
};

export interface Project {
  title: string;
  url?: string;
  tech: string[];
  content: string[];
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-2xl">{project.title}</h3>
        <div>
          {project.url ? (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.url ? project.url : '#'}
              className="text-brand font-semibold hover:underline"
            >
              Visit Website
            </a>
          ) : null}
        </div>
      </div>

      {
        project.content.map((content) => {
          return <p className={`font-light leading-7 mb-6`}>{content}</p>;
        }) as any
      }

      <TechSection tech={project.tech} />
    </Card>
  );
};

export const Projects: React.FC<{
  setSection: (...args: any[]) => void;
}> = ({ setSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    inView && setSection('projects');
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="projects">
      <h2 className="font-bold text-3xl mb-2 text-brand z-10">~ Projects</h2>

      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
};
