import { pupperLogo } from '../assets/images/logos';
import {
  coverLetter,
  sdc,
  twiddler,
  pupper,
  productDetail,
} from '../assets/images/projects';

export const projectInfo = [
  {
    title: 'Pupper',
    image: pupper,
    description:
      'Full Stack Social media app to connect humans and puppies utilizing React, Express, Node.js PostgreSQL',
    githubUrl: 'https://github.com/timoshishi/pupper',
    projectUrl: 'https://timoshishi-puppr.herokuapp.com/',
    projectThumb: pupperLogo,
  },
  {
    title: 'Write My Cover Letter',
    image: coverLetter,
    description:
      'Global npm script to automate cover letter writing using Node.js',
    githubUrl: 'https://github.com/timoshishi/write-my-cover-letter',
  },
  {
    title: 'Twiddler',
    image: twiddler,
    description:
      'Front end clone of Twitter in dark mode utilizing ES6 JavaScript, jQuery and good old CSS',
    githubUrl: 'https://github.com/timoshishi/twiddler',
  },
  {
    title: 'E-commerce',
    image: productDetail,
    description:
      'E-commerce store front end interacting with a headless API utilizing React, React Router, React Bootstrap and Context ',
    githubUrl: 'https://github.com/theUndefinedTeam/product-detail',
  },
  {
    title: 'System Design',
    image: sdc,
    description:
      "Horizontally scaled microservice's back end. Deployed on AWS EC2 utilizing Node, Nginx and PostgreSQL",
    githubUrl: 'https://github.com/timoshishi/backend-architecture',
  },
];
