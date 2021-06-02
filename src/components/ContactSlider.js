import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const ContactSlider = (props) => {
  const S = {};
  S.ContactContainer = styled.div`
    width: 3rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    border-style: 1px solid black;
    right: 1rem;
    bottom: 5rem;
    background-color: red;
    z-index: 20;
  `;
  S.LogoContainer = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: blue;
  `;
  return (
    <S.ContactContainer>
      <S.LogoContainer></S.LogoContainer>
      <S.LogoContainer></S.LogoContainer>
      <S.LogoContainer></S.LogoContainer>
    </S.ContactContainer>
  );
};

ContactSlider.propTypes = {};

export default ContactSlider;
