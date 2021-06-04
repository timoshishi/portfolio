import React from 'react';
import styled from 'styled-components';
import { avatar } from '../assets/images';
import device from '../styles/mediaBreakpoints';
import Computer from './Computer';
import HeroText from './HeroText';
const S = {};
S.HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-content: center;
  justify-content: center;
  width: 80%;
  margin-top: 15%;
  left: 5%;
  @media ${device.laptop} {
    justify-content: flex-end;
    height: 90%;
    width: 80%;
    bottom: 0%;
    left: 10%;
    margin-top: 0%;
  }
`;

S.ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  min-width: 80%;
  max-width: 100%;
  z-index: 1;
`;

S.Avatar = styled.img``;
S.AvatarBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  z-index: 5;
  max-height: 10%;
  margin-bottom: 10%;
  @media ${device.laptop} {
    max-height: 30%;
    margin-bottom: 5%;
  }
`;

S.CompContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

S.CompWrapper = styled.div`
  max-width: 100%;
  min-width: 100%;
  @media ${device.laptop} {
    max-width: 50%;
    min-width: 50%;
  }
`;
const Hero = ({ isDarkTheme, theme }) => {
  return (
    <S.HeroWrapper id='home'>
      <S.ImageContainer>
        <HeroText theme={theme} />
        <S.AvatarBox>
          <S.Avatar src={avatar} />
        </S.AvatarBox>
        <S.CompContainer>
          <S.CompWrapper>
            <Computer
              path={theme.contrast}
              background={theme.contrastSecondary}
            />
          </S.CompWrapper>
        </S.CompContainer>
      </S.ImageContainer>
    </S.HeroWrapper>
  );
};

export default Hero;
