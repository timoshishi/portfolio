import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';
import IntroWords from '../components/IntroWords';
import '../styles/burgerStyles.css';
import useDarkMode from '../hooks/useDarkMode';
import HeroLightbulb from '../components/HeroLightbulb';
const Wrapper = styled.div`
  position: relative;
  margin: 1rem;
  height: 100vh;
  width: 100vw;
`;

const Home = (props) => {
  const [isDarkTheme] = useDarkMode();
  const themeContext = useContext(ThemeContext);
  return (
    <Wrapper>
      <HeroLightbulb />
      <IntroWords isDarkTheme={isDarkTheme} theme={themeContext} />
    </Wrapper>
  );
};

export default Home;
