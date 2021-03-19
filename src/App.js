import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

import useDarkMode from './hooks/useDarkMode';
const Wrapper = styled.h1`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`;

const App = () => {
  const [isDarkTheme, themeToggler] = useDarkMode();
  const themeMode = isDarkTheme ? darkTheme : lightTheme;
  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Wrapper>Hello World</Wrapper>
        <button onClick={themeToggler}>Toggle theme</button>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
