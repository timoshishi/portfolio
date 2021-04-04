import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { NightsStay, Brightness7 } from '@material-ui/icons';

const ToggleDiv = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
`;
const ThemeToggleButton = ({ toggleTheme, isDarkTheme }) => {
  return (
    <ToggleDiv>
      <label htmlFor='small-radius-switch'>
        <Switch
          checked={!isDarkTheme}
          onChange={toggleTheme}
          handleDiameter={28}
          onColor='#6B8096'
          onHandleColor='#1a91da'
          offColor='#6B8096'
          offHandleColor='#15202b'
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
          height={20}
          width={48}
          className='react-switch'
          id='material-switch'
          uncheckedHandleIcon={
            <NightsStay
              style={{
                color: 'yellow',
                marginTop: '3px',
                marginLeft: '3px',
                height: '1.4rem',
              }}
            />
          }
          checkedHandleIcon={
            <Brightness7
              style={{
                color: '#ffc438',
                marginTop: '2.5px',
                marginLeft: '3px',
                height: '1.5rem',
              }}
            />
          }
          aria-label='toggle light dark theme'
        />
      </label>
    </ToggleDiv>
  );
};

ThemeToggleButton.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggleButton;
