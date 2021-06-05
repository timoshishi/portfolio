import React from 'react';
import styled from 'styled-components';
import AboutText from './AboutText';
import PropTypes from 'prop-types';
import TechBox from './TechBox';
import { ITheme } from '../ts/interfaces/interfaces';

const S = {
  AboutContainer: styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin-top: -4px;
    margin-left: -1rem;
  `,
};
interface IProps {
  theme: ITheme;
}
const About = ({ theme }: IProps) => {
  return (
    <S.AboutContainer>
      <AboutText theme={theme} />
      <TechBox theme={theme} />
    </S.AboutContainer>
  );
};

About.propTypes = { theme: PropTypes.object.isRequired };

export default About;
