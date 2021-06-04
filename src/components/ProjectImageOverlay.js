import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/Button';

const S = {};
S.ImageOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
  border-radius: 5px;
  max-width: 100%;
  max-width: 100%;
  top: 0;
  bottom: 0;
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

S.TextBox = styled.div`
  width: 70%;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
S.Header = styled.h3`
  font-size: 1.5rem;
  color: #fafafa;
  opacity: 0.9;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: 400;
  margin-bottom: 0.5rem;
`;
S.ProjectDesc = styled.p`
  color: #fafafa;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 0.8rem;
`;
S.ButtonBox = styled.div`
  display: flex;
  margin-top: 1.5rem;
  width: 100%;
  justify-content: space-evenly;
`;
const ProjectImageOverlay = ({ project, theme }) => {
  return (
    <S.ImageOverlay>
      <S.TextBox>
        <S.Header theme={theme}>{project.title}</S.Header>
        <S.ProjectDesc theme={theme}>{project.description}</S.ProjectDesc>
        <S.ButtonBox>
          <Button theme={theme} url={project.githubUrl}>
            Github
          </Button>
          {project.projectUrl && (
            <Button theme={theme} url={project.projectUrl}>
              Website
            </Button>
          )}
        </S.ButtonBox>
      </S.TextBox>
    </S.ImageOverlay>
  );
};

ProjectImageOverlay.propTypes = {
  theme: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProjectImageOverlay;
