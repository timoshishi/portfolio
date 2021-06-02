import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { linkedin, github, paperPlane } from '../assets/images/logos';
import device from '../styles/mediaBreakpoints';

const S = {};
S.AboutWrapper = styled.section`
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

S.Logo = styled.img`
  max-height: 5rem;
`;
S.LogoSection = styled.div`
  max-height: 5rem;
  margin: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vh;
`;
S.LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

S.LogoLabel = styled.p`
  color: #fafafa;
  font-size: 1.8rem;
  margin-top: 0.5rem;
  font-weight: 500;
  font-family: Rubik;
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

const Contact = ({ theme }) => {
  return (
    <S.AboutWrapper>
      <S.ContactWrapper theme={theme} id='contact'>
        <S.Header>Contact</S.Header>
        <S.LogoSection>
          <S.LogoWrapper>
            <a href='https://github.com/timoshishi' target='blank'>
              <S.Logo src={github} />
              <S.LogoLabel>Github</S.LogoLabel>
            </a>
          </S.LogoWrapper>
          <S.LogoWrapper>
            <a href='https://www.linkedin.com/in/timfrrst/' target='blank'>
              <S.Logo src={linkedin} />
            </a>
            <S.LogoLabel>LinkedIn</S.LogoLabel>
          </S.LogoWrapper>
          <S.LogoWrapper>
            <a href='mailto:timfrrst@gmail.com' target='blank'>
              <S.Logo src={paperPlane} />
            </a>
            <S.LogoLabel>email</S.LogoLabel>
          </S.LogoWrapper>
        </S.LogoSection>
      </S.ContactWrapper>
    </S.AboutWrapper>
  );
};

Contact.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Contact;
