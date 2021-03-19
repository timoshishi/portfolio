import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className='App'>HELLO WORLD</div>
    </React.Fragment>
  );
};

export default App;
