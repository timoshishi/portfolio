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
const Card = (props) => {
  return (
    <CardWrap>
      <h2>Hello</h2>
      <h2>Hello</h2>
    </CardWrap>
  );
};

Card.propTypes = {};

export default Card;
