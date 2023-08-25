import { WorkExperience } from '~/components/right/Work';
import { Education } from './components/right/Education';
import { Project } from './components/right/Projects';

export const RESUME_FILENAME = 'Gustavo_O_Quinta_CV_2023_ENG.pdf';

export const education: Education[] = [
  {
    school: 'PUC Goiás - Pontifícia Universidade Católica de Goiás',
    major: 'Computer Engineering - Bachelors',
    url: 'https://www.pucgoias.edu.br/',
    content: [
      `PUC Goiás - Pontifícia Universidade Católica de Goiás is a prestigious institution known for its commitment to academic excellence and the holistic development of its students. The Computer Engineering program there offers a rigorous curriculum, blending foundational engineering principles with practical applications. This educational environment not only fosters the understanding of intricate technological systems but also instills in its students the importance of innovation and ethical considerations in the world of computing.`,
      `During my time at PUC Goiás, I delved deep into the vast realms of computer engineering, uncovering a plethora of skills and knowledge. Among the many subjects that I explored, web development stood out as a particular passion. The dynamic nature of creating and optimizing websites, combined with the potential to craft user experiences, resonated with me. The university's resources, mentorship, and collaborative atmosphere were pivotal in nurturing this newfound interest, turning it from a simple curiosity into a fervent passion that would shape my professional trajectory.`
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
    title: 'Spectacular',
    url: 'https://spectacular.design/',
    content: [
      `At Blackspectacles, I was instrumental in the development of "Spectacular," a distinctive platform purpose-built for architects. Spectacular offers professionals a space to showcase their portfolios, raising their profile visibility in the industry. Additionally, it curates a selection of outstanding projects, offering inspiration and an opportunity for architects to have their work highlighted. Beyond being a repository of architectural prowess, Spectacular fosters global connections by enabling users to discover and network with architects and firms worldwide. The platform doesn't just stop at showcasing and networking; it also serves as a hub for job seekers and hiring entities, facilitating talent acquisition and career advancements.`,
      `Reflecting its core audience, Spectacular is thoughtfully designed "by architects for architects," ensuring every feature and interface element speaks to the needs and aspirations of its users.`,
      `During my role as a full-stack engineer in the "Staff Augmentation Program":`,
      `- Backend Development: I employed Loopback4 and Node.js to construct resilient server-side solutions, guaranteeing Spectacular's swift performance and ensuring data integrity and security.`,
      `- Frontend Development: Using React.js, I developed dynamic user interfaces, optimizing user interactions and ensuring a seamless navigation experience. Through Material-UI, I was able to imbue the platform with a contemporary, user-centric design, echoing the aesthetics of modern architectural trends.`,
      `- Database Management: My work with PostgreSQL ensured that the vast array of user data, portfolios, and job listings were managed efficiently, providing swift access and smooth user experiences.`,
      `My engagement with Blackspectacles on the Spectacular project was a profound journey, enabling me to merge my technical skills with a platform that epitomizes the fusion of design and technology.`
    ],
    tech: ['Docker', 'React (Next JS)', 'Node.js', 'Loopback 4', 'AWS', 'PostgreSQL']
  },
  {
    title: 'CTCI',
    url: 'https://ctci.org.br/',
    content: [
      `At CTCI, A Brazilian gun club specializing in firearms safety and handling training, I was entrusted with the critical task of modernizing and streamlining the club's operations. CTCI, beyond being a place of training, is an institution committed to ensuring that firearms enthusiasts receive certifications in strict accordance with Brazilian national laws.`,
      `To achieve this:`,
      `- Web Platform Development: I conceptualized and implemented a dynamic web platform tailored for club operations. This platform not only brought convenience but also ensured compliance. One of its pivotal features was the generation of digitally signed PDF statements, ensuring each certificate's authenticity and legal compliance. This was imperative, as these certificates are not just testimonials of training but are also bound by the stringent firearms laws in Brazil.`,
      `- Customer Relationship Management (CRM): Central to my contributions was the integration of a CRM system tailored for both member engagement and administrative efficiency. This tool provided the club with a comprehensive platform to manage member information, effortlessly view and edit details, and generate insightful analytics. Furthermore, it granted members the convenience of downloading their certifications directly. While member management was a primary focus, the CRM also incorporated features to share blog content, ensuring a holistic approach to member communication and education.`,
      `- Advanced Technology Stack: The backbone of these innovations was an advanced technology stack. I employed Node.js and React.js for seamless frontend and backend operations, Nginx for efficient web server functionalities, and Docker for containerization ensuring scalability and consistent environments. Additionally, leveraging the Google Cloud Platform made certain of the platform's robustness, scalability, and security.`,
      `- Collaboration with the Local Army: Recognizing the legal intricacies surrounding firearms certifications in Brazil, I collaborated closely with the local Army in Goiania. This partnership was crucial to standardize the digital signature on the PDF certificates, ensuring that they met the exact specifications required by the law and were deemed valid by the authorities.`,
      `Through this project at CTCI, I not only honed my technical skills but also deepened my appreciation for the intersection of technology, law, and community engagement, delivering a platform that upholds the club's prestige and commitment to safety.`
    ],
    tech: [
      'Docker',
      'Nginx',
      'React (Next JS)',
      'Node.js',
      'Express',
      '.NET',
      'MongoDB',
      'GCP'
    ]
  }
];
