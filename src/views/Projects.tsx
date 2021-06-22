import styled from 'styled-components';
import ProjectItem from '../components/Projects/ProjectItem';
import { projectInfo } from '../data/projectInfo';
import { IStyled, ITheme } from '../ts/interfaces/interfaces';
import { Device } from '../ts/enums/mediaBreakpoints';
const S: IStyled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.type === 'light' ? theme.purp : theme.body};
    width: 100vw;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media ${Device.laptop} {
      margin-top: 20rem;
      width: 100vw;
    }
  `,
  ProjectInfoBox: styled.div`
    display: flex;
    flex-direction: column;
    color: #FAFAFA;
    background-color: ${({theme})  => theme.type === 'light' ? 'rgb(20, 28, 58)' : theme.purp};
    border-radius: 1rem;
    @media ${Device.tablet} {
      padding: 4rem;
      position: relative;
      margin-top: -10rem;
      width: 60%;
    }
  `,
  Header: styled.h2`
    font-weight: 500;
    font-family: ${({ theme }) =>
      `${theme.fontPrimary}, ${theme.fontFallback}`};
    font-size: 2rem;
    @media ${Device.laptop} {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  `,
  AboutWork: styled.p`
    font-weight: 500;
    font-family: ${({ theme }) =>
      `${theme.fontSecondary}, ${theme.fontFallback}`};
    font-size: 2rem;
    @media ${Device.laptop} {
      font-size: 1.5rem;
    }
  `,

  ProjectWrapper: styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    @media ${Device.laptop} {
      width: 80%;
      margin-top: 4rem;
    }
  `,
};
interface IProps {
  theme: ITheme;
}
const Projects = ({ theme }: IProps) => {
  return (
    <S.Wrapper id='projects'>
      <S.ProjectInfoBox>
      <S.Header>My Recent Work</S.Header>
      <S.AboutWork>Sometimes I build things for productivity, sometimes I build them just for kicks, sometimes for a little bit of both. No matter what, I always build to level up.</S.AboutWork>

      </S.ProjectInfoBox>
      <S.ProjectWrapper>
        {projectInfo.map((project, i) => (
          <ProjectItem theme={theme} project={project} key={project.title} />
        ))}
      </S.ProjectWrapper>
    </S.Wrapper>
  );
};

export default Projects;
