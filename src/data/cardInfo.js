import { designer, frontend, data } from '../assets/images/logos/header-logos';
import {
  bootstrap,
  css,
  html,
  materialUI,
  javascript,
  node,
  react,
  typescript,
  express,
  aws,
  docker,
  gcp,
  mongo,
  postgres,
  styled,
} from '../assets/images/logos';

export const cardInfo = [
  {
    imgSrc: designer,
    title: 'Design',
    description:
      'I value simple content structure, clean design patterns, and thoughtful interactions.',
    tech: [
      { thumb: css, text: 'CSS' },
      { thumb: html, text: 'HTML' },
      { thumb: styled, text: 'Styled Components' },
      { thumb: materialUI, text: 'Material-UI' },
      { thumb: bootstrap, text: 'Bootstrap' },
    ],
  },
  {
    imgSrc: frontend,
    title: 'Front End',
    description:
      'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
    tech: [
      { thumb: javascript, text: 'JavaScript' },
      { thumb: node, text: 'NodeJS' },
      { thumb: react, text: 'React' },
      { thumb: typescript, text: 'TypeScript' },
      { thumb: express, text: 'Express' },
    ],
  },
  {
    imgSrc: data,
    title: 'Back End',
    description:
      "Even the things you can't see are important. SQL, non-relational and serverless.",
    tech: [
      { thumb: postgres, text: 'PostgreSQL' },
      { thumb: mongo, text: 'MongoDB' },
      { thumb: aws, text: 'Amazon Web Services' },
      { thumb: docker, text: 'Docker' },
      { thumb: gcp, text: 'Google Cloud Platform' },
    ],
  },
];
