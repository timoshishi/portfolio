import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { linkedin, github, paperPlane } from '../assets/images/logos';
import device from '../styles/mediaBreakpoints';

const S = {};
S.ContactContainer = styled.section`
  width: 110vw;
  background-color: #7510f7;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: -1rem;
`;
S.ContactWrapper = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;
S.Header = styled.h2`
  font-weight: 500;
  font-family: ${({ theme }) => `${theme.fontPrimary}, ${theme.fontFallback}`};
  color: #fafafa;
  font-size: 2rem;
  margin-bottom: 3rem;
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
`;
S.LogoSection = styled.div`
  max-height: 15rem;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  @media ${device.tablet} {
    justify-content: space-between;
    max-height: 5rem;
  }
`;

S.LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: 2rem;
  @media ${device.tablet} {
    margin-left: 0rem;
    margin-right: 0rem;
  }
`;

S.Logo = styled.img`
  max-height: 3rem;
  @media ${device.tablet} {
    max-height: 5rem;
  }
`;

S.LogoLabel = styled.p`
  color: #fafafa;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  font-weight: 500;
  font-family: Rubik;
  @media ${device.tablet} {
    font-size: 1.8rem;
  }
`;

const linkStyle = {
  textDecoration: 'none',
};

const Contact = ({ theme }) => {
  return (
    <S.ContactContainer>
      <S.ContactWrapper theme={theme} id='contact'>
        <S.Header>Contact</S.Header>
        <S.LogoSection>
          <S.LogoWrapper>
            <a
              href='https://github.com/timoshishi'
              target='blank'
              style={linkStyle}>
              <S.Logo src={github} />
              <S.LogoLabel>Github</S.LogoLabel>
            </a>
          </S.LogoWrapper>
          <S.LogoWrapper>
            <a
              href='https://www.linkedin.com/in/timfrrst/'
              target='blank'
              style={linkStyle}>
              <S.Logo src={linkedin} />
              <S.LogoLabel>LinkedIn</S.LogoLabel>
            </a>
          </S.LogoWrapper>
          <S.LogoWrapper>
            <a
              href='mailto:timfrrst@gmail.com'
              target='blank'
              style={linkStyle}>
              <S.Logo src={paperPlane} />
              <S.LogoLabel>email</S.LogoLabel>
            </a>
          </S.LogoWrapper>
        </S.LogoSection>
      </S.ContactWrapper>
    </S.ContactContainer>
  );
};

Contact.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Contact;
