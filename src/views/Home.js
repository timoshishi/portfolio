import React from 'react';
import styled from 'styled-components';
import IntroWords from '../components/IntroWords';
import '../styles/burgerStyles.css';
import useDarkMode from '../hooks/useDarkMode';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1rem;
  height: 100vh;
  width: 100vw;
`;
const Home = (props) => {
  const [isDarkTheme, toggleTheme] = useDarkMode();
  return (
    <Wrapper>
      <IntroWords isDarkTheme={isDarkTheme} />
    </Wrapper>
  );
};

export default Home;
