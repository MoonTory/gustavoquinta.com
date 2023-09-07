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

const workExperience = {
  position: 'Senior Software Consultant',
  company: 'Oceans Code Experts',
  type: 'part-time',
  location: 'Remote',
  content: [
    'As a Senior Software Consultant at Oceans Code Experts, I offered specialized guidance and support to a diverse set of clients seeking to develop or improve their software solutions. I was the go-to resource for not only evaluating existing systems but also designing new, scalable solutions tailored to specific business needs. My consultation activities spanned the gamut from initial meetings and requirement gathering to system design and architectural planning.',

    'One of the core aspects of my role involved providing actionable, technical advice to both clients and internal team members. My expertise influenced crucial decisions on technology stacks, system architecture, and best coding practices. I played an essential role in bridging the gap between business requirements and technical execution, offering actionable insights that enhanced project outcomes.',

    'To provide the best service, I maintained a strong commitment to staying current with the latest industry trends and technological advancements. This proactive approach to continued learning ensured that the advice I offered was both relevant and future-proof, giving our clients a competitive edge in their respective markets.'
  ],
  startDate: 'May 2022',
  endDate: 'Aug 2022',
  url: 'https://oceanscodeexperts.com/'
};

export const experience: WorkExperience[] = [
  // {
  //   position: 'Senior Software Engineer',
  //   company: 'Dev.Pro',
  //   type: 'full-time',
  //   location: 'Remote',
  //   content: [
  //     `Develop and maintain software systems using Angular, Nodejs, Docker, and Typescript. I participated in code reviews, troubleshooting, and aimed to improve my skills in new technologies.`,
  //     `Collaborated with team members to deliver projects on time and contribute to the company's knowledge base by documenting best practices. Worked with clients such as Inveniam & Global Payments.`
  //   ],
  //   startDate: 'May 2022',
  //   endDate: 'NOW',
  //   url: 'https://dev.pro/'
  // },
  {
    position: 'Senior Software Engineer',
    company: 'Dev.Pro',
    type: 'full-time',
    location: 'Remote',
    content: [
      "As a Senior Software Engineer, I have focused on developing and maintaining a range of software systems. My technology stack primarily consists of Angular, Node.js, Docker, and Typescript. My role isn't just restricted to coding; I actively engage in code reviews to maintain high coding standards and troubleshoot issues that arise during development cycles.",
      "Collaboration is a key part of my work ethic. I regularly work with team members to ensure that projects are completed on time and meet the client's requirements. I also contribute to the team's collective knowledge by documenting best practices, making sure that my learnings benefit not just me but the entire team.",
      "Over the course of my time at Dev.Pro, I've had the opportunity to work with notable clients such as Inveniam and Global Payments. Handling high-stakes projects for these clients has allowed me to stretch my technical skills and learn to manage client expectations effectively."
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
      'As a Senior Software Consultant at Oceans Code Experts, my role was multifaceted. I offered expert-level advice to our clients on developing tailored software solutions. This involved understanding the client’s specific challenges and needs before architecting a solution that aligned with their goals.',
      'Beyond consulting, my responsibilities also included hands-on design and development work. I engaged in system analysis to evaluate the existing infrastructure and identify areas for improvement, ensuring the delivered solutions were both robust and scalable.',
      'Keeping up with the latest industry trends was critical to providing high-value services. I continuously updated myself on new technologies and methodologies to offer current and effective guidance to both clients and team members.'
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
      'During my tenure as a Software Engineer at BairesDev, I was a key contributor to the "Staff Augmentation Program." I worked in close collaboration with the client team at Blackspectacles, focusing on the development of their new product named Spectacular. The partnership was not just about code but involved a deep understanding of the client’s needs to deliver a product that met their specifications.',
      'As a full-stack engineer, I wore multiple hats and covered a broad spectrum of tasks. I utilized a range of technologies, frameworks, and libraries that included Loopback4, Node.js, React.js, Material-UI, and PostgreSQL. My role involved everything from backend development to crafting intuitive user interfaces.',
      'My experience at BairesDev was a blend of technical depth and cross-functional collaboration. Working on Spectacular provided me with a comprehensive understanding of the software development life cycle, right from the ideation phase through to deployment.'
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
      'At MusicPlayce, one of my most significant responsibilities as a Cloud Architect was the migration of a monolithic Node.js application into a modern, distributed serverless architecture. The task required thorough planning, organization, and execution. I utilized a variety of AWS services, including but not limited to Cognito, Appsync, Elasticache, ECS on Fargate, Lambdas, SQS, and SNS.',
      'I took on a leadership role in overseeing the development efforts of the team and ensuring effective project management. My responsibilities extended beyond the technical aspects, as I was deeply involved in guiding the team through the migration process, providing them with the necessary training and insights.',
      'The migration was more than just a technical shift; it had a meaningful impact on the business. Leveraging these advanced cloud technologies helped us significantly improve the performance, scalability, and security of the application. This, in turn, resulted in a more efficient system and an enhanced user experience, fulfilling key business objectives.'
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
      "During my time at TocTec Assessoria, I was instrumental in the development of 'Infinity,' a SaaS platform designed to revolutionize the way large-scale construction projects are managed. This initiative was in close collaboration with Caiapó, a leading construction company. Together, we aimed to create a solution that would make the management of massive projects like highways and bridges more efficient and streamlined.",
      "In building 'Infinity,' my role was far-reaching, covering both back-end and front-end development tasks. I worked with a robust technology stack that included Azure for cloud computing, .NET Core for back-end services, MySQL for database management, and Angular 8 for front-end development.",
      "The experience afforded me a unique blend of technical challenges and client-facing interactions. 'Infinity' wasn't just about coding; it was about understanding the intricate requirements of the construction industry and tailoring the technology to meet those needs. The project was a testament to the power of collaborative software development to solve real-world challenges."
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
      'At BigApp, I embraced a holistic approach to software engineering, where my responsibilities stretched beyond mere coding. As a full-stack engineer, I actively engaged with customers during meetings to understand their needs, provide valuable technical insights, and conduct comprehensive requirement surveys. This helped me build solutions that were not only technically sound but also aligned with customer objectives.',
      'I was deeply involved in the planning and system design stages, ensuring that the architecture was robust and scalable. My day-to-day tasks included a mix of front-end and back-end development activities, all of which were guided by meticulous planning.',
      'A notable project during my tenure at BigApp was my collaboration with FisioAvalia. Leveraging my technical expertise, I contributed to delivering high-quality software solutions that significantly aided in their ongoing success. This project allowed me to blend my technical skills with a customer-centric approach, ensuring that the solutions we delivered met the client’s specific needs and expectations.'
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
      'As a Junior Software Engineer at BTCC Conexão Cliente, my primary responsibility involved using Python to analyze large datasets from spreadsheets. The goal was to extract actionable insights that could be used to optimize various business operations. I gained hands-on experience in data manipulation and analysis, which became a crucial part of the business decision-making process.',
      'In addition to data analysis, I was trained in maintaining a sizable legacy code base using proprietary tools. My contributions led to noticeable improvements in system performance, as I helped in refactoring and optimizing the code.',
      'Working at BTCC Conexão Cliente was an enriching experience that went beyond technical learning. Being a part of a professional, agile team allowed me to hone my problem-solving skills, especially in the areas of bug resolution and system improvement. The role served as an excellent foundation, helping me gain practical knowledge of software development in a fast-paced, collaborative environment.'
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
