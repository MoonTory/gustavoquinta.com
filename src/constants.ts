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
    position: 'Senior Software Engineer',
    company: 'Dev.Pro',
    type: 'full-time',
    location: 'Remote',
    content: [
      `Develop and maintain software systems using Angular, Nodejs, Docker, and Typescript. I participated in code reviews, troubleshooting, and aimed to improve my skills in new technologies.`,
      `Collaborated with team members to deliver projects on time and contribute to the company's knowledge base by documenting best practices. Worked with clients such as Inveniam & Global Payments.`
    ],
    startDate: 'May 2022',
    endDate: 'NOW',
    url: 'https://dev.pro/'
  },
  {
    position: 'Senior Software Consultant',
    company: 'Oceans Code Experts',
    type: 'part-time',
    location: 'Remote',
    content: [
      `Provided expert-level guidance and support to clients in developing software solutions. Consulted with clients, designed and developed solutions, analyzed systems, and provided technical guidance to team members. I stayed up-to-date with the latest industry trends.`
    ],
    startDate: 'May 2022',
    endDate: 'Aug 2022',
    url: 'https://www.oceanscode.com/home'
  },
  {
    position: 'Software Engineer',
    company: 'BairesDev',
    type: 'full-time',
    location: 'Remote',
    content: [
      `I worked in the "Sta  Augmentation Program," collaborating closely with the client team at Blackspectacles on the development of their new product, Spectacular. As a full-stack engineer, I utilized various technologies, frameworks, and libraries such as Loopback4, Node.js, React.js, Material-UI, and PostgreSQL.`
    ],
    startDate: 'Feb 2021',
    endDate: 'June 2022',
    url: 'https://www.oceanscode.com/home'
  },
  {
    position: 'Cloud Architect',
    company: 'MusicPlayce',
    type: 'full-time',
    location: 'Goiania, Goias',
    content: [
      `I successfully planned, organized, and executed the migration of a monolithic Node.js application into a distributed serverless architecture. This involved harnessing the latest cloud technologies from AWS, including Cognito, Appsync, Elasticache, ECS on Fargate, Lambdas, SQS, SNS, and more.`,
      `Throughout the process, I provided oversight for the team's development and ensured e ective management of the project. By leveraging these cutting-edge technologies, I streamlined the application's performance, scalability, and security, resulting in improved e ciency and enhanced user experience.`
    ],
    startDate: 'Apr 2020',
    endDate: 'June 2021',
    url: 'https://musicplayce.com/'
  },
  {
    position: 'Software Engineer',
    company: 'TocTec Assessoria',
    type: 'full-time',
    location: 'Goiania, Goias',
    content: [
      `Developed SASS 'Infinity', a comprehensive platform in collaboration with Caiapó, a leading construction company, to e ectively manage large-scale construction projects such as highways and bridges. Utilized a powerful technology stack including Azure, .NET Core, MYSQL, and Angular 8.`
    ],
    startDate: 'Aug 2019',
    endDate: 'Apr 2020',
    url: 'https://toctec.eng.br/'
  },
  {
    position: 'Software Engineer',
    company: 'BigApp',
    type: 'full-time',
    location: 'Goiania, Goias',
    content: [
      `As a skilled full-stack engineer, I actively participated in customer meetings, providing valuable insights and conducting thorough requirement surveys. Additionally, I carried out various development tasks, ensuring meticulous planning and system design. My focus revolved around collaborating with FisioAvalia, leveraging my expertise to deliver high-quality solutions and contribute to their ongoing success.`
    ],
    startDate: 'Nov 2018',
    endDate: 'June 2019',
    url: 'https://play.google.com/store/apps/details?id=br.com.itechtc.fisio&hl=en_US&pli=1'
  },
  {
    position: 'Junior Software Engineer',
    company: 'BTCC Conexão Cliente',
    type: 'full-time',
    location: 'Goiania, Goias',
    content: [
      `I used Python for analyzing large datasets from spreadsheets, aiding in business operation optimization. I was trained in the use of proprietary tools for maintaining a sizable legacy code base, contributing to improved system performance.`,
      `This role enhanced my practical knowledge of software development within a professional, agile team environment, and fostered my skills in problem-solving and bug resolution.`
    ],
    startDate: 'June 2017',
    endDate: 'Oct 2018'
  }
];

export const projects: Project[] = [
  {
    title: 'CTCI',
    url: 'https://ctci.org.br/',
    content: [
      `Developed a dynamic web platform enabling streamlined club operations, encompassing functions such as generating digitally signed PDF statements, customer management, analytics, and a CRM for blog content. Implemented an advanced technology stack including Node.js, React.js, Nginx, Docker, and Google Cloud Platform.`
    ],
    tech: ['Docker', 'Nginx', 'React (Next JS)', 'Node', 'Express', '.NET', 'GCP']
  }
];
