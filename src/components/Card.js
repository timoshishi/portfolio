import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';
import TechItem from './TechItem';

const CardWrap = styled.div`
  min-height: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    width: 30%;
  }
`;
const HeaderLogoWrapper = styled.div`
  margin-top: 2rem;
  @media ${device.tablet} {
    margin-top: 4rem;
  }
`;
const HeaderLogo = styled.img`
  max-height: 3rem;
  @media ${device.tablet} {
    min-height: 4rem;
    max-height: 4rem;
  }
`;
const HeaderLabel = styled.p`
  font-size: 2rem;
  font-family: ${({ theme: { fontPrimary, fontFallback } }) =>
    `${fontPrimary}, ${fontFallback}`};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.color};
  font-weight: 100;
  @media ${device.tablet} {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;
const TechList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const DescriptionWrapper = styled.div`
  width: 80%;
  align-self: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  @media ${device.tablet} {
    width: 60%;
  }
`;
const DescriptionText = styled.p`
  font-family: ${({ theme }) =>
    `${theme.fontSecondary}, ${theme.fontFallback}`};
  color: black;
  font-size: 1.3rem;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const Card = ({ cardInfo, theme }) => {
  return (
    <CardWrap>
      <HeaderLogoWrapper>
        <HeaderLabel theme={theme}>{cardInfo.title}</HeaderLabel>
        <HeaderLogo src={cardInfo.imgSrc} />
      </HeaderLogoWrapper>
      <DescriptionWrapper>
        <DescriptionText>{cardInfo.description}</DescriptionText>
      </DescriptionWrapper>
      <TechList>
        {cardInfo.tech.map((techInfo, i) => (
          <TechItem
            techInfo={techInfo}
            key={`${techInfo.text}_${i}`}
            theme={theme}
          />
        ))}
      </TechList>
    </CardWrap>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Card;
