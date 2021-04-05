import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';
import IntroWords from '../components/IntroWords';
import '../styles/burgerStyles.css';
import useDarkMode from '../hooks/useDarkMode';
import lightbulb from '../assets/lightbulb.png';

const Wrapper = styled.div`
  position: relative;
  margin: 1rem;
  height: 100vh;
  width: 100vw;
`;
const LightbulbWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  opacity: 0.95;
`;
const Home = (props) => {
  const [isDarkTheme] = useDarkMode();
  const themeContext = useContext(ThemeContext);
  return (
    <Wrapper>
      <LightbulbWrapper>
        <img
          src={isDarkTheme && lightbulb}
          alt='drawing of lightbulb'
          style={{ height: '75vh', width: 'auto' }}
        />
      </LightbulbWrapper>
      <IntroWords isDarkTheme={isDarkTheme} theme={themeContext} />
    </Wrapper>
  );
};

export default Home;
