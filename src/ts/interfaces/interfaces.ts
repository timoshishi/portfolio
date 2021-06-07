import { StyledComponent } from 'styled-components';
import React from 'react';

export interface IStyled {
  [key: string]: StyledComponent<React.ElementType<any>, any, {}, never>;
}

export interface ITheme {
  body: string;
  backgroundContrast: string;
  purp: string;
  contrast: string;
  contrastSecondary: string;
  color: string;
  colorSecondary?: string;
  fontPrimary: string;
  fontSecondary: string;
  fontFallback: string;
  background?: string;
  toggleBorder?: string;
}

export interface CardInfo {
  imgSrc: string;
  title: string;
  description: string;
  tech: { thumb: any; text: string }[];
}

export interface IProject {
  title: string;
  image: string;
  description: string;
  githubUrl: string;
  projectUrl?: string;
}
