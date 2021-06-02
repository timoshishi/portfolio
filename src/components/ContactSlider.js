import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  linkedin,
  github,
  paperPlane,
  emailLogo,
} from '../assets/images/logos';
import EmailLogo from './EmailLogo';
import device from '../styles/mediaBreakpoints';
const S = {};
S.ContactContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 3rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    border-style: 1px solid black;
    right: 3rem;
    bottom: 6rem;
    z-index: 10;
  }
`;
S.LogoContainer = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 5px;
  margin-top: 1px;
  margin-bottom: 1px;
  &:hover {
    transition: 0.15s;
    transform: scale(1.15);
  }
`;
S.Link = styled.a`
  text-decoration: none;
`;
S.Logo = styled.img`
  width: 100%;
`;
S.Divider = styled.div`
  width: 100%;
  height: 0px;
  border: 0.3px solid #fafafa;
`;

const ContactSlider = ({ theme }) => {
  return (
    <S.ContactContainer>
      <S.LogoContainer>
        <S.Link href='mailto:timfrrst@gmail.com' target='blank'>
          <EmailLogo
            background={theme.color}
            style={{ backgroundColor: theme.contrastColor }}
          />
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
