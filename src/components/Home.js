import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';
import '../styles/burgerStyles.css';
import useDarkMode from '../hooks/useDarkMode';
import Hero from '../components/Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

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
      <Hero isDarkTheme={isDarkTheme} theme={themeContext} />
      <About theme={themeContext} />
      <Projects theme={themeContext} />
      <Contact theme={themeContext} />
    </Wrapper>
  );
};

export default Home;
