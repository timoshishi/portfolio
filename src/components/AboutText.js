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
  font-family: 'Rubik', sans-serif;
  color: ${({ theme }) => theme.contrast};
  font-size: 1.5rem;
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
`;
const AboutText = styled.p`
  font-weight: 300;
  font-family: sans-serif;
  margin-top: 1rem;
  color: ${({ theme }) => theme.contrast};
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

const AboutWords = (props) => {
  return (
    <AboutPara>
      <TextWrapper>
        <Header>hello, i'm tim. it's nice to meet you</Header>
        <AboutText>
          I am a software engineer who prefers spaces over tabs, vim over Emacs
          and clean, reusable code. I work in JavaScript, Node, TypeScript and a
          three piece suit. Before embarking on my journey as a Software
          Engineer I was a chef, business owner and peripatetic lover of local
          cuisine across the world. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops as an engineer one
          problem at a time.
        </AboutText>
      </TextWrapper>
    </AboutPara>
  );
};

AboutWords.propTypes = {};

export default AboutWords;
