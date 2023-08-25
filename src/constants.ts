import { WorkExperience } from '~/components/right/Work';
import { Education } from './components/right/Education';
import { Project } from './components/right/Projects';

export const RESUME_FILENAME = 'Gustavo_O_Quinta_CV_2023_ENG.pdf';

export const education: Education[] = [
  {
    school: 'PUC Goiás - Pontifícia Universidade Católica de Goiás',
    url: 'https://www.pucgoias.edu.br/',
    content: [
      `
      If you&apos;ve got more than one education to list, dope! Add it. Don&apos;t feel
      like you have to add your high school if you don&apos;t feel it&apos;s relevant, but
      it doesn&apos;t hurt if you&apos;ve got some other cool stuff (captain of a team etc)
      to show off.
      `
    ]
  }
];

export const experience: WorkExperience[] = [
  {
    position: 'Full Stack Software Developer',
    company: 'Company name',
    type: 'full-time',
    location: 'Orlando, Florida',
    content: [
      ` Here's a paragraph describing what I did at the company from a high level. I should state my role, the team that I was on, and what we built while I was there.`,
      'Here\'s a second paragraph which goes into further detail. It should try to use hard numbers. Some examples would be "improved conversion rate of landing pages by 23" or "improved API throughput by 3X".'
    ],
    startDate: 'Jan 2013',
    endDate: 'NOW'
  }
];

export const projects: Project[] = [
  {
    title: 'First Project',
    url: undefined,
    content: [
      `Here I&apos;ll describe in a paragraph or so what my project is, what it does, and
      most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it
      for. If you worked on a team, say which parts that you built. I like to add a video
      of how it works like the one below so people don&apos;t have to sign up if they
      don&apos;t want to.`
    ],
    tech: [
      'iOS',
      'Android',
      'React (Next JS)',
      'React Native',
      'Node',
      'GCP',
      'Firebase',
      'Serverless'
    ]
  },
  {
    title: 'Second Project',
    url: undefined,
    content: [
      `Here I&apos;ll describe in a paragraph or so what my project is, what it does, and
      most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it
      for. If you worked on a team, say which parts that you built. I like to add a video
      of how it works like the one below so people don&apos;t have to sign up if they
      don&apos;t want to.`
    ],
    tech: [
      'iOS',
      'Android',
      'React (Next JS)',
      'React Native',
      'Node',
      'GCP',
      'Firebase',
      'Serverless'
    ]
  },
  {
    title: 'Third Project',
    url: undefined,
    content: [
      `Here I&apos;ll describe in a paragraph or so what my project is, what it does, and
      most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it
      for. If you worked on a team, say which parts that you built. I like to add a video
      of how it works like the one below so people don&apos;t have to sign up if they
      don&apos;t want to.`
    ],
    tech: [
      'iOS',
      'Android',
      'React (Next JS)',
      'React Native',
      'Node',
      'GCP',
      'Firebase',
      'Serverless'
    ]
  }
];
