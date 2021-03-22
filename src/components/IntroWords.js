import React from 'react';
import styled, { keyframes } from 'styled-components';
import device from '../styles/mediaBreakpoints';

const IntroBox = styled.div`
  align-self: flex-start;
  margin-left: 15%;
  bottom: 0%;
  width: 100%;
`;

const Hello = styled.p`
  font-family: Open Sans;
  align-self: flex-start;
  font-size: 2rem;
  letter-spacing: 0.08rem;
  line-height: 1.08em;
  font-weight: ${({ theme }) => (theme.background === '#15202b' ? 600 : 700)};
  @media ${device.tablet} {
    font-size: 6rem;
  }
`;
const fadeIn = keyframes`
 0% {opacity: 0};
 100% {opacity: 1}
`;
const Intro = styled.p`
  font-family: Open Sans;
  align-self: flex-start;
  font-size: 2rem;
  letter-spacing: 0.08rem;
  line-height: 1.08em;
  font-weight: 600;
  animation-name: ${fadeIn};
  animation-duration: 2s;
  @media ${device.tablet} {
    font-size: 5.5rem;
  }
`;
const Period = styled.span`
  color: ${({ theme }) =>
    theme.background === '#15202b' ? '#1a91da' : '#FF4500'};
`;

// const Words = styled.span`
// `;

const IntroWords = (props) => {
  console.log(props.theme);
  return (
    <IntroBox>
      <Intro>
        hello<Period>.</Period>
      </Intro>
      <Intro>i am tim</Intro>

      <Intro>i am a full stack </Intro>
      <Intro>software engineer</Intro>
      <Intro></Intro>
    </IntroBox>
  );
};

IntroWords.propTypes = {};

export default IntroWords;
