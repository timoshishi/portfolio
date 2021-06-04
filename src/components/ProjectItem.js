import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';
import ProjectImageOverlay from './ProjectImageOverlay';

const S = {};
S.ProjectItemWrap = styled.div`
  max-width: 100%;
  /* max-height: 15rem; */
  margin-right: 5%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media ${device.laptop} {
    margin-right: 40%;
    margin: 1.5rem;
    max-width: 25%;
    &:hover {
      transform: scale(1.8);
    }
  }
`;

S.ProjectImage = styled.img`
  border-radius: 5px;
  height: 100%;
  width: 100%;
  vertical-align: top;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.25, 1);
  @media ${device.laptop} {
    &:hover {
      z-index: 5;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    &:after {
    }
  }
`;

const ProjectItem = ({ theme, project }) => {
  return (
    <S.ProjectItemWrap>
      <S.ProjectImage src={project.image} />
      <ProjectImageOverlay project={project} theme={theme} />
    </S.ProjectItemWrap>
  );
};

ProjectItem.propTypes = {
  theme: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
