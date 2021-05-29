import React from 'react';
import styled from 'styled-components';
import AboutText from './AboutText';
import PropTypes from 'prop-types';

import TechBox from './TechBox';
const AboutWrapper = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: -4px;
  margin-left: -1rem;
`;
const About = ({ theme }) => {
  return (
    <AboutWrapper id='about'>
      <AboutText theme={theme} />
      <TechBox theme={theme} />
    </AboutWrapper>
  );
};

About.propTypes = { theme: PropTypes.object.isRequired };

export default About;
