import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';
import '../styles/burgerStyles.css';
import useDarkMode from '../hooks/useDarkMode';
import Hero from '../components/Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ContactSlider from './ContactSlider';

const S = {};
S.Wrapper = styled.div`
  position: relative;
  margin: 1rem;
  height: 100vh;
  width: 100vw;
`;
//FIXME: smooth scroll action broken
const Home = (props) => {
  const [isDarkTheme] = useDarkMode();
  const themeContext = useContext(ThemeContext);
  return (
    <S.Wrapper>
      <ContactSlider theme={themeContext} />
      <Hero isDarkTheme={isDarkTheme} theme={themeContext} />
      <About theme={themeContext} />
      <Projects theme={themeContext} />
      <Contact theme={themeContext} />
    </S.Wrapper>
  );
};

export default Home;
