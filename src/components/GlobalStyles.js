import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`

body {
  /* font-family: 'Open Sans', sans-serif;
  font-family: 'Playfair Display', serif; */
  background: ${({ theme }) => theme.body};
  /* color: ${({ theme }) => theme.contrast}; */
  transition: all 0.50s linear;
  overflow-x: hidden;
  }
  `;

export default GlobalStyles;
