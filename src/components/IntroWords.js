import React from 'react';
import styled, { keyframes } from 'styled-components';
import device from '../styles/mediaBreakpoints';
import PropTypes from 'prop-types';
const IntroBox = styled.div`
  /* align-self: flex-start; */
  margin-left: 15%;
  bottom: 0%;
  width: 100%;
`;

const fadeIn = keyframes`
 0% {opacity: 0};
 100% {opacity: 1}
`;

const Intro = styled.p`
  font-family: Open Sans;
  /* align-self: flex-start; */
  font-size: 3.5rem;
  letter-spacing: 0.08rem;
  line-height: 1.08em;
  font-weight: 600;
  animation-name: ${fadeIn};
  animation-duration: 3s;
  @media ${device.tablet} {
    font-size: 5.5rem;
  }
`;
const Period = styled.span`
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#FF4500' : '#1a91da')};
`;

const IntroWords = ({ isDarkTheme }) => {
  return (
    <IntroBox>
      <Intro style={{ animationDuration: '3s' }}>
        hello<Period isDarkTheme={isDarkTheme}>.</Period>
      </Intro>
      <Intro style={{ animationDuration: '3.5s' }}>my name is tim</Intro>

      <Intro style={{ animationDuration: '4s' }}>i am a full stack </Intro>
      <Intro style={{ animationDuration: '4.5s' }}>software engineer</Intro>
    </IntroBox>
  );
};

IntroWords.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};

export default IntroWords;
