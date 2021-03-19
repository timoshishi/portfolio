import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Playfair Display', serif;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.50s linear;
  }
  `;

export default GlobalStyles;
