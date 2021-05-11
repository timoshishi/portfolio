import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';
import Card from './Card';
import { cardInfo } from '../cardInfo';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -1rem;
  @media ${device.laptop} {
    margin-top: -4rem;
  }
`;
const CardContainer = styled.div`
  border: 0.5px solid grey;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fafafa;
  box-shadow: 0.5px 0.5px 2px 0px rgba(0, 0, 0, 0.55);
  @media ${device.laptop} {
    width: 90%;
  }
`;

const TechBox = (props) => {
  return (
    <Wrapper>
      <CardContainer>
        {cardInfo.map((cardInfo, i) => (
          <Card cardInfo={cardInfo} key={`${cardInfo.title}_${i}`} />
        ))}
      </CardContainer>
    </Wrapper>
  );
};

TechBox.propTypes = {};

export default TechBox;
