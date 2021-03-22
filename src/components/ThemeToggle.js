import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ToggleDiv = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  width: 3rem;
  height: 3rem;
`;
const ThemeToggle = ({ toggleTheme }) => {
  return (
    <ToggleDiv>
      <button onClick={toggleTheme}>Toggle theme</button>
    </ToggleDiv>
  );
};

ThemeToggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;
