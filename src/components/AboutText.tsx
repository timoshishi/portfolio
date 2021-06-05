import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../styles/mediaBreakpoints';
import { IStyled, ITheme } from '../ts/interfaces/interfaces';

const S: IStyled = {
  AboutPara: styled.div`
    min-height: 50vh;
    width: 100vw;
    background-color: #7510f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Header: styled.h2`
    font-weight: 500;
    font-family: ${({ theme }) =>
      `${theme.fontPrimary}, ${theme.fontFallback}`};
    color: #fafafa;
    font-size: 1.5rem;
    @media ${device.laptop} {
      font-size: 2.5rem;
    }
  `,
  AboutText: styled.p`
    font-weight: 300;
    font-family: ${({ theme }) =>
      `${theme.fontSecondary}, ${theme.fontFallback}`};
    margin-top: 1rem;
    color: #fafafa;
    font-size: 1rem;
    margin-bottom: 1rem;
    @media ${device.laptop} {
      font-size: 1.5rem;
    }
  `,
  TextWrapper: styled.div`
    max-width: 90%;
    @media ${device.laptop} {
      max-width: 60%;
    }
  `,
};

interface IProps {
  theme: ITheme;
}
const AboutWords = ({ theme }: IProps) => {
  return (
    <S.AboutPara>
      <S.TextWrapper>
        <S.Header theme={theme}>hello, i'm tim. it's nice to meet you</S.Header>
        <S.AboutText theme={theme} id='about'>
          I am a software engineer who prefers spaces over tabs, Vim over Emacs
          and clean, reusable code. I work in JavaScript, Node, TypeScript and a
          three piece suit. Before embarking on my journey as a Software
          Engineer I was a chef, business owner and peripatetic lover of local
          cuisine.
        </S.AboutText>
      </S.TextWrapper>
    </S.AboutPara>
  );
};

AboutWords.propTypes = { theme: PropTypes.object.isRequired };

export default AboutWords;
