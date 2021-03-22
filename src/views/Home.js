import React from 'react';
import PropTypes from 'prop-types';
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
const Home = ({ isDarkTheme }) => {
  return (
    <Wrapper>
      <IntroWords isDarkTheme={isDarkTheme} />
    </Wrapper>
  );
};

Home.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};

export default Home;
