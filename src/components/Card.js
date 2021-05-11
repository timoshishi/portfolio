import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';

const CardWrap = styled.div`
  min-height: 20rem;
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
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.color};
  font-weight: 100;
  @media ${device.tablet} {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Card = ({ cardInfo }) => {
  return (
    <CardWrap>
      <HeaderLogoWrapper>
        <HeaderLabel>{cardInfo.title}</HeaderLabel>
        <HeaderLogo src={cardInfo.imgSrc} />
      </HeaderLogoWrapper>
    </CardWrap>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
};

export default Card;
