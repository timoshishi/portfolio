import {
  coverLetter,
  // productDetail,
  pupper,
  // twiddler,
} from '../assets/images/projects';
import twiddler from './twiddler.png';
import productDetail from './productDetail.png';
export const projectInfo = [
  {
    title: 'Pupper',
    image: pupper,
    description: 'Social media app to connect humans and puppies',
    githubUrl: 'https://github.com/timoshishi/pupper',
    projectUrl: 'https://timoshishi-puppr.herokuapp.com/',
  },
  {
    title: 'Write My Cover Letter',
    image: coverLetter,
    description: 'Global npm package to automate cover letter writing',
    githubUrl: 'https://github.com/timoshishi/write-my-cover-letter',
  },
  {
    title: 'Twiddler',
    image: twiddler,
    description: 'Front end clone of Twitter in dark mode',
    githubUrl: 'https://github.com/timoshishi/twiddler',
  },
  {
    title: 'E-commerce Store',
    image: productDetail,
    description: 'E-commerce store front end interacting with a headless API',
    githubUrl: 'https://github.com/theUndefinedTeam/product-detail',
  },
];
