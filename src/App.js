import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import useDarkMode from './hooks/useDarkMode';
import Home from './views/Home';
import ThemeToggle from './components/ThemeToggle';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const App = () => {
  const [isDarkTheme, toggleTheme] = useDarkMode();
  const themeMode = !isDarkTheme ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Wrapper>
          <ThemeToggle toggleTheme={toggleTheme} />
          <Home isDarkTheme={isDarkTheme} />
        </Wrapper>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
