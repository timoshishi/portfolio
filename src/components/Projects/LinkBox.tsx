import styled, { keyframes } from 'styled-components';
import { IProject, IStyled } from '../../ts/interfaces/interfaces';
import { githublogo } from '../../assets/images/logos';
import { Device } from '../../ts/enums/mediaBreakpoints';
import { recordEvent } from '../../utils';

const heartbeat = keyframes`
{
  0%
  {
    transform: scale( .97 );
  }
  100%
  {
    transform: scale( 1 );
  }
}`;

const S: IStyled = {
  LogoContainer: styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 80%;

    @media ${Device.laptop} {
      margin-top: 0.5rem;
    }
  `,
  LogoBox: styled.div`
    max-height: 5rem;
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
      max-width: 4rem;
    }
  `,
  GHLogo: styled.img`
    max-width: 5rem;
    margin-top: 0rem;
    @media ${Device.laptop} {
      max-width: 100%;
      margin-top: 0.7rem;
    }
  `,
  GHLogoLabel: styled.p`
    color: #15202b;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
    font-weight: 400;
    @media ${Device.laptop} {
      margin-top: -0.7rem;
      color: #fafafa;
      position: relative;
    }
  `,
};

interface IProps {
  project: IProject;
}
const LinkBox = ({ project }: IProps) => {
  const onProjectLinkClick = () => {
    recordEvent({
      category: 'project',
      action: 'click_project_link',
    });
  };

  return (
    <S.LogoContainer>
      <S.LogoBox>
        <a href={project.githubUrl} target='blank' onClick={onProjectLinkClick}>
          <S.GHLogo src={githublogo} alt='github' />
          <S.GHLogoLabel>Github</S.GHLogoLabel>
        </a>
      </S.LogoBox>
    </S.LogoContainer>
  );
};

export default LinkBox;
