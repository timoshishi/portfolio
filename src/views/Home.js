import React from 'react';
import styled from 'styled-components';
import IntroWords from '../components/IntroWords';
import PropTypes from 'prop-types';
import '../styles/burgerStyles.css';
import HamburgerMenu from './HamburgerMenu';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1rem;
  height: 100vh;
  width: 100vw;
`;
const Home = ({ isDarkTheme }) => {
  return (
    <HamburgerMenu>
      <Wrapper>
        <IntroWords isDarkTheme={isDarkTheme} />
      </Wrapper>
    </HamburgerMenu>
  );
};

Home.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};

export default Home;
