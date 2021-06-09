import styled from 'styled-components';
import ProjectImageOverlay from './ProjectImageOverlay';
import { IStyled, ITheme, IProject } from '../../ts/interfaces/interfaces';
import { Device } from '../../ts/enums/mediaBreakpoints';
// import MobileProjectCard from './MobileProjectCard';

const S: IStyled = {
  ProjectItemWrap: styled.div`
    max-width: 100%;
    background: rgba(0, 0, 0, 0);
    border-radius: 5px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
    @media ${Device.laptop} {
      &:hover {
        z-index: 5;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
    @media ${Device.laptop} {
      margin-right: 40%;
      margin: 1.5rem;
      max-width: 25%;
      &:hover {
        transform: scale(1.8);
      }
    }
  `,

  ProjectImage: styled.img`
    width: 100%;
    vertical-align: top;
    @media ${Device.laptop} {
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
      width: 100%;
      margin-top: 0px;
      box-shadow: 0;
    }
  `,

  Header: styled.h3`
    font-size: 2rem;
    color: black;
    padding: 0.3rem;
    opacity: 0.9;
    font-family: ${({ theme }) => theme.fontPrimary};
    font-weight: 400;
    margin-top: 0rem;
    margin-bottom: 0rem;
    background: #f2f3f4;
    height: 3rem;
    border-radius: 5px 5px 0px 0px;
    text-align: center;
    @media ${Device.laptop} {
      display: none;
      height: 0;
      width: 0;
    }
  `,
};

interface IProps {
  theme: ITheme;
  project: IProject;
}

const ProjectItem = ({ theme, project }: IProps) => {
  return (
    <S.ProjectItemWrap>
      <S.Header>{project.title}</S.Header>
      <S.ProjectImage src={project.image} />
      <ProjectImageOverlay project={project} theme={theme} />
      {/* <MobileProjectCard project={project} theme={theme} /> */}
    </S.ProjectItemWrap>
  );
};

export default ProjectItem;
