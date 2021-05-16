import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const ButtonLink = styled.a`
  color: #4fbfa8;
  border: 1px solid #fafafa;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  letter-spacing: 0.05em;
  background-color: transparent;
  color: inherit;
  transition: all 0.25s;
  border-radius: 2px;
  &:hover {
    background: #4fbfa8;
    color: #ffffff;
    border-color: #4fbfa8;
    cursor: pointer;
  }
`;
const ButtonText = styled.p`
  color: white;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-weight: 500;
`;

const Button = ({ theme, children }) => {
  return (
    <ButtonLink>
      <ButtonText theme={theme}>{children}</ButtonText>
    </ButtonLink>
  );
};

Button.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Button;
