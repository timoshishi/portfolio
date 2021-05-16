import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';
import Button from '../components/Button';
const ImageOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  border-radius: 5px;
  max-width: 100%;
  max-width: 85%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 7.5%;
  position: absolute;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &:hover {
    opacity: 1;
  }
`;

const TextBox = styled.div`
  width: 70%;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colorSecondary};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: 400;
  margin-bottom: 0.5rem;
`;
const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.colorSecondary};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 0.8rem;
`;
const ButtonBox = styled.div`
  display: flex;
  margin-top: 1.5rem;
  width: 100%;
  justify-content: space-evenly;
`;
const ProjectImageOverlay = ({ project, theme }) => {
  return (
    <ImageOverlay>
      <TextBox>
        <Header theme={theme}>{project.title}</Header>
        <ProjectDesc theme={theme}>{project.description}</ProjectDesc>
        <ButtonBox>
          <Button theme={theme}>Github</Button>
          <Button theme={theme}>Website</Button>
        </ButtonBox>
      </TextBox>
    </ImageOverlay>
  );
};

ProjectImageOverlay.propTypes = {
  theme: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProjectImageOverlay;
