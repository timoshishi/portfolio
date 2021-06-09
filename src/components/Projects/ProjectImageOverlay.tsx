import styled from 'styled-components';
import Button from '../Layout/Button';
import { IProject, IStyled, ITheme } from '../../ts/interfaces/interfaces';
import { Device } from '../../ts/enums/mediaBreakpoints';

const S: IStyled = {
  ImageOverlay: styled.div`
    display: block;
    background-color: #fafafa;
    border-radius: 5px;
    max-width: 100%;
    top: 0;
    bottom: 0;
    position: relative;
    opacity: 1;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media ${Device.laptop} {
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      &:hover {
        opacity: 1;
      }
    }
  `,

  TextBox: styled.div`
    width: 80%;
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Header: styled.h3`
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fontPrimary};
    font-weight: 400;
    margin-bottom: 0.5rem;
    display: none;
    @media ${Device.laptop} {
      color: #fafafa;
    }
  `,
  ProjectDesc: styled.p`
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: 0.8rem;
    text-align: left;
    @media ${Device.laptop} {
      color: #fafafa;
    }
  `,
  ButtonBox: styled.div`
    display: flex;
    margin-top: 1.5rem;
    width: 100%;
    justify-content: space-evenly;
  `,
};

interface IProps {
  theme: ITheme;
  project: IProject;
}

const ProjectImageOverlay = ({ project, theme }: IProps) => {
  return (
    <S.ImageOverlay>
      <S.TextBox>
        <S.Header theme={theme}>{project.title}</S.Header>
        <S.ProjectDesc theme={theme}>{project.description}</S.ProjectDesc>
        <S.ButtonBox>
          <Button theme={theme} url={project.githubUrl}>
            Github
          </Button>
          {project.projectUrl && (
            <Button theme={theme} url={project.projectUrl}>
              Website
            </Button>
          )}
        </S.ButtonBox>
      </S.TextBox>
    </S.ImageOverlay>
  );
};

export default ProjectImageOverlay;
