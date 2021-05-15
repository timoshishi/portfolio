import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';

const ProjectItemWrap = styled.div`
  max-width: 40%;
  min-height: 15rem;
  border-radius: 5px;
  background: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 1rem;
  @media ${device.laptop} {
    width: 25%;
  }
`;

const ProjectThumb = styled.img``;

const ProjectItem = ({ theme, project }) => {
  return <ProjectItemWrap img={project.image}></ProjectItemWrap>;
};

ProjectItem.propTypes = {
  theme: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
