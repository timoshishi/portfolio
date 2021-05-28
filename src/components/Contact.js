import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { linkedin, github, paperPlane } from '../assets/images/logos';
import device from '../styles/mediaBreakpoints';

const AboutWrapper = styled.section`
  width: 110vw;
  background-color: #7510f7;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: -1rem;
`;
const ContactWrapper = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

const Logo = styled.img`
  max-height: 5rem;
`;
const LogoSection = styled.div`
  max-height: 5rem;
  margin: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vh;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoLabel = styled.p`
  color: #fafafa;
  font-size: 1.8rem;
  margin-top: 0.5rem;
  font-weight: 500;
  font-family: Rubik;
`;
const Header = styled.h2`
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
    <AboutWrapper>
      <ContactWrapper theme={theme}>
        <a href='#contact' />
        <Header>Contact</Header>
        <LogoSection>
          <LogoWrapper>
            <a href='https://github.com/timoshishi' target='blank'>
              <Logo src={github} />
              <LogoLabel>Github</LogoLabel>
            </a>
          </LogoWrapper>
          <LogoWrapper>
            <a href='https://www.linkedin.com/in/timfrrst/' target='blank'>
              <Logo src={linkedin} />
            </a>
            <LogoLabel>LinkedIn</LogoLabel>
          </LogoWrapper>
          <LogoWrapper>
            <a href='mailto:timfrrst@gmail.com' target='blank'>
              <Logo src={paperPlane} />
            </a>
            <LogoLabel>email</LogoLabel>
          </LogoWrapper>
        </LogoSection>
      </ContactWrapper>
    </AboutWrapper>
  );
};

Contact.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Contact;
