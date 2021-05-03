import React from 'react';
import styled, { keyframes } from 'styled-components';
import { avatar } from '../assets/images';
import Computer from './Computer';
const HeroWrapper = styled.section`
  position: relative;
  height: 100%;
  width: 80%;
  bottom: 0%;
  left: 10%;
`;

const Period = styled.span`
  color: ${({ isDarkTheme }) => (!isDarkTheme ? '#FF4500' : '#1a91da')};
`;
const IntroNameBox = styled.div`
  position: relative;
  left: 35%;
  top: 50%;
  z-index: 2;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 100%;
  min-width: 80%;
  z-index: 1;
`;
const Avatar = styled.img`
  z-index: 5;
  max-height: 20%;
  margin: 10%;
`;
const ComputerWrapper = styled.div`
  align-self: center;
  position: absolute;
  max-height: 40%;
  bottom: 5%;
`;
const Hero = ({ isDarkTheme, theme }) => {
  return (
    <HeroWrapper>
      <ImageContainer>
        <Avatar src={avatar} />
        <ComputerWrapper>
          <Computer path={theme.text} background={theme.contrast} />
        </ComputerWrapper>
      </ImageContainer>
    </HeroWrapper>
  );
};

export default Hero;
