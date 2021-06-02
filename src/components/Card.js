import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';
import TechItem from './TechItem';

const S = {};
S.CardWrap = styled.div`
  min-height: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  @media ${device.laptop} {
    width: 30%;
  }
`;
S.HeaderLogoWrapper = styled.div`
  margin-top: 2rem;
  @media ${device.laptop} {
    margin-top: 4rem;
  }
`;
S.HeaderLogo = styled.img`
  max-height: 3rem;
  @media ${device.laptop} {
    min-height: 4rem;
    max-height: 4rem;
  }
`;
S.HeaderLabel = styled.p`
  font-size: 2rem;
  font-family: ${({ theme: { fontPrimary, fontFallback } }) =>
    `${fontPrimary}, ${fontFallback}`};
  margin-bottom: 1.5rem;
  color: #363537;
  font-weight: 100;
  @media ${device.laptop} {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;
S.TechList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
S.DescriptionWrapper = styled.div`
  width: 80%;
  align-self: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  @media ${device.laptop} {
    width: 60%;
  }
`;
S.DescriptionText = styled.p`
  font-family: ${({ theme }) =>
    `${theme.fontSecondary}, ${theme.fontFallback}`};
  color: black;
  font-size: 1.3rem;
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

const Card = ({ cardInfo, theme }) => {
  return (
    <S.CardWrap>
      <S.HeaderLogoWrapper>
        <S.HeaderLabel theme={theme}>{cardInfo.title}</S.HeaderLabel>
        <S.HeaderLogo src={cardInfo.imgSrc} />
      </S.HeaderLogoWrapper>
      <S.DescriptionWrapper>
        <S.DescriptionText>{cardInfo.description}</S.DescriptionText>
      </S.DescriptionWrapper>
      <S.TechList>
        {cardInfo.tech.map((techInfo, i) => (
          <TechItem
            techInfo={techInfo}
            key={`${techInfo.text}_${i}`}
            theme={theme}
          />
        ))}
      </S.TechList>
    </S.CardWrap>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Card;
