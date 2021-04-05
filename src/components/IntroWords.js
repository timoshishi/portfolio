import React from 'react';
import styled, { keyframes } from 'styled-components';
import device from '../styles/mediaBreakpoints';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
 0% {opacity: 0};
 100% {opacity: 1}
`;

const growLine = keyframes`
0% {
  height: 0;
}
100% {
  height: 45vh;
}
`;

const Wrapper = styled.div`
  max-width: 45vw;
  margin-left: 15%;
  bottom: 0%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 10%;
`;

const Period = styled.span`
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#FF4500' : '#1a91da')};
`;

const IntroBox = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.color};
  padding: 2rem;
  animation-name: ${fadeIn};
  animation-duration: 3s;
`;

const Intro = styled.p`
  font-family: Open Sans;
  align-self: flex-start;
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

const Line = styled.div`
  height: 45vh;
  margin: 0;
  padding: 0;
  width: 0;
  max-width: 1px;
  border: 0.5px solid;
  animation-name: ${growLine};
  animation-duration: 4s;
  border-color: ${({ theme }) => theme.color};
`;

const IntroWords = ({ isDarkTheme, theme }) => {
  return (
    <Wrapper>
      <IntroBox theme={theme}>
        <Intro style={{ animationDuration: '2s' }}>
          hello
          <Period isDarkTheme={isDarkTheme}>.</Period>
        </Intro>
        <Intro style={{ animationDuration: '3.5s' }}>my name is tim</Intro>
      </IntroBox>
      <Line theme={theme} />
    </Wrapper>
  );
};

IntroWords.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
};

export default IntroWords;
