import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BurgerWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: red;
  position: absolute;
  top: 0;
  left: 1rem;
`;

const HamburgerMenu = (props) => {
  return <BurgerWrapper />;
};

HamburgerMenu.propTypes = {};

export default HamburgerMenu;
