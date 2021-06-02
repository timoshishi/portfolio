import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';

const S = {};

S.TechItemWrap = styled.div`
  width: 100%;
  margin-right: 40%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  @media ${device.laptop} {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 70%;
    margin-right: 40%;
  }
`;
S.TechLogoWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  max-height: 2rem;
  max-width: 2rem;
  width: 100%;
`;
S.TechLogo = styled.img`
  max-height: 2.5rem;
  max-width: 2.5rem;
  min-height: 2.5rem;
  min-width: 2.5rem;
`;
S.LogoTextWrap = styled.div`
  width: 100%;
  margin-left: 2.3rem;
  margin-top: 0.5rem;
  @media ${device.tablet} {
    margin-left: 1.3rem;
  }
`;
S.LogoText = styled.p`
  font-size: 1.2rem;
  font-family: ${({ theme }) => `${theme.fontPrimary}, ${theme.fontFallback}`};
  font-weight: 400;
  color: #000;
  text-align: left;
  width: 15rem;
`;
const TechItem = ({ techInfo, theme }) => {
  return (
    <S.TechItemWrap>
      <S.TechLogoWrap>
        <S.TechLogo src={techInfo.thumb} />
        <S.LogoTextWrap>
          <S.LogoText theme={theme}>{techInfo.text}</S.LogoText>
        </S.LogoTextWrap>
      </S.TechLogoWrap>
    </S.TechItemWrap>
  );
};

TechItem.propTypes = {
  techInfo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default TechItem;
