import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  position: relative;
  height: 100vh;
  width: 100vh;
`;
const IntroBox = styled.div`
  align-self: flex-start;
  margin-left: 15%;
  position: absolute;
  bottom: 30%;
`;
const Header = styled.p`
  font-weight: 600;
  font-size: 5rem;
  letter-spacing: 0.05rem;
  margin-bottom: 0.5rem;
  @media ${device.tablet} {
    font-size: 5rem;
    margin-bottom: 0.5rem;
  }
`;
const Intro = styled.p`
  font-family: Open Sans;
  align-self: flex-start;
  font-size: 2rem;
  letter-spacing: 0.08rem;
  line-height: 1.08em;
  font-weight: 600;
  @media ${device.tablet} {
    font-size: 5.2rem;
  }
`;
const Home = (props) => {
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <IntroBox>
        <Intro>hello</Intro>
        <Intro>
          i am tim<span style={{ color: 'red' }}>.</span>
        </Intro>

        <Intro>i am a full stack</Intro>
        <Intro>software engineer</Intro>
      </IntroBox>
    </Wrapper>
  );
};

Home.propTypes = {};

export default Home;
