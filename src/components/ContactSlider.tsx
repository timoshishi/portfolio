import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { linkedin, github } from '../assets/images/logos';
import EmailLogo from './EmailLogo';
import device from '../styles/mediaBreakpoints';
import { IStyled, ITheme } from '../ts/interfaces/interfaces';

const slideIn = keyframes`
from {
transform: translateX(0rem)
}
to {
transform: translateX(-6rem)
}
`;

const S: IStyled = {
  ContactContainer: styled.div`
    display: none;

    @media ${device.tablet} {
      display: block;
      width: 2rem;
      position: fixed;
      display: flex;
      flex-direction: column;
      border-style: 1px solid black;
      right: -3rem;
      bottom: 40vh;
      z-index: 10;
      animation: 1s ${slideIn} ease-out 0.2s normal forwards;
    }
    @media ${device.laptop} {
      display: block;
      width: 3rem;
      position: fixed;
      display: flex;
      flex-direction: column;
      border-style: 1px solid black;
      right: -3rem;
      bottom: 6rem;
      z-index: 10;
      animation: 1s ${slideIn} ease-out 0.2s normal forwards;
    }
  `,
  LogoContainer: styled.div`
    border-radius: 5px;
    margin-top: 1px;
    margin-bottom: 1px;

    @media ${device.tablet} {
      width: 3rem;
      height: 3rem;
    }
    @media ${device.laptop} {
      width: 4rem;
      height: 4rem;
    }
    &:hover {
      transition: all 0.2s;
      transform: scale(1.1);
      margin-top: 3px;
      margin-bottom: 3px;
    }
  `,
  Link: styled.a`
    text-decoration: none;
  `,
  Logo: styled.img`
    width: 100%;
  `,
  Divider: styled.div`
    width: 100%;
    height: 0px;
    border: 0.3px solid #fafafa;
  `,
};

interface IProps {
  theme: ITheme;
}

const ContactSlider = ({ theme }: IProps) => {
  return (
    <S.ContactContainer>
      <S.LogoContainer>
        <S.Link href='mailto:timfrrst@gmail.com' target='blank'>
          <EmailLogo background={theme.color} />
        </S.Link>
      </S.LogoContainer>
      <S.LogoContainer>
        <S.Link href='https://www.linkedin.com/in/timfrrst' target='blank'>
          <S.Logo src={linkedin} />
        </S.Link>
      </S.LogoContainer>
      <S.LogoContainer
        style={{
          borderBottomLeftRadius: '5px',
          backgroundColor: '#363537',
          padding: '3px',
        }}>
        <S.Link href='https://www.github.com/timoshishi' target='blank'>
          <S.Logo src={github} />
        </S.Link>
      </S.LogoContainer>
    </S.ContactContainer>
  );
};

ContactSlider.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ContactSlider;
