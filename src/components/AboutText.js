import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../styles/mediaBreakpoints';

const AboutPara = styled.div`
  min-height: 50vh;
  width: 100vw;
  background-color: #7510f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.p`
  font-weight: 500;
  font-family: ${({ theme }) => `${theme.fontPrimary}, ${theme.fontFallback}`};
  color: #fafafa;
  font-size: 1.5rem;
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
`;
const AboutText = styled.p`
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
`;
const TextWrapper = styled.div`
  max-width: 90%;
  @media ${device.laptop} {
    max-width: 60%;
  }
`;

const AboutWords = ({ theme }) => {
  return (
    <AboutPara>
      <TextWrapper>
        <Header theme={theme}>hello, i'm tim. it's nice to meet you</Header>
        <AboutText theme={theme}>
          I am a software engineer who prefers spaces over tabs, vim over Emacs
          and clean, reusable code. I work in JavaScript, Node, TypeScript and a
          three piece suit. Before embarking on my journey as a Software
          Engineer I was a chef, business owner and peripatetic lover of local
          cuisine.
        </AboutText>
      </TextWrapper>
    </AboutPara>
  );
};

AboutWords.propTypes = { theme: PropTypes.object.isRequired };

export default AboutWords;
