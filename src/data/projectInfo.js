import {
  coverLetter,
  // productDetail,
  // pupper,
  // twiddler,
} from '../assets/images/projects';
import twiddler from './twiddler.png';
import pupper from './pupper.png';
import productDetail from './productDetail.png';
export const projectInfo = [
  {
    title: 'Pupper',
    image: pupper,
    description:
      'Full Stack Social media app to connect humans and puppies utilizing React, Express, Node.js PostgreSQL',
    githubUrl: 'https://github.com/timoshishi/pupper',
    projectUrl: 'https://timoshishi-puppr.herokuapp.com/',
  },
  {
    title: 'Write My Cover Letter',
    image: coverLetter,
    description:
      'Global npm package to automate cover letter writing utilizing Node.js, Inquirer and Chalk',
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
];
