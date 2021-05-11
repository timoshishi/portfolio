import {
  designer,
  frontend,
  data,
  cloudData,
} from './assets/images/logos/header-logos';
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
  github,
  jest,
  jira,
  npm,
  webpack,
} from './assets/images/logos';

export const cardInfo = [
  {
    imgSrc: designer,
    title: 'Design',
    tech: [
      { thumb: css, text: 'CSS' },
      { thumb: html, text: 'HTML' },
      { thumb: materialUI, text: 'Material-UI' },
      { thumb: bootstrap, text: 'Bootstrap' },
      { thumb: styled, text: 'Styled Components' },
    ],
  },
  {
    imgSrc: frontend,
    title: 'Front End',
    tech: [
      { thumb: javascript, text: 'JavaScript' },
      { thumb: react, text: 'React' },
      { thumb: typescript, text: 'TypeScript' },
      { thumb: node, text: 'NodeJS' },
      { thumb: express, text: 'Express' },
    ],
  },
  {
    imgSrc: data,
    title: 'Back End & Tooling',
    tech: [
      { thumb: postgres, text: 'PostgreSQL' },
      { thumb: mongo, text: 'MongoDB' },
      { thumb: docker, text: 'Docker' },
      { thumb: aws, text: 'Amazon Web Services' },
      { thumb: gcp, text: 'Google Cloud Platform' },
    ],
  },
];
