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
    /* justify-content: center; */
    width: 100vw;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media ${Device.laptop} {
      margin-top: 5rem;
      width: 100vw;
    }
  `,

  Header: styled.h2`
    font-weight: 500;
    font-family: ${({ theme }) =>
      `${theme.fontPrimary}, ${theme.fontFallback}`};
    color: ${({ theme }) => theme.color};
    font-size: 2rem;
    @media ${Device.laptop} {
      font-size: 2.5rem;
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
      <S.Header>My Recent Work</S.Header>
      <S.ProjectWrapper>
        {projectInfo.map((project, i) => (
          <ProjectItem theme={theme} project={project} key={project.title} />
        ))}
      </S.ProjectWrapper>
    </S.Wrapper>
  );
};

export default Projects;
