import React from 'react';
import lightbulb from '../assets/lightbulb.png';
import waterHead from '../assets/waterhead_edit.png';
import bulbDrops from '../assets/waterdrops.png';
import styled, { keyframes } from 'styled-components';

const LightbulbWrapper = styled.div`
  position: absolute;
  height: 60vh;
  width: 60vh;
  bottom: 10%;
  left: 5%;
`;
const ImageBox = styled.div`
  position: relative;
  height: 60vh;
  width: 60vh;
`;

const BulbBush = styled.img`
  position: absolute;
  left: 65%;
  bottom: 1.5%;
  max-height: 50%;
  z-index: 1;
`;
const BulbHead = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  max-height: 60vh;
  z-index: 0;
`;

const BulbDrops = styled.img`
  position: absolute;
  left: 90%;
  height: 40%;
  top: 33%;
  max-height: 60vh;
  z-index: 0;
`;

const HeroLightbulb = (props) => {
  return (
    <LightbulbWrapper>
      <ImageBox>
        <BulbHead src={waterHead} alt='drawing of lightbulb head' />
        <BulbBush src={lightbulb} alt='drawing of lightbulb' />
        <BulbDrops src={bulbDrops} alt='drawing of water drops' />
      </ImageBox>
    </LightbulbWrapper>
  );
};

HeroLightbulb.propTypes = {};

export default HeroLightbulb;
