import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IntroWords from '../components/IntroWords';
import HamburgerMenu from './HamburgerMenu';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  height: 100vh;
  width: 100vw;
`;
const Home = ({ isDarkTheme }) => {
  return (
    <Wrapper>
      <HamburgerMenu />
      <IntroWords isDarkTheme={isDarkTheme} />
    </Wrapper>
  );
};

Home.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};

export default Home;
