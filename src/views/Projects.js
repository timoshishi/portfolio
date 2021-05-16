import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../styles/mediaBreakpoints';
import ProjectItem from '../components/ProjectItem';
import { projectInfo } from '../data/projectInfo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media ${device.laptop} {
    margin-top: 5rem;
    width: 100vw;
  }
`;

const Header = styled.h2`
  font-weight: 500;
  margin-right: 1rem;
  font-family: ${({ theme }) => `${theme.fontPrimary}, ${theme.fontFallback}`};
  color: ${({ theme }) => theme.color};
  font-size: 2rem;
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
`;
const ProjectWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
  margin-left: 1rem;
  @media ${device.laptop} {
    margin-right: 4%;
    width: 80%;
    margin-top: 4rem;
  }
`;
const Projects = ({ theme }) => {
  return (
    <Wrapper>
      <Header>My Recent Work</Header>
      <ProjectWrapper>
        {projectInfo.map((project, i) => (
          <ProjectItem theme={theme} project={project} key={project.title} />
        ))}
      </ProjectWrapper>
    </Wrapper>
  );
};

Projects.propTypes = { theme: PropTypes.object.isRequired };

export default Projects;
