import styled from 'styled-components';
import { IStyled, ITheme } from '../../ts/interfaces/interfaces';
import { Device } from '../../ts/enums/mediaBreakpoints';

const S: IStyled = {
  AboutParaContainer: styled.div`
    min-height: 50vh;
    width: 100vw;
    background-color: #7510f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  TextWrapper: styled.div`
    max-width: 90%;
    @media ${Device.laptop} {
      max-width: 60%;
    }
  `,
  HeaderWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `,
  Header: styled.h2`
    font-weight: 500;
    font-family: ${({ theme }) => `${theme.fontPrimary}, ${theme.fontFallback}`};
    color: #fafafa;
    font-size: 2rem;
    @media ${Device.laptop} {
      font-size: 2.5rem;
      margin-right: 0.5rem;
    }
  `,
  AboutText: styled.p`
    font-weight: 300;
    font-family: ${({ theme }) => `${theme.fontSecondary}, ${theme.fontFallback}`};
    margin-top: 1rem;
    color: #fafafa;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    @media ${Device.laptop} {
      font-size: 1.5rem;
    }
  `,
};

interface IProps {
  theme: ITheme;
}
const AboutWords = ({ theme }: IProps) => {
  return (
    <S.AboutParaContainer>
      <S.TextWrapper>
        <S.HeaderWrapper>
          <S.Header theme={theme}>hello, i'm tim. </S.Header> <S.Header theme={theme}>it's nice to meet you</S.Header>
        </S.HeaderWrapper>
        <S.AboutText theme={theme} id='about'>
          I am a software engineer who prefers spaces over tabs, Vim over Emacs and clean, reusable code. I work in
          JavaScript, Node, TypeScript and a three piece suit. Before embarking on my journey as a Software Engineer I
          was a chef, business owner and peripatetic lover of local cuisine.
        </S.AboutText>
      </S.TextWrapper>
    </S.AboutParaContainer>
  );
};

export default AboutWords;
