import styled from 'styled-components';
import { linkedin, github, paperPlane } from '../assets/images/logos';
import { ITheme } from '../ts/interfaces/interfaces';
import { Device } from '../ts/enums/mediaBreakpoints';

const S = {
  ContactContainer: styled.section`
    width: 100vw;
    background-color: #7510f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    padding-bottom: 2rem;
    padding-top: 4rem;
  `,
  ContactWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
  `,
  Header: styled.h2`
    font-weight: 500;
    font-family: ${({ theme }) =>
      `${theme.fontPrimary}, ${theme.fontFallback}`};
    color: #fafafa;
    font-size: 2rem;
    margin-bottom: 3rem;
    @media ${Device.laptop} {
      font-size: 2.5rem;
    }
  `,
  LogoSection: styled.div`
    max-height: 15rem;
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vh;
    @media ${Device.tablet} {
      justify-content: center;

      max-height: 5rem;
    }
  `,
  LogoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
    @media ${Device.tablet} {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  `,
  Logo: styled.img`
    max-height: 3rem;
    @media ${Device.tablet} {
      max-height: 4rem;
    }
  `,

  LogoLabel: styled.p`
    color: #fafafa;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    font-weight: 500;
    font-family: Rubik;
    @media ${Device.tablet} {
      font-size: 1.8rem;
    }
  `,
};

interface IProps {
  theme: ITheme;
}
const Contact = ({ theme }: IProps) => {
  return (
    <S.ContactContainer id='contact'>
      <S.Header>Contact</S.Header>
      <S.LogoSection>
        <S.LogoWrapper>
          <a href='https://github.com/timoshishi' target='blank'>
            <S.Logo src={github} alt='github' />
            <S.LogoLabel>Github</S.LogoLabel>
          </a>
        </S.LogoWrapper>
        <S.LogoWrapper>
          <a href='https://www.linkedin.com/in/timfrrst/' target='blank'>
            <S.Logo src={linkedin} alt='linkedin' />
            <S.LogoLabel>LinkedIn</S.LogoLabel>
          </a>
        </S.LogoWrapper>
        <S.LogoWrapper>
          <a href='mailto:timfrrst@gmail.com' target='blank'>
            <S.Logo src={paperPlane} alt='email' />
            <S.LogoLabel>email</S.LogoLabel>
          </a>
        </S.LogoWrapper>
      </S.LogoSection>
      <p>Handcrafted by me © 2021</p>
    </S.ContactContainer>
  );
};

export default Contact;
