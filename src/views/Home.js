import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import IntroWords from '../components/IntroWords';
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
const Home = (props) => {
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <IntroWords />
    </Wrapper>
  );
};

Home.propTypes = {};

export default Home;
