import React from 'react';
import { lightbulb, waterHead, waterDrops, pinkSVG } from '../assets/images';
import styled, { keyframes } from 'styled-components';
import { shake, growBush, growLeft, growName } from '../styles/animations';

const LightbulbWrapper = styled.div`
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
const IntroName = styled.p`
  position: absolute;
  font-family: 'Eraser';
  font-size: 4rem;
  white-space: nowrap;
  top: 55%;
  left: 5%;
  animation-name: ${growName};
  animation-duration: 1s;
  animation-direction: forwards;
`;

const PaintSwish = styled.img`
  position: absolute;
  top: 35%;
  left: 32%;
  opacity: 1;
  max-height: 40%;
  width: 55%;
  transform-origin: left;
  transform: scaleX(0);
  animation: ${growLeft} cubic-bezier(0.85, 0.15, 0.15, 0.86) 0.1s forwards;
  /* animation-duration: 0.3s; */
  animation-delay: 2s;
`;

const BulbHead = styled.img`
  position: absolute;
  left: 0;
  bottom: 5%;
  max-height: 89%;
  max-width: 70%;
  width: auto;
  z-index: 0;
`;
const BulbBush = styled.img`
  position: absolute;
  max-height: ${`${Math.random() * (100 - 35) + 35}%`};
  z-index: 1;
  /* animation-name: ${growBush};
  animation-duration: 5s;
  transform-origin: bottom; */
`;

const BulbDrops = styled.img`
  position: absolute;
  left: 90%;
  height: 30%;
  top: 33%;
  max-height: 55vh;
  z-index: 0;
  opacity: 0;
  animation-name: ${shake};
  animation-duration: 6s;
  /* animation-iteration-count: infinite; */
`;

const Hero = ({ isDarkTheme, theme }) => {
  return (
    <LightbulbWrapper>
      <BulbHead src={waterHead} alt='drawing of lightbulb head' />
      {/* <BulbDrops src={waterDrops} alt='drawing of water drops' /> */}
      <PaintSwish src={pinkSVG} />
      <IntroNameBox>
        <IntroName>
          Tim Forrest<Period isDarkTheme={isDarkTheme}>.</Period>
        </IntroName>
      </IntroNameBox>
    </LightbulbWrapper>
  );
};

export default Hero;
