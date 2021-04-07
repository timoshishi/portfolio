import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import ProjectCube from '../components/ProjectCube';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  height: 100vh;
  width: 100vw;
`;
const Projects = (props) => {
  return (
    <Wrapper>
      <ProjectCube />
    </Wrapper>
  );
};

// Projects.propTypes = {};

export default Projects;
