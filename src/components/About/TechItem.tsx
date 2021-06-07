import styled from 'styled-components';
import { IStyled, ITheme } from '../../ts/interfaces/interfaces';
import { Device } from '../../ts/enums/mediaBreakpoints';

const S: IStyled = {
  TechItemWrap: styled.div`
    width: 100%;
    margin-right: 40%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    @media ${Device.laptop} {
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 70%;
      margin-right: 40%;
    }
  `,
  TechLogoWrap: styled.div`
    display: inline-flex;
    justify-content: center;
    align-content: center;
    max-height: 2rem;
    max-width: 2rem;
    width: 100%;
  `,
  TechLogo: styled.img`
    max-height: 2.5rem;
    max-width: 2.5rem;
    min-height: 2.5rem;
    min-width: 2.5rem;
  `,
  LogoTextWrap: styled.div`
    width: 100%;
    margin-left: 2.3rem;
    margin-top: 0.5rem;
    @media ${Device.tablet} {
      margin-left: 1.3rem;
    }
  `,
  LogoText: styled.p`
    font-size: 1.2rem;
    font-family: ${({ theme }) =>
      `${theme.fontPrimary}, ${theme.fontFallback}`};
    font-weight: 400;
    color: #000;
    text-align: left;
    width: 15rem;
  `,
};

interface IProps {
  theme: ITheme;
  techInfo: { thumb: string; text: string };
}
const TechItem = ({ techInfo, theme }: IProps) => {
  return (
    <S.TechItemWrap>
      <S.TechLogoWrap>
        <S.TechLogo src={techInfo.thumb} />
        <S.LogoTextWrap>
          <S.LogoText theme={theme}>{techInfo.text}</S.LogoText>
        </S.LogoTextWrap>
      </S.TechLogoWrap>
    </S.TechItemWrap>
  );
};

export default TechItem;
