import styled, { keyframes } from 'styled-components';
import { IProject, IStyled, ITheme } from '../../ts/interfaces/interfaces';
import { Device } from '../../ts/enums/mediaBreakpoints';
import githublogo from './githublogo.svg';
const heartbeat = keyframes`
{
  0%
  {
    transform: scale( .95 );
  }
  100%
  {
    transform: scale( 1 );
  }
}`;

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
  ButtonBox: styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
    width: 80%;
  `,
  LogoBox: styled.div`
    max-height: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation-name: ${heartbeat};
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 1.2s;
    animation-direction: alternate;
    @media ${Device.laptop} {
      max-height: 5rem;
      max-width: 5rem;
    }
  `,
  PuppyLogoLabel: styled.p`
    color: #15202b;
    @media ${Device.laptop} {
      margin-top: 0.3rem;
      position: relative;
      color: #fafafa;
    }
  `,
  PuppyLogo: styled.img`
    margin-top: 0.4rem;
    max-height: 4.2rem;
  `,
  GHLogo: styled.img`
    max-width: 5.3rem;
    margin-top: -0.1rem;
    @media ${Device.laptop} {
      margin-top: 0.5rem;
      max-width: 5rem;
      max-height: 4.8rem;
    }
  `,
  GHLogoLabel: styled.p`
    color: #15202b;
    margin-top: -1rem;
    @media ${Device.laptop} {
      margin-top: -0.7rem;
      color: #fafafa;
      position: relative;
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
      <S.TextBox>
        <S.Header theme={theme}>{project.title}</S.Header>
        <S.ProjectDesc theme={theme}>{project.description}</S.ProjectDesc>
        <S.ButtonBox>
          <S.LogoBox>
            <a href={project.githubUrl} target='blank'>
              <S.GHLogo src={githublogo} />
              <S.GHLogoLabel>Github</S.GHLogoLabel>
            </a>
          </S.LogoBox>
          {project.projectUrl && (
            <S.LogoBox href={project.projectUrl} target='blank'>
              <S.PuppyLogo src={project.projectThumb} alt='puppy' />
              <S.PuppyLogoLabel style={{}}>Website</S.PuppyLogoLabel>{' '}
            </S.LogoBox>
          )}
        </S.ButtonBox>
      </S.TextBox>
    </S.ImageOverlay>
  );
};

export default ProjectImageOverlay;
