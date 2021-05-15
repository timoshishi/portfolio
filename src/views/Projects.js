import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  height: 100vh;
  width: 100vw;
`;
const Projects = ({ theme }) => {
  return <Wrapper>My Recent Work</Wrapper>;
};

Projects.propTypes = { theme: PropTypes.object.isRequired };

export default Projects;
