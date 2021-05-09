import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';
console.log({ device });

const Period = styled.span`
  color: ${({ isDarkTheme }) => (!isDarkTheme ? '#FF4500' : '#1a91da')};
`;
const TextBox = styled.div`
  max-width: 80%;
  text-align: center;
  margin-bottom: 3%;
  align-self: center;
`;
const HeaderText = styled.h1`
  font-family: 'Rubik', sans-serif;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color};
  @media ${device.laptop} {
    font-size: 3.5rem;
  }
`;
const SubHead = styled.p`
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color};
`;

const IntroText = ({ theme }) => {
  console.log(theme.text);
  return (
    <TextBox>
      <HeaderText theme={theme}>
        i make things<Period>.</Period>
      </HeaderText>
      <SubHead theme={theme}>front end, back end, full stack</SubHead>
    </TextBox>
  );
};

IntroText.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default IntroText;
