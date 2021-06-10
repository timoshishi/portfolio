import styled, { keyframes } from 'styled-components';
import { linkedin, github } from '../../assets/images/logos';
import EmailLogo from './EmailLogo';
import { IStyled, ITheme } from '../../ts/interfaces/interfaces';
import { Device } from '../../ts/enums/mediaBreakpoints';

const slideIn = keyframes`
from {
transform: translateX(0rem)
}
to {
transform: translateX(-6rem)
}
`;

const S: IStyled = {
  ContactContainer: styled.div`
    display: none;

    @media ${Device.tablet} {
      display: block;
      width: 2rem;
      position: fixed;
      display: flex;
      flex-direction: column;
      border-style: 1px solid black;
      right: -3rem;
      bottom: 40vh;
      z-index: 10;
      animation: 1s ${slideIn} ease-out 0.2s normal forwards;
    }
    @media ${Device.laptop} {
      display: block;
      width: 3rem;
      position: fixed;
      display: flex;
      flex-direction: column;
      border-style: 1px solid black;
      right: -3rem;
      bottom: 6rem;
      z-index: 10;
      animation: 1s ${slideIn} ease-out 0.2s normal forwards;
    }
  `,
  LogoContainer: styled.div`
    border-radius: 5px;
    margin-top: 2px;
    margin-bottom: 2px;

    @media ${Device.tablet} {
      width: 3rem;
      height: 3rem;
    }
    @media ${Device.laptop} {
      width: 4rem;
      height: 4rem;
    }
    &:hover {
      transition: all 0.2s;
      transform: scale(1.1);
      margin-top: 3px;
      margin-bottom: 3px;
    }
  `,
  Link: styled.a``,
  Logo: styled.img`
    width: 100%;
  `,
  Divider: styled.div`
    width: 100%;
    height: 0px;
    border: 0.3px solid #fafafa;
  `,
};

interface IProps {
  theme: ITheme;
}

const ContactSlider = ({ theme }: IProps) => {
  return (
    <S.ContactContainer>
      <S.LogoContainer>
        <S.Link href='mailto:timfrrst@gmail.com' target='blank'>
          <EmailLogo background={theme.color} />
        </S.Link>
      </S.LogoContainer>
      <S.LogoContainer>
        <S.Link href='https://www.linkedin.com/in/timfrrst' target='blank'>
          <S.Logo src={linkedin} alt='linkedin' />
        </S.Link>
      </S.LogoContainer>
      <S.LogoContainer
        style={{
          borderBottomLeftRadius: '5px',
          backgroundColor: '#363537',
          padding: '3px',
        }}>
        <S.Link href='https://www.github.com/timoshishi' target='blank'>
          <S.Logo src={github} alt='github' />
        </S.Link>
      </S.LogoContainer>
    </S.ContactContainer>
  );
};

export default ContactSlider;
