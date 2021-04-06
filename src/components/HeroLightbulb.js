import React from 'react';
import IntroWords from './IntroWords';
import lightbulb from '../assets/images/lightbulb.png';
import waterHead from '../assets/images/waterhead_2.png';
import bulbDrops from '../assets/images/waterdrops.png';
import styled, { keyframes } from 'styled-components';

const growBush = keyframes`
0% {
  transform: scale(0.25)
}
25% {
  transform: scale(0.25)
}
100% {
  transform: scale(1)
}
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); opacity: 1 }
  10% { transform: translate(-1px, -2px) rotate(-1deg); opacity: 1}
  20% { transform: translate(-1px, 0px) rotate(1deg); opacity: 1}
  30% { transform: translate(3px, 2px) rotate(0deg); opacity: 1}
  40% { transform: translate(1px, -1px) rotate(1deg); opacity: 1}
  50% { transform: translate(-1px, 2px) rotate(-1deg); opacity: 1}
  60% { transform: translate(-3px, 1px) rotate(0deg); opacity: 1}
  70% { transform: translate(3px, 1px) rotate(-1deg); opacity: 1}
  80% { transform: translate(-1px, -1px) rotate(1deg); opacity: 0.2}
  90% { transform: translate(1px, 2px) rotate(0deg); opacity: 0.1}
  100% { transform: translate(1px, -2px) rotate(-1deg); opacity: 0}
`;

const LightbulbWrapper = styled.div`
  position: absolute;
  height: 60vh;
  width: 40vw;
  bottom: 0%;
  left: 10%;
`;
// const ImageBox = styled.div`
//   position: relative;
//   height: 60vh;
//   width: 60vw;
// `;

const BulbBush = styled.img`
  position: absolute;
  left: 65%;
  bottom: 1.5%;
  max-height: 50%;
  z-index: 1;
  animation-name: ${growBush};
  animation-duration: 5s;
  transform-origin: bottom;
`;
const BulbHead = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  max-height: 95vh;
  z-index: 0;
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
      <>
        <BulbHead src={waterHead} alt='drawing of lightbulb head' />
        <BulbBush src={lightbulb} alt='drawing of lightbulb' />
        <BulbDrops src={bulbDrops} alt='drawing of water drops' />
        <BulbDrops
          src={bulbDrops}
          alt='drawing of water drops'
          style={{ left: '88%' }}
        />
        <BulbDrops
          src={bulbDrops}
          alt='drawing of water drops'
          style={{ left: '91%' }}
        />
        <IntroWords isDarkTheme={isDarkTheme} theme={theme} />
      </>
    </LightbulbWrapper>
  );
};

export default Hero;
