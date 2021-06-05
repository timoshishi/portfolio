import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';
import '../styles/burgerStyles.css';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ContactSlider from './ContactSlider';
import { IStyled } from '../ts/interfaces/interfaces';

const S: IStyled = {
  Wrapper: styled.div`
    position: relative;
    margin: 1rem;
    height: 100vh;
    width: 100vw;
  `,
};
const Home = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <S.Wrapper>
      <ContactSlider theme={themeContext} />
      <Hero theme={themeContext} />
      <About theme={themeContext} />
      <Projects theme={themeContext} />
      <Contact theme={themeContext} />
    </S.Wrapper>
  );
};

export default Home;
