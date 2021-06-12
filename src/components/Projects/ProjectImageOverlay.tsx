import styled from 'styled-components';
import { IProject, IStyled, ITheme } from '../../ts/interfaces/interfaces';
import { Device } from '../../ts/enums/mediaBreakpoints';
import LinkBox from './LinkBox';

const S: IStyled = {
  ImageOverlay: styled.div`
    display: block;
    background-color: #fafafa;
    border-radius: 0px 0px 5px 5px;
    max-width: 100%;
    max-height: 20rem;
    top: 0;
    bottom: 0;
    position: relative;
    opacity: 1;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    max-height: 40rem;
    padding-bottom: 1rem;
    @media ${Device.laptop} {
      padding-bottom: 0rem;
      border-radius: 5px;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      &:hover {
        opacity: 1;
        z-index: 10;
      }
    }
  `,

  ImageContainer: styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  Header: styled.h3`
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fontPrimary};
    font-weight: 400;
    margin-bottom: 0.5rem;
    display: none;
    @media ${Device.laptop} {
      display: block;
      color: #fafafa;
    }
  `,
  ProjectDesc: styled.p`
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: 0.8rem;
    text-align: left;
    @media ${Device.laptop} {
      font-weight: 600;
      color: #fafafa;
    }
  `,
};
interface IProps {
  theme: ITheme;
  project: IProject;
}

const ProjectImageOverlay = ({ project, theme }: IProps) => {
  return (
    <S.ImageOverlay>
      <S.ImageContainer>
        <S.Header theme={theme}>{project.title}</S.Header>
        <S.ProjectDesc theme={theme}>{project.description}</S.ProjectDesc>
        <LinkBox project={project} />
      </S.ImageContainer>
    </S.ImageOverlay>
  );
};

export default ProjectImageOverlay;
