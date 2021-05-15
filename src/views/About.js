import React from 'react';
import styled from 'styled-components';
import AboutText from '../components/AboutText';
import PropTypes from 'prop-types';

import TechBox from '../components/TechBox';
const AboutWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: -4px;
  margin-left: -1rem;
`;
const About = ({ theme }) => {
  return (
    <AboutWrapper>
      <AboutText />
      <TechBox />
    </AboutWrapper>
  );
};

About.propTypes = { theme: PropTypes.object.isRequired };

export default About;
