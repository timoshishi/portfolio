import { createGlobalStyle } from 'styled-components';
import { ITheme } from '../ts/interfaces/interfaces';
interface IProps {
  theme: ITheme;
}

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
body {
  background: ${({ theme }: IProps) => theme.body};
  transition: all 0.50s linear;
  overflow-x: hidden;
  }
a {
  text-decoration: none;
}
  `;

export default GlobalStyles;
