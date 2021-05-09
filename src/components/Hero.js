import React from 'react';
import styled from 'styled-components';
import { avatar } from '../assets/images';
import Computer from './Computer';
import IntroText from './IntroText';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-content: center;
  justify-content: flex-end;
  height: 90%;
  width: 80%;
  bottom: 0%;
  left: 10%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  min-width: 80%;
  z-index: 1;
`;
const Avatar = styled.img`
  z-index: 5;
  max-height: 30%;
  margin-bottom: 5%;
`;

const ComputerWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Hero = ({ isDarkTheme, theme }) => {
  return (
    <HeroWrapper>
      <ImageContainer>
        <IntroText theme={theme} />
        <Avatar src={avatar} />
        <ComputerWrapper>
          <Computer path={theme.text} background={theme.contrast} />
        </ComputerWrapper>
      </ImageContainer>
    </HeroWrapper>
  );
};

export default Hero;
