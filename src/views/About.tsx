import styled from 'styled-components';
import AboutText from '../components/About/AboutText';
import TechBox from '../components/About/TechBox';
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

export default About;
