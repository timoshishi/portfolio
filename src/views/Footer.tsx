import styled from 'styled-components';
import { ITheme } from '../ts/interfaces/interfaces';
import { Device } from '../ts/enums/mediaBreakpoints';
import FooterLogos from '../components/Footer/FooterLogos';

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
    @media ${Device.tablet} {
      margin-top: 5rem;
    }
  `,
  ContactWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
  `,
  Header: styled.h2`
    font-weight: 500;
    font-family: ${({ theme }) => `${theme.fontPrimary}, ${theme.fontFallback}`};
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
      margin-left: 1rem;
      margin-right: 1rem;
    }
  `,
  Logo: styled.img`
    max-height: 3rem;
    @media ${Device.tablet} {
      max-height: 3rem;
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
  Copyright: styled.p`
    color: #fafafa;
    font-family: ${({ theme }) => `${theme.fontSecondary}, ${theme.fontFallback}`};
    opacity: 0.7;
    font-size: 1rem;
    font-weight: 300;
  `,
  Mantra: styled.p`
    color: #fafafa;
    font-family: ${({ theme }) => `${theme.fontSecondary}, ${theme.fontFallback}`};
    opacity: 0.7;
    font-size: 1.5rem;
    font-weight: 300;
  `,
};

interface IProps {
  theme: ITheme;
}
const Contact = ({ theme }: IProps) => {
  return (
    <>
      <S.ContactContainer>
        <S.Mantra>Living, learning, & leveling up one day at a time.</S.Mantra>
        <FooterLogos />
        <S.Copyright>Handcrafted by me © {new Date().getFullYear()}</S.Copyright>
      </S.ContactContainer>
      <div id='footer'></div>
    </>
  );
};

export default Contact;
